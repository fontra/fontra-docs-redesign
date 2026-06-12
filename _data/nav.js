// Single source of truth for the shared topbar + sidebar.
// (Previously lived in docs-redesign/assets/nav.js and was injected
// client-side; now rendered at build time by _includes/topbar.html and
// _includes/sidebar.html. A page selects its highlighted entries with
// `top:` and `active:` front matter.)
export default {
	topnav: [
		{ href: "get-started.html", label: "Get started", id: "get-started" },
		{ href: "learn.html", label: "Learn", id: "learn" },
		{ href: "guides.html", label: "Guides", id: "guides" },
		{ href: "reference.html", label: "Reference", id: "reference" },
		{ href: "workflow.html", label: "Workflow", id: "workflow" },
	],
	side: [
		{
			icon: "🌱",
			label: "Get started",
			items: [
				{ href: "get-started.html", label: "Overview", id: "get-started" },
				{ href: "#", label: "Install Fontra Pak", id: "install" },
				{ href: "tutorial-first-font.html", label: "Your first variable font", id: "first-font" },
				{ href: "#", label: "Open an existing font", id: "open" },
				{ href: "#", label: "Try Fontra online", id: "try", tag: "planned" },
			],
		},
		{
			icon: "📚",
			label: "Learn",
			items: [
				{ href: "learn.html", label: "All tutorials", id: "learn" },
				{ href: "#", label: "Drawing with the pen tool", id: "pen" },
				{ href: "#", label: "Editing across sources", id: "multisource" },
				{ href: "#", label: "Variable components", id: "varcomp-t" },
			],
		},
		{
			icon: "🛠",
			label: "Guides",
			items: [
				{ href: "guides.html", label: "All guides", id: "guides" },
				{ href: "#", label: "Set up a designspace", id: "designspace-g" },
				{ href: "#", label: "Kerning & spacing", id: "kerning" },
				{ href: "#", label: "Export & install", id: "export" },
			],
		},
		{
			icon: "📖",
			label: "Reference",
			items: [
				{ href: "reference.html", label: "Overview", id: "reference" },
				{ href: "#", label: "Editor & tools", id: "editor" },
				{ href: "reference-axes.html", label: "Font · Axes", id: "axes" },
				{ href: "#", label: "Font · Sources", id: "sources-r" },
				{ href: "#", label: "Keyboard shortcuts", id: "shortcuts" },
			],
		},
		{
			icon: "⚙️",
			label: "Workflow",
			items: [
				{ href: "workflow.html", label: "Recipes & intro", id: "workflow" },
				{ href: "#", label: "Action reference", id: "actions" },
				{ href: "#", label: "Writing your own actions", id: "extend" },
			],
		},
		{
			icon: "🔁",
			label: "Migrate",
			items: [
				{ href: "migrate.html", label: "Overview", id: "migrate" },
				{ href: "#", label: "From Glyphs", id: "glyphs" },
				{ href: "#", label: "From RoboFont", id: "robofont" },
			],
		},
		{
			icon: "💡",
			label: "Understand",
			items: [
				{ href: "explanations.html", label: "All concepts", id: "explanations" },
				{ href: "#", label: "Designspace", id: "designspace-e" },
				{ href: "#", label: "Sources & layers", id: "sources-e" },
				{ href: "#", label: "Variable components", id: "varcomp-e" },
			],
		},
	],
};
