import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

function extractDate(id) {
  // ID에서 마지막 부분(파일 이름)을 추출
  const fileName = id.split('/').pop();
  // 파일 이름에서 날짜 부분 추출 (YYYY-MM-DD 형식)
  const dateMatch = fileName.match(/(\d{4}-\d{2}-\d{2})/);
  return dateMatch ? dateMatch[1] : '1970-01-01'; // 날짜가 없으면 기본값 반환
}

function reverseSidebarItems(items) {
  return items.map((item) => {
    if (item.type === 'category') {
      // 카테고리 내부의 항목들에 대해 재귀적으로 함수 적용
      return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
  }).sort((a, b) => {
    // doc 타입 항목만 정렬
    if (a.type === 'doc' && b.type === 'doc') {
      // 문서 파일 이름에서 날짜를 추출하여 비교
      const dateA = extractDate(a.id);
      const dateB = extractDate(b.id);
      return Number(new Date(dateB)) - Number(new Date(dateA));
    }
    return 0; // doc 타입이 아니면 순서 변경 없음
  });
}

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
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
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
              label: 'CarbonAccounting',
            },
            {
              to: '/hana-ai',
              label: 'HanaecoAI',
            }
          ]
        },
        {
          type: 'dropdown',
          label: 'Solution', 
          position: 'left',
          items: [
            {
              to: '/solution',
              label: 'ClimateManagement',
            },
            {
              to: '/Scope3',
              label: 'Scope3',
            }
          ]
        },
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
    [
      '@docusaurus/plugin-client-redirects',  
      {
        redirects: [
          {
            from: '/hanaAI',
            to: '/hana-ai'
          },
          {
            from: '/docs/x20_environment-general/2023-09-28-CBAM-reporting',
            to: '/docs/x20_environment-general/CBAM/2023-09-28-CBAM-reporting'
          },
          {
            from: '/docs/x20_environment-general/2022-12-14-CBAM',
            to: '/docs/x20_environment-general/CBAM/2022-12-14-CBAM'
          },
          {
            from: '/docs/x20_environment-general/2024-01-20-cbam-compliance',
            to: '/docs/x20_environment-general/CBAM/2024-01-20-cbam-compliance'
          },
          {
            from: '/docs/x20_environment-general/2025-02-20-new-battery-regulation',
            to: '/docs/x20_environment-general/EU-regulations/2025-02-20-new-battery-regulation'
          }
        ],
      },
    ],

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
