# Your First Variable Font — a 30-Minute Fontra Tutorial

*Draft of the "time-to-first-glyph" tutorial proposed in the [documentation strategy](../strategy/documentation-strategy.md) (§3.1). Written for docs.fontra.xyz → Tutorials. Audience: someone who has never opened a font editor. Every UI claim below was checked against the current reference docs; items marked ⚠ should be verified against the live app before publishing. 🎬 marks where a 10–20 s screen recording goes.*

---

You will make a real, working **variable font** — two letters, a Weight axis, and a slider that morphs them from Regular to Black — and install it on your computer. No drawing skills needed: we'll build the letters from rectangles and ellipses.

**You need:** a computer (macOS, Windows, or Linux) and about 30 minutes.
**You'll learn:** creating a font, drawing glyphs, axes and sources, live interpolation, exporting.

---

## Part 1 — Install Fontra Pak and create a font *(5 min)*

🎬 *(download → new font → browser opens)*

1. Download **Fontra Pak** from [fontra.xyz](https://fontra.xyz) and install it ([macOS](https://docs.fontra.xyz/how-tos/installation/installing-fontra-pak-mac) · [Windows](https://docs.fontra.xyz/how-tos/installation/installing-fontra-pak-windows) · [Linux](https://docs.fontra.xyz/how-tos/installation/installing-fontra-pak-linux)).
2. Launch it. A small window appears — this is Fontra's home base. Fonts you *open* get dropped onto it; fonts you *create* start here too.
3. Click **New font**. Name it `Hello`, choose the `.fontra` format and a place to save it. ⚠ *(verify current dialog fields)*
4. Your web browser opens with the font overview — an empty grid. **This is Fontra**: the app runs in your browser, but everything stays on your computer. No internet needed, nothing uploaded.

> **Checkpoint:** a browser tab titled with your font's name, showing an (empty) glyph overview.

## Part 2 — Create your first glyph *(3 min)*

🎬 *(type H, double-click grey glyph, Create)*

We'll start with **H** — the friendliest letter in type design.

1. Open the **editor view** by double-clicking anywhere in the overview ⚠ *(or via the view switcher)*.
2. In the right sidebar, open the **Preview text** panel and type `H`.
3. The canvas shows a grey, empty H placeholder. **Double-click it** and confirm **Create**. The glyph now exists, with the correct Unicode assignment — Fontra handled that for you.

> **Checkpoint:** an empty glyph box on the canvas, with a baseline and metrics lines, ready for drawing.

## Part 3 — Draw H and o, no Bézier required *(7 min)*

🎬 *(three rectangles become an H; two ellipses become an o)*

### The H — three rectangles

1. Pick the **Shape tool** in the toolbar (rectangle mode).
2. Drag a vertical rectangle for the left stem. Don't aim for precision while dragging — click the **Selection info** panel ⚠ and type exact values: x `60`, y `0`, width `110`, height `700`.
3. Draw the right stem: x `430`, y `0`, width `110`, height `700`.
4. Draw the crossbar: x `60`, y `300`, width `480`, height `100`.
5. Select all (`Cmd/Ctrl-A`) and apply **Remove overlap** (context menu / Transformation panel ⚠ exact location) so the three boxes fuse into one H-shaped outline.
6. Set the **advance width** to `600` in the Glyph info panel.

### The o — two ellipses

1. Back in Preview text, add `o` after the `H`, double-click the grey `o`, **Create**.
2. Shape tool in **ellipse mode**: draw the outer oval — x `40`, y `-10`, width `420`, height `520` (a little overshoot below the baseline is intentional: round shapes need it to *look* aligned).
3. Draw the inner oval (the counter): x `140`, y `90`, width `220`, height `320`.
4. Select both contours and apply **Subtract** (path operations ⚠ exact label) — the counter punches a hole; the o now renders with white inside.
5. Advance width: `500`.

Congratulations — you are now, technically and legally, a type designer.

> **Checkpoint:** typing `HoHoHo` in Preview text shows your two letters spelling like a font.

## Part 4 — Add a Weight axis *(4 min)*

🎬 *(Axes dialog: New axis, values filled in)*

So far the font is static. Time for the part where Fontra shines.

1. Open the **Font menu → Axes**, click **New axis…**
2. Fill in:
   - **Name** and **UI Name**: `Weight`
   - **OT tag**: `wght`
   - **Axis type**: Continuous
   - **Minimum** `400` · **Default** `400` · **Maximum** `900`
3. Under **Axis values**, add two labels: `Regular` = 400 and `Black` = 900. These labels are how the exported font will name its styles — Fontra creates the font's named instances from them automatically.

(Why 400–900 and not 100–900? An axis range should only span where you have actual designs. You'll draw a Black; you won't draw a Thin today. You can extend the range the day you do.)

> **Checkpoint:** the **Designspace panel** in the editor's left sidebar now shows a Weight slider, 400–900.

## Part 5 — Draw the Black *(5 min)*

🎬 *(virtual source double-clicked, stems fattened, both letters)*

A variable font interpolates between **sources** — complete drawings at specific axis positions. Your existing drawing is the source at Weight 400. Now the 900.

1. **Font menu → Sources → New source…**: name `Black`, location Weight = `900`. Keep the proposed line metrics.
2. Back on the canvas with the H selected, look at the **Glyph sources** list in the Designspace panel: `Black` appears **in grey** — a *virtual* source: the font knows the location, but this glyph has no drawing there yet. **Double-click it.** Fontra copies the current drawing to the new source — nothing visibly changes, and that's correct: both sources are identical for now.
3. Make sure the Weight slider sits at 900 (the bold `Black` entry in the source list tells you which source you're editing). Now fatten the H: with the **Pointer tool**, select the *inner* edge points of the left stem and drag them right (hold Shift to constrain) until the stem is about `220` wide. Same for the right stem; thicken the crossbar to about `180`.
4. Repeat for the o: create its Black source, then drag the *inner* ellipse's points inward so the stroke gets heavy. Make the counter clearly smaller.

One rule makes interpolation work, and it's worth stating plainly: **every source must have the same contours, in the same order, with the same number of points.** That's why we *copied* the Regular drawing and pushed its points around instead of drawing fresh shapes. If a glyph's sources ever become incompatible, Fontra shows a **bug icon** next to the source in the list — that's your cue that point counts or contour order diverged.

> **Checkpoint:** slider at 900 shows fat letters; slider at 400 shows your originals.

## Part 6 — The magic *(1 min)*

🎬 *(the money shot: slider gliding, letters breathing)*

Type `HoHoHo` in Preview text. Now **drag the Weight slider slowly** from 400 to 900.

Your letters transform live — not jumping between two drawings, but *gliding* through every weight in between. Stop at 547. That weight exists now. Nobody drew it; it was interpolated from yours. Every position of that slider is a font you just designed.

This is what "variable font" means — and what Fontra means by *variable-first*: you didn't configure interpolation, you never left it.

## Part 7 — Export and install *(3 min)*

🎬 *(Export as → TTF → installed → typing in a text editor)*

1. **File menu → Export as…**, choose **TrueType (.ttf)**, and save.
2. Install it: double-click the file (macOS: **Install Font**; Windows: right-click → **Install**).
3. Open any app with a font menu and a variable-font slider (or load the file at [wakamaifondue.com](https://wakamaifondue.com) to see your axis and instances listed). Type `HoHoHo`. Try Regular. Try Black. Try everything in between.

You made a variable font in half an hour.

> **Checkpoint:** your font, with a working Weight axis and two named styles, running anywhere on your computer.

---

## Where to go next

- **Real outlines** — the [Pen tool introduction](https://docs.fontra.xyz/tutorials) video (3 min) teaches Bézier drawing; the *multi source editing* video shows how to draw in all weights at once (`⇧E`).
- **More letters** — `n`, then `l`, `i`, `h`, `m`, `u` reuse the n's parts. The [Related Glyphs & Characters panel](https://docs.fontra.xyz/reference/editor-view/panels/related-glyphs-and-characters) shows what builds on what.
- **More axes** — a Width axis works exactly like Weight: [Draw with 3 global variation axes](https://docs.fontra.xyz/how-tos/draw/draw-with-3-axes).
- **The clever stuff** — [variable components](https://docs.fontra.xyz/how-tos/draw/designing-with-variable-components), the feature Fontra was born for.
- **Stuck?** The [Fontra Discord](https://discord.gg/SeZWugEYzd) is friendly to beginners — this tutorial came from imagining you there.

---

*Notes for the docs team: (a) every ⚠ needs a check against the current UI (dialog fields of "New font", exact path-operation labels, selection-info panel name, overview→editor navigation); (b) the six 🎬 clips should reuse one consistent window size and the same `Hello` project; (c) coordinates assume 1000 UPM with the default metrics Fontra Pak proposes — adjust if the defaults differ; (d) consider shipping the finished `Hello.fontra` as a downloadable checkpoint file per part, so stuck readers can re-board.*
