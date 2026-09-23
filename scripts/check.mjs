import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
const before = readFileSync("index.html", "utf8");
execFileSync(process.execPath, ["scripts/build.mjs"]);
assert.equal(
  readFileSync("index.html", "utf8"),
  before,
  "Regenerar index.html antes de publicar.",
);
const ids = [...before.matchAll(/\bid="([^"]+)"/g)].map((x) => x[1]);
assert.equal(new Set(ids).size, ids.length, "Los IDs deben ser únicos.");
for (const [, href] of before.matchAll(/href="#([^"]+)"/g))
  assert(ids.includes(href), `Ancla inexistente: ${href}`);
for (const [, src] of before.matchAll(/(?:src|href)="(assets\/[^"]+)"/g))
  assert(existsSync(src), `Falta ${src}`);
const { projects } = JSON.parse(readFileSync("content/projects.json"));
const legacy = JSON.parse(readFileSync("content/legacy.json"));
for (const p of [...projects, ...legacy.projects]) {
  assert(
    p.name && p.description && p.highlights.length && p.tech.length,
    `Ficha incompleta: ${p.id}`,
  );
  assert(ids.includes(p.id));
}
assert.equal(legacy.certifications.length, 10, "No perder cursos anteriores.");
assert(
  !before.includes('https://linkedin.com"'),
  "No publicar enlaces de perfil genéricos.",
);
console.log("OK: generación reproducible, contenido, recursos y anclas.");
