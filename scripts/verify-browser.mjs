import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
await mkdir(".impeccable/review", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];
for (const [name, width, height] of [
  ["desktop", 1440, 1000],
  ["mobile", 390, 844],
  ["small-mobile", 320, 740],
]) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  await page.goto("http://127.0.0.1:4173/");
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator(".project:visible").count(), 9);
  await page.getByRole("button", { name: "Belray", exact: true }).click();
  assert.equal(await page.locator(".project:visible").count(), 4);
  await page
    .getByRole("button", { name: "Independiente", exact: true })
    .click();
  assert.equal(await page.locator(".project:visible").count(), 1);
  await page
    .getByRole("button", { name: "Proyectos anteriores", exact: true })
    .click();
  assert.equal(await page.locator(".project:visible").count(), 4);
  await page.locator('.hero-directory a[href="#connekt"]').click();
  assert.equal(await page.locator(".project:visible").count(), 9);
  assert(await page.locator("#connekt details").evaluate((el) => el.open));
  await page.locator("#connekt summary").press("Enter");
  assert.equal(
    await page.locator("#connekt details").evaluate((el) => el.open),
    false,
  );
  const closed = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  await page
    .locator("details")
    .evaluateAll((nodes) => nodes.forEach((n) => (n.open = true)));
  const opened = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  const overflow = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    viewport: innerWidth,
  }));
  assert(
    overflow.scroll <= width,
    `${name}: overflow ${JSON.stringify(overflow)}`,
  );
  await page
    .locator("details")
    .evaluateAll((nodes) => nodes.forEach((n) => (n.open = false)));
  await page.evaluate(() => {
    history.replaceState(null, "", location.pathname);
    scrollTo(0, 0);
  });
  await page.screenshot({
    path: `.impeccable/review/${name}.png`,
    fullPage: true,
  });
  await page.screenshot({ path: `.impeccable/review/${name}-hero.png` });
  results.push({
    name,
    errors,
    overflow,
    violations: [...closed.violations, ...opened.violations].map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => n.target),
    })),
  });
  await context.close();
}
const context = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const page = await context.newPage();
await page.goto("http://127.0.0.1:4173/");
assert.equal(await page.locator(".project:visible").count(), 9);
await page.locator("#ventec summary").click();
assert(await page.locator("#ventec details").evaluate((el) => el.open));
await browser.close();
await writeFile(
  ".impeccable/review/browser-results.json",
  JSON.stringify(results, null, 2),
);
console.log(JSON.stringify(results, null, 2));
assert(
  results.every((r) => !r.errors.length && !r.violations.length),
  "Revisar errores de navegador o accesibilidad.",
);
console.log(
  "OK: filtros, enlaces profundos, teclado, sin JavaScript y accesibilidad en tres tamaños.",
);
