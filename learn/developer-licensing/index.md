---
sidebar_position: 0
title: Fexr Checkout (SDK)
description: Discover the power of Web3.0 with Fexr SDK - Simplify the process of decentralized identity creation, Club interactions, and enable fast, secure and efficient cross-chain transactions on the Rubix protocol.
keywords: [Fexr SDK, Setup, Hosting, Decentralized ID, Rubix Protocol, Cross-chain Transactions, Blockchain Integration, Club Interactions, Secure Transactions, Decentralized Hosting, Web3.0 Integration]
---

# Fexr Checkout Software Development Kit (SDK)

Experience the power of Web3.0 with the Fexr SDK. This toolkit simplifies the process of creating decentralized identities, interacting with Clubs, and enabling swift, secure, and efficient heterogeneous transactions on the Rubix protocol.

## Key Features

### **Community Checkout**
   This feature allows any organization or brand to build a checkout experience with Fexr's self-custody feature without the need to create or verify a Club. This is achieved by creating a deep link or a QR code embedded deep link. The format is as follows:

   ```
    fexr://auth?chain=<Name of the Protocol to authenticate user>&session_id=<identifier for brand server use>&callback=<callback url at the brand server to authenticate user joining via Fexr wallet>
   ```

   This deep link format is the only requirement for a user to use the Community Checkout feature. The checkout process will authenticate users with their Decentralized ID (DID) owned in the wallet. All interactions happen via DID and signing, linking across multiple platforms. Rewards and discounts associated with joining the club can be utilized directly via community checkout by using the Rubix protocol as the network protocol.

   **Code Explanation**: This code is a deep link that is used to authenticate users during the checkout process. The parameters within the URL are used to specify the protocol for authentication (`chain`), a unique identifier for the brand server (`session_id`), and a callback URL at the brand server to authenticate the user joining via the Fexr wallet (`callback`).

### **Checkout Dev Kit**
   This is a set of tools and resources that include features like DID creation, Protocol-specific features like Data commit and smart contract from Rubix, and similar features from the Bitcoin network. The Dev Kit includes Python (Community), Flutter (Official), Rust (Community), Swift, and Java SDKs for integrating Fexr into your project. Developers are responsible for the gateway for the network used in Fexr. While there are no sample codes or templates currently, a detailed codelab will be released soon along with a Sandbox upgrade for the wallet.

   **Developer Guide**: We will provide a step-by-step guide for developers to follow, from installation to implementation, to ensure a smooth onboarding process. This guide will include clear code examples with line-by-line explanations to demonstrate the usage of the Fexr Checkout SDK.

### **Verifying Brand Owned Clubs (Coming Soon)**
   This process involves a brand creating a club on Fexr, filling out an   application for verification, and undergoing a review by the Fexr team for authenticity, community engagement, and compliance with Fexr Club rules and guidelines. Verified clubs can offer the "Verified Checkout" feature, which provides an additional layer of trust and security during the checkout process. This feature allows users to securely purchase club memberships, subscriptions, or other club-specific offerings directly from the club dashboard.

---

We will also foster an active community forum or support channel where users can ask questions, share insights, and provide feedback on the documentation. Join us on [Discord to get involved!](!https://discord.gg/CF5Q6jJR4f)