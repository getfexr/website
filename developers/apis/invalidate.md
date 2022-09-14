---
title: fexr.invalidate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info

The following content is for **[DocSearch v3][2]**. If you are using **[DocSearch v2][3]**, see the **[legacy][4]** documentation.

:::

The fexr.invalidate challenge is passed to the server/node to disconnect from the node to which we are connected. The node/server responds with challenge response. The challenge response is received at the client which indicates whether the disconnection is success or not.


<Tabs
  groupId="language"
  defaultValue="flutter"
  values={[
    { label: 'Flutter', value: 'flutter', }
  ]
}>
<TabItem value="flutter">

## Parameters

The input parameters for InValidatePermission is the IP,DID and a code. When this challenge is given to the server which is the node to which we are already connected, we are trying to disconnect it.

### `IP`

> `type: string` | **required**

proxyIP or the public IP address of the node or server is the mandatory input parameter for InValidatePermission. It is using this public IP address the connection between the node and the wallet is established.

### `DID`

> `type: string` | **optional**

DID or Decentralized Identity is the unique identity of each node. This value is an optional parameter because for a new node in the network the DID will only be created after the first connection is established.

### `code`

> `type: int` | **required**

Code is just an integer code number which is used as a identification code.


## Response

When the challenge is received at the server/node side, the server/node responds with a challenge response,

### `p2pConnectionStatus`

> `type: bool `

This peer to peer connection status is a boolean value which indicates whether the connection is existing or not.


### `code`

> `type: int `

This response code is an integer value which indicates the status of the connection.

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
  PassportService().invalidatePermission("IP Address",
                                      "DID", 404)
                                  .then((p2pConnectionStatus value) => setState(() {
                                  _CONNECTED = value.connected;
                                })
                              )
                            );
```

</TabItem>
</Tabs>



## Example





<details><summary>Example</summary>
<div>

```ts
Future<p2pConnectionStatus> invalidatePermission(
      String proxyIP, String dID, int code) async {
    p2pConnectionStatus response;
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
        options: CallOptions(timeout: Duration(seconds: 10)));

    try {
      response = await stub
          .invalidatePermission(web3WalletPermission(dID: dID, code: code));

      // result = response.toString();
    } catch (e) {
      return p2pConnectionStatus(
          connected: false, code: 404, message: e.toString());
    }
    return response;
    // await channel.shutdown();
  }
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
