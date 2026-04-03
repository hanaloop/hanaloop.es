import { defineConfig, defineDocs, defineCollections } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const docsPageSchema = pageSchema.extend({
  tags: z.array(z.string()).optional(),
});

const docsOptions = {
  docs: {
    schema: docsPageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
    files: ['**/meta.json'] as string[],
  },
};

const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  subtitle: z.string().optional(),
  summary: z.string().optional(),
  image: z.string().optional(),
  date: z.union([z.string(), z.date()]).optional(),
  publishedAt: z.string().optional(),
  authors: z.union([z.string(), z.array(z.string())]).optional(),
  tags: z.array(z.string()).optional(),
});

function createBlogCollection(dir: string) {
  return defineCollections({
    type: 'doc',
    dir,
    schema: blogSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  });
}

export const docsKo = defineDocs({
  dir: 'content/ko/docs',
  ...docsOptions,
});

export const docsEn = defineDocs({
  dir: 'content/en/docs',
  ...docsOptions,
});

export const docsEs = defineDocs({
  dir: 'content/es/docs',
  ...docsOptions,
});

export const blogKo = createBlogCollection('content/ko/blog');
export const blogEn = createBlogCollection('content/en/blog');
export const blogEs = createBlogCollection('content/es/blog');

export default defineConfig({
  mdxOptions: {},
});
