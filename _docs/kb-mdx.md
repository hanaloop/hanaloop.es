# Markdown, MDX

The suggested way for rendering Markdown is using [MDX](https://mdxjs.com/), which allows you to embedd JSX components within markdown.

There are three popular methods for using MDX:

- Official MDX support by Next.js Next.js + MDX
- Hashicorp's next-mdx-remote
- Kent C Dodd's mdx-bundler

Based on quiick research in the internet, the `next-bundler` is the most performant and scaleable option.

## MDX-builder Ecosystem

You can use plugins with the mdx-bundler: rehypePlugins, remarkPlugins.

You also need to install eslint in order for mdx-bundler to work.
