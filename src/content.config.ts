import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Shown as-is, e.g. "2025 – 2026". `order` sorts newest first.
    period: z.string().optional(),
    order: z.number(),
    role: z.string().optional(),
    status: z.string().optional(),
    // Why this problem had no ready-made answer. Shown on featured entries.
    noPath: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
