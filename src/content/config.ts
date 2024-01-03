import { z, defineCollection } from "astro:content";


const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    pubDate: z.string(),
    categories: z.array(z.string()),
  })
})




export const collections = {
  blog: blogCollection,
};