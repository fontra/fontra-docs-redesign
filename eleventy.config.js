import { existsSync } from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownItAttrs from "markdown-it-attrs";
import markdownItAnchor from "markdown-it-anchor";
import nav from "./_data/nav.js";

// Approximation of kramdown's auto-id algorithm, so existing #anchors
// into docs.fontra.xyz keep working.
function kramdownSlugify(s) {
	return s
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-");
}

// --- navigation tree helpers --------------------------------------------
// The sidebar, the top bar, the breadcrumb and the prev/next links are all
// derived from the one tree in _data/nav.js, keyed by page URL, so pages
// need no `top:`/`active:` front matter. Jekyll-style permalinks without a
// trailing slash are written as `foo.html` but linked without the
// extension; `cleanUrl` normalizes both forms to the same key.
const cleanUrl = (url) => (typeof url === "string" ? url.replace(/\.html$/, "") : url);

const escapeHtml = (s) =>
	String(s)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");

// Path (group, item, item, …) from the tree root to the node for `url`.
// Nodes flagged `ref: true` are shortcuts shown in the sidebar only; the
// first non-ref match in document order is the page's canonical place.
function findPath(url) {
	url = cleanUrl(url);
	const walk = (nodes, trail) => {
		for (const node of nodes) {
			const here = [...trail, node];
			if (!node.ref && cleanUrl(node.href) === url) return here;
			if (node.items) {
				const found = walk(node.items, here);
				if (found) return found;
			}
		}
		return null;
	};
	return walk(nav.side, []);
}

// Every page of the tree in reading order (hubs first), for prev/next.
function flatten() {
	const out = [];
	const walk = (nodes) => {
		for (const node of nodes) {
			if (!node.ref) out.push(node);
			if (node.items) walk(node.items);
		}
	};
	walk(nav.side);
	return out;
}

