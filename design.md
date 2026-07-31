# Design — learninghub

A locked design system for this site. Every page reads this file before emitting
code. Do not regenerate per page — extend or amend this file when the system
needs to grow.

The register is an **editorial almanac**: a personal engineering field-journal.
Warm paper, ink-black type, one oxblood accent, hairline rules — never soft
boxes, never fake IDE chrome. Type carries the page.

/ Hallmark · genre: editorial · design-system: design.md · designed-as-app /

## Genre

editorial

## Macrostructure family

Pages within a family share the family's shape; they vary only in component
archetypes.

- **Content pages** (articles): **Long Document** — continuous single-column
  prose, measure ~65ch, Fraunces heads emerging from the flow, hairline section
  rules, a quiet margin rail for TOC + metadata. No editor-window chrome.
- **Index / home**: **Index-First** — a short editorial hero over a numbered
  almanac *table of contents*. The list of topics is the design. No file-tree
  icons, no `.md` filenames.
- **About**: **Letter** — first-person, intimate, prose-led.

## Theme

Custom editorial palette — oxblood on warm ivory. Never terracotta, never
pure #000 / #fff. Neutrals tinted warm toward the paper anchor (~hue 50–78).

### Light
- `--color-paper`    oklch(97.2% 0.008 78)   /* warm ivory */
- `--color-paper-2`  oklch(94.6% 0.010 78)   /* raised / insets */
- `--color-paper-3`  oklch(92.0% 0.012 76)   /* sunk / hover */
- `--color-ink`      oklch(23% 0.014 48)     /* warm near-black */
- `--color-ink-2`    oklch(43% 0.016 50)     /* soft body */
- `--color-ink-faint`oklch(58% 0.014 55)     /* captions / meta */
- `--color-rule`     oklch(86% 0.012 72)     /* hairline */
- `--color-rule-2`   oklch(79% 0.014 70)     /* stronger hairline */
- `--color-accent`   oklch(45% 0.132 25)     /* oxblood */
- `--color-accent-2` oklch(38% 0.120 24)     /* hover / strong */
- `--color-focus`    oklch(52% 0.160 25)

### Dark
- `--color-paper`    oklch(19% 0.010 48)
- `--color-paper-2`  oklch(23% 0.012 48)
- `--color-paper-3`  oklch(27% 0.013 48)
- `--color-ink`      oklch(92% 0.012 82)
- `--color-ink-2`    oklch(74% 0.012 70)
- `--color-ink-faint`oklch(58% 0.012 60)
- `--color-rule`     oklch(33% 0.013 50)
- `--color-rule-2`   oklch(42% 0.014 50)
- `--color-accent`   oklch(68% 0.140 30)     /* warm rose */
- `--color-accent-2` oklch(76% 0.130 33)
- `--color-focus`    oklch(70% 0.150 30)

Hue never changes between modes — only lightness and chroma move.

## Typography

Three families (2 + 1), all already vendored in `package.json`.

- **Display**: Fraunces Variable, weight 560–620, roman, `opsz` high, tracking −0.02em.
- **Body**: Source Serif 4 Variable, weight 400 (350 in dark), reading serif.
- **Mono / outlier**: JetBrains Mono, 400/500 — labels, eyebrows, metadata, numerals, code. ≤ 2 register roles.
- **Wordmark**: Fraunces (same as display).
- **Retired**: Inter, Space Grotesk (kept installed, unused).
- Display tracking: −0.02em. Type-scale ratio: ~1.25 (major third). Hero display cap ≤ 5rem.
- **Italic is body-emphasis only** — headers are always roman.

## Spacing

4-point named scale. Values in `tokens.css`. Pages use named tokens
(`var(--space-md)`), never raw values. Radius is near-zero (2–3px): the
almanac is ruled, not boxed.

## Motion

- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1); `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1).
- Reveal pattern: **none** — the page is just there. Micro only: link-underline draw, one −1px hover lift on primary actions, chevron rotate on `<details>`.
- Reduced-motion: all transitions/animation off (`prefers-reduced-motion`).

## Microinteractions stance

- Silent success (copy-to-clipboard flashes an inline label, no toast).
- Hover affordances instant (≤ 150ms), focus rings appear instantly (never animated).
- No celebratory motion, no bounce/overshoot on UI state.

## CTA voice

- **Primary**: oxblood-filled, near-square (radius 3px), Fraunces/serif label, −1px lift on hover.
- **Secondary**: hairline-outlined paper button, ink label, accent border on hover.
- **Tertiary**: typographic link with an accent underline that thickens on hover.

## Per-page allowances

- Content pages: typography only.
- Index / about: typographic hero, hairline ornament rules; no enrichment imagery.
- No fake browser/editor/phone chrome anywhere (site's real chrome supplies it).

## What pages MUST share

- The wordmark (`learninghub`, Fraunces, the `hub` in accent).
- The oxblood accent and its ≤ 3% placement per viewport.
- Fraunces display + Source Serif 4 body + JetBrains Mono labels.
- CTA voice (near-square buttons, serif labels).
- Section rhythm: small-caps/mono eyebrow **stacked above** the Fraunces heading (never tag-left / heading-right).
- Hairline rules as the divider language — not card borders.

## What pages MAY differ on

- Macrostructure within the family (Index-First vs Long Document vs Letter).
- Whether a page shows the margin rail (articles do; home/about don't).

## Exports

See `tokens.css` at the project root for the drop-in `:root` block (light + dark).
