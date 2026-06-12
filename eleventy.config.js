// Eleventy build for the docs-redesign prototype.
//
// Output URLs are identical to the previous no-build setup:
//   /index.html                      repo hub page
//   /docs-redesign/<page>.html       the prototype pages
//   /docs-redesign/assets/*          css + shared behavior
//   /workflow/ui-mockup.html         the Workflow UI mockup (static)
//
// The shared topbar/sidebar chrome that assets/nav.js used to inject at
// runtime is now rendered at build time from _data/nav.js via the
// templates in _includes/ and _layouts/.

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"./docs-redesign/assets/style.css": "/docs-redesign/assets/style.css",
		"./docs-redesign/assets/app.js": "/docs-redesign/assets/app.js",
		"./workflow/ui-mockup.html": "/workflow/ui-mockup.html",
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
