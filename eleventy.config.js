// Eleventy build for Fontra Docs.
//
// Output URLs are identical to the previous no-build setup:
//   /index.html                      repo hub page
//   /docs-redesign/<page>.html       the docs pages
//   /docs-redesign/assets/*          css, fonts, images + shared behavior
//
// The shared topbar/sidebar chrome is rendered at build time from
// _data/nav.js via the templates in _includes/ and _layouts/.
//
// Page status: every page under docs-redesign/ may declare
//   status: ready      written — the content is there (may still need review)
//   status: planned    a placeholder: title, outline, no content yet
// Hub pages (section overviews) carry no status. The collections below make
// the status visible everywhere: sidebar badges, hub cards, the home page's
// "Written so far" section and the status table on the About page.

import { IdAttributePlugin } from "@11ty/eleventy";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	// Heading ids in rendered Markdown, so app.js anchors + scroll-spy work
	eleventyConfig.addPlugin(IdAttributePlugin);

	eleventyConfig.addPassthroughCopy({
		"./docs-redesign/assets/style.css": "/docs-redesign/assets/style.css",
		"./docs-redesign/assets/app.js": "/docs-redesign/assets/app.js",
		"./docs-redesign/assets/fonts": "/docs-redesign/assets/fonts",
		"./docs-redesign/assets/img": "/docs-redesign/assets/img",
	});

	const isDocsPage = (item) =>
		item.inputPath.startsWith("./docs-redesign/") && !item.inputPath.endsWith("README.md");

	// All docs pages, as plain records (href is relative to docs-redesign/)
	const record = (item) => ({
		href: item.url.replace(/^\/docs-redesign\//, ""),
		title: String(item.data.title || "").replace(/\s*·\s*Fontra Docs$/, ""),
		description: item.data.description || "",
		status: item.data.status || "",
		top: item.data.top || "",
		active: item.data.active || "",
	});

	eleventyConfig.addCollection("docsPages", (api) =>
		api.getAll().filter(isDocsPage).map(record).sort((a, b) => a.title.localeCompare(b.title))
	);

	eleventyConfig.addCollection("docsReady", (api) =>
		api
			.getAll()
			.filter((i) => isDocsPage(i) && i.data.status === "ready")
			.map(record)
			.sort((a, b) => a.title.localeCompare(b.title))
	);

	// href → status, for the sidebar and hub cards (Liquid: docsStatus[item.href])
	eleventyConfig.addCollection("docsStatus", (api) => {
		const map = {};
		for (const item of api.getAll().filter(isDocsPage)) {
			map[record(item).href] = item.data.status || "";
		}
		return map;
	});
}

export const config = {
	templateFormats: ["html", "md", "liquid"],
	htmlTemplateEngine: "liquid",
	markdownTemplateEngine: "liquid",
	dir: {
		input: ".",
		includes: "_includes",
		layouts: "_layouts",
		data: "_data",
		output: "_site",
	},
};
