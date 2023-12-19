import { join } from "path";
import fs from 'fs';
import { getDirTree } from '../../../libs/file.utils';
import { readJson, readYaml } from "../../utils";
import { loadMdxFile, loadOpenApiFile } from "./content-loader";
import { MD_EXTENSION } from "../../../libs/constants";


export type TreeNodeType = {
  _type: string,
  slug: string,
  meta?: any, 
  contents?: TreeNodeType[]
}

/**
* 
* @param {*} dirNode 
* @param {string} dirPrefix remove this part 
* @returns 
*/
export function getContentTree(dirNode: any, dirPrefix: string): TreeNodeType {

//   console.log(JSON.stringify(dirNode, null, 2));

  const node: TreeNodeType = {
      _type: "folder",
      slug: dirNode.dir.substring(dirPrefix.length),
  };

  let metaFilenames = [
      join(dirNode.dir, "_meta.json"), 
      join(dirNode.dir, "_meta.yaml"), 
      join(dirNode.dir, "_meta.yml")
  ];

  // Add metadata from _meta.* content (may be overridden by file's frontMatter)
  for(const metaFilename of metaFilenames) {
      if (fs.existsSync(metaFilename) && fs.lstatSync(metaFilename).isFile()) {
        if (metaFilename.endsWith(".json")) {
            node.meta = { ...readJson(metaFilename), ...(node.meta || {})};
        } else if (metaFilename.endsWith(".yaml") || metaFilename.endsWith(".yml")) {
            node.meta = { ...readYaml(metaFilename), ...node.meta};
        }
      }
  }

  let contents = [];
  for (const item of dirNode.items) {

      if (typeof item == "string" && item.endsWith(MD_EXTENSION)) {
        const childNode: TreeNodeType = loadMdxFile(dirPrefix, join(dirNode.dir, item));
        contents.push(childNode);
      } else if (typeof item === 'string' && (item.endsWith(".openapi.yaml") || item.endsWith(".openapi.yml")) ) {
        const childNode: TreeNodeType = loadOpenApiFile(dirPrefix, join(dirNode.dir, item));
        contents.push(childNode);
      } else if (typeof item === 'object' && item !== null) {
        // It is a directory, dive into it
        contents.push(getContentTree(item, dirPrefix));
      }
  }

  node.contents = contents;

  return node;
}


/**
 * Returns an array of objects that represents the front matter of all files
 * 
 * @param dirPath directory path relative to the process execution path to fetch the files
 * @returns 
 */
export async function getAllFilesFrontMatter(contentRoot: string, dirPath: string) {

  const contentRootPath = join(process.cwd(), contentRoot);
  const fullPath =  join(contentRootPath, dirPath);
  
  // console.log("Traversing directory: " + fullPath);
  
  const dirTree = await getDirTree(fullPath);
  
  // console.log("dirTree: ", JSON.stringify(dirTree, null, 2));

  const contentTree = getContentTree(dirTree, contentRootPath);

  // console.log("contentTree: ", JSON.stringify(contentTree, null, 2));

  return contentTree;
}
