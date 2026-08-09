(function () {
  "use strict";

  const Core = window.RX8BuildCore;
  if (!Core) return;

  const STORAGE_KEY = "rx8KswapBuildConfig:v1";

  function readJsonElement(id) {
    const node = document.getElementById(id);
    if (!node) return {};
    try {
      return JSON.parse(node.textContent || "{}");
    } catch (_error) {
      return {};
    }
  }

  const optionsData = readJsonElement("build-options-data");
  const compatibilityData = readJsonElement("build-compatibility-data");
  const pageTopicsData = readJsonElement("build-page-topics-data");
  const fields = optionsData.fields || [];
  const rules = compatibilityData.rules || [];
  const sources = compatibilityData.sources || {};
  const pageTopics = Array.isArray(pageTopicsData) ? pageTopicsData : [];

  const fieldByPath = new Map(fields.map(function (field) {
    return [field.path, field];
  }));

  let config = loadInitialConfig();
  let draft = Core.clone(config);

  function guidanceEnabled(current) {
    return ((current && current.ui && current.ui.alerts) || "relevant") !== "none";
  }

  function loadSaved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return Core.sanitizeConfig(JSON.parse(raw));
    } catch (_error) {
      return null;
    }
  }

  function saveConfig(next) {
    config = Core.sanitizeConfig(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (_error) {
      // The guide still works without persistence.
    }
  }

  function configFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("build");
    return encoded ? Core.decodeConfig(encoded) : null;
  }

  function loadInitialConfig() {
    const fromUrl = configFromUrl();
    if (fromUrl) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch (_error) {}
      return fromUrl;
    }
    return loadSaved() || Core.defaultConfig();
  }

  function optionLabel(path, value) {
    if (!value) return "";
    const field = fieldByPath.get(path);
    if (!field) return value;
    const option = (field.options || []).find(function (item) {
      return String(item.value) === String(value);
    });
    return option ? option.label : value;
  }

  function buildSummary(current) {
    if (Core.selectedValueCount(current) === 0) {
      return "Build not configured - page guidance is not tailored yet.";
    }

    const parts = [];
    const year = Core.getPath(current, "chassis.year");
    const series = Core.getPath(current, "chassis.series");
    if (year || series) {
      parts.push(
        [year, optionLabel("chassis.series", series)].filter(Boolean).join(" ")
      );
    }

    const market = Core.getPath(current, "chassis.market");
    const steering = Core.getPath(current, "chassis.steering");
    if (market || steering) {
      parts.push(
        [optionLabel("chassis.market", market), optionLabel("chassis.steering", steering)]
          .filter(Boolean)
          .join(" ")
      );
    }

    const block = Core.getPath(current, "engine.block");
    const head = Core.getPath(current, "engine.head");
    if (block || head) {
      parts.push(
        [optionLabel("engine.block", block), optionLabel("engine.head", head)]
          .filter(Boolean)
          .join(" / ")
      );
    }

    ["architecture.front", "architecture.transmission", "electronics.ecu"].forEach(function (path) {
      const value = Core.getPath(current, path);
      if (value) parts.push(optionLabel(path, value));
    });

    return parts.join(" - ") || "Build partially configured";
  }

  function renderSummary() {
    const enabled = guidanceEnabled(config);
    const panel = document.getElementById("build-config-panel");
    if (panel) panel.classList.toggle("build-config-bar--collapsed", !enabled);

    const body = document.getElementById("build-config-panel-body");
    if (body) body.hidden = !enabled;

    const node = document.getElementById("build-config-summary");
    if (node) node.textContent = buildSummary(config);

    config.ui.mode = "context";

    const guidance = document.getElementById("build-config-guidance");
    if (guidance) {
      guidance.checked = enabled;
      guidance.setAttribute("aria-expanded", enabled ? "true" : "false");
    }

    const issueCount = document.getElementById("build-config-issue-count");
    if (issueCount) {
      const count = Core.pageAlertRules(config, rules, pageTopics, config.ui.alerts).length;
      issueCount.hidden = !enabled || count === 0;
      issueCount.textContent = count === 1
        ? "1 page guidance item"
        : count + " page guidance items";
    }

    const edit = document.getElementById("build-config-edit");
    if (edit) {
      edit.textContent = Core.selectedValueCount(config) ? "Edit build" : "Configure build";
    }
  }

  function groupFields() {
    const groups = [];
    fields.forEach(function (field) {
      let group = groups.find(function (item) { return item.name === field.group; });
      if (!group) {
        group = { name: field.group, fields: [] };
        groups.push(group);
      }
      group.fields.push(field);
    });
    return groups;
  }

  function renderForm(current) {
    const container = document.getElementById("build-config-fields");
    if (!container) return;
    container.innerHTML = "";

    groupFields().forEach(function (group) {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "build-config-fieldset";

      const legend = document.createElement("legend");
      legend.textContent = group.name;
      fieldset.appendChild(legend);

      const grid = document.createElement("div");
      grid.className = "build-config-field-grid";

      group.fields.forEach(function (field) {
        const wrapper = document.createElement("div");
        wrapper.className = "build-config-field";

        const id = "build-config-" + field.path.replace(/\./g, "-");
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = field.label;

        const select = document.createElement("select");
        select.id = id;
        select.dataset.configPath = field.path;

        const blank = document.createElement("option");
        blank.value = "";
        blank.textContent = "Unknown / not selected";
        select.appendChild(blank);

        (field.options || []).forEach(function (option) {
          const node = document.createElement("option");
          node.value = option.value;
          node.textContent = option.label;
          select.appendChild(node);
        });

        select.value = Core.getPath(current, field.path) || "";
        select.addEventListener("change", function () {
          Core.setPath(draft, field.path, select.value);
          renderAlerts(draft, "build-config-dialog-alerts", "all");
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        grid.appendChild(wrapper);
      });

      fieldset.appendChild(grid);
      container.appendChild(fieldset);
    });
  }

  function ruleStatusLabel(rule) {
    const labels = {
      documented: "Recommended",
      partial: "Warning",
      incompatible: "Compatibility conflict",
      unvalidated: "Warning",
      info: "Recommended"
    };
    return labels[rule.status] || rule.status || "Note";
  }

  function renderAlerts(current, targetId, scope) {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.innerHTML = "";

    const activeRules = scope === "page"
      ? Core.pageAlertRules(current, rules, pageTopics, current.ui.alerts)
      : Core.matchingRules(current, rules);
    activeRules.forEach(function (rule) {
      const panel = document.createElement("div");
      panel.className = "build-config-alert build-config-alert--" + (rule.severity || "info");

      const heading = document.createElement("strong");
      heading.textContent = "For your build";
      panel.appendChild(heading);

      const status = document.createElement("p");
      status.className = "build-config-alert__status";
      status.textContent = ruleStatusLabel(rule);
      panel.appendChild(status);

      const message = document.createElement("p");
      message.textContent = rule.message;
      panel.appendChild(message);

      const sourceLinks = (rule.sources || []).map(function (sourceId) {
        return sources[sourceId];
      }).filter(Boolean);

      if (sourceLinks.length) {
        const sourceLine = document.createElement("p");
        sourceLine.className = "build-config-alert__sources";
        sourceLine.append("Sources: ");
        sourceLinks.forEach(function (source, index) {
          if (index) sourceLine.append(" - ");
          const anchor = document.createElement("a");
          anchor.href = source.url;
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
          anchor.textContent = source.label;
          sourceLine.appendChild(anchor);
        });
        panel.appendChild(sourceLine);
      }

      target.appendChild(panel);
    });
  }

  function prepareVariantBlock(block) {
    if (block.dataset.variantPrepared === "true") return;
    block.dataset.variantPrepared = "true";

    const body = document.createElement("div");
    body.className = "variant-note__body";
    while (block.firstChild) body.appendChild(block.firstChild);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "variant-note__toggle";
    toggle.hidden = true;
    toggle.setAttribute("aria-expanded", "true");

    toggle.addEventListener("click", function () {
      const collapsed = block.classList.toggle("variant-note--collapsed");
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      toggle.textContent = collapsed
        ? "Show alternative: " + (block.dataset.variantLabel || "variant guidance")
        : "Hide alternative: " + (block.dataset.variantLabel || "variant guidance");
    });

    block.appendChild(toggle);
    block.appendChild(body);
  }

  function setCollapsed(block, collapsed) {
    prepareVariantBlock(block);
    const toggle = Array.prototype.find.call(block.children, function (child) {
      return child.classList && child.classList.contains("variant-note__toggle");
    });
    block.classList.toggle("variant-note--collapsed", collapsed);
    if (toggle) {
      toggle.hidden = !collapsed;
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      toggle.textContent = "Show alternative: " + (block.dataset.variantLabel || "variant guidance");
    }
  }

  function applyVariantFiltering() {
    const mode = "context";
    const enabled = guidanceEnabled(config);

    document.querySelectorAll(".variant-note[data-when]").forEach(function (block) {
      prepareVariantBlock(block);

      if (!enabled) {
        block.hidden = true;
        block.dataset.filterState = "disabled";
        block.classList.remove("variant-note--collapsed", "variant-note--safety");
        setCollapsed(block, false);
        return;
      }

      const display = Core.variantDisplayState(
        config,
        block.dataset.when,
        mode,
        block.dataset.safety
      );

      block.dataset.filterState = display.filterState;
      block.classList.toggle("variant-note--safety", block.dataset.safety === "true");
      block.hidden = display.hidden;
      setCollapsed(block, display.collapsed);
    });
  }

  function render() {
    renderSummary();
    renderAlerts(config, "build-config-alerts", "page");
    applyVariantFiltering();
    document.documentElement.classList.add("build-config-ready");
  }

  function openDialog() {
    const dialog = document.getElementById("build-config-dialog");
    if (!dialog) return;
    draft = Core.clone(config);
    renderForm(draft);
    renderAlerts(draft, "build-config-dialog-alerts", "all");
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog() {
    const dialog = document.getElementById("build-config-dialog");
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");

    const edit = document.getElementById("build-config-edit");
    if (edit) edit.focus();
  }

  function shareBuild() {
    const url = new URL(window.location.href);
    url.searchParams.set("build", Core.encodeConfig(config));
    navigator.clipboard.writeText(url.toString()).then(function () {
      const button = document.getElementById("build-config-share");
      if (!button) return;
      const old = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(function () { button.textContent = old; }, 1400);
    }).catch(function () {
      window.prompt("Copy this build link:", url.toString());
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const edit = document.getElementById("build-config-edit");
    const share = document.getElementById("build-config-share");
    const guidance = document.getElementById("build-config-guidance");
    const form = document.getElementById("build-config-form");
    const clear = document.getElementById("build-config-clear");
    const cancel = document.getElementById("build-config-cancel");
    const cancelBottom = document.getElementById("build-config-cancel-bottom");

    if (edit) edit.addEventListener("click", openDialog);
    if (share) share.addEventListener("click", shareBuild);

    if (guidance) {
      guidance.addEventListener("change", function () {
        config.ui.alerts = guidance.checked ? "relevant" : "none";
        config.ui.mode = "context";
        saveConfig(config);
        render();
      });
    }

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        draft.ui.mode = config.ui.mode;
        draft.ui.alerts = config.ui.alerts;
        saveConfig(draft);
        closeDialog();
        render();
      });
    }

    if (clear) {
      clear.addEventListener("click", function () {
        draft = Core.defaultConfig();
        saveConfig(draft);
        renderForm(draft);
        renderAlerts(draft, "build-config-dialog-alerts", "all");
        closeDialog();
        render();
      });
    }

    [cancel, cancelBottom].forEach(function (button) {
      if (button) button.addEventListener("click", closeDialog);
    });

    render();
  });
})();
