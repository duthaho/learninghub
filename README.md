# learninghub

An editorial deep-dive site built from personal learning notes — backend systems
explained mental-model-first, with real "gotchas" pulled from a spaced-repetition
review queue.

An editorial reading experience: warm paper background, display serif headings,
one accent colour per topic, light + dark themes.

## Stack

- **[Astro](https://astro.build)** static site generator
- **MDX** content collection (`src/content/articles/`) so articles can embed
  components like `<Callout>`
- Self-hosted fonts (Fraunces + Inter + JetBrains Mono) via `@fontsource`
- Zero client JS by default — ships as static HTML/CSS

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # preview the production build
```

## Adding a topic

1. Drop a new `.mdx` file in `src/content/articles/` (e.g. `mysql.mdx`).
2. Fill in the frontmatter — `title`, `subtitle`, `description`, `level`,
   `accent` (the topic's colour), `readingTime`, `updated`, `order`.
3. Write the article. Use the callout component for insights and gotchas:

   ```mdx
   import Callout from '../../components/Callout.astro';

   <Callout type="gotcha" title="Optional title">
     The mistake worth remembering.
   </Callout>
   ```

   Types: `gotcha` (a real review-queue miss), `insight` (the "aha"), `note`.
4. It appears on the homepage automatically, ordered by `order`.

Set `draft: true` in frontmatter to keep a work-in-progress article out of the
production build.

## Structure

```
src/
  content/
    articles/          # the deep-dives (.mdx)
  components/          # Header, Footer, Callout
  layouts/             # BaseLayout, ArticleLayout
  pages/
    index.astro        # homepage
    about.astro
    [...slug].astro    # renders each article
  styles/global.css    # the design system
```

## Deploying

Static build (`dist/`), served from two hosts. The base path and canonical URL
are chosen by env vars (see `astro.config.mjs`):

| Host | URL | `SITE` | `BASE_PATH` |
|------|-----|--------|-------------|
| **Cloudflare Workers** (primary) | `https://learninghub.duthaho.dev` | *(default)* | `/` *(default)* |
| **GitHub Pages** (mirror) | `https://duthaho.github.io/learninghub` | set in CI | `/learninghub/` |

Cloudflare builds with no extra env, so it gets the root-domain defaults. The
GitHub Actions workflow sets `SITE` + `BASE_PATH` for the subpath.

### Cloudflare Workers (project `duthaho-learninghub`)

This deploys as an **assets-only Worker** (Workers Builds → `wrangler deploy`),
serving `dist/` directly. Config lives in `wrangler.toml` (`[assets]`).

- **Build command:** `npm run build` · **Deploy command:** `npx wrangler deploy`
- Node 22 is pinned via `.nvmrc`; pretty URLs + a real `404.html` are handled
  by `html_handling` / `not_found_handling` in `wrangler.toml`.
- **Custom domain:** Worker → *Settings* → *Domains & Routes* → *Add* → Custom
  Domain → `learninghub.duthaho.dev` (adds the DNS record automatically when
  `duthaho.dev` is on Cloudflare).

Local deploy: `npm run build && npx wrangler deploy`.
