---
sidebar_position: 1
title: SDK Platforms
description: This page gives the outline of various SDKs available for fexr.
keywords: [fexr, library, shell, please, add, credentials, view, contributing, using, faced]
---

# SDK Platforms

Fexr community currently is supporting development of client SDKs available for free in popular package managers including NPM, Pub.dev, PyPi, and Cargo. These client libraries provide functionalities for learn to integrate and test payment and identity related services. Before you integrate your service with Fexr, make sure you have secured the credentials to access your gateway or use from any of the [providers](learn/developer-licensing/partner/subnet-providers).

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

## Flutter

View library in [Pub.dev](https://pub.dev/packages/fexr)

### Installing

```shell
flutter pub add fexr
```

### Add your Fexr credentials

Now in your dart code you can use:

```shell
import 'package:fexr/fexr.dart';

```

Please report any issues you faced while using the library [here](https://github.com/getfexr/fexr-flutter/issues).

For contributing to the library, please visit [Github](https://github.com/getfexr/fexr-flutter/).

## Python

View library in [Pypi](https://pypi.org/project/Fexr/)

Python library for Fexr contains important RPC APIs for validation and token transfers.

### Installing

```shell
pip install fexr
```

### Add your Fexr credentials

```shell
import Fexr

```

Please report any issues you faced while using the library [here](https://github.com/getfexr/fexr-python/issues/).

For contributing to the library, please visit [Github](https://github.com/getfexr/fexr-python/).

## Golang - Godoc

Coming Soon ...

## Rust - Cargo Crates

Coming Soon ...
