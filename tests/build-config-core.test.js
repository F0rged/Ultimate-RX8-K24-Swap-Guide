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
  assert.deepEqual(Core.variantDisplayState(c, "engine.head=prb", "mine", true), {
    filterState: "unknown",
    hidden: false,
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
