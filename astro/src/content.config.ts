import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  CONTENT COLLECTIONS — one per locale, each loading Markdown/MDX from
  src/content/<locale>/. Today they hold the privacy policy (legal.md);
  structured page copy and pricing live in src/data/.
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
