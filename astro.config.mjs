import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://duthaho.github.io/learninghub/
// If you later add a custom domain, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://duthaho.github.io',
  base: '/learninghub/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
