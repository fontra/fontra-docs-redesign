// Single source of truth for the shared topbar + sidebar, rendered at build
// time by _includes/topbar.html and _includes/sidebar.html. A page selects
// its highlighted entries with `top:` and `active:` front matter.
//
// A page's "planned" badge is not declared here: it comes from the page's
// own `status:` front matter (see eleventy.config.js), so the sidebar can
// never disagree with the page.
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
			label: "Get started",
			items: [
				{ href: "get-started.html", label: "Overview", id: "get-started" },
				{ href: "install.html", label: "Install Fontra Pak", id: "install" },
				{ href: "tutorial-first-font.html", label: "Your first variable font", id: "first-font" },
				{ href: "open-existing-font.html", label: "Open an existing font", id: "open" },
				{ href: "try-online.html", label: "Try Fontra online", id: "try" },
			],
		},
		{
			label: "Learn",
			items: [
				{ href: "learn.html", label: "All tutorials", id: "learn" },
				{ href: "tour-editor.html", label: "Around the editor", id: "tour-editor" },
				{ href: "tour-drawing.html", label: "Drawing: tools & panels", id: "tour-drawing" },
				{ href: "tour-font-info.html", label: "Font info & designspace", id: "tour-font-info" },
				{ href: "tour-font-overview.html", label: "The font overview", id: "tour-font-overview" },
				{ href: "tour-settings.html", label: "Settings", id: "tour-settings" },
				{ href: "pen-tool.html", label: "Drawing with the pen tool", id: "pen" },
				{ href: "editing-across-sources.html", label: "Editing across sources", id: "multisource" },
				{ href: "variable-components-tutorial.html", label: "Variable components", id: "varcomp-t" },
			],
		},
		{
			label: "Guides",
			items: [
				{ href: "guides.html", label: "All guides", id: "guides" },
				{ href: "setup-designspace.html", label: "Set up a designspace", id: "designspace-g" },
				{ href: "kerning-spacing.html", label: "Kerning and spacing", id: "kerning" },
				{ href: "export-install.html", label: "Export and install", id: "export" },
				{ href: "writing-plugins.html", label: "Writing your own plug-ins", id: "plugins" },
			],
		},
		{
			label: "Reference",
			items: [
				{ href: "reference.html", label: "Overview", id: "reference" },
				{ href: "editor-tools.html", label: "Editor and tools", id: "editor" },
				{ href: "reference-axes.html", label: "Font: Axes", id: "axes" },
				{ href: "font-sources.html", label: "Font: Sources", id: "sources-r" },
				{ href: "keyboard-shortcuts.html", label: "Keyboard shortcuts", id: "shortcuts" },
				{ href: "reference-plugins.html", label: "Plug-ins", id: "plugins-r" },
			],
		},
		{
			label: "Workflow",
			items: [
				{ href: "workflow.html", label: "Recipes and intro", id: "workflow" },
				{ href: "action-reference.html", label: "Action reference", id: "actions" },
				{ href: "writing-actions.html", label: "Writing your own actions", id: "extend" },
			],
		},
		{
			label: "Migrate",
			items: [
				{ href: "migrate.html", label: "Overview", id: "migrate" },
				{ href: "from-glyphs.html", label: "From Glyphs", id: "glyphs" },
				{ href: "from-robofont.html", label: "From RoboFont", id: "robofont" },
			],
		},
		{
			label: "Understand",
			items: [
				{ href: "explanations.html", label: "All concepts", id: "explanations" },
				{ href: "designspace.html", label: "Designspace", id: "designspace-e" },
				{ href: "sources-layers.html", label: "Sources and layers", id: "sources-e" },
				{ href: "variable-components.html", label: "Variable components", id: "varcomp-e" },
			],
		},
	],
};
