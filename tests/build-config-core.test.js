const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Core = require("../docs/assets/js/build-config-core.js");

function config(values) {
  const result = Core.defaultConfig();
  Object.entries(values).forEach(([path, value]) => Core.setPath(result, path, value));
  return result;
}

test("AND clauses must all match", () => {
  const c = config({ "chassis.series": "s2", "engine.head": "rbb" });
  assert.equal(Core.evaluateExpression(c, "chassis.series=s2;engine.head=rbb"), "match");
  assert.equal(Core.evaluateExpression(c, "chassis.series=s2;engine.head=prb"), "nomatch");
});

test("pipe values are OR", () => {
  const c = config({ "engine.block": "k24a2" });
  assert.equal(Core.evaluateExpression(c, "engine.block=k24a2|k24a3|jdm_k24a_rbb"), "match");
});

test("not equal works", () => {
  const c = config({ "engine.head": "rbb" });
  assert.equal(Core.evaluateExpression(c, "engine.head!=r40"), "match");
  assert.equal(Core.evaluateExpression(c, "engine.head!=rbb|rbc"), "nomatch");
});

test("blank required field is unknown", () => {
  assert.equal(Core.evaluateExpression(Core.defaultConfig(), "engine.head=rbb"), "unknown");
});

test("definitive mismatch wins over unknown", () => {
  const c = config({ "chassis.series": "s1" });
  assert.equal(Core.evaluateExpression(c, "chassis.series=s2;engine.head=rbb"), "nomatch");
});

test("matchingRules returns only fully matched rules", () => {
  const c = config({ "architecture.front": "kpower_nc", "engine.block": "k20a2" });
  const rules = [
    { id: "bad", when: "architecture.front=kpower_nc;engine.block=k20a2" },
    { id: "unknown", when: "architecture.front=kpower_nc;engine.head=rbb" },
    { id: "no", when: "architecture.front=collins" }
  ];
  assert.deepEqual(Core.matchingRules(c, rules).map((r) => r.id), ["bad"]);
});

test("share encoding round trips UTF-8 profile data", () => {
  const c = config({ "chassis.series": "s2", "engine.block": "k24a2" });
  c.profileName = "Track build OK";
  const encoded = Core.encodeConfig(c);
  const decoded = Core.decodeConfig(encoded);
  assert.equal(decoded.profileName, "Track build OK");
  assert.equal(decoded.chassis.series, "s2");
  assert.equal(decoded.engine.block, "k24a2");
});

test("malformed share payload is rejected", () => {
  assert.equal(Core.decodeConfig("this-is-not-valid-json"), null);
});

test("unknown keys are discarded by sanitizeConfig", () => {
  const c = Core.defaultConfig();
  c.evil = "ignored";
  c.engine.extra = "ignored";
  const clean = Core.sanitizeConfig(c);
  assert.equal("evil" in clean, false);
  assert.equal("extra" in clean.engine, false);
});

test("alert preference defaults and sanitizes within schema version 1", () => {
  assert.equal(Core.defaultConfig().ui.alerts, "relevant");
  assert.equal(Core.selectedValueCount(Core.defaultConfig()), 0);

  const oldConfig = Core.defaultConfig();
  delete oldConfig.ui.alerts;
  assert.equal(Core.sanitizeConfig(oldConfig).ui.alerts, "relevant");

  const invalid = Core.defaultConfig();
  invalid.ui.alerts = "everything";
  assert.equal(Core.sanitizeConfig(invalid).ui.alerts, "relevant");
});

test("alert preference round trips through share URLs", () => {
  const c = Core.defaultConfig();
  c.ui.alerts = "none";
  const decoded = Core.decodeConfig(Core.encodeConfig(c));
  assert.equal(decoded.ui.alerts, "none");
});

