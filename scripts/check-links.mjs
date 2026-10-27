// Check every internal link and image of the built site, and that each
// page's structure is sane (one .page wrapper closed where expected).
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
const SITE = resolve("_site");
// A preview build under a sub-path (see eleventy.config.js) sets these.
const PREFIX = (process.env.PATH_PREFIX || "/").replace(/\/$/, "");
const SITE_URL = (process.env.SITE_URL || "https://docs.fontra.xyz").replace(/\/$/, "");
const VIDEO_BASE = (process.env.VIDEO_BASE || "").replace(/\/$/, "");
function* walk(d) { for (const e of readdirSync(d, { withFileTypes: true })) { const f = join(d, e.name); if (e.isDirectory()) yield* walk(f); else if (f.endsWith(".html")) yield f; } }
const exists = (p) => existsSync(p) && (statSync(p).isFile() || existsSync(join(p, "index.html")));
let bad = 0, n = 0;
for (const f of walk(SITE)) {
	const html = readFileSync(f, "utf8");
	const rel = f.slice(SITE.length);
	// structure: the toc must be a direct child of .page, the article must close
	if (/<nav class="toc"/.test(html)) {
		const i = html.indexOf('<div class="page'), j = html.indexOf('<nav class="toc"');
		const between = html.slice(i, j);
		const opens = (between.match(/<div\b/g) || []).length, closes = (between.match(/<\/div>/g) || []).length;
		if (opens - closes !== 1) { console.log(`STRUCT  ${rel}: ${opens} <div> vs ${closes} </div> before the toc`); bad++; }
	}
	for (const m of html.matchAll(/(?:href|src)="([^"#]*)(#[^"]*)?"/g)) {
		let u = m[1];
		if (!u || u.startsWith("mailto:") || u.startsWith("javascript:")) continue;
		if (VIDEO_BASE && u.startsWith(VIDEO_BASE + "/videos/")) continue; // served by the live site
		if (/^https?:\/\//.test(u)) { if (u.startsWith(SITE_URL + "/") || u === SITE_URL) u = u.slice(SITE_URL.length) || "/"; else continue; }
		if (PREFIX && (u.startsWith(PREFIX + "/") || u === PREFIX)) u = u.slice(PREFIX.length) || "/";
		let p;
		if (u.startsWith("/")) p = join(SITE, u);
		else p = resolve(dirname(f), u);
		n++;
		if (!(exists(p) || exists(p + ".html"))) { console.log(`BROKEN  ${rel}  →  ${m[1]}`); bad++; }
	}
}
console.log(`${n} links checked, ${bad} problem(s)`);
