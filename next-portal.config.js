/**
 * Inspired by Docusaurus' config
 */
const config = {
    title: 'HanaLoop',
    tagline: undefined,
    url: 'https://your-portal-site.com',
    basePath: process.env.WEB_PATH_PREFIX || '',
    favicon: '/ecoloop-ico.png',
    organizationName: 'hanaloop', // Usually your GitHub org/user name.
    projectName: 'hanaloop.com', // Usually your repo name.
    // projectImage: 'https://images.unsplash.com/photo-1616408826319-f42dd3cefcad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80',

    contentRoot: 'content',
    contentTypes: ['blog', 'docs'],
 
    editUrl: 'https://gitlab.com/hanaloop/branding/hanaloop.com/-/edit/main/',

    themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'HanaLoop Logo',
          src: '/images/logo.png',
          // component: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
        },
        items: [
          {
            to: '/platform', 
            label: '플랫폼', 
            position: 'left'
          },
          {
            to: '/solution', 
            label: '솔루션', 
            position: 'left'
          },
          {
            to: '/company',
            label: '회사소개',
            position: 'left',
          },
          {
            type: 'docs',
            label: '자료',
            position: 'left',
          },
          {
            to: '/recruit',
            label: '채용',
            position: 'left',
          },
          // {
          //   type: 'separator',
          // },
          {
            to: 'https://www.ecoloop.io',
            label: 'EcoLoop.io',
            style: 'px-1 rounded border-2 border-lime-700',
          },
          // {
          //   to: '/blog', 
          //   label: 'Blog', 
          //   position: 'left'
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '회사',
            items: [
              {
                label: '회사 소개',
                to: '/company',
              },
              {
                label: '채용',
                to: '/recruit',
              },
            ],
          },
          // {
          //   title: 'SNS',
          //   items: [
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/creasoft',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: '검색',
                to: '/search',
              },
              {
                label: '자료',
                to: '/docs',
              },
            ],
          },
          {
            title: '약관',
            items: [
              {
                label: '개인정보 처리방침',
                to: '/privacy',
              },
              {
                label: 'Credits',
                to: '/credits',
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 주식화사 하나루프 | HanaLoop Corp., Seoul Korea`,
      }
    }),
}

module.exports = config;
