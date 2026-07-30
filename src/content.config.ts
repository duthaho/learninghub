import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    // Short one-liner used on cards and meta description.
    description: z.string(),
    // Difficulty / audience tag shown on the card.
    level: z.string().default('Foundations'),
    // Ordered list of section anchors for the article's table of contents.
    // Optional — omitted articles simply render without a manual TOC.
    accent: z.string().default('#5b3cc4'),
    readingTime: z.string(),
    updated: z.coerce.date(),
    // Draft articles are excluded from the production build.
    draft: z.boolean().default(false),
    // Ordering on the homepage (lower = earlier).
    order: z.number().default(100),
    // Multi-part series grouping. Articles sharing a `series` name collapse into
    // one folder on the homepage; `part` orders them (part 0 = the start-here
    // cover/guide, not a numbered chapter). Standalone articles omit both.
    series: z.string().optional(),
    part: z.number().optional(),
  }),
});

export const collections = { articles };
