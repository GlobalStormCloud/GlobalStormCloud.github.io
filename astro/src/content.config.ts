import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  CONTENT COLLECTIONS — where migrated page content will live.

  SCAFFOLD: two collections, one per locale, each loading Markdown/MDX from
  src/content/<locale>/. In the build phase, Legal-cleared copy and
  Finance-verified pricing text migrate here VERBATIM from the Jekyll
  _i18n/en.yml + pl.yml and _i18n/<locale>/*.md.

  Pricing NUMBERS are NOT seeded here yet (task constraint) — only the shape.
  Source of truth for pricing: GlobalStorm-internal/docs/Pricing-Final-2026-10.md.
*/

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  // The logical route this content renders into (e.g. "platform").
  route: z.string(),
  draft: z.boolean().default(false),
});

const en = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/en' }),
  schema: pageSchema,
});

const pl = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pl' }),
  schema: pageSchema,
});

export const collections = { en, pl };
