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
  const fields = optionsData.fields || [];
  const rules = compatibilityData.rules || [];
  const sources = compatibilityData.sources || {};

  const fieldByPath = new Map(fields.map(function (field) {
    return [field.path, field];
  }));

  let config = loadInitialConfig();
  let draft = Core.clone(config);

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
      return "Build not configured - variant guidance is not being filtered.";
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
    const node = document.getElementById("build-config-summary");
    if (node) node.textContent = buildSummary(config);

    const mode = document.getElementById("build-config-mode");
    if (mode) mode.value = config.ui.mode || "context";

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
          renderAlerts(draft, "build-config-dialog-alerts");
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
      documented: "Documented",
      partial: "Partially documented",
      incompatible: "Compatibility conflict",
      unvalidated: "Unvalidated",
      info: "Note"
    };
    return labels[rule.status] || rule.status || "Note";
  }

  function renderAlerts(current, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.innerHTML = "";

    const activeRules = Core.matchingRules(current, rules);
    activeRules.forEach(function (rule) {
      const panel = document.createElement("div");
      panel.className = "build-config-alert build-config-alert--" + (rule.severity || "info");

      const heading = document.createElement("strong");
      heading.textContent = ruleStatusLabel(rule);
      panel.appendChild(heading);

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
    const toggle = block.querySelector(":scope > .variant-note__toggle");
    block.classList.toggle("variant-note--collapsed", collapsed);
    if (toggle) {
      toggle.hidden = !collapsed;
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      toggle.textContent = "Show alternative: " + (block.dataset.variantLabel || "variant guidance");
    }
  }

  function applyVariantFiltering() {
    const mode = config.ui.mode || "context";
    const configured = Core.selectedValueCount(config) > 0;

    document.querySelectorAll(".variant-note[data-when]").forEach(function (block) {
      prepareVariantBlock(block);

      const state = configured
        ? Core.evaluateExpression(config, block.dataset.when)
        : "unknown";

      block.dataset.filterState = state;
      block.classList.toggle("variant-note--safety", block.dataset.safety === "true");
      block.hidden = false;
      setCollapsed(block, false);

      if (block.dataset.safety === "true") return;
      if (mode === "all") return;

      if (mode === "mine") {
        block.hidden = state === "nomatch";
        return;
      }

      if (mode === "context" && state === "nomatch") {
        setCollapsed(block, true);
      }
    });
  }

  function render() {
    renderSummary();
    renderAlerts(config, "build-config-alerts");
    applyVariantFiltering();
    document.documentElement.classList.add("build-config-ready");
  }

  function openDialog() {
    const dialog = document.getElementById("build-config-dialog");
    if (!dialog) return;
    draft = Core.clone(config);
    renderForm(draft);
    renderAlerts(draft, "build-config-dialog-alerts");
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
    const mode = document.getElementById("build-config-mode");
    const form = document.getElementById("build-config-form");
    const clear = document.getElementById("build-config-clear");
    const cancel = document.getElementById("build-config-cancel");
    const cancelBottom = document.getElementById("build-config-cancel-bottom");

    if (edit) edit.addEventListener("click", openDialog);
    if (share) share.addEventListener("click", shareBuild);

    if (mode) {
      mode.addEventListener("change", function () {
        config.ui.mode = mode.value;
        saveConfig(config);
        render();
      });
    }

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        draft.ui.mode = config.ui.mode;
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
        renderAlerts(draft, "build-config-dialog-alerts");
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
