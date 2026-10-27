---
title: Reference
description: "Precise descriptions of every surface in Fontra: the editor view, the menu bar, the font overview, plug-ins."
permalink: /reference/
order: 4000
---

<p class="lede">Precise, information-oriented descriptions of every surface in Fontra, for when you know what you are looking for. Organized to match the app: the editor view, the menu bar, the font overview.</p>

## Editor view

{% cardgrid %}
/reference/editor-view/workspace/ | The parts of the editor window, numbered on a screenshot. | | Workspace
/reference/editor-view/canvas/ | Where previewing and glyph editing take place. | Context menu · Glyph editor · Anchors · Background image
/reference/editor-view/navigation/ | Moving around the canvas and between glyphs. | Keyboard shortcuts
/reference/editor-view/tools/ | Pointer, pen, knife, shape, ruler, hand. | One page per tool
/reference/editor-view/panels/ | Preview text, Find glyph, Designspace, Reference font, Glyph info, Transformations, Glyph note, Related glyphs. | One page per panel
/reference/editor-view/menu/view | Zoom, selection, glyph editor appearance. | | View menu (editor)
{% endcardgrid %}

### Canvas

{% cardgrid %}
/reference/editor-view/canvas/context-menu/ | What the right-click menu offers on the canvas. | | Context menu
/reference/editor-view/canvas/glyph-editor/ | Points, handles, contours and components. | | Glyph editor
/reference/editor-view/canvas/glyph-editor/anchors | Adding and positioning anchors. | | Anchors
/reference/editor-view/canvas/glyph-editor/background-image | Placing an image to trace. | | Background image
{% endcardgrid %}

### Tools

{% cardgrid %}
/reference/editor-view/tools/pointer | Select and edit points and components. | Key 1 | Pointer tool
/reference/editor-view/tools/pen | Draw Bézier contours from points. | Key 2 | Pen tool
/reference/editor-view/tools/knife | Slice contours. | Key 3 | Knife tool
/reference/editor-view/tools/shapes | Draw rectangles and ellipses. | Key 4 | Shape tool
/reference/editor-view/tools/ruler | Measure distances interactively. | Key 5 | Ruler
/reference/editor-view/tools/hand | Move around the canvas. | Key 6 or space | Hand tool
{% endcardgrid %}

### Panels

{% cardgrid %}
/reference/editor-view/panels/preview-text | The text the canvas shows, and its alignment. | | Preview text
/reference/editor-view/panels/find-glyph | Search the glyphs of the font by name. | | Find glyph
/reference/editor-view/panels/designspace | Axis sliders, font sources and glyph sources. | | Designspace
/reference/editor-view/panels/reference-font | Drop binary fonts in to compare with your drawing. | | Reference font
/reference/editor-view/panels/glyph-info | Glyph name, Unicode value and character, and more. | | Glyph info
/reference/editor-view/panels/transformations | Transform a selection of points, contours and components. | | Transformations
/reference/editor-view/panels/glyph-note | A note per glyph. | | Glyph note
/reference/editor-view/panels/related-glyphs-and-characters | Alternate glyphs, components and related characters of the selected glyph. | | Related glyphs and characters
{% endcardgrid %}

## Menu bar

{% cardgrid %}
/reference/menu/ | The menus common to every view, at a glance. | | Overview
/reference/menu/fontra | Application settings: shortcuts, theme, language, clipboard, editor behavior, plug-ins, server info. | | Fontra
/reference/menu/file | Export as. | | File
/reference/menu/view | Zoom, selection, glyph editor appearance. | | View
/reference/menu/font | Font info, axes, cross-axis mapping, sources, features, status definitions. | | Font
/reference/menu/help | Documentation, GitHub, latest changes. | | Help
{% endcardgrid %}

### Font menu

{% cardgrid %}
/reference/menu/font/font-info | Names, version, metadata. | | Font info
/reference/menu/font/axes | Variation axes, ranges, mappings, axis values. | | Axes
/reference/menu/font/cross-axis-mapping | avar-2 designspace mapping. | | Cross-axis mapping
/reference/menu/font/sources | Font sources: location, line metrics, italic angle. | | Sources
/reference/menu/font/features | OpenType feature code. | | Features
/reference/menu/font/status-colors | Development status colors. | | Status definitions
{% endcardgrid %}

### Application settings

{% cardgrid %}
/reference/menu/fontra/shortcuts | Default and custom keyboard shortcuts. | | Shortcuts
/reference/menu/fontra/theme-settings | Light, dark, or follow the operating system. | | Theme settings
/reference/menu/fontra/display-language | The language of the interface, and how to add yours. | | Display language
/reference/menu/fontra/clipboard | The format copy and paste use, for example glif to exchange with RoboFont. | | Clipboard
/reference/menu/fontra/editor-behavior | Options that change how the glyph editor reacts. | | Editor behavior
/reference/menu/fontra/plugin-manager | Adding plug-ins by address. | | Plugin manager
/reference/menu/fontra/server-info | Fontra version, Python version, startup time, plug-ins. | | Server info
{% endcardgrid %}

## Font overview

{% cardgrid %}
/reference/font-overview/workspace/ | The cell grid: the default view when a font opens. | | Workspace
/reference/font-overview/panels/ | The panels of the font overview. | | Panels
/reference/font-overview/panels/navigation | Search glyphs, choose the location, group the cells. | | Navigation
/reference/font-overview/panels/navigation/glyph-sets | Project glyph sets and your own, independent of the glyphs in the font. | | Glyph sets
{% endcardgrid %}

## Extending Fontra

{% cardgrid %}
/reference/plugins | The manifest, address rules, the editor object, panels, tools, visualization layers and Python entry points. | See also the [how-to](/how-tos/writing-plugins/) | Plug-ins
/workflow/action-reference/ | Every action of fontra-workflow and its arguments. | Workflow
{% endcardgrid %}
