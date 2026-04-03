# Next DevPortal
This is a `Next.js`-based Developer Portal starter project.

Developers can easily author contents based on MDX (markdown+jsx) and generate static sites that are safe and extremely fast.


## How it works

The Next DevPortal is based on Nextjs and MDX. The site can either generated with Next's Static Site Generator (SSG) and hosted with any web server, or served with Nextjs server server-side rendering.

The portal contains three types of contents `blog`, `docs` and `products`, representing blog, documentation and product information respectively. All the content files are located under `{root}/content` directory.

When all contents are authored, a content preparation tool must be run prior generating the static site (or server is run). The content prep tool generates content meta files: `_content-tree.json` and  `_content-collection.json` files at each of the content type directory root. 
The data in `_content-tree.json` is a tree model that represents the hierarchical structure of the content directory where each node includes the metadata (frontmatter) of the `*.mdx` and `_meta.yaml` files. Itis mainly used for menu generation. 
The `_content-collection.json` is a list of metadata of the mdx files, ordered by filename ascending order. It is used for generating lists, e.g. blog table of content. 

During static site generation, the content is `_content-tree.json` file is loaded by `/public/[content_type]/[...slug].tsx` file which generates static files for each of the entries in the json file.


## Get Started

### Serving the portal with Nodejs
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Generating static site and serving with http server

```sh
yarn build

# Then go to /out directory 
cd out

# Run an http server
python3 -m http.server 3001
```


## Authoring contents 

The MDX contents should be placed in respective `/content/{content-type}` folder.
where `content-type`: can be `blog`, `docs` or `products`.

When you are done authoring all the mdx files, you need to generate json files which are used for
rendering lists and menus.

To generate, run the following commands:

```sh
# For individual artifact/content-type
$ yarn gen:collections blog,docs
$ yarn gen:trees blog,docs

# For all artifacts/content-types
$ yarn contentprep
```

> **NOTE**: The `contentprep` script will also run `genall:collections` for all content type. Actually the pages only requires `collections` json fro blog content type only, but it is generated for all in order to generate `_content-collection.full.json` which is used for search index.

## Adding contents

All content files are under `/content` folder.
There are three types of contents that map to directories with the same name:
- `blog` - Yes, the familiar blog content. 
= `docs` - The documentation. The directories can have subdirectories, which is represented as sub-menus.
- `products` - The product (or service) that the organization provides. It may have OpenAPI based definitions (with `.openapi.yml` extension).

> NOTE: When served with nestjs server (i.e. yarn dev) the SwaggerUI hangs with "loading" sign. But when built and served as webserver (e.g. yarn build && yarn start) it works fine.


To add a new content, create `*.md` files under the desired directory.

Each folder may have a `_meta.yaml` with meta attributes about the folder. The _meta.yaml file is picked up during content preparation process. 

Common meta attributes
- `label (string)` : the display name
- `tags (array)` : the content tags

Once a content is added or filename is modified, you will need to run the `yarn contentprep` to regenerate `_content-tree.json` and `_content-collection.json` files.


### Content Frontmatter

```yaml
---
title: "The title of the content"
description: "Description which will be used for HTML meta"
keywords: "Keywords which will be used for HTML meta"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/your_header_background_image.jpeg"
  imageDescription: "Description or credits of the image"
  solidColor: "tailwind bg-color, e.g.: bg-lime-500"
  gradientFrom: "tailwind from-color, e.g.: from-sky-500"
  gradientTo?: "tailwind to-color, e.g.: to-lime-500"
hero:
  header: "Header to be displayed in hero area"
  tagline: "Sub header"
  button:
    label: "string"
    href: "string"
---
```

## Building Docker Image

Build docker with the following command:
```sh
$ docker build . -t hanaloop/hanaloopcom:2.0
```

Once build is completed, you can run with:
```
$ docker run -p 3000:3000  hanaloop/next-dev-portal:0.1
```

## Deploying in GitLab/Github pages

For **GitLab Pages** add a CI/CD and add a variable with key `WEB_PATH_PREFIX` and value that is the gitlab page path as shown in "Settings" > "Pages", "Your pages are served under"

For **Github Pages** modify `.github/workflows/deploy-gh-pages.yml` file replacing the value for `WEB_PATH_PREFIX` respectively.

## Miscellaneous

**Privacy**
- https://termify.io/generate-privacy-policy
- https://www.privacypolicygenerator.info/


## Package Dependencies

- Tailwind: for CSS
- MDX: for mardown
- [Prism](https://prismjs.com/): for syntax highlighting
- Fusejs: for local search


## References
- https://www.learnnext.blog/blogs/lets-build-a-blog-with-tailwind-mdx-bundler-and-next- https://nextjs.org/docs/advanced-features/using-mdx
- https://github.com/timlrx/tailwind-nextjs-starter-blog
- https://www.joshwcomeau.com/blog/how-i-built-my-blog/
- https://github.com/ebenezerdon/nextjs-mdx-blog
- https://nextjs.org/blog/markdown
    - https://github.com/leerob/nextjs-prism-markdown
- https://nextra.vercel.app/advanced/code-highlighting
- https://frontendli.com/nextjs-mdx-blog-starters-template-boilerplate/


## TODO
- [ ] site-map
- [ ] Inject folder's meta to document's meta
- [ ] Search (index on ElasticSearch)
- [ ] Authentication for backend service
- [ ] Integrate with API Key management
- [ ] Technology Radar
- [ ] Multi-language support

## Known Issue
- When running with `yarn dev` Swagger-UI-react indefinitely stays in "loading" state. Workaround: `yarn build` and `yarn start`.

## Limitations
- When the number of content nodes are large, it will produce a large `_content-collection.json` 
- When reloading `docs` it adds a trailing `/` and return 404
