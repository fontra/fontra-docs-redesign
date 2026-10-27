// The one map of the site. The top bar, the sidebar, the breadcrumb and the
// prev/next links are all rendered from this tree (see eleventy.config.js),
// keyed by page URL, so a page needs no navigation front matter: adding a
// page means adding its URL here, at the place where it belongs.
//
// Every URL below is an existing permalink of docs.fontra.xyz or a page of
// this repository; `npm run check-urls` fails the build if one is missing.
//
// A node with `ref: true` is a shortcut: it appears in the sidebar but the
// page's canonical place (breadcrumb, prev/next) is its other occurrence.
// A node with `items:` expands in the sidebar when the reader is inside it.
export default {
	topnav: [
		{ id: "get-started", href: "/get-started/", label: "Get started" },
		{ id: "tutorials", href: "/tutorials/", label: "Tutorials" },
		{ id: "how-tos", href: "/how-tos/", label: "How-tos" },
		{ id: "reference", href: "/reference/", label: "Reference" },
		{ id: "explanations", href: "/explanations/", label: "Explanations" },
		{ id: "workflow", href: "/workflow/", label: "Workflow" },
	],
	side: [
		{
			id: "get-started",
			label: "Get started",
			href: "/get-started/",
			items: [
				{ href: "/introduction/", label: "Introduction" },
				{ href: "/how-tos/installation/installing-fontra-pak/", label: "Install Fontra Pak", ref: true },
				{ href: "/tutorials/your-first-variable-font/", label: "Your first variable font", ref: true },
				{ href: "/how-tos/opening-ufo-designspace/", label: "Open an existing font", ref: true },
				{ href: "/get-started/try-online/", label: "Try Fontra online" },
			],
		},
		{
			id: "tutorials",
			label: "Tutorials",
			href: "/tutorials/",
			items: [
				{ href: "/tutorials/your-first-variable-font/", label: "Your first variable font" },
				{ href: "/tutorials/around-the-editor/", label: "Around the editor" },
				{ href: "/tutorials/drawing/", label: "Drawing: tools and panels" },
				{ href: "/tutorials/font-info/", label: "Font info and the designspace" },
				{ href: "/tutorials/font-overview/", label: "The font overview" },
				{ href: "/tutorials/settings/", label: "Settings" },
				{ href: "/tutorials/variable-components/", label: "Variable components" },
				{ href: "/tutorials/#videos", label: "Video library", ref: true },
			],
		},
		{
			id: "how-tos",
			label: "How-tos",
			href: "/how-tos/",
			items: [
				{
					href: "/how-tos/installation/installing-fontra-pak/",
					label: "Install Fontra Pak",
					items: [
						{ href: "/how-tos/installation/installing-fontra-pak-mac/", label: "On macOS" },
						{ href: "/how-tos/installation/installing-fontra-pak-windows/", label: "On Windows" },
						{ href: "/how-tos/installation/installing-fontra-pak-linux/", label: "On Linux" },
						{ href: "/how-tos/installation/building-fontra-from-source/", label: "Build from source" },
					],
				},
				{ href: "/how-tos/opening-ufo-designspace/", label: "Open a UFO or designspace" },
				{ href: "/how-tos/create-new-glyph/", label: "Create a new glyph" },
				{ href: "/how-tos/draw/draw-with-3-axes", label: "Draw with three axes" },
				{ href: "/how-tos/draw/designing-with-variable-components", label: "Design with variable components" },
				{ href: "/how-tos/spacing-and-kerning/", label: "Spacing and kerning" },
				{ href: "/how-tos/writing-plugins/", label: "Write your own plug-ins" },
				{ href: "/how-tos/reporting/", label: "Report a bug or an idea" },
			],
		},
		{
			id: "reference",
			label: "Reference",
			href: "/reference/",
			items: [
				{
					href: "/reference/editor-view/workspace/",
					label: "Editor view",
					items: [
						{
							href: "/reference/editor-view/canvas/",
							label: "Canvas",
							items: [
								{ href: "/reference/editor-view/canvas/context-menu/", label: "Context menu" },
								{
									href: "/reference/editor-view/canvas/glyph-editor/",
									label: "Glyph editor",
									items: [
										{ href: "/reference/editor-view/canvas/glyph-editor/anchors", label: "Anchors" },
										{ href: "/reference/editor-view/canvas/glyph-editor/background-image", label: "Background image" },
									],
								},
							],
						},
						{
							href: "/reference/editor-view/navigation/",
							label: "Navigation",
							items: [{ href: "/reference/editor-view/navigation/keyboard-shortcuts/", label: "Keyboard shortcuts" }],
						},
						{
							href: "/reference/editor-view/tools/",
							label: "Tools",
							items: [
								{ href: "/reference/editor-view/tools/pointer", label: "Pointer" },
								{ href: "/reference/editor-view/tools/pen", label: "Pen" },
								{ href: "/reference/editor-view/tools/knife", label: "Knife" },
								{ href: "/reference/editor-view/tools/shapes", label: "Shape" },
								{ href: "/reference/editor-view/tools/ruler", label: "Ruler" },
								{ href: "/reference/editor-view/tools/hand", label: "Hand" },
							],
						},
						{
							href: "/reference/editor-view/panels/",
							label: "Panels",
							items: [
								{ href: "/reference/editor-view/panels/preview-text", label: "Preview text" },
								{ href: "/reference/editor-view/panels/find-glyph", label: "Find glyph" },
								{ href: "/reference/editor-view/panels/designspace", label: "Designspace" },
								{ href: "/reference/editor-view/panels/reference-font", label: "Reference font" },
								{ href: "/reference/editor-view/panels/glyph-info", label: "Glyph info" },
								{ href: "/reference/editor-view/panels/transformations", label: "Transformations" },
								{ href: "/reference/editor-view/panels/glyph-note", label: "Glyph note" },
								{ href: "/reference/editor-view/panels/related-glyphs-and-characters", label: "Related glyphs and characters" },
							],
						},
						{
							href: "/reference/editor-view/menu/view",
							label: "View menu",
							items: [{ href: "/reference/editor-view/menu/view/glyph-editor-appearance", label: "Glyph editor appearance" }],
						},
					],
				},
				{
					href: "/reference/menu/",
					label: "Menu bar",
					items: [
						{
							href: "/reference/menu/fontra",
							label: "Fontra",
							items: [
								{ href: "/reference/menu/fontra/shortcuts", label: "Shortcuts" },
								{ href: "/reference/menu/fontra/theme-settings", label: "Theme settings" },
								{ href: "/reference/menu/fontra/display-language", label: "Display language" },
								{ href: "/reference/menu/fontra/clipboard", label: "Clipboard" },
								{ href: "/reference/menu/fontra/editor-behavior", label: "Editor behavior" },
								{ href: "/reference/menu/fontra/plugin-manager", label: "Plugin manager" },
								{ href: "/reference/menu/fontra/server-info", label: "Server info" },
							],
						},
						{
							href: "/reference/menu/file",
							label: "File",
							items: [{ href: "/reference/menu/file/export-as", label: "Export as" }],
						},
						{ href: "/reference/menu/view", label: "View" },
						{
							href: "/reference/menu/font",
							label: "Font",
							items: [
								{ href: "/reference/menu/font/font-info", label: "Font info" },
								{ href: "/reference/menu/font/axes", label: "Axes" },
								{ href: "/reference/menu/font/cross-axis-mapping", label: "Cross-axis mapping" },
								{ href: "/reference/menu/font/sources", label: "Sources" },
								{ href: "/reference/menu/font/features", label: "Features" },
								{ href: "/reference/menu/font/status-colors", label: "Status definitions" },
							],
						},
						{ href: "/reference/menu/help", label: "Help" },
					],
				},
				{
					href: "/reference/font-overview/workspace/",
					label: "Font overview",
					items: [
						{
							href: "/reference/font-overview/panels/",
							label: "Panels",
							items: [
								{
									href: "/reference/font-overview/panels/navigation",
									label: "Navigation",
									items: [{ href: "/reference/font-overview/panels/navigation/glyph-sets", label: "Glyph sets" }],
								},
							],
						},
					],
				},
				{ href: "/reference/plugins", label: "Plug-ins" },
			],
		},
		{
			id: "explanations",
			label: "Explanations",
			href: "/explanations/",
			items: [
				{ href: "/explanations/designspace/", label: "Designspace" },
				{ href: "/explanations/understanding-variable-components/", label: "Understanding variable components" },
				{ href: "/explanations/documentation/", label: "How these docs are organized" },
			],
		},
		{
			id: "migrate",
			label: "Migrate",
			href: "/migrate/",
			items: [
				{ href: "/migrate/from-glyphs/", label: "From Glyphs" },
				{ href: "/migrate/from-robofont/", label: "From RoboFont" },
			],
		},
		{
			id: "workflow",
			label: "Workflow",
			href: "/workflow/",
			items: [
				{ href: "/workflow/action-reference/", label: "Action reference" },
				{ href: "/workflow/writing-actions/", label: "Writing your own actions" },
			],
		},
	],
};
