import matter from "gray-matter";
import readingTime from "reading-time";
import fs from 'fs';
import { readYaml } from "../../utils";
import { TreeNodeType } from "./gen-contenttree";
import { MD_EXTENSION } from "../../../libs/constants";


export function loadMdxFile(rootPath: string, filePath: string, includeContent = false): TreeNodeType {
  const relativePath = filePath.substring(rootPath.length);

  // HACK: remove '/pages' prefix as it is accessed from root context path
  let slug = relativePath.startsWith('/pages') ? relativePath.substring(6).replace(MD_EXTENSION, "") : relativePath.replace(MD_EXTENSION, "");
  const node: TreeNodeType = {
      _type: "item",
      // slug: relativePath.replace(MD_EXTENSION, ""),
      slug
  };

  // console.log("[loadMdxFile] Reading file: " + filePath);
  const source = fs.readFileSync(filePath, "utf8");
  
  const { data, content } = matter(source);

  node.meta = {
      ...data,
      readingTime: readingTime(source),
  };
  
  if (includeContent) {
    const truncationPos = content.search("<!--truncate-->");
    if (truncationPos > 0 ) {
      node.meta.contentTruncated = content.substring(0, truncationPos);
    } else {
      node.meta.contentFull = content;
    }
  }

  return node;
}

export function loadOpenApiFile(rootPath: string, filePath: string, includeContent = false) {
  const relativePath = filePath.substring(rootPath.length);
  
  const node: TreeNodeType = {
    _type: "openapi",
    slug: relativePath,
  };

  // console.log("Reading file of: " + filePath);
  const source = readYaml(filePath);

  node.meta = {
    label: source.info.title,
    description: source.info.description,
    version: source.info.version,
    slug: relativePath
  };

  if (includeContent) {
    node.meta.source = source;
  }

  return node;
}
