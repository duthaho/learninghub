# Design — learninghub

A locked design system for this site. Every page reads this file before emitting
code. Do not regenerate per page — extend or amend this file when the system
needs to grow.

The register is a **systems map / schematic**: backend systems are presented as
an engineer's diagram, not a blog. Cool plot-paper (light) or a control-room
slate (dark), one signal-blue accent, a trunk-line map of stations. The
signature device is the **map itself** — the homepage is a transit-style
diagram of topics; articles read as clean pages *off the map* but carry the
schematic chrome (node coordinates, station markers, connective accent).

/ Hallmark · genre: editorial→technical · design-system: design.md · designed-as-app /

## Genre

editorial → technical/schematic overlay

## Macrostructure family

- **Index / home**: **Map / Diagram** — a vertical trunk line of stations. Each
  backend system is a station node; a series (Elasticsearch) branches into its
  parts; planned topics are dashed "under construction" stops. A legend keys the
  node states. The map is the design.
- **Content pages** (articles): **Long Document** — continuous single-column
  prose, measure ~66ch, Space Grotesk heads with a mono coordinate marker,
  hairline section rules, a margin rail for TOC + metadata.
- **About**: **Letter** — first-person, intimate, prose-led, schematic chrome.

## Theme

Custom schematic palette — signal-blue on cool plot-paper (light) / slate
(dark). Never terracotta, never pure #000 / #fff. Neutrals tinted cool toward
the paper anchor (~hue 240–255).

### Light
- `--color-paper`    oklch(96.5% 0.006 240)  /* cool plot-paper */
- `--color-paper-2`  oklch(93.5% 0.008 240)
- `--color-paper-3`  oklch(90.5% 0.010 240)
- `--color-ink`      oklch(25% 0.022 255)     /* cool graphite */
- `--color-ink-2`    oklch(45% 0.022 250)
- `--color-ink-faint`oklch(55% 0.020 245)
- `--color-rule`     oklch(88% 0.012 240)     /* grid + hairline */
- `--color-rule-2`   oklch(81% 0.016 240)
- `--color-accent`   oklch(53% 0.160 245)     /* signal blue */
- `--color-accent-2` oklch(46% 0.150 248)
- `--color-focus`    oklch(56% 0.160 245)

### Dark (control-room)
- `--color-paper`    oklch(21% 0.022 255)     /* deep slate */
- `--color-paper-2`  oklch(25% 0.024 255)
- `--color-paper-3`  oklch(29% 0.026 255)
- `--color-ink`      oklch(92% 0.012 240)
- `--color-ink-2`    oklch(74% 0.016 240)
- `--color-ink-faint`oklch(60% 0.018 245)
- `--color-rule`     oklch(35% 0.022 250)
- `--color-rule-2`   oklch(45% 0.024 250)
- `--color-accent`   oklch(74% 0.150 220)     /* glowing signal cyan */
- `--color-accent-2` oklch(82% 0.130 215)
- `--color-focus`    oklch(74% 0.150 220)

Hue never changes drastically between modes — the accent warms toward cyan in
dark for the "control-room signal" glow.

## Typography

Three families (2 + 1), all vendored in `package.json`.

- **Display / chrome / map**: Space Grotesk Variable, weight 600, roman, tracking −0.02em. The technical, geometric voice of the diagram.
- **Body**: Source Serif 4 Variable, weight 400 (350 in dark) — long-form reading stays humane.
- **Mono / outlier**: JetBrains Mono, 400/500 — coordinates, legends, node ids, metadata, code.
- **Wordmark**: Space Grotesk (with a signal node-dot + the `hub` in accent).
- **Retired**: Fraunces, Inter (kept installed, unused).
- Display tracking: −0.02em. Hero display cap ≤ 4.6rem. Headers always roman.

## Spacing

4-point named scale in `tokens.css`. Radius near-zero (2–3px): the system is
drawn with rules and lines, not soft boxes. The `.plot` utility paints a 2rem
plot-paper grid on schematic surfaces (map canvas, header).

## Motion

- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1); `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1).
- Map: ≤ 2 primitives — a station **hover-highlight** (dot + connector + card light up, others calm) and one **signal pulse** travelling the trunk line. No scroll-reveal.
- Reduced-motion: all transitions/animation off.

## Microinteractions stance

- Silent success (copy-to-clipboard flashes an inline label, no toast).
- Hover affordances instant (≤ 150ms); focus rings appear instantly.
- No celebratory motion, no bounce/overshoot.

## CTA voice

- **Primary**: signal-blue fill, near-square (radius 3px), Space Grotesk label, −1px lift on hover.
- **Secondary**: hairline-outlined button, ink label, accent border on hover.
- **Tertiary**: typographic link with an accent underline that thickens on hover.

## Per-page allowances

- Home: the map + a faint plot grid; hand-built diagram, no photographic imagery.
- Content pages: typography only + schematic section markers.
- No fake browser/editor/phone chrome anywhere.

## What pages MUST share

- The wordmark (`learninghub`, Space Grotesk, signal node-dot, `hub` in accent).
- The signal-blue accent, ≤ 3% placement per viewport.
- Space Grotesk display + Source Serif 4 body + JetBrains Mono coordinates.
- CTA voice (near-square buttons, Space Grotesk labels).
- Section rhythm: mono coordinate/eyebrow **stacked above** the heading (never tag-left / heading-right).
- Hairline rules + trunk/branch lines as the divider language — not card borders.

## What pages MAY differ on

- Macrostructure within the family (Map/Diagram vs Long Document vs Letter).
- Whether a page shows the margin rail (articles do; home/about don't).

## Exports

See `tokens.css` at the project root for the drop-in `:root` block (light + dark).
