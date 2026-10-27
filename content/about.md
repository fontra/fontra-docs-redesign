---
title: About these docs
description: "What this documentation is, how it is organized, what is still to write, and how to contribute."
permalink: /about/
---

<p class="lede">This is the user documentation of <a href="https://fontra.xyz">Fontra</a>, written by its users and developers. It is open source and licensed <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>; every page has an <em>Improve this page</em> link at the bottom.</p>

## How it is organized

The docs follow the [Diátaxis](https://diataxis.fr) system: **tutorials** take you by the hand (learning), **how-tos** solve one problem (doing), the **reference** describes every surface of the app precisely (looking up) and the **explanations** discuss the ideas behind it (understanding). Two more sections serve people arriving from elsewhere: [Migrate](/migrate/), for Glyphs and RoboFont users, and [Workflow](/workflow/), for the command-line pipeline tool. [Documentation overview](/explanations/documentation/) says more about how the pages are written.

## Reading the badges

A page marked <span class="status planned">Planned</span> is an outline, not content: the sidebar and the hub cards show the badge, and the page says so at the top. A passage tagged <span class="verify" title="To verify against the current Fontra build">verify</span> is a claim to check against the current Fontra build. Striped frames mark where a short screen recording will go.

## Still to write

Every page declares its state in its front matter (`status: ready` or `status: planned`); this list is generated from it at build time.

<table class="statustable">
<thead><tr><th>Page</th><th>Section</th></tr></thead>
<tbody>
{%- for p in collections.planned %}
<tr><td><a href="{{ p.url }}">{{ p.title }}</a></td><td>{{ p.url | split: "/" | slice: 1 | first }}</td></tr>
{%- endfor %}
</tbody>
</table>

## Contributing

- Fix a typo or improve a sentence: *Improve this page on GitHub*, at the bottom of every page, opens the source file for editing.
- Report a problem with Fontra itself: see [Reporting bugs, feature ideas, etc.](/how-tos/reporting/).
- Add a page: the source lives at [fontra/fontra-docs](https://github.com/fontra/fontra-docs); pages are Markdown with a `permalink:` and a `status:` in their front matter, and the navigation is one tree in `_data/nav.js`. Existing URLs are never changed, and the build checks that every one of them still resolves.

## Fontra Tutorials, in the editor

The [Fontra Tutorials](https://github.com/Uplus-Type/fontra-tutorials) plug-in puts guided tours and lessons inside Fontra, with a bubble on each part of the real interface. Its tours link back to these pages. Add the address `uplus-type/fontra-tutorials` in the [Plugin manager](/reference/menu/fontra/plugin-manager); the same tours are built into [Try Fontra](/get-started/try-online/).
