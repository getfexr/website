---
sidebar_position: 1
title: Setup and Hosting
description: Discover the power of Web3.0 with Fexr SDK - Simplify the process of decentralized identity creation, Club interactions, and enable fast, secure and efficient cross-chain transactions on the Rubix protocol.
keywords: [Fexr SDK, Setup, Hosting, Decentralized Identity, Rubix Protocol, Cross-chain Transactions, Blockchain Integration, Club Interactions, Secure Transactions, Decentralized Hosting, Web3.0 Integration]
---

Welcome to the Fexr Setup and Hosting guide. This guide will take you through the process of initializing, building, and deploying your decentralized applications using the Fexr SDK. This will be your essential resource for leveraging the Rubix protocol and the unique features of Fexr for your club or wider audience engagement.

1. **Getting Started:** Discover the prerequisites you need to get your Fexr project up and running.

2. **Installing the Fexr SDK:** Step-by-step instructions on how to install the Fexr SDK and prepare your development environment.

3. **Creating Your Club with Fexr:** Understand how to set up your Club using the Fexr SDK, from setting up tokenomics to integrating with the Fexr Wallet.

4. **Deploying Your Project:** Learn the best practices for deploying your Fexr project, including choosing the right hosting solution.

5. **Integrating Verified Checkout:** A deep dive into how you can integrate Fexr's Verified Checkout to foster a seamless transaction experience for your users.

6. **Updating and Maintaining Your Project:** Learn how to keep your project up-to-date with the latest enhancements in the Fexr SDK and maintain its performance.

7. **Troubleshooting and Getting Support:** A handy resource of common issues, fixes, and where to get further support if needed.

From setup to deployment, this guide is your key to unlocking the potential of Fexr's decentralized world. Let's get started!

## Web SDK

To get started with the `fexr` package, you need to install it in your project. Depending on whether you're using npm or Yarn as your package manager, the commands will differ slightly.

For npm, use:

```bash
npm install --save fexr
```

For yarn, use:

```bash
yarn add fexr
```

After installing the `fexr` package, you can import it in your code:

```javascript
// Importing the Fexr package in your JavaScript/TypeScript file
import Fexr from 'fexr';
```

Remember, Fexr SDK allows you to create a Club, interact with Verified Checkout, use Rubix protocol and the supported blockchain protocols. To fully utilize these functionalities, you'll need to dive deeper into the documentation of the `fexr` package to explore its various modules and methods.

Always ensure that your package dependencies are up to date and that you're using the correct version of the `fexr` package as per your project requirements.

## Mobile SDK

If you are developing a Flutter application and want to use the `fexr` SDK, you can do so by adding it as a dependency in your `pubspec.yaml` file.

Here are the steps to add the `fexr` package to your Flutter project:

1. Open your `pubspec.yaml` file located in the root directory of your Flutter project.

2. Under the `dependencies:` section, add the `fexr` package with the latest version. It should look something like this:

```yaml
dependencies:
  flutter:
    sdk: flutter
  fexr: ^latest_version
```
   
3. Be sure to replace `latest_version` with the version of the `fexr` package that you wish to use.

4. After adding the `fexr` dependency, run the `pub get` command to fetch the package:

```bash
flutter pub get
```

5. You can now import the `fexr` package in your Dart files like so:

```dart
// Importing the Fexr package in your Dart file
import 'package:fexr/fexr.dart';
```

With the `fexr` package now a part of your Flutter project, you can leverage its full power to create a Club, interact with Verified Checkout, use Rubix protocol and other supported blockchain protocols. 

As always, be sure to check the documentation for more details on the different modules and methods provided by the `fexr` package. This will help you maximize its utility and develop a robust and feature-rich application.