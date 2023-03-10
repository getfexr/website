---
sidebar_position: 2
title: Real-Time Alerts
description: Integrating Discord and Telegram Webhooks with Fexr Crypto Wallet.
keywords: [Real-time transaction alerts,Chat apps,Telegram,Discord,Cryptocurrencies,Digital assets,Portfolio,Market movements,Informed decisions,Buying,Selling,Holding,Community,Engaging experience,Success]
---

Integrating Discord and Telegram webhooks for real-time alerts is a great feature for any crypto wallet, including Fexr, because it allows users to stay informed and in control of their transactions. Real-time alerts can provide valuable insights and updates on the status of transactions, helping users to quickly identify and address any issues that may arise.

Discord and Telegram are popular messaging platforms that are widely used by the crypto community, making them ideal channels for receiving real-time alerts. By integrating these webhooks, Fexr users can receive notifications on their preferred messaging platform, ensuring that they never miss an important update or transaction. This feature is especially valuable for traders and investors who need to monitor their transactions closely and respond quickly to market fluctuations.

In addition, this feature demonstrates Fexr's commitment to providing comprehensive documentation for its users. By offering detailed instructions on how to integrate Discord and Telegram webhooks, Fexr is making it easy for users to take advantage of this feature and stay informed about their transactions. This level of documentation shows that Fexr understands the importance of user experience and is dedicated to providing a seamless and intuitive platform for its users.

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
