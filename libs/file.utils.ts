import  { resolve } from 'path';
import { readdir } from 'fs/promises';

/**
 * Returns an array with all files within the directory recursively including subdirectories 
 * @param dir 
 * @returns 
 */
export async function readDir(dir: string, removeDirPrefix=true): Promise<string[]> {
  return readDirRecursive(dir, dir, removeDirPrefix);
}

// https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
async function readDirRecursive(dir: string, origDir: string, removeDirPrefix=true): Promise<string[]> {
  const dirents = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? readDirRecursive(res, origDir, removeDirPrefix) 
      : (removeDirPrefix) ? res.substring(origDir.length+1) : res;
  }));

  return Array.prototype.concat(...files);
}

export type DirNodeType = {
  dir: string, // directory full path
  items: (DirNodeType | string)[]
}

/**
 * Returns a directory tree
 * @param {string} dir 
 * @returns DirNodeType
 */
export async function getDirTree(dir: string, removeDirPrefix=true): Promise<DirNodeType>  {
  const dirents = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getDirTree(res) : res;
  }));

  return { 
    dir,
    items: (!removeDirPrefix) ? files : files.map(file => (typeof file === 'string') ? file.substring(dir.length+1) : file) 
  };
}
