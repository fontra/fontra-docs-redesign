// Applies to every page in this directory: render with the docs layout
// (sidebar + topbar) and keep the original `<name>.html` output paths so
// the prototype's relative links and published URLs stay unchanged.
export default {
	layout: "docs.html",
	eleventyComputed: {
		permalink: (data) => `${data.page.filePathStem}.html`,
	},
};
