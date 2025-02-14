import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HanaLoop',
  tagline: 'Carbon Management and Climate Compliance Platform',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.hanaloop.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hanaloop', // Usually your GitHub org/user name.
  projectName: 'hanaloop.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
  // To disable the chatbox comment out the line below
  clientModules: [
    require.resolve('./static/plugins/chat-embedded.js'),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/hanaloop/hanaloop.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarCount: 10,
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/hanaloop/hanaloop.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-3JWGP2SKMR', // process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
          anonymizeIP: true,
        },

      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'images/hanaloop-social-card_ko.jpg',
    navbar: {
      title: 'HanaLoop',
      logo: {
        alt: 'HanaLoop Logo',
        src: 'images/hanaloop-logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Platform', 
          position: 'left',
          items: [
            {
              to: '/platform',
              label: '탄소회계',
            },
            {
              to: '/hanaAI',
              label: 'Hanaeco.AI',
            }
          ]
        },
        {to: '/solution', label: 'Solution', position: 'left'},
        {to: '/partnership', label: 'Partnership', position: 'left'},
        {to: '/company', label: 'Company', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Resources',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/recruit', label: 'Recruit', position: 'left'},
        {href: 'https://www.hana.eco', label: 'Hana.eco', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'HanaLoop Logo',
        src: 'images/hanaloop-logo.png',
        // href: 'https://opensource.fb.com',
        width: 70,
        // height: 51,
      },

      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Company',
              to: '/company',
            },
            {
              label: 'Recruit',
              to: '/recruit',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Resources',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@hanaloop',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/hana.loop/',
            },
            {
              label: 'Brunch',
              href: 'https://brunch.co.kr/@hanaloop',
            },
            {
              label: 'Naver Blog',
              href: 'https://blog.naver.com/hanaloop',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy',
              to: '/privacy',
            },
            {
              label: 'Credits',
              to: '/credits',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HanaLoop Corp.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
