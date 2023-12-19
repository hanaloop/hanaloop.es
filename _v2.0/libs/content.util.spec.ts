import { ContentTreeItem } from './content.types';
import {contentTreeToMenu} from './content.util'
import MenuItem from './MenuItem';

describe('contentTreeToMenu', () => {
    test('Flat content', () => {

      const contentRoot: ContentTreeItem = {
        _type: "folder",
        slug: "documents",
        label: "Main documentation",
        meta: {
            label: "Main documentation",
        }
      }

      const result = contentTreeToMenu(contentRoot);

      const expected: MenuItem = {
        label: contentRoot.label!,
        link: contentRoot.slug,
        subItems: null,
      }

      expect(result).toStrictEqual(expected);
    });

    
    test('With children', () => {

      const contentRoot: ContentTreeItem = {
        _type: "folder",
        slug: "documents",
        label: "Documentation",
        meta: {
            label: "Documentation",
        },
        contents: [
          {
            _type: "item",
            slug: "documents/item1.mdx",
            label: "Main doc",
            meta: {
                label: "Main doc",
            },
          },
          {
            _type: "folder",
            slug: "documents/sub",
            label: "Sub folder",
            meta: {
                label: "Sub folder",
            },
            contents: [
              {
                _type: "item",
                slug: "documents/sub/item11.mdx",
                label: "Sub doc",
                meta: {
                    label: "Sub doc",
                },
              },
              {
                _type: "item",
                slug: "documents/sub/item12.mdx",
                label: "Sub doc",
                meta: {
                    label: "Sub doc",
                },
              },
              {
                _type: "openapi",
                slug: "documents/sub/item12.openapi.yml",
                label: "Sub doc",
                meta: {
                    label: "api",
                },
              },
            ]
          }
        ]
      }

      const result = contentTreeToMenu(contentRoot);

      // console.log(JSON.stringify(result, null, 2));

      const expected: MenuItem = {
        label: contentRoot.label!,
        link: contentRoot.slug,
        subItems: [{
            label: contentRoot.contents![0].label!,
            link: contentRoot.contents![0].slug,
            subItems: null
        },{
            label: contentRoot.contents![1].label!,
            link: contentRoot.contents![1].slug,
            subItems: [{
              label: contentRoot.contents![1].contents![0].label!,
              link: contentRoot.contents![1].contents![0].slug,
              subItems: null
            },{
                label: contentRoot.contents![1].contents![1].label!,
                link: contentRoot.contents![1].contents![1].slug,
                subItems: null
            }]
        }],
      }

      expect(result).toStrictEqual(expected);
    });
});
