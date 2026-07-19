import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const business = defineCollection({
  loader: file("src/content/business/business.yaml"),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    heroSubhead: z.string(),
    services: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    ),
    founderStory: z.array(z.string()),
    trustPoints: z.array(z.string()),
    contactFormEmbedUrl: z.string(),
    currency: z.string(),
    packages: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        priceDisplay: z.string(),
        stripePriceId: z.string(),
      })
    ),
  }),
});

export const collections = { blog, business };
