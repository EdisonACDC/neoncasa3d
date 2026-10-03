// Records frames of the preview (invented demo data) for the README animation: the house turns,
// the view flies into the ground floor and the kitchen, the lights go off and on again, then the kitchen.
// Usage (from frontend/): node record-gif.mjs <frame-dir>; then python ../tools/make-gif.py <frame-dir> <out.gif>

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? "gif-frames");
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^[/\\]+/, "");
  const file = join(root, path);
  // only what the online demo has: no local packs from private/
  if (!file.startsWith(root) || path.startsWith("private") || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const url = `http://127.0.0.1:${server.address().port}/preview/index.html?lang=en`;

const executablePath = [process.env.CHROME_PATH, "C:/Program Files/Google/Chrome/Application/chrome.exe", "/usr/bin/google-chrome"].filter(Boolean).find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(2500);

let n = 0;
const frame = async (wait = 40) => {
  await sleep(wait);
  await page.screenshot({ path: join(outDir, `f${String(n++).padStart(4, "0")}.png`) });
};
const hold = async (count) => {
  for (let i = 0; i < count; i++) await frame(60);
};
const clickText = (text) =>
  page.evaluate((t) => {
    const find = (root) => {
      for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
      for (const el of root.querySelectorAll("*"))
        if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
      return null;
    };
    find(document)?.click();
  }, text);
// turn the view by dragging across the 3D area
const turn = async (dx, steps, y = 470) => {
  const x0 = 640 - dx / 2;
  await page.mouse.move(x0, y);
  await page.mouse.down();
  for (let i = 1; i <= steps; i++) {
    await page.mouse.move(x0 + (dx * i) / steps, y);
    await frame(30);
  }
  await page.mouse.up();
};

// the lights of the ground floor go off and come back on (through the demo's Home Assistant mock)
const lights = (service) =>
  page.evaluate((service) => {
    const hass = document.querySelector("neoncasa3d-panel").hass;
    const ids = Object.keys(hass.states).filter((id) => id.startsWith("light.") && hass.areas[hass.entities[id]?.area_id]?.floor_id === "erdgeschoss");
    hass.callService("light", service, { entity_id: ids });
  }, service);

await hold(4);
await turn(520, 40);
await hold(3);
await clickText("Erdgeschoss");
for (let i = 0; i < 14; i++) await frame(70);
await turn(-200, 16);
await hold(4);
await lights("turn_off");
for (let i = 0; i < 12; i++) await frame(120);
await lights("turn_on");
for (let i = 0; i < 14; i++) await frame(120);
await clickText("Küche");
for (let i = 0; i < 18; i++) await frame(70);
console.log(`${n} frames in ${outDir}`);
await browser.close();
server.close();
