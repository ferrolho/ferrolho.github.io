import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const TOPICS = {
  robotics: 'Robotics',
  hardware: 'Hardware',
  simulation: 'Simulation',
  education: 'Education',
  optimisation: 'Optimisation',
  web: 'Web tools',
} as const;

const topic = z.enum(Object.keys(TOPICS) as [keyof typeof TOPICS, ...(keyof typeof TOPICS)[]]);

// Every project page is a Markdown file in src/content/projects/.
// The schema keeps the gallery consistent: same fields, same image ratio, same link set.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      date: z.coerce.date(), // used for ordering; the year shown is derived from it
      years: z.string().optional(), // override the displayed year, e.g. "2017 – 2026"
      topics: z.array(topic).min(1),
      stack: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      coverPosition: z.string().default('50% 50%'),
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      preview: z.string().optional(), // short muted loop in /public, played on hover
      featured: z.number().optional(), // position in "Selected work" (1 = first)
      draft: z.boolean().default(false), // visible in `npm run dev`, hidden in production
      stars: z.number().optional(), // GitHub stars snapshot
      views: z.string().optional(), // YouTube views snapshot, e.g. "380k"
      youtube: z.string().optional(), // video id embedded at the top of the page
      links: z
        .object({
          demo: z.url().optional(),
          code: z.url().optional(),
          video: z.url().optional(),
          docs: z.url().optional(),
          paper: z.string().optional(),
          post: z.string().optional(),
        })
        .default({}),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      venue: z.string(),
      venueShort: z.string(),
      kind: z.enum(['journal', 'conference']),
      date: z.coerce.date(),
      doi: z.string().optional(),
      url: z.url().optional(),
      pdf: z.string().optional(),
      video: z.string().optional(), // YouTube id
      thumb: image().optional(),
      award: z.string().optional(),
    }),
});

export const collections = { projects, blog, publications };
