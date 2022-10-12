---
title: fexr.rbt.pay
description: This page explains the fexr.rbt.pay API.
keywords: [fexr, library, rbt, pay, token, transfer, amount, code, response, challenge, connection, type, value, indicates, servernode, parameters]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import useBaseUrl from "@docusaurus/useBaseUrl";

The fexr.rbt.pay challenge is passed to the server/node to initiate the transfer of tokens to another node. The node/server responds with status of the transaction. The challenge response is received at the client which indicates whether the transaction is success or not.

<Tabs
  groupId="language"
  defaultValue="flutter"
  values={[
    { label: 'Flutter', value: 'flutter', }
  ]
}>
<TabItem value="flutter">

## Parameters

The input parameters for InitRubixTxn is the senderAddress,receiverAddress,amount to be transferred,comment and quorumList. When InitRubixTxn function is called the transaction is initiated and the transaction status is returned as response.

### `senderAddress`

> `type: string` | **required**

senderAddress is the unique ID of the sender of the transaction. This is a mandatory parameter.

### `receiverAddress`

> `type: string` | **required**

receiverAddress is the unique ID of the receiver of the transaction. This is a mandatory parameter.

### `amount`

> `type: double` | **required**

Amount is the amount to be transferred from the sender to the receiver. This is a mandatory parameter.

### `comment`

> `type: string` | **required**

Comment is just a string, which can be used to pass a message.

### `quorumList`

> `type: string` | **repeated**

quorumList is the set of quorums which can be set for the transaction.

## Response

When the InitRubixTxn function is called, the transaction is initiated and the transaction status is returned as response.

### `tid`

> `type: string` | **required**

This is the transactionId which is unique for each transaction.

### `status`

> `type: enum` | **required**

This status response return different code as per the status of the transaction.

### `message`

> `type: string` | **optional**

The message can be any error message or a info message.

## Sample Code

<Tabs
  groupId="language"
  defaultValue="flutter"
  values={[
    { label: 'Flutter', value: 'flutter', }
  ]
}>
<TabItem value="flutter">

```js
  void rbtPay() {
    txnPayload payload = txnPayload(
        "senderAddress",
        "receiverAddress",
        0.1,
        "comment",
        "quorumList");

    payload.fexrId = md5.convert(utf8.encode(payload.toString())).toString();
    print(widget.wallet.wallet.gateway);
    api.PayService().initRubixTxn(widget.wallet.wallet.gateway, payload);
  }
```

</TabItem>
</Tabs>

## Example

<details><summary>Example</summary>
<div>

```ts
Future<void> initRubixTxn(String proxyIP, txnPayload txn) async {
    print('initiatiing transfer for: ${txn.fexrId}');
    final channel = ClientChannel(
      proxyIP,
      port: Const.PORT,
      options: ChannelOptions(
        credentials: ChannelCredentials.insecure(),
        codecRegistry:
            CodecRegistry(codecs: const [GzipCodec(), IdentityCodec()]),
      ),
    );

    stub = POPServiceClient(channel,
        options: CallOptions(timeout: Duration(seconds: 1800)));

    await for (var status in stub.initRubixTxn(txn)) {
      putTxnStatus(status);
      print("status: ${status.toString()}");
    }

    await channel.shutdown();
  }
```

</div>
</details>

</TabItem>
</Tabs>