test("page guidance rules are scoped to matching rules and page topics", () => {
  const c = config({
    "chassis.series": "s2",
    "architecture.front": "collins",
    "architecture.transmission": "rx8_6mt",
    "architecture.steering": "rx8_eps",
    "chassis.year": "2009",
    "systems.radiator": "rx8_04_08"
  });
  const rules = [
    {
      id: "positive_transmission",
      when: "architecture.front=collins;architecture.transmission=rx8_6mt",
      status: "documented",
      severity: "info",
      topics: ["transmission"]
    },
    {
      id: "s2_eps",
      when: "chassis.series=s2;architecture.steering=rx8_eps",
      status: "partial",
      severity: "warning",
      topics: ["steering", "electrical", "can"]
    },
    {
      id: "radiator",
      when: "chassis.year=2009;systems.radiator=rx8_04_08",
      status: "partial",
      severity: "warning",
      topics: ["cooling", "radiator"]
    }
  ];

  assert.deepEqual(
    Core.pageAlertRules(c, rules, ["steering"], "relevant").map((rule) => rule.id),
    ["s2_eps"]
  );
  assert.deepEqual(
    Core.pageAlertRules(c, rules, ["transmission"], "relevant").map((rule) => rule.id),
    ["positive_transmission"]
  );
  assert.deepEqual(Core.pageAlertRules(c, rules, ["steering"], "none"), []);
  assert.deepEqual(Core.pageAlertRules(c, rules, [], "relevant"), []);
  assert.deepEqual(
    Core.matchingRules(c, rules).map((rule) => rule.id),
    ["positive_transmission", "s2_eps", "radiator"]
  );
});

test("issue rules and counts exclude positive confirmations", () => {
  const c = Core.defaultConfig();
  const rules = [
    { id: "positive", when: "", status: "documented", severity: "info" },
    { id: "warning", when: "", status: "partial", severity: "warning" },
    { id: "error", when: "", status: "incompatible", severity: "error" },
    { id: "unvalidated", when: "", status: "unvalidated", severity: "warning" }
  ];

  assert.deepEqual(Core.issueRules(c, rules).map((rule) => rule.id), [
    "warning",
    "error",
    "unvalidated"
  ]);
  assert.equal(Core.issueCount(c, rules, "relevant"), 3);
  assert.equal(Core.issueCount(c, rules, "none"), 0);
});

test("my build mode shows only confirmed variant matches", () => {
  const c = config({ "engine.head": "rbb" });
  assert.deepEqual(Core.variantDisplayState(c, "engine.head=rbb", "mine"), {
    filterState: "match",
    hidden: false,
    collapsed: false
  });
  assert.deepEqual(Core.variantDisplayState(c, "engine.head=prb", "mine"), {
    filterState: "nomatch",
    hidden: true,
    collapsed: false
  });
  assert.deepEqual(Core.variantDisplayState(c, "chassis.series=s2", "mine"), {
    filterState: "unknown",
    hidden: true,
    collapsed: false
  });
});

test("all and context modes preserve alternative visibility differently", () => {
  const c = config({ "engine.head": "rbb" });
  assert.deepEqual(Core.variantDisplayState(c, "engine.head=prb", "all"), {
    filterState: "nomatch",
    hidden: false,
    collapsed: false
  });
  assert.deepEqual(Core.variantDisplayState(c, "engine.head=prb", "context"), {
    filterState: "nomatch",
    hidden: false,
    collapsed: true
  });
});

test("safety variant notes are never hidden or collapsed by filtering", () => {
  const c = Core.defaultConfig();
  c.ui.alerts = "none";
  ["context", "mine", "all"].forEach((mode) => {
    assert.deepEqual(Core.variantDisplayState(c, "engine.head=prb", mode, true), {
      filterState: "unknown",
      hidden: false,
      collapsed: false
    });
  });
});

test("alert preference does not affect non-safety variant filtering", () => {
  const c = config({ "engine.head": "rbb" });
  c.ui.alerts = "none";
  assert.deepEqual(Core.variantDisplayState(c, "engine.head=prb", "mine"), {
    filterState: "nomatch",
    hidden: true,
    collapsed: false
  });
});

test("smoke fixture profiles match expected compatibility rules", () => {
  const fixtures = JSON.parse(fs.readFileSync(path.join("tests", "smoke-fixtures.json"), "utf8"));
  const compatibilityYaml = fs.readFileSync(path.join("docs", "_data", "compatibility.yml"), "utf8");
  const rules = [...compatibilityYaml.matchAll(/^\s+- id:\s+([A-Za-z0-9_-]+)\s*\n\s+when:\s+"([^"]+)"/gm)]
    .map((match) => ({ id: match[1], when: match[2] }));

  assert.ok(rules.length > 0, "No compatibility rules found");

  for (const profile of fixtures.profiles) {
    const c = config(profile.config);
    const activeIds = Core.matchingRules(c, rules).map((rule) => rule.id).sort();
    assert.deepEqual(activeIds, profile.expected_rule_ids.slice().sort(), profile.name);
  }
});
