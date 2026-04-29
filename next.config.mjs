import path from 'node:path';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  output: isProduction ? 'export' : undefined,
  reactStrictMode: true,
  trailingSlash: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.WEB_PATH_PREFIX ?? '',
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

if (process.env.WEB_PATH_PREFIX) {
  config.basePath = process.env.WEB_PATH_PREFIX;
}

export default withMDX(config);
