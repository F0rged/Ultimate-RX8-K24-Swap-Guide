(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.RX8BuildCore = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SCHEMA_VERSION = 1;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function defaultConfig() {
    return {
      schemaVersion: SCHEMA_VERSION,
      profileName: "",
      chassis: {
        series: "",
        year: "",
        market: "",
        steering: "",
        originalTransmission: ""
      },
      engine: {
        block: "",
        head: "",
        oilPump: "",
        throttle: "",
        sensorFamily: ""
      },
      architecture: {
        front: "",
        transmission: "",
        steering: "",
        ppf: ""
      },
      electronics: {
        ecu: "",
        harness: "",
        instrumentation: "",
        can: ""
      },
      systems: {
        coolantOutlet: "",
        radiator: "",
        intake: "",
        exhaust: "",
        ac: ""
      },
      ui: {
        mode: "context"
      }
    };
  }

  function getPath(object, path) {
    if (!object || !path) return undefined;
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, object);
  }

  function setPath(object, path, value) {
    const parts = path.split(".");
    let target = object;
    parts.slice(0, -1).forEach(function (key) {
      if (!target[key] || typeof target[key] !== "object") target[key] = {};
      target = target[key];
    });
    target[parts[parts.length - 1]] = value;
    return object;
  }

  function normalize(value) {
    if (value == null) return "";
    return String(value).trim().toLowerCase();
  }

  function parseClause(rawClause) {
    const clause = String(rawClause || "").trim();
    if (!clause) throw new Error("Empty condition clause");

    let operator = "=";
    let index = clause.indexOf("!=");
    if (index >= 0) {
      operator = "!=";
    } else {
      index = clause.indexOf("=");
    }

    if (index <= 0) throw new Error("Invalid condition clause: " + clause);

    const path = clause.slice(0, index).trim();
    const rawValues = clause.slice(index + operator.length).trim();
    if (!path || !rawValues) throw new Error("Invalid condition clause: " + clause);

    const values = rawValues.split("|").map(normalize).filter(Boolean);
    if (!values.length) throw new Error("Condition has no values: " + clause);

    return { path: path, operator: operator, values: values };
  }

  function parseExpression(expression) {
    const source = String(expression || "").trim();
    if (!source) return [];
    return source.split(";").map(parseClause);
  }

  function evaluateClause(config, clause) {
    const actual = normalize(getPath(config, clause.path));
    if (!actual) return "unknown";

    const contained = clause.values.indexOf(actual) >= 0;
    const matches = clause.operator === "!=" ? !contained : contained;
    return matches ? "match" : "nomatch";
  }

  function evaluateExpression(config, expression) {
    const clauses = Array.isArray(expression) ? expression : parseExpression(expression);
    if (!clauses.length) return "match";

    let sawUnknown = false;
    for (const clause of clauses) {
      const state = evaluateClause(config, clause);
      if (state === "nomatch") return "nomatch";
      if (state === "unknown") sawUnknown = true;
    }
    return sawUnknown ? "unknown" : "match";
  }

  function matchingRules(config, rules) {
    return (rules || []).filter(function (rule) {
      return evaluateExpression(config, rule.when) === "match";
    });
  }

  function mergeKnown(target, source) {
    if (!source || typeof source !== "object") return target;
    Object.keys(target).forEach(function (key) {
      if (!(key in source)) return;
      if (
        target[key] &&
        typeof target[key] === "object" &&
        !Array.isArray(target[key]) &&
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        mergeKnown(target[key], source[key]);
      } else if (typeof source[key] === typeof target[key]) {
        target[key] = source[key];
      }
    });
    return target;
  }

  function sanitizeConfig(candidate) {
    const clean = defaultConfig();
    if (!candidate || Number(candidate.schemaVersion) !== SCHEMA_VERSION) return clean;
    mergeKnown(clean, candidate);
    clean.schemaVersion = SCHEMA_VERSION;
    if (!["context", "mine", "all"].includes(clean.ui.mode)) clean.ui.mode = "context";
    return clean;
  }

  function utf8ToBase64Url(text) {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(text, "utf8")
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/g, "");
    }

    const bytes = new TextEncoder().encode(text);
    let binary = "";
    bytes.forEach(function (byte) {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  }

  function base64UrlToUtf8(encoded) {
    const normalized = String(encoded || "").replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);

    if (typeof Buffer !== "undefined") {
      return Buffer.from(padded, "base64").toString("utf8");
    }

    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, function (char) {
      return char.charCodeAt(0);
    });
    return new TextDecoder().decode(bytes);
  }

  function encodeConfig(config) {
    return utf8ToBase64Url(JSON.stringify(sanitizeConfig(config)));
  }

  function decodeConfig(encoded) {
    try {
      const parsed = JSON.parse(base64UrlToUtf8(encoded));
      if (Number(parsed.schemaVersion) !== SCHEMA_VERSION) return null;
      return sanitizeConfig(parsed);
    } catch (_error) {
      return null;
    }
  }

  function selectedValueCount(config) {
    const ignored = new Set(["schemaVersion", "profileName", "mode"]);
    let count = 0;

    function visit(value, key) {
      if (ignored.has(key)) return;
      if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.keys(value).forEach(function (childKey) {
          visit(value[childKey], childKey);
        });
      } else if (String(value || "").trim()) {
        count += 1;
      }
    }

    visit(config, "");
    return count;
  }

  return {
    SCHEMA_VERSION: SCHEMA_VERSION,
    clone: clone,
    defaultConfig: defaultConfig,
    getPath: getPath,
    setPath: setPath,
    parseExpression: parseExpression,
    evaluateExpression: evaluateExpression,
    matchingRules: matchingRules,
    sanitizeConfig: sanitizeConfig,
    encodeConfig: encodeConfig,
    decodeConfig: decodeConfig,
    selectedValueCount: selectedValueCount
  };
});
