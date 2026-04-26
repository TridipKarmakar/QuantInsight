import fs from "fs";
import path from "path";

// -------------------------------
// Extract Imports
// -------------------------------
function extractImports(content) {
  const imports = [];
  const lines = content.split("\n");

  lines.forEach(line => {
    line = line.trim();
    if (line.startsWith("import")) {
      imports.push(line);
    }
  });

  return imports;
}

// -------------------------------
// Extract API Calls
// -------------------------------
function extractAPICalls(content) {
  const apiCalls = [];
  const regex = /fetch\((.*?)\)/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    apiCalls.push(match[1]);
  }

  return apiCalls;
}

// -------------------------------
// Extract Components
// -------------------------------
function extractComponents(content) {
  const components = [];
  const regex = /function\s+([A-Z][A-Za-z0-9]*)|const\s+([A-Z][A-Za-z0-9]*)\s*=/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    components.push(match[1] || match[2]);
  }

  return components;
}

// -------------------------------
// Main Builder
// -------------------------------
function buildFrontendContext(rootDir) {
  let context = [];

  context.push("PROJECT: QuantInsight Frontend\n");

  function walk(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const fullPath = path.join(dir, file);

      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".js") || file.endsWith(".jsx")) {
        const content = fs.readFileSync(fullPath, "utf-8");

        const imports = extractImports(content);
        const apiCalls = extractAPICalls(content);
        const components = extractComponents(content);

        context.push(`\nFILE: ${fullPath}`);
        context.push(`Components: ${components.length ? components : "None"}`);
        context.push(`Imports: ${imports.length ? imports : "None"}`);
        context.push(`API Calls: ${apiCalls.length ? apiCalls : "None"}`);
      }
    });
  }

  walk(rootDir);

  return context.join("\n");
}

// -------------------------------
// Run Script
// -------------------------------
const ROOT_DIR = "./";

const result = buildFrontendContext(ROOT_DIR);

fs.writeFileSync("frontend_context.txt", result);

console.log("✅ frontend_context.txt generated!");