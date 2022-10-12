---
sidebar_position: 1
title: Setting up
description: This page explains the steps to set up blockchain based authentication.
keywords: [Fexr, Authentication, web, mobile, blockchain, login, cryptographically, secure, platform]
---

## Setting up

Compared to authentication flow of most of the web and mobile application today, each user is authenticated by the server of the application based on the credentials provided by the user for that application. This mainly involves password authentication and sometimes even two-factor authentication.

Blockchain based authentication provides a secure authentication flow which can be compared with or arguably better than two factor authentication. While one-click social logins of widely popular providers offers similar ways to authenticate users, they come with data privacy trade-offs and apps could be cut off from social login by the provider. Fexr provides a one-click, cryptographically-secure login flow using Rubix L1 open-source blockchain platform.

:::info
For simplicity your Decentralised IDentity or Public Key is referred as **Address** in this documentation. Private Key is referred as **Secret** throughout Fexr documentation.
:::

## Configuring for Apps

The address (your public identity in the blockchain which is used to verify your actions addded in the blockchain) is an easy way to identify a user and verify their ownership, even when the user does not have access to their email or phone number. This is useful for developers who want to build applications based on blockchain.

**See supported [app development platforms](/developers/apis/platforms)**.

## Handle User Authentication

This simple mechanism allows us to provide a high level of account security without the need of complicated registrations, email confirmations and password recovery mechanisms. Every time when an application wants to authenticate a user, it can send an authentication code to the user as a popup dialog or API request which will be signed and signature is shared back from Fexr SDK or even allowing signature exchange to be done manually by user (useful for cold wallet scenarios). Fexr took the development of payment services in web3 to simultaneously do payments over blockchain, works well with PoS requirements, also able to create secure cold wallet -  all on one app.
