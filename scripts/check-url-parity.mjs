#!/usr/bin/env node
// Verifies that the Eleventy build (_site/) serves every URL the site has
// ever served. Permalinks are never changed, so the expected URL set is
// derived from the front matter:
//
//   permalink: /foo/      -> _site/foo/index.html
//   permalink: /foo/bar   -> _site/foo/bar.html   (Jekyll wrote bar.html,
//                            GitHub Pages serves it extension-less)
//   (no permalink)        -> default Eleventy output for the file
//
// It also checks that every URL of the navigation tree (_data/nav.js) is a
// page of the site, so the sidebar can never link into the void.
//
// Run after `npm run build`:  npm run check-urls

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import nav from "../_data/nav.js";

const ROOT = new URL("..", import.meta.url).pathname;
const SITE = join(ROOT, "_site");

if (!existsSync(SITE)) {
	console.error("No _site/ directory found — run `npm run build` first.");
	process.exit(1);
}

function* walk(dir, exts) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(full, exts);
		else if (!exts || exts.some((e) => entry.name.endsWith(e))) yield full;
	}
}

// --- expected outputs from content front matter -----------------------
const expected = new Map(); // output path (relative to _site) -> source
for (const file of walk(join(ROOT, "content"), [".md", ".html"])) {
	const src = relative(ROOT, file);
	if (src.startsWith("content/assets/")) continue;
	const text = readFileSync(file, "utf8");
	const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	const pm = fm && fm[1].match(/^permalink\s*:\s*(\S+)\s*$/m);
	if (pm) {
		const p = pm[1];
		if (p.endsWith("/")) expected.set(join(p.slice(1), "index.html"), src);
		else if (/\.[a-z0-9]+$/i.test(p)) expected.set(p.slice(1), src);
		else expected.set(`${p.slice(1)}.html`, src);
	} else if (src === "content/index.md" || src === "content/index.html") {
		expected.set("index.html", src);
	} else {
		// Eleventy default: content/a/b.md -> /a/b/index.html
		const stem = src.replace(/^content\//, "").replace(/\.(md|html)$/, "");
		expected.set(join(stem, "index.html"), src);
	}
}

// --- static assets that must be copied ---------------------------------
if (existsSync(join(ROOT, "CNAME"))) expected.set("CNAME", "CNAME");
for (const dir of ["images", "videos", "content/assets"]) {
	if (!existsSync(join(ROOT, dir))) continue; // a preview build may carry no videos
	for (const file of walk(join(ROOT, dir))) {
		const rel = relative(ROOT, file).replace(/^content\//, "");
		expected.set(rel, relative(ROOT, file));
	}
}

// --- compare ------------------------------------------------------------
let missing = 0;
for (const [out, src] of [...expected].sort()) {
	if (!existsSync(join(SITE, out))) {
		console.error(`MISSING  /${out}   (from ${src})`);
		missing++;
	}
}

const expectedHtml = new Set([...expected.keys()].filter((p) => p.endsWith(".html")));
let extra = 0;
for (const file of walk(SITE, [".html"])) {
	const rel = relative(SITE, file);
	if (!expectedHtml.has(rel)) {
		console.warn(`EXTRA    /${rel}`);
		extra++;
	}
}

// --- navigation tree: every link must be a page ---------------------------
let broken = 0;
const urlToOutput = (url) => {
	const u = url.split("#")[0];
	if (u.endsWith("/")) return join(u.slice(1), "index.html");
	return `${u.slice(1)}.html`;
};
const checkNodes = (nodes, where) => {
	for (const node of nodes) {
		if (node.href) {
			const out = urlToOutput(node.href);
			if (!expectedHtml.has(out) && !existsSync(join(SITE, out))) {
				console.error(`BROKEN   ${node.href}   (${where} › ${node.label})`);
				broken++;
			}
		}
		if (node.items) checkNodes(node.items, `${where} › ${node.label}`);
	}
};
checkNodes(nav.topnav, "topnav");
checkNodes(nav.side, "sidebar");

console.log(
	`\n${expected.size} expected outputs — ${missing} missing, ${extra} unexpected html file(s), ${broken} broken navigation link(s).`
);
process.exit(missing || broken ? 1 : 0);
