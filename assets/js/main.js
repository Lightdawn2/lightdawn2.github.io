const filterBar = document.querySelector("[data-filter-bar]");
const projects = [...document.querySelectorAll(".project")];
const buttons = [...document.querySelectorAll("[data-filter]")];
const count = document.querySelector("#project-count");
function filterProjects(category) {
  let shown = 0;
  projects.forEach((project) => {
    project.hidden =
      category !== "all" && project.dataset.category !== category;
    if (!project.hidden) shown++;
  });
  buttons.forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.filter === category),
    ),
  );
  count.textContent = `${shown} ${shown === 1 ? "proyecto" : "proyectos"}`;
}
if (filterBar) {
  filterBar.hidden = false;
  buttons.forEach((button) =>
    button.addEventListener("click", () =>
      filterProjects(button.dataset.filter),
    ),
  );
}
function revealLinkedProject() {
  let id;
  try {
    id = decodeURIComponent(location.hash.slice(1));
  } catch {
    return;
  }
  const target = projects.find((project) => project.id === id);
  if (!target) return;
  filterProjects("all");
  target.querySelector("details").open = true;
  requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
}
window.addEventListener("hashchange", revealLinkedProject);
revealLinkedProject();
document.querySelectorAll('a[href^="#"]').forEach((link) =>
  link.addEventListener("click", () => {
    if (link.hash === location.hash) revealLinkedProject();
  }),
);
