---
title: Coming from another editor
description: "You already know how to make fonts. These pages map your existing vocabulary onto Fontra, and show how to try it without leaving the tool you use today."
permalink: /migrate/
---

<p class="lede">You already know how to make fonts. These pages map your existing vocabulary onto Fontra, and show you how to try it <strong>without leaving the tool you use today</strong>.</p>

{% cardgrid %}
/migrate/from-glyphs/ | Masters → sources, brace layers → glyph sources, smart components → variable components. Plus shortcuts and honest gaps. | | Fontra for Glyphs users
/migrate/from-robofont/ | Same UFO and designspace blood. Precision auto-reload, and what scripting users will miss today. | | Fontra for RoboFont users
{% endcardgrid %}

## The zero-risk way to try Fontra

You don't have to commit to anything. Fontra reads your native files and **reloads automatically when they change on disk**:

<ol class="steps">
<li>Drop your <code>.glyphs</code>, <code>.designspace</code> or <code>.ufo</code> onto Fontra Pak.</li>
<li>Keep working in your usual editor. Save.</li>
<li>Watch Fontra update, live: a synchronized second view.</li>
</ol>

<div class="callout tip"><div class="h">Why this matters</div><p>You can evaluate Fontra on a real project, on a second monitor, with no conversion and no risk. Keep your current tool as the source of truth until you are convinced.</p></div>

## What maps to what

| You might call it… | In Fontra |
|---|---|
| Master / UFO source | [Font source](/reference/menu/font/sources) |
| Instance | [Axis value labels](/reference/menu/font/axes#axis-values) (instances synthesized on export) |
| Brace layer / intermediate master | Glyph-level source, in the [Designspace panel](/reference/editor-view/panels/designspace) |
| Smart / corner components | [Variable components](/explanations/understanding-variable-components/) (smart only) |
| Mark colors | [Status definitions](/reference/menu/font/status-colors) |
| Test install | [Export as](/reference/menu/file/export-as) → install (today) |
| Scripting (Python / fontParts) | [Workflow](/workflow/) today; in-app scripting on the roadmap |

The per-editor pages go into full detail, including keyboard shortcuts and exactly what is missing today.
