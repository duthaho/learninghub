// Generates the static social-share image → public/og-default.png (1200×630).
//
// Reproducible but run manually, not part of the build: it needs the brand
// fonts (Space Grotesk, Source Serif 4) visible to fontconfig so librsvg can
// render them. The @fontsource woff2 files are instanced to TTF and installed
// once; see the accompanying notes. Re-run only when the wordmark/tagline
// changes:  node scripts/gen-og-image.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-default.png');

// Palette — sRGB approximations of the oklch design tokens (light theme).
const paper = '#eef1f5';
const paper2 = '#e4e8ee';
const ink = '#1f2733';
const ink2 = '#586274';
const inkFaint = '#727d8f';
const rule = '#d6dbe3';
const rule2 = '#c3cad4';
const accent = '#2568d4';

const W = 1200;
const H = 630;

// Plot-paper grid.
let grid = '';
for (let x = 0; x <= W; x += 40) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`;
for (let y = 0; y <= H; y += 40) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;

// Map line with node dots. One hollow "series" node, one bright "signal" node.
const lineY = 512;
const nodes = [
  { x: 96, kind: 'live' },
  { x: 300, kind: 'live' },
  { x: 504, kind: 'series' },
  { x: 708, kind: 'signal' },
  { x: 912, kind: 'live' },
  { x: 1104, kind: 'planned' },
];
const dot = (n) => {
  if (n.kind === 'series')
    return `<circle cx="${n.x}" cy="${lineY}" r="11" fill="${paper}" stroke="${accent}" stroke-width="4"/>`;
  if (n.kind === 'planned')
    return `<circle cx="${n.x}" cy="${lineY}" r="9" fill="none" stroke="${inkFaint}" stroke-width="2" stroke-dasharray="3 3"/>`;
  if (n.kind === 'signal')
    return `<circle cx="${n.x}" cy="${lineY}" r="16" fill="${accent}" opacity="0.18"/><circle cx="${n.x}" cy="${lineY}" r="9" fill="${accent}"/>`;
  return `<circle cx="${n.x}" cy="${lineY}" r="9" fill="${accent}"/>`;
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <g stroke="${rule}" stroke-width="1" opacity="0.55">${grid}</g>
  <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="${paper2}" stroke-width="0"/>
  <!-- left accent rail -->
  <rect x="0" y="0" width="10" height="${H}" fill="${accent}"/>

  <text x="80" y="118" font-family="JetBrainsMono Nerd Font, DejaVu Sans Mono, monospace"
        font-size="23" letter-spacing="5" fill="${accent}">NODE MAP · BACKEND SYSTEMS</text>

  <text x="78" y="248" font-family="Space Grotesk, DejaVu Sans, sans-serif"
        font-size="82" font-weight="600" letter-spacing="-1.5" fill="${ink}">Backend systems —</text>
  <text x="78" y="344" font-family="Space Grotesk, DejaVu Sans, sans-serif"
        font-size="82" font-weight="600" letter-spacing="-1.5" fill="${ink}">understood, <tspan fill="${accent}">not memorised.</tspan></text>

  <text x="80" y="418" font-family="Source Serif 4, DejaVu Serif, serif"
        font-size="32" font-style="italic" fill="${ink2}">Deep-dives on Redis, Elasticsearch &amp; more — read as a map, not a list.</text>

  <line x1="80" y1="${lineY}" x2="1120" y2="${lineY}" stroke="${rule2}" stroke-width="3"/>
  ${nodes.map(dot).join('')}

  <text x="80" y="585" font-family="JetBrainsMono Nerd Font, DejaVu Sans Mono, monospace"
        font-size="21" letter-spacing="2" fill="${inkFaint}">REDIS · ELASTICSEARCH · MYSQL</text>
  <text x="1120" y="585" text-anchor="end" font-family="JetBrainsMono Nerd Font, DejaVu Sans Mono, monospace"
        font-size="21" letter-spacing="1" fill="${accent}">learninghub.duthaho.dev</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