// kramdown definition lists:
//
//   term
//   : definition, possibly continued
//     on indented lines
//
// become <dl><dt>term</dt><dd>definition</dd></dl>, one <dl> per run of
// consecutive items. A definition starting with kramdown's `^` block
// separator keeps only what follows it.
function definitionLists(content) {
	const lines = content.split("\n");
	const out = [];
	let i = 0;
	let open = false;
	const isTerm = (k) =>
		k + 1 < lines.length &&
		/^\S/.test(lines[k]) &&
		!/^(<\/?(div|table|tr|td|th|nav|ol|ul|li|p|h\d)\b[^>]*>|\{:|[-*+] |\d+\. |#|\||```)/.test(lines[k]) &&
		/^: /.test(lines[k + 1]);
	const closeDl = () => {
		if (open) out.push("</dl>", "");
		open = false;
	};
	while (i < lines.length) {
		if (isTerm(i)) {
			if (!open) out.push("", "<dl>");
			open = true;
			out.push("<dt>", "", lines[i], "", "</dt>");
			i++;
			while (i < lines.length && /^: /.test(lines[i])) {
				const def = [lines[i].slice(2).trim()];
				i++;
				while (i < lines.length && (lines[i].trim() === "" || /^\s{2}/.test(lines[i]))) {
					def.push(lines[i].replace(/^ {2}/, ""));
					i++;
				}
				while (def.length && def[def.length - 1].trim() === "") def.pop();
				if (def[0] === "^") def.shift();
				out.push("<dd>", "", ...def, "", "</dd>");
			}
			continue;
		}
		if (open && lines[i].trim() !== "") closeDl();
		if (!open || lines[i].trim() !== "") out.push(lines[i]);
		i++;
	}
	closeDl();
	return out.join("\n");
}

// url → { title, description, status } for every page of the site,
// filled by the `pages` collection below (collections are computed before
// any template renders).
const pageMap = new Map();

function renderSidebar(currentUrl, statusMap = {}) {
	const path = findPath(currentUrl) || [];
	const onPath = new Set(path);
	const current = cleanUrl(currentUrl);
	const renderItems = (items, depth) => {
		let html = "";
		for (const item of items) {
			const href = cleanUrl(item.href);
			const isCurrent = href === current && !item.ref;
			const st = statusMap[href] || "";
			const cls = [];
			if (isCurrent) cls.push("on");
			if (st === "planned") cls.push("planned");
			if (depth > 0) cls.push(`d${depth}`);
			html += `<a href="${escapeHtml(item.href)}"${cls.length ? ` class="${cls.join(" ")}"` : ""}${
				isCurrent ? ' aria-current="page"' : ""
			}>${escapeHtml(item.label)}${
				st === "planned" ? ' <span class="status planned" title="Planned: not written yet">Planned</span>' : ""
			}</a>\n`;
			if (item.items && (onPath.has(item) || item.open)) {
				html += renderItems(item.items, depth + 1);
			}
		}
		return html;
	};
	let html = "";
	for (const group of nav.side) {
		const isHub = cleanUrl(group.href) === current;
		html += `<div class="navgroup${onPath.has(group) ? " active" : ""}">`;
		html += `<a class="lbl${isHub ? " on" : ""}" href="${escapeHtml(group.href)}"${isHub ? ' aria-current="page"' : ""}>${escapeHtml(group.label)}</a>`;
		html += `<nav class="nav" aria-label="${escapeHtml(group.label)}">\n${renderItems(group.items || [], 0)}</nav></div>\n`;
	}
	return html;
}

// Headings of the rendered page, for the "On this page" column.
function tocFromHtml(html) {
	const toc = [];
	const re = /<h([23])\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;
	let m;
	while ((m = re.exec(html))) {
		const label = m[3]
			.replace(/<[^>]+>/g, "")
			.replace(/&amp;/g, "&")
			.replace(/\s+/g, " ")
			.trim();
		if (label) toc.push({ id: m[2], label, lvl3: m[1] === "3" });
	}
	return toc;
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	// NOTE: most pages carry `draft: true` front matter. Jekyll ignored it
	// and published them anyway, so we deliberately do NOT exclude drafts
	// here — that would empty the site.

	// --- deployment under a sub-path --------------------------------------
	// docs.fontra.xyz is served at the root. A preview of the same site on
	// a GitHub project page (fontra.github.io/fontra-docs-redesign/) sets
	// PATH_PREFIX; every root-relative URL of the output is then rewritten
	// by Eleventy's HtmlBasePlugin, and VIDEO_BASE lets such a preview use
	// the videos of the live site instead of carrying 200 MB of them.
	if (process.env.VIDEO_BASE) {
		// registered before HtmlBasePlugin so it sees the root-relative URLs
		const base = process.env.VIDEO_BASE.replace(/\/$/, "");
		eleventyConfig.addTransform("video-base", (content, outputPath) =>
			outputPath && outputPath.endsWith(".html")
				? content.replace(/(src|href)="(?:[a-z]+:\/\/[^"]*?)?\/videos\//g, `$1="${base}/videos/`)
				: content
		);
	}
	eleventyConfig.addPlugin(HtmlBasePlugin);

	// --- static files -------------------------------------------------
	const passthrough = { "./images/": "/images/", "./content/assets/": "/assets/" };
	for (const f of ["videos", "CNAME"]) if (existsSync(f)) passthrough[`./${f}`] = `/${f}`;
	eleventyConfig.addPassthroughCopy(passthrough);
	eleventyConfig.addWatchTarget("content/assets/");

	// --- markdown: kramdown compatibility ------------------------------
	// The content was written for Jekyll's kramdown. A few kramdown-isms are
	// translated at build time (source files stay untouched):
	//
	//   1. `* Table of Contents\n{:toc}`  →  dropped: the layout builds the
	//      "On this page" column from the headings
	//   2. `<div ... markdown="1">`       →  blank line inserted after the
	//      opening tag so markdown-it parses the Markdown inside the div
	//   3. block attribute lines like `{: .lead }` are moved/kept where
	//      markdown-it-attrs expects them
	//   4. the hand-written Bootstrap breadcrumb at the top of each page is
	//      removed: the layout derives the breadcrumb from the navigation tree
	eleventyConfig.addPreprocessor("kramdown-compat", "md", (data, content) => {
		// 1. kramdown TOC marker
		content = content.replace(/^\* Table of Contents\s*\n\{:\s*toc\s*\}\s*$/gim, "");

		// 2. markdown="1" wrapper divs/cells
		content = content.replace(
			/<(div|td|span)([^>]*?)\s+markdown=['"]1['"]([^>]*)>[ \t]*\r?\n/g,
			"<$1$2$3>\n\n"
		);

		// 4. hand-written breadcrumbs (the layout renders its own)
		content = content.replace(/<nav aria-label="breadcrumb">[\s\S]*?<\/nav>\s*/g, "");

		// 5. kramdown definition lists (`term` / `: definition`), which
		//    markdown-it does not know: rewritten as <dl> with the term and
		//    the definition left as Markdown (blank lines around them make
		//    markdown-it parse the inside of the HTML block)
		content = definitionLists(content);

		// 3. kramdown block IALs ({: .class }) on their own line
		const lines = content.split("\n");
		const out = [];
		for (const line of lines) {
			const ial = line.match(/^\{:\s*([^}\n]+?)\s*\}\s*$/);
			if (ial && !/^\s*toc\s*$/.test(ial[1]) && out.length > 0) {
				const prev = out[out.length - 1];
				const prevBlank = prev.trim() === "";
				const prevListItem = /^\s*([-*+]\s|\d+\.\s|\|)/.test(prev);
				const prevHtmlOnly = /^\s*<\/?[a-zA-Z][^>]*>\s*$/.test(prev);
				if (prevListItem) {
					// kramdown attaches this to the whole list; markdown-it-attrs
					// does the same for a standalone attrs paragraph after a block
					out.push("");
					out.push(`{:${ial[1]}}`);
					continue;
				} else if (!prevBlank && !prevHtmlOnly) {
					// paragraph or heading: merge onto the previous line, where
					// markdown-it-attrs picks it up
					out[out.length - 1] = prev.replace(/\s+$/, "") + ` {:${ial[1]}}`;
					continue;
				}
			}
			out.push(line);
		}
		return out.join("\n");
	});

	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.set({ html: true, typographer: true });
		mdLib.use(markdownItAttrs, {
			leftDelimiter: "{:",
			rightDelimiter: "}",
		});
		mdLib.use(markdownItAnchor, {
			slugify: kramdownSlugify,
			tabIndex: false,
		});
		return mdLib;
	});

	// --- collections --------------------------------------------------
	// Every page, as a url → record map (used by the card shortcode, the
	// prev/next links and the About page), plus url → status for the sidebar.
	const record = (item) => ({
		url: cleanUrl(item.url),
		title: String(item.data.title || ""),
		description: item.data.description || "",
		status: item.data.status || "",
		inputPath: item.inputPath,
	});
	eleventyConfig.addCollection("pages", (api) => {
		pageMap.clear();
		const all = api
			.getAll()
			.filter((i) => typeof i.url === "string" && i.data.title)
			.map(record);
		for (const p of all) pageMap.set(p.url, p);
		return all.sort((a, b) => a.title.localeCompare(b.title));
	});
	eleventyConfig.addCollection("docsStatus", (api) => {
		const map = {};
		for (const item of api.getAll()) {
			if (typeof item.url === "string") map[cleanUrl(item.url)] = item.data.status || "";
		}
		return map;
	});
	eleventyConfig.addCollection("planned", (api) =>
		api
			.getAll()
			.filter((i) => i.data.status === "planned")
			.map(record)
			.sort((a, b) => a.title.localeCompare(b.title))
	);

	// --- filters: navigation -------------------------------------------
	eleventyConfig.addFilter("clean_url", cleanUrl);
	eleventyConfig.addFilter("sidebar", (url, statusMap) => renderSidebar(url, statusMap));
	eleventyConfig.addFilter("nav_top", (url) => {
		const path = findPath(url);
		return path ? path[0].id : "";
	});
	eleventyConfig.addFilter("breadcrumb", (url) => {
		const path = findPath(url);
		if (!path) return [];
		// all ancestors (not the page itself)
		return path.slice(0, -1).map((n) => ({ href: n.href, label: n.label }));
	});
	const neighbour = (url, delta) => {
		const flat = flatten();
		const i = flat.findIndex((n) => cleanUrl(n.href) === cleanUrl(url));
		if (i < 0) return null;
		const n = flat[i + delta];
		if (!n) return null;
		const rec = pageMap.get(cleanUrl(n.href));
		return { href: n.href, title: rec ? rec.title : n.label, label: n.label };
	};
	eleventyConfig.addFilter("nav_prev", (url) => neighbour(url, -1));
	eleventyConfig.addFilter("nav_next", (url) => neighbour(url, +1));
	eleventyConfig.addFilter("toc", tocFromHtml);
	eleventyConfig.addFilter("page_title", (url) => {
		const rec = pageMap.get(cleanUrl(url));
		return rec ? rec.title : url;
	});

	// --- shortcode: a grid of cards linking to pages ---------------------
	// One page per line: `/url/` or `/url/ | custom description` or
	// `/url/ | custom description | meta | custom title`. Title, description and status
	// come from the page's own front matter unless overridden, so the cards
	// can never disagree with the pages. A line starting with `+` is a card
	// for a page that does not exist yet (`+ Title | description`).
	eleventyConfig.addPairedShortcode("cardgrid", (text) => {
		const lines = String(text)
			.split("\n")
			.map((l) => l.trim())
			.filter(Boolean);
		let html = '<div class="cardgrid">\n';
		for (const line of lines) {
			if (line.startsWith("+")) {
				const [title, desc = ""] = line.slice(1).split("|").map((s) => s.trim());
				html += `<div class="card planned"><div class="t">${escapeHtml(title)}</div><div class="d">${desc}</div><div class="meta"><span class="status planned">Planned</span></div></div>\n`;
				continue;
			}
			const [href, descOverride, meta, titleOverride] = line.split("|").map((s) => s.trim());
			const rec = pageMap.get(cleanUrl(href.split("#")[0]));
			const title = titleOverride || (rec ? rec.title : href);
			const desc = descOverride || (rec ? rec.description : "");
			const planned = rec && rec.status === "planned";
			const metaParts = [];
			if (planned) metaParts.push('<span class="status planned">Planned</span>');
			if (meta) metaParts.push(meta);
			html += `<a class="card${planned ? " planned" : ""}" href="${escapeHtml(href)}"><div class="t">${escapeHtml(title)}</div><div class="d">${desc}</div>${
				metaParts.length ? `<div class="meta">${metaParts.join(" · ")}</div>` : ""
			}</a>\n`;
		}
		return html + "</div>";
	});
}

export const config = {
	pathPrefix: process.env.PATH_PREFIX || "/",
	templateFormats: ["md", "html", "liquid"],
	markdownTemplateEngine: "liquid",
	htmlTemplateEngine: "liquid",
	dir: {
		input: "content",
		includes: "../_includes",
		layouts: "../_layouts",
		data: "../_data",
		output: "_site",
	},
};
