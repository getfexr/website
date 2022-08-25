---
sidebar_position: 2
---

# Prepare your node for Web3 APIs

Fexr allows you to setup your own node to serve Fexr APIs for your use-cases.

## Prerequisites

## Web3 Subnets

Let's translate `docs/intro.md` to French.

## Lite Wallet < > Node Connection

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

:::caution

In development, you can only use one locale at a same time.

:::

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

## TLDR;



Copy the `docs/intro.md` file to the `i18n/fr` folder:

## (optional) Rent Rubix nodes to setup your APIs

Once your [application](/apply) for integrating Fexr into your services are reviewed and approved, you can rent Rubix nodes to setup your APIs. Fexr nodes comes with recommended configurations for the most common use-cases. You can rent a node for a single service, or for a whole stack of services.
