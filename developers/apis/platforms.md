---
sidebar_position: 1
---

# SDK Platforms

Fexr community currently is supporting development of client SDKs available for free in popular package managers including NPM, Pub.dev, PyPi, and Cargo. These client libraries provide functionalities for developers to integrate and test payment and identity related services. Before you integrate your service with Fexr, make sure you have secured the credentials to access your gateway or use from any of the [providers](/developers/partner/subnet-providers).

:::info

:::

## Javascript

View library in [NPM](https://www.npmjs.com/package/fexr)


Javascript library for Fexr contains important RPC APIs for validation and token transfers.

### Installing

```shell
npm i --save fexr
```
or
```shell
yarn add fexr
```

### Add your Fexr credentials

```js title="/src/fexr.js"
import Fexr from 'fexr'

const fexr = new Fexr({
  did: 'Qm...'
  usageId: 'F0-xxx-1125',
});

fexr.initializeApp();

export default fexr;
```

Please report any issues you faced while using the library [here](https://github.com/getfexr/fexr-js/issues/).

For contributing to the library, please visit [Github](https://github.com/getfexr/fexr-js/).

## Python

View library in [Pypi](https://www.npmjs.com/package/fexr)

Javascript library for Fexr contains important RPC APIs for validation and token transfers.

### Installing

```shell
npm i --save fexr
```

or

```shell
yarn add fexr
```

### Add your Fexr credentials

```js title="/src/fexr.js"
import Fexr from 'fexr'

const fexr = new Fexr({
  did: 'Qm...'
  usageId: 'F0-xxx-1125',
});

fexr.initializeApp();

export default fexr;
```

Please report any issues you faced while using the library [here](https://github.com/getfexr/fexr-js/issues/).

For contributing to the library, please visit [Github](https://github.com/getfexr/fexr-js/).

## Dart - Pub

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a same time.

:::

## Golang - Godoc

To navigate seamlessly across languages, add a locale dropdown.

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

The locale dropdown now appears in your navbar:

<!-- ![Locale Dropdown](./img/localeDropdown.png) -->

## Rust - Cargo Crates

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
