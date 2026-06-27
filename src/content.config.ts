import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import {
  pageSchema,
  authoredPostSchema,
  postSchema,
  toolSchema,
} from '~/content/schema'

const pages = defineCollection({
  loader: glob({ base: './src/pages', pattern: '**/*.mdx' }),
  schema: pageSchema,
})

const home = defineCollection({
  loader: glob({ base: './src/content/home', pattern: 'index.{md,mdx}' }),
})

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: authoredPostSchema,
})

const announcement = defineCollection({
  loader: glob({
    base: './src/content/announcement',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: postSchema,
})

const news = defineCollection({
  loader: glob({
    base: './src/content/news',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: postSchema,
})

const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/[^_]*.{md,mdx}' }),
  schema: toolSchema,
})

export const collections = {
  pages,
  home,
  blog,
  announcement,
  news,
  tools,
}
