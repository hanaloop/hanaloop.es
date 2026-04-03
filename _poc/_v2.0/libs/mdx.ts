import { join } from "path";
import readingTime from "reading-time";
import { readdirSync, readFileSync } from "fs";

import { bundleMDX } from "mdx-bundler";

import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

// export async function getFiles(dirPath: string) {
//   return readdirSync(join(process.cwd(), dirPath));
// }

export async function processMDX(source: string) {
  return bundleMDX({
    source, 
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });
}

export async function getMdxFileBySlug(dirPath: string, slug: string) {
  const source = readFileSync(
    join(process.cwd(), dirPath, `${slug}`),
    "utf8"
  );

  // console.log("getMdxFileBySlug.source: ", source);
  const truncatedSource = source.replace("<!--truncate-->", "");

  const { code, frontmatter } = await processMDX(truncatedSource);

  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
