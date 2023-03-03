---
sidebar_position: 1
title: Transaction alerts
description: How to set up transaction alerts using Webhooks
keywords: [Subnet, Fexr, Web3, decentralized, database, storage, authentication, login, console, create-subnet, blockchain]
---

## Using a webhook URL in Fexr wallet

You can use a webhook URL in Fexr wallet to post alerts to Discord or Telegram. To do this, go to the "Transaction Alerts" Section in Settings in the Fexr wallet, toggle on **Discord**, **Telegram** and enter the webhook URL you obtained by below step and then Save. You can then send transactions from your Fexr wallet to trigger alerts.

## Telegram

To create a Telegram webhook to post alerts as messages, you can follow these steps:

Create a new Telegram bot if you haven't already. You can do this by chatting with the BotFather and following the instructions provided. Take note of the bot token that is provided.

Find the chat ID of the Telegram group or channel that you want to post the alerts to. You can do this by adding your Telegram bot to the group or channel, and then sending a message to the group or channel. You can then use the following URL in your browser, replacing <bot_token> with your bot token and <message_id> with the ID of the message you just sent:

```bash
<https://api.telegram.org/bot<bot_token>/getUpdates?offset=<message_id>>
```

Look for the chat object in the response to find the chat ID.

## Discord

To create a Discord webhook to post alerts as messages, you can follow these steps:

Go to the server or channel where you want to post the alerts, clicking on the gear icon next to the channel name, selecting "Webhooks", and then clicking "Create Webhook". Take note of the webhook URL that is provided.
