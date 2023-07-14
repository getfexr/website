---
sidebar_position: 1
title: Decentralized ID & Data with Rubix
description: Discover the power of Web3.0 with Fexr SDK - Simplify the process of decentralized identity creation, Club interactions, and enable fast, secure and efficient cross-chain transactions on the Rubix protocol.
keywords: [Fexr SDK, Setup, Hosting, Decentralized ID, Rubix Protocol, Cross-chain Transactions, Blockchain Integration, Club Interactions, Secure Transactions, Decentralized Hosting, Web3.0 Integration]
---

The Rubix network is designed to handle high frequency transactions efficiently, making it a suitable choice for Fexr users. The network's architecture is based on Proofchains, each bound by a unique utility token. Transactions within a Proofchain are validated individually and sequentially, but transactions across different Proofchains are validated asynchronously and in parallel. This design allows for high transaction throughput and quick finality, as each transaction achieves finality on its own without waiting to be pooled with unrelated transactions.

The security of these transactions is ensured through the use of Decentralized Identifiers (DIDs) and the Non-Linear Secret Sharing (NLSS) encryption algorithm. The DID for each node is split into two secret shares using NLSS – a public network share and a private share. The public share is stored on the InterPlanetary File System (IPFS) and is globally accessible and verifiable. The private share is securely stored by the node itself. To authenticate a node, knowledge of the private share is necessary, ensuring that only the node itself can authenticate its transactions.

In the context of high-frequency transactions, such as those that might occur in a clearing network for Fexr users, this system provides both security and efficiency. The parallel processing of transactions across different Proofchains allows for high transaction volumes to be handled quickly, while the use of DIDs and NLSS ensures that each transaction is secure and that only the initiating node can authenticate its transactions.

This information was found on pages 2, 3, 5, 6, and 7 of the Rubix Whitepaper (source: [Rubix Whitepaper](https://github.com/rubixchain/rubixnetwork/blob/master/RubiX_WhitePaper%20R1.8.pdf)).

Please note that the explanation is based on the information available in the document and might require a deeper understanding of cryptographic techniques and distributed systems to fully comprehend.

## Web and Mobile SDK Integration

Fexr, in the context of a decentralized network like Rubix, could be a platform that provides developers and brands with the tools they need to integrate with this network. This could include Software Development Kits (SDKs) that simplify the process of building applications that interact with the Rubix network.

These SDKs could provide a range of functionalities, such as:

1. **Transaction Ownership:** This could include functions for creating, signing, and submitting transactions to the Rubix network. This would allow developers to integrate transaction capabilities into their applications without having to understand the low-level details of how transactions are processed on the network.

2. **ID Ownership:** Given the importance of Decentralized Identifiers (DIDs) in the Rubix network, the SDKs could provide functions for managing these identifiers. This could include creating new DIDs, managing private and public keys, and authenticating users.

3. **Data Storage and Retrieval:** If the Rubix network uses a system like the InterPlanetary File System (IPFS) for data storage, the SDKs could provide functions for storing and retrieving data from this system.

By providing these tools, Fexr could make it easier for developers and brands to build applications that leverage the power of the Rubix network. This could enable them to offer their users the benefits of decentralized technology, such as increased privacy, control over personal data, and the ability to transact directly with others without the need for intermediaries.

As a result, Fexr could play a crucial role in bringing decentralized technology to the next billion consumers. By lowering the barriers to entry for developers and brands, it could accelerate the adoption of this technology and help to realize its potential benefits.

## Data Tokens on IPFS