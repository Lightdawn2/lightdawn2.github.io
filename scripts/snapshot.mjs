// Read-only inspection of explicitly configured repositories. Output stays local.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const configPath = process.argv[2] || ".local/sources.json";
let sources;
try {
  sources = JSON.parse(readFileSync(configPath, "utf8"));
} catch {
  console.error(
    'Configura .local/sources.json con [{"name":"proyecto","path":"ruta local absoluta"}].',
  );
  process.exit(1);
}
if (!Array.isArray(sources))
  throw new Error("La configuración debe ser una lista.");
const timestamp = new Date().toISOString();
const repositories = sources.map((source) => {
  const git = (...args) =>
    execFileSync("git", ["-C", source.path, ...args], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  try {
    return {
      name: source.name,
      head: git("rev-parse", "HEAD"),
      branch: git("branch", "--show-current"),
      changes: git("status", "--short"),
      recentCommits: git("log", "-20", "--format=%h %ad %s", "--date=short"),
    };
  } catch {
    return {
      name: source.name,
      error: "Repositorio no disponible o no válido",
    };
  }
});
mkdirSync(".local/snapshots", { recursive: true });
const output = `.local/snapshots/${timestamp.replaceAll(":", "-")}.json`;
writeFileSync(
  output,
  JSON.stringify({ timestamp, repositories }, null, 2) + "\n",
);
console.log(
  `Registro local guardado: ${output}. Revisar y resumir antes de incorporar al portafolio público.`,
);
if (repositories.some((r) => r.error)) process.exitCode = 1;
