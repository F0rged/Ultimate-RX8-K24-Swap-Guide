const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Core = require("../docs/assets/js/build-config-core.js");

function buildOptionPaths(yamlText) {
  return new Set(
    [...yamlText.matchAll(/^\s*-\s+path:\s*([A-Za-z0-9_.-]+)\s*$/gm)].map((m) => m[1])
  );
}

function walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(full);
    return entry.isFile() && entry.name.endsWith(".md") ? [full] : [];
  });
}

function frontMatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : "";
}

function yamlListAfterKey(text, key) {
  const inline = text.match(new RegExp("^" + key + ":\\s*\\[([^\\]]*)\\]", "m"));
  if (inline) {
    return inline[1].split(",").map((item) => item.trim()).filter(Boolean);
  }

  const match = text.match(new RegExp("^" + key + ":\\s*\\r?\\n((?:\\s+-\\s+[^\\r\\n]+\\r?\\n?)+)", "m"));
  if (!match) return [];
  return [...match[1].matchAll(/^\s+-\s+([A-Za-z0-9_-]+)\s*$/gm)].map((item) => item[1]);
}

test("variant data-when expressions use declared config paths", () => {
  const optionsYaml = fs.readFileSync(path.join("docs", "_data", "build_options.yml"), "utf8");
  const validPaths = buildOptionPaths(optionsYaml);
  assert.ok(validPaths.size > 0, "No config paths found");

  const failures = [];

  for (const file of walkMarkdown("docs")) {
    const text = fs.readFileSync(file, "utf8");
    const matches = [
      ...text.matchAll(/data-when=(?:"([^"]+)"|'([^']+)')/g)
    ];

    for (const match of matches) {
      const expression = match[1] || match[2];
      try {
        const clauses = Core.parseExpression(expression);
        for (const clause of clauses) {
          if (!validPaths.has(clause.path)) {
            failures.push(`${file}: unknown path ${clause.path} in ${expression}`);
          }
        }
      } catch (error) {
        failures.push(`${file}: ${error.message}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});

test("pages with variant notes declare build topics", () => {
  const failures = [];

  for (const file of walkMarkdown("docs")) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes("variant-note")) continue;
    const topics = yamlListAfterKey(frontMatter(text), "build_topics");
    if (!topics.length) failures.push(`${file}: variant notes require build_topics`);
  }

  assert.deepEqual(failures, []);
});

test("compatibility rule expressions use declared config paths", () => {
  const optionsYaml = fs.readFileSync(path.join("docs", "_data", "build_options.yml"), "utf8");
  const validPaths = buildOptionPaths(optionsYaml);
  const compatibilityYaml = fs.readFileSync(path.join("docs", "_data", "compatibility.yml"), "utf8");
  const matches = [...compatibilityYaml.matchAll(/^\s+when:\s+"([^"]+)"/gm)];
  const failures = [];

  assert.ok(matches.length > 0, "No compatibility rules found");

  for (const match of matches) {
    const expression = match[1];
    try {
      const clauses = Core.parseExpression(expression);
      for (const clause of clauses) {
        if (!validPaths.has(clause.path)) {
          failures.push(`unknown path ${clause.path} in ${expression}`);
        }
      }
    } catch (error) {
      failures.push(error.message);
    }
  }

  assert.deepEqual(failures, []);
});

test("compatibility rules and build-guide chapters declare alert topics", () => {
  const allowedTopics = new Set([
    "architecture",
    "chassis",
    "mounts",
    "fitment",
    "engine",
    "transmission",
    "driveline",
    "clutch",
    "steering",
    "suspension",
    "eps",
    "electrical",
    "ecu",
    "can",
    "harness",
    "instrumentation",
    "abs",
    "cooling",
    "radiator",
    "fuel",
    "intake",
    "exhaust",
    "commissioning",
    "validation",
    "safety",
    "research",
    "scope"
  ]);
  const failures = [];
  const compatibilityYaml = fs.readFileSync(path.join("docs", "_data", "compatibility.yml"), "utf8");
  const rules = compatibilityYaml.split(/\n\s*\n/).filter((block) => /^\s+- id:/m.test(block));
  const chaptersYaml = fs.readFileSync(path.join("docs", "_data", "build_chapters.yml"), "utf8");
  const chapterFiles = [...chaptersYaml.matchAll(/^\s+url:\s+\/build-guide\/([^/\r\n]+)\.html\s*$/gm)]
    .map((match) => path.join("docs", "build-guide", `${match[1]}.md`));

  for (const rule of rules) {
    const id = (rule.match(/^\s+- id:\s+([A-Za-z0-9_-]+)/m) || [null, "unknown"])[1];
    const topics = yamlListAfterKey(rule, "\\s+topics");
    if (!topics.length) failures.push(`${id}: missing topics`);
    topics.forEach((topic) => {
      if (!allowedTopics.has(topic)) failures.push(`${id}: unknown topic ${topic}`);
    });
  }

  for (const file of chapterFiles) {
    const name = path.basename(file);
    const topics = yamlListAfterKey(frontMatter(fs.readFileSync(file, "utf8")), "build_topics");
    if (!topics.length) failures.push(`${name}: missing build_topics`);
    topics.forEach((topic) => {
      if (!allowedTopics.has(topic)) failures.push(`${name}: unknown topic ${topic}`);
    });
  }

  assert.deepEqual(failures, []);
});
