// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const defaultCodeTheme = require('prism-react-renderer/themes/dracula');

const meta = {
  title: '🚀 Fexr',
  tagline: 'Wallet, DID, Verifyable Claims', // goes in meta description
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${meta.title} | ${meta.tagline}`,
  tagline: meta.tagline, // goes in meta description
  url: 'https://getfexr.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'getfexr', // Usually your GitHub org/user name.
  projectName: 'website/docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: false,
        docs: {
          path: 'developers',
          routeBasePath: 'developers',
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/getfexr/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/getfexr/website/tree/feature/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-8WENR5WPXE',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: ['tailwind-loader'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: '481c294cd5afa8803f32c1b027d0806f',
        indexName: 'dev_getfexr',
        appId: 'AJ4WOFLLGX',
        contextualSearch: true,
        searchPagePath: false,
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'Fexr Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Benefits',
            items: [
              {
                label: 'Cold Wallet',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'Access NFTs',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'Web3 Authentication',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'P2P Payments',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'On-Chain Passes',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'Integrations',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'PoS Merchant Payments',
                to: 'developers/category/web3-authentication',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Accounts',
            items: [
              {
                label: 'Wallet',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'Club',
                to: 'https://fexr.club',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Who we are',
            items: [
              {
                label: 'About us',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'In the News',
                to: 'developers/category/web3-apis',
              },
              {
                label: 'Newsletter',
                to: 'https://getrevue.co/profile/fexr',
              },
              {
                label: 'Careers',
                to: 'developers/category/web3-apis',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'For Developers',
            items: [
              {
                label: 'Features',
                to: 'developers/category/web3-authentication',
              },
              {
                label: 'Web3 APIs',
                to: 'developers/category/web3-apis',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'Community',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Roadmap',
                to: 'developers/roadmap',
              },
              {
                label: 'Partner',
                href: '/developers/category/partner--contribute',
              },
              {
                label: 'Security Programs',
                href: '/developers/category/partner--contribute',
              },
              {
                label: 'Become an Affiliate',
                href: '/developers/category/partner--contribute',
              },
            ],
          },
          {
            href: 'https://github.com/getfexr/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Docs',
                to: '/developers/roadmap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/getfexr',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/getfexr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/getfexr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/getfexr/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fexr`,
      },
      prism: {
        theme: defaultCodeTheme,
      },
    }),
};

module.exports = config;
