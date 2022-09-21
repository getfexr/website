---
title: fexr.rbt.pay
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import useBaseUrl from "@docusaurus/useBaseUrl";



The fexr.validate challenge is passed to the server/node. The node/server responds with challenge response. The challenge response is received at the client which indicates whether the connection is success or not. 


<Tabs
  groupId="language"
  defaultValue="flutter"
  values={[
    { label: 'Flutter', value: 'flutter', }
  ]
}>
<TabItem value="flutter">

## Parameters

The input parameters for InitRubixTxn is the senderDID,receiverDID,amount to be transferred,comment and quorumList. When InitRubixTxn function is called the transaction is initiated and the transaction status is returned as response.

### `senderDID`

> `type: string` | **required**

senderDID is the unique ID of the sender of the transaction. This is a mandatory parameter.

### `receiverDID`

> `type: string` | **required**

receiverDID is the unique ID of the receiver of the transaction. This is a mandatory parameter.

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

> `type: string ` | **required**

This is the transactionId which is unique for each transaction.


### `status`

> `type: enum ` | **required**

This status response return different code as per the status of the transaction.

### `message`

> `type: string ` | **optional**

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
        "senderDID",
        "receiverDID",
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

[1]: https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/
[2]: https://github.com/algolia/docsearch/
[3]: https://github.com/algolia/docsearch/tree/master
[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
[6]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[7]: https://www.algolia.com/doc/api-reference/search-api-parameters/
[8]: https://github.com/algolia/docsearch/blob/main/packages/docsearch-react/src/Hit.tsx
[9]: https://codesandbox.io/s/docsearch-v3-debounced-search-gnx87
[10]: https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?client=javascript
[11]: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/keyboard-navigation/
