import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// GitHub Pages project site: https://duthaho.github.io/learninghub/
// If you later add a custom domain, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://duthaho.github.io',
  base: '/learninghub/',
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
