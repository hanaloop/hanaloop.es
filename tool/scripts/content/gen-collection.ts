import * as fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import {readDir} from '../../../libs/file.utils';
import { loadMdxFile } from "./content-loader";
import { TreeNodeType } from "./gen-contenttree";
import { MD_EXTENSION } from "../../../libs/constants";

/**
 * Returns an array of objects that represents the front matter of all mdx files
 * 
 * @param contentType directory path relative to the process execution path to fetch the files
 * @returns 
 */
export async function getAllFilesFrontMatter(contentRoot: string, contentType: string): Promise<TreeNodeType[]> {

  const rootPath = join(process.cwd(), contentRoot);
  const contentDirPath = join(rootPath, contentType);
  
  const fullPathFiles = await readDir(contentDirPath, false);

  const mdxFiles = fullPathFiles.filter( (name: string) => name.endsWith(MD_EXTENSION));
  // console.log("Files: " + JSON.stringify(mdxFiles, null, 2));

  const result: TreeNodeType[] = [];
  
  for (const filePath of mdxFiles) {
    const node: TreeNodeType = loadMdxFile(rootPath, filePath, true);

    result.push(node);
  }

  return result;
}
