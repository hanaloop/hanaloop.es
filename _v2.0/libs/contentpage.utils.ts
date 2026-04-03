import { join } from "path";
import { INDEX_FILE, MD_EXTENSION } from "./constants";
import { contentTreeToMenu } from "./content.util";
import { readDir } from "./file.utils";
import { getMdxFileBySlug } from "./mdx";
import MenuItem from "./MenuItem";
import { AttributeType } from "./content.types";

export type ContentStaticPropsParams = {
  params: {
    slug: string[],
  }
}

/**
 * For /page/{contentType}/[...slug].ts page
 * @returns 
 */
export async function getStaticPathsForContentPage(contentType: string) {
  const dir = join(process.cwd(), `content/${contentType}`);
  const docPaths = await readDir(dir);

  return {
    paths: docPaths.filter(docPath => docPath.endsWith(MD_EXTENSION)).map((docPath) => {
    
    // slugArr is an array compose of path elements and filename without the .mdx extension
    const slugArr = docPath.replace(new RegExp(`${MD_EXTENSION}`), "").split('/');
    // console.log('slugArr', JSON.stringify(slugArr, null, 2));

    return ({
      params: {
        // The value in the variable in square bracket, i.e. slug 
        // Will become the url, so remove the mdx extension.
        slug: slugArr,        
      },
    })}),
    fallback: false,
  };
}


export type ContentPageProp = {
  code: string, 
  frontMatter: AttributeType, 
  menu: MenuItem,
  filePath?: string
}

/**
 * For /page/{contentType}/[...slug].ts page
 * @returns 
 */
export async function getStaticPropsForContentPage(contentType: string, { params }: ContentStaticPropsParams) {

  // Used for content editing in git
  const filePath = `/content/${contentType}/${params.slug.join('/')}${MD_EXTENSION}`;
  const doc = await getMdxFileBySlug(`content/${contentType}`, params.slug.join('/') + MD_EXTENSION);

  const _contentTree = require(`../content/${contentType}/_content-tree.json`); 

  const menuRoot = contentTreeToMenu(_contentTree);

  // With SSG (GitLab pages), the docs/ does not get mapped to docs.html,
  // Hence it fails.
  // if (menuRoot.subItems) {
  //   for (let i = 0; i < menuRoot.subItems.length!; i++) {
         //  trim root 'index' slug
  //     if (menuRoot.subItems[i].link === `/${contentType}/${INDEX_FILE}`) {
  //       menuRoot.subItems[i].link = `/${contentType}`;
  //     }
  //   }
  // }

  const retval = { ...doc, menu: menuRoot, filePath};
  // console.log("retval:",  JSON.stringify(retval, null, 2) );

  return { 
    props: retval
  };
}

/**
 * For /page/{contentType}/index.tsx page
 * @returns 
 */
export async function getStaticPropsForIndexContentPage(contentType: string) {
  const doc = await getMdxFileBySlug(`content/${contentType}`, `${INDEX_FILE}${MD_EXTENSION}`);

  const _contentTree = require(`../content/${contentType}/_content-tree.json`); 

  const menuRoot = contentTreeToMenu(_contentTree);

  // See above for why this code block was disabled
  // if (menuRoot.subItems) {
  //   for (let i = 0; i < menuRoot.subItems.length!; i++) {
  //     if (menuRoot.subItems[i].link === `/${contentType}/${INDEX_FILE}`) {
  //       menuRoot.subItems[i].link = `/${contentType}`;
  //     }
  //   }
  // }
  
  return { 
    props: { ...doc, menuRoot, contentTree: _contentTree} 
  };
}
