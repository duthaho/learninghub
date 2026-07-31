import { visit } from 'unist-util-visit';

/**
 * Rewrite root-absolute internal links/images in markdown content so they
 * respect Astro's `base`. Authors write `/elasticsearch-01-.../`; this prepends
 * the base at build time → `/learninghub/elasticsearch-01-.../` on GitHub Pages,
 * unchanged on a root-domain host (Cloudflare). Astro rewrites component links
 * for us, but NOT literal hrefs inside markdown — this closes that gap.
 */
export default function rehypeBaseLinks(base = '/') {
  const prefix = base === '/' ? '' : base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return; // root base → links are already correct
    visit(tree, 'element', (node) => {
      for (const attr of ['href', 'src']) {
        const v = node.properties?.[attr];
        if (
          typeof v === 'string' &&
          v.startsWith('/') &&
          !v.startsWith('//') && // protocol-relative external
          !v.startsWith(`${prefix}/`) // already prefixed
        ) {
          node.properties[attr] = prefix + v;
        }
      }
    });
  };
}
