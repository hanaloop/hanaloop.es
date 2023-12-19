import { join } from "path";
import { readDir } from "./file.utils";

describe('getFiles', () => {
  test('getFiles strip rootPath', async () => {
    const path = join(process.cwd(), 'test-data', 'docs');
    const result = await readDir(path);

    const expected = [
      '_content-collection.json',
      '_content-tree.json',
      '_index.mdx',
      '_meta.json',
      'doc-1.mdx',
      'doc-2.mdx',
      'doc-한글.mdx',
      'subtopic/_meta.yaml',
      'subtopic/doc-s1.mdx',
      'subtopic/sub2topic/doc-s11.mdx'
    ]

    expect(result).toEqual(expected);
  });

  test('getFiles full path', async () => {
    const path = join(process.cwd(), 'test-data', 'docs');
    const result = await readDir(path, false);

    const expected = [
      path + '/_content-collection.json',
      path + '/_content-tree.json',
      path + '/_index.mdx',
      path + '/_meta.json',
      path + '/doc-1.mdx',
      path + '/doc-2.mdx',
      path + '/doc-한글.mdx',
      path + '/subtopic/_meta.yaml',
      path + '/subtopic/doc-s1.mdx',
      path + '/subtopic/sub2topic/doc-s11.mdx'
    ]
    // console.log('result:', result);

    expect(result).toEqual(expected);
  });
});
