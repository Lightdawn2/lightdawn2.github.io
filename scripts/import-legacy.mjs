// One-time migration. Reads the original portfolio directly from Git.
import { execFileSync } from "node:child_process";
import { writeFileSync, existsSync } from "node:fs";
if (existsSync("content/legacy.json"))
  throw new Error("El contenido original ya fue importado.");
const html = execFileSync("git", ["show", "HEAD:index.html"], {
  encoding: "utf8",
});
const clean = (s) =>
  s
    .replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .trim();
const field = (s, c) =>
  clean(
    s.match(new RegExp(`class="${c}">([\\s\\S]*?)</(?:div|p)>`))?.[1] || "",
  );
const projects = [
  ...html.matchAll(
    /<div class="project-card reveal">([\s\S]*?)(?=<div class="project-card reveal">|<\/section>)/g,
  ),
].map((m, i) => ({
  id: ["webcontable", "crexer-web", "contabilidad", "inventario-ti"][i],
  category: i === 3 ? "layher" : "crexer",
  name: field(m[1], "project-name"),
  description: field(m[1], "project-desc"),
  type: field(m[1], "project-type"),
  highlights: [...m[1].matchAll(/<li>(.*?)<\/li>/g)].map((x) => clean(x[1])),
  tech: [...m[1].matchAll(/class="tech-badge">(.*?)<\/span>/g)].map((x) =>
    clean(x[1]),
  ),
  url: m[1].match(/href="([^"]+)"/)?.[1] || null,
}));
const certifications = [
  ...html.matchAll(/class="cert-card reveal">([\s\S]*?)<\/div><\/div>/g),
].map((m) => ({
  year: field(m[1] + "</div>", "cert-year"),
  name: field(m[1] + "</div>", "cert-name"),
  issuer: field(m[1] + "</div>", "cert-platform"),
}));
writeFileSync(
  "content/legacy.json",
  JSON.stringify({ projects, certifications }, null, 2) + "\n",
);
console.log(
  `Preservados ${projects.length} proyectos y ${certifications.length} cursos.`,
);
