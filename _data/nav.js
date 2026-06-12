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
				{ href: "install.html", label: "Install Fontra Pak", id: "install" },
				{ href: "tutorial-first-font.html", label: "Your first variable font", id: "first-font" },
				{ href: "open-existing-font.html", label: "Open an existing font", id: "open" },
				{ href: "try-online.html", label: "Try Fontra online", id: "try", tag: "planned" },
			],
		},
		{
			icon: "📚",
			label: "Learn",
			items: [
				{ href: "learn.html", label: "All tutorials", id: "learn" },
				{ href: "pen-tool.html", label: "Drawing with the pen tool", id: "pen" },
				{ href: "editing-across-sources.html", label: "Editing across sources", id: "multisource" },
				{ href: "variable-components-tutorial.html", label: "Variable components", id: "varcomp-t" },
			],
		},
		{
			icon: "🛠",
			label: "Guides",
			items: [
				{ href: "guides.html", label: "All guides", id: "guides" },
				{ href: "setup-designspace.html", label: "Set up a designspace", id: "designspace-g" },
				{ href: "kerning-spacing.html", label: "Kerning & spacing", id: "kerning" },
				{ href: "export-install.html", label: "Export & install", id: "export" },
			],
		},
		{
			icon: "📖",
			label: "Reference",
			items: [
				{ href: "reference.html", label: "Overview", id: "reference" },
				{ href: "editor-tools.html", label: "Editor & tools", id: "editor" },
				{ href: "reference-axes.html", label: "Font · Axes", id: "axes" },
				{ href: "font-sources.html", label: "Font · Sources", id: "sources-r" },
				{ href: "keyboard-shortcuts.html", label: "Keyboard shortcuts", id: "shortcuts" },
			],
		},
		{
			icon: "⚙️",
			label: "Workflow",
			items: [
				{ href: "workflow.html", label: "Recipes & intro", id: "workflow" },
				{ href: "action-reference.html", label: "Action reference", id: "actions" },
				{ href: "writing-actions.html", label: "Writing your own actions", id: "extend" },
			],
		},
		{
			icon: "🔁",
			label: "Migrate",
			items: [
				{ href: "migrate.html", label: "Overview", id: "migrate" },
				{ href: "from-glyphs.html", label: "From Glyphs", id: "glyphs" },
				{ href: "from-robofont.html", label: "From RoboFont", id: "robofont" },
			],
		},
		{
			icon: "💡",
			label: "Understand",
			items: [
				{ href: "explanations.html", label: "All concepts", id: "explanations" },
				{ href: "designspace.html", label: "Designspace", id: "designspace-e" },
				{ href: "sources-layers.html", label: "Sources & layers", id: "sources-e" },
				{ href: "variable-components.html", label: "Variable components", id: "varcomp-e" },
			],
		},
	],
};
