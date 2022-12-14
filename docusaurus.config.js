// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const defaultCodeTheme = require("prism-react-renderer/themes/dracula");

const meta = {
  title: "🚀 Fexr",
  tagline: "Wallet, DID, Verifyable Claims", // goes in meta description
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${meta.title} | ${meta.tagline}`,
  tagline: meta.tagline, // goes in meta description
  url: "https://getfexr.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "getfexr", // Usually your GitHub org/user name.
  projectName: "website/docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: false,
        docs: {
          path: "learn",
          routeBasePath: "learn",
          lastVersion: "current",
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/getfexr/website/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/getfexr/website/tree/feature/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-8WENR5WPXE",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  plugins: ["tailwind-loader"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "481c294cd5afa8803f32c1b027d0806f",
        indexName: "dev_getfexr",
        appId: "AJ4WOFLLGX",
        contextualSearch: true,
        searchPagePath: false,
      },
      navbar: {
        hideOnScroll: false,
        title: "",
        logo: {
          alt: "Fexr Logo",
          src: "img/logo.svg",
        },
        items: [
          // TODO: add back Benifits once content is ready.
          // {
          //   type: 'dropdown',
          //   position: 'left',
          //   label: 'Benefits',
          //   items: [
          //     {
          //       label: 'Institutuional Custody',
          //       to: 'users/core/institutional',
          //     },
          //     {
          //       label: 'On-Chain Passes',
          //       to: 'users/core/passes',
          //     },
          //     {
          //       label: 'Integrations',
          //       to: 'users/core/integrations',
          //     },
          //     {
          //       label: 'PoS Merchant Payments',
          //       to: 'users/core/pos',
          //     },
          //     {
          //       label: 'Cold Wallet',
          //       to: 'learn/payments/key-management',
          //     },
          //     {
          //       label: 'Access NFTs',
          //       to: 'learn/on-chain/access-nft',
          //     },
          //     {
          //       label: 'Web3 Authentication',
          //       to: 'learn/category/web3-authentication',
          //     },
          //     {
          //       label: 'P2P Payments',
          //       to: 'learn/payments/p2p',
          //     },
          //   ],
          // },
          {
            type: "dropdown",
            position: "left",
            label: "Accounts",
            items: [
              {
                label: "Wallet",
                to: "learn/dl",
              },
              {
                label: "Club",
                to: "https://fexr.club/",
              },
            ],
          },
          {
            type: "dropdown",
            position: "left",
            label: "Who we are",
            items: [
              {
                label: "About us",
                to: "learn/partner/about-us",
              },
              // {
              //   label: 'In the News',
              //   to: 'https://www.google.com/search?q=Fexr+core+rubix&oq=Fexr+core+rubix&aqs=chrome..69i57j69i60l3.290j0j1&sourceid=chrome&ie=UTF-8',
              // },
              {
                label: "Newsletter",
                to: "https://www.getrevue.co/profile/getfexr?via=twitter-profile",
              },
              // {
              //   label: 'Careers',
              //   to: 'learn/partner/contributing',
              // },
            ],
          },
          {
            type: "dropdown",
            position: "right",
            label: "Learn",
            items: [
              {
                label: "Wallet",
                to: "/learn/core/",
              },
              {
                label: "Club",
                to: "/learn/category/club---decentralised-hosting",
              },
              {
                label: "Sky Connector",
                to: "/learn/sky/",
              },
              {
                label: "Web3 APIs",
                to: "learn/category/web3-rpcs-api",
              },
            ],
          },
          {
            type: "dropdown",
            position: "right",
            label: "Community",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Roadmap",
                to: "learn/roadmap",
              },
              {
                label: "Partner",
                href: "/learn/category/partner--contribute",
              },
              // {
              //   label: 'Security Programs',
              //   href: '/learn/category/partner--contribute',
              // },
              // {
              //   label: 'Become an Affiliate',
              //   href: '/learn/category/partner--contribute',
              // },
            ],
          },
          {
            href: "https://github.com/getfexr/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "learn",
            items: [
              {
                label: "Docs",
                to: "/learn/roadmap",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/getfexr",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/getfexr",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/getfexr",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/getfexr/",
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
