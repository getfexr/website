---
slug: Announcing Fluir release - Connect Fexr
title: Announcing Fluir release for Fexr. Connect your web and mobile apps
authors: [nidhin]
tags: [Blockchain, DApp, Authentication]
description: Announcing Fluir release - your assets on chain
keywords: [Blockchain, DID, App, Image, Private Key, Mobile, IoT, Computation, Optimisation, Rubix, Fexr, SHA3]
---

I would like to take this space to update you on the latest improvements and features coming to Fexr in Q1 2023. Mobile wallet has been a great way to secure secrets for multiple Web3 wallets without fear during a time when even top tokenized asset exchanges are getting exposed to hacks and frauds.

## Link web and mobile apps with Fexr

We found it is important for users to use their NFTs and tokens across all compatible platforms to make their borderless, T0 transactions easier. Fexr users will be able to link their wallet with newly created browser extension. This was made possible by powerful web based SDKs for Rubix and Fexr. This allows developers to enable web apps and merchant services to accepts the token linked to the wallet (including Access NFTs issued by other developers).

## Developer friendly

Browser extension + mobile wallet + web SDK for Rubix and Fexr is developed with the support of  open source libraries to work in fully transparent and decentralised setup, i.e. A user can optionally setup their hot wallet using Sky connector (hot wallets can also be provided as-a-service by developers with computing resources), modify or use existing browser extension including SDKs for Rubix and Fexr, all with enjoying cross compatibility with other Fexr wallets and services providers.

## Secrets with you, always

While the secret keys for addresses are secured in the mobile wallet, setting up and configuring the essential hot wallet, which communicates with the blockchain peers had been a bit technical for most users and maintenance was sometimes expensive. To overcome this challenge, Fexr is working towards providing specialised nodes for users.

## Choose between your wallet providers

This is made possible in Fexr wallets by intelligently syncing the latest state of web3 ID, on-chain assets, and provenance of linked user within their mobile wallet, allowing users to backup, disconnect and connect a different node provider anytime during their operation. This ensures a competitive development environment for app builder and service providers under the same platform.  Users can easily switch their node provider for a specialised service without having to worry about losing their data or having access issues.

## One address, multiple owners

Multiple signature approvals for a wallet transaction is another important feature we are bringing to the users in Q1 2023. This uses the same strong encryption used natively in Rubix for decentralised identity creation, locally without moving the secret key anywhere from their device.

This feature allows larger adoption from families to businesses, where multiple key owners need approve a transaction. This is also useful for businesses to manage their assets and transactions with multiple stakeholders.

## Fluir means *to flow*
Every day we’re finding more ways to help users navigate their Web3 journey secure and seamless. This release, we’re calling it ‘Fluir’ is a big leap in the support for app developer, merchant service and organisations to streamline their borderless payments and access management.

## Testing summary

We used three active mainnet nodes to test the first insider version of Fluir build.

[Validator.Social](https://validator.social) is a new social network subnet run by validators to support other validators. [Cycle360.tech](https://cycle360.tech) is an open-source supply chain tracker managed on blockchain. Both are the asset verifiers and payment receivers in this real-case scenario. [Fexr.Club](https://fexr.club) is the Web3 console maintained by Fexr. A user hosted with [Fexr.Club](https://fexr.club) is transfering to a node hosted by [Validator.Social](https://validator.social), both the transactions had happened via locally configured Sky connector tool to communicate and also provide hot wallet to the sender and receiver wallets.

Rubix community quorum (type one transaction) is used to verify transaction run between [Fexr.Club](https://fexr.club), [Cycle360.tech](https://cycle360.tech) and [Validator.Social](https://validator.social). All transactions used UI interface and does not include CLI commands or triggers to support or initiate transaction in foreground or background.

Transaction details and analytics will be shared in the next blog post.
