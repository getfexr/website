// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const defaultCodeTheme = require('prism-react-renderer/themes/dracula');

const meta = {
  title: 'Fexr',
  tagline: 'P2P Subscriptions. Effortless Sign-In with DID. Self-Custody.', // goes in meta description
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
          path: "community101",
          routeBasePath: "community101",
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
      announcementBar: {
        id: "support_us",
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        hideOnScroll: true,
        title: "Fexr",
        logo: {
          alt: "Fexr Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "Login",
            href: "https://fexr.club",
          },
          {
            type: "dropdown",
            position: "left",
            label: "Community 101",
            items: [
              // todo: add these back in when we have the pages
              // {
              //   label: 'Create Subscription',
              //   to: 'https://fexr.club/subs',
              // },
              // {
              //   label: 'Create Pass',
              //   to: 'https://fexr.club/pass',
              // },
              // {
              //   label: 'Go to Dashboard',
              //   to: 'https://fexr.club/dash',
              // },
              // {
              //   label: "Start Monetizing",
              //   to: "community101/p2p-subscriptions/",
              // },
              {
                label: "View Fexr.Club Discord Server",
                to: "https://discord.gg/CF5Q6jJR4f",
              },
            ],
          },
          {
            type: "dropdown",
            position: "right",
            label: "More",
            items: [
              {
                label: "Web and Mobile SDK",
                to: "/community101/developer-licensing/",
              },
              {
                label: "Apply",
                to: "/apply",
              },
              {
                label: "Company",
                to: "community101/about",
              },
              {
                label: "Roadmap",
                to: "community101/roadmap",
              },
              {
                label: "Announcements",
                to: "/blog",
              },
            ],
          },
          {
            href: "https://discord.gg/CF5Q6jJR4f",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "API",
            items: [
              {
                label: "BeginnerBridgeAPI",
                to: "/community101/roadmap",
              },
              {
                label: "BridgeBoardMetrics",
                to: "/community101/roadmap",
              },
              {
                label: "ServiceDeskAPI",
                to: "/community101/roadmap",
              },
            ],
          },
          {
            title: "IAM",
            items: [
              {
                label: "Micro Listings",
                to: "/community101/roadmap",
              },
              {
                label: "Sessions",
                to: "/community101/roadmap",
              },
              {
                label: "KYC & Compliance",
                to: "/community101/roadmap",
              },
              {
                label: "Moderators & VIPs",
                to: "/community101/roadmap",
              },
              {
                label: "Live & Levels",
                to: "/community101/roadmap",
              },
              {
                label: "Signed Forms",
                to: "/community101/roadmap",
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
        copyright: `
Contact help@fexr[.]club for more`,
      },
      prism: {
        theme: defaultCodeTheme,
      },
    }),
};

module.exports = config;
