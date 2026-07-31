import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Deploy targets are selected by env vars so one repo serves both hosts:
//   • Cloudflare Pages @ learninghub.duthaho.dev — root path (defaults below)
//   • GitHub Pages @ duthaho.github.io/learninghub — set SITE + BASE_PATH in CI
// Cloudflare builds with no extra env, so it just gets the root-domain defaults.
const SITE = process.env.SITE ?? 'https://learninghub.duthaho.dev';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    // Dual Shiki themes → tokens carry both light + dark colours as CSS vars,
    // switched by [data-theme] (see global.css). No filter hacks.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: true,
    },
    // Clickable # anchor prepended to each heading. rehypeSlug must run first
    // so ids exist before autolink links to them.
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: { className: ['anchor'], ariaHidden: 'true', tabIndex: -1 },
          content: { type: 'text', value: '#' },
        },
      ],
    ],
  },
});
