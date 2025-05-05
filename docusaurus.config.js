// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '枫影轻语AUTUMNBREEZE',
  tagline: '助力新人快速了解服务器',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.autumncraft.icu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QianMoo0121', // Usually your GitHub org/user name.
  projectName: 'autumncraft-docusarurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // 在这里添加 themes 配置
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true, // 是否对搜索结果进行 hash
        language: ['en', 'zh'], // 搜索语言
        indexDocs: true, // 是否对文档进行索引
        indexBlog: true, // 是否对博客进行索引
        indexPages: false, // 是否对页面进行索引
        docsRouteBasePath: ['/docs'], // 配置需要搜索的文档路径
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '枫影轻语AUTUMNBREEZE',
        logo: {
          alt: '助力新人快速了解服务器',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '快速开始',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: '牛腩小镇',
                href: 'https://wwww.newnan.city/',
              },
              {
                label: 'MSCPO宣传组织'
                href: 'https://mscpo.crashvibe.cn/'
              }
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?k=f3wSzr7aeKBMYEdaQz6J8HM7KsBv3-RV&jump_from=webapi&authKey=vvzOJZqgtexA9m1SmMv1TMN1CV25vQRuE5AggWVFQMnBj2w0W+vH24ON0TaCEVFK',
              },
              {
                label: 'KOOK',
                href: 'https://kook.vip/kvENs5/',
              },
            ],
          },
          
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/QianMoo0121/autumncraft-docusarurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 枫影轻语AUTUMNBREEZE All rights reserved. 感谢 Docusaurus 提供文档框架；感谢 Vercel 提供建站平台.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
