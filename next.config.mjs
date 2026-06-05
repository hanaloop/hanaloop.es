import path from 'node:path';
import { createMDX } from 'fumadocs-mdx/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = createMDX();
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  output: isProduction ? 'export' : undefined,
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.0.32'],
  trailingSlash: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.WEB_PATH_PREFIX ?? '',
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
};

if (process.env.WEB_PATH_PREFIX) {
  config.basePath = process.env.WEB_PATH_PREFIX;
}

export default withNextIntl(withMDX(config));
