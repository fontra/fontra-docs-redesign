// Site-wide values, the equivalent of Jekyll's `site.*` variables
// (templates use e.g. {{ site.url }} and {{ site.time }}).
const isServing = process.env.ELEVENTY_RUN_MODE === "serve";
const prefix = (process.env.PATH_PREFIX || "/").replace(/\/$/, "");

export default {
	title: "Fontra Docs",
	email: "hello@black-foundry.com",
	description: "Fontra user documentation",
	// Absolute URL in production builds (SITE_URL for a preview deployment
	// such as fontra.github.io/fontra-docs-redesign); localhost while
	// `npm start` is running so links work in the dev server.
	url: isServing ? `http://localhost:8080${prefix}` : process.env.SITE_URL || "https://docs.fontra.xyz",
	time: new Date(),
};
