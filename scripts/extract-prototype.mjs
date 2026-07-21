import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptsDir, "..");
const sourcePath = resolve(projectRoot, "Zleap-APP原型-SaaS-信息搜索&事项详情.html");
const source = readFileSync(sourcePath, "utf8");

const styleMatch = source.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = source.match(/<body>([\s\S]*?)<script>/);
const scriptMatch = source.match(/<script>\s*window\.addEventListener\('DOMContentLoaded', function \(\) \{([\s\S]*?)\n\s*\}\);\s*<\/script>/);

if (!styleMatch || !bodyMatch || !scriptMatch) {
  throw new Error("Unable to locate prototype style, markup, or behavior blocks.");
}

mkdirSync(resolve(projectRoot, "src"), { recursive: true });
writeFileSync(resolve(projectRoot, "src/styles.css"), `${styleMatch[1].trim()}\n`, "utf8");
writeFileSync(resolve(projectRoot, "src/legacy-markup.html"), `${bodyMatch[1].trim()}\n`, "utf8");
writeFileSync(
  resolve(projectRoot, "src/prototype.js"),
  `export function initializePrototype() {${scriptMatch[1]}\n}\n`,
  "utf8",
);
