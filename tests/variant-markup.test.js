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

test("variant data-when expressions use declared config paths", () => {
  const optionsYaml = fs.readFileSync(path.join("docs", "_data", "build_options.yml"), "utf8");
  const validPaths = buildOptionPaths(optionsYaml);
  assert.ok(validPaths.size > 0, "No config paths found");

  const failures = [];

  for (const file of walkMarkdown(path.join("docs", "build-guide"))) {
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
