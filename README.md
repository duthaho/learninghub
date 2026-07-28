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

Any static host works. The build output is `dist/`.

- **GitHub Pages / Netlify / Vercel / Cloudflare Pages:** point at this folder,
  build command `npm run build`, publish directory `dist`.
- Update `site` in `astro.config.mjs` to your real domain first (used for
  canonical URLs and the sitemap).
