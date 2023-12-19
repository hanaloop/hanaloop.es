import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

import nextMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
// const withMDX = require('@next/mdx')({
const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
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
      ]
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   outputStandalone: true,
  // },
  output: 'standalone',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
};

// To deploy the portal under a sub-path, e.g. GitLab pages, set the WEB_PATH_PREFIX
if (process.env.WEB_PATH_PREFIX) {
  console.log(`[NextPortal] Using WEB_PATH_PREFIX='${process.env.WEB_PATH_PREFIX}' as pathPrefix (basePath)`);
  nextConfig.basePath = process.env.WEB_PATH_PREFIX;
} else {
  console.log(`[NextPortal] No WEB_PATH_PREFIX env provided`);
}

const withMdx = withMDX(nextConfig);

export default withMdx;
