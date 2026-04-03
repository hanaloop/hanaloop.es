Docusaurus i18n
===============

## Docusaurus i18n basic concept

It uses `i18n/{locale}` directories  to maintain the localization codes as well as contents
- blog --> `docusaurus-plugin-content-blog`, 
- documents --> `docusaurus-plugin-content-docs`
- pages --> `docusaurus-plugin-content-pages`, 

docusaurus comes with a mod tool `write-translations` which does a static analysis and generates the codes files.

```sh
$ yarn write-translations [--locale {locale}]
```

## Initial steps

Modify `docusaurus.config.js` to extend the `i18n` data:

```javascript
export default {
  ...
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  }
}
```

Modify `docusaurus.config.js` to add language selector UI:

```javascript
export default {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
  },
};

```

## Translate your React code

To each pages: 

```javascript
import Translate, {translate} from '@docusaurus/Translate';

...
<Translate>Welcome to my website</Translate>

```

Then execute mod
```sh
yarn write-translations --locale en
```

This will generate directories under `/i18n`

Translate `/i18n/{locale}/code.json` file


## Translate Markdown files

Copy your docs Markdown files from `docs/`, `blog/` to  respective `i18n/en/docusaurus-plugin-content-*`, and translate them:

```
cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current
cp -r blog/** i18n/en/docusaurus-plugin-content-blog
cp -r src/pages/**.md i18n/en/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/en/docusaurus-plugin-content-pages
```

> We only copy .md and .mdx files, as React pages are translated through JSON translation files already. Unless you want to override the .jsx/tsx page altogether.

## Changing the logo

See [Swizzling](https://docusaurus.io/docs/swizzling), and [how to remove locale dropdown icon](https://stackoverflow.com/questions/69824479/how-to-remove-locale-dropdown-iconicon-before-english-word)


```
yarn swizzle @docusaurus/theme-classic  --list
```

```
yarn swizzle @docusaurus/theme-classic Icon/Language --wrap
yarn swizzle @docusaurus/theme-classic Footer --eject
```
