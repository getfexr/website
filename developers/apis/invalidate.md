---
title: fexr.invalidate
description: This page explains the fexr.invalidate API.
keywords: [code, node, challenge, response, connection, type, value, indicates, servernode, parameters]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

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

The input parameters for InValidatePermission is the IP,Address and a code. When this challenge is given to the server which is the node to which we are already connected, we are trying to disconnect it.

### `IP`

> `type: string` | **required**

proxyIP or the public IP address of the node or server is the mandatory input parameter for InValidatePermission. It is using this public IP address the connection between the node and the wallet is established.

### `Address`

> `type: string` | **optional**

Address or Decentralized Identity is the unique identity of each node. This value is an optional parameter because for a new node in the network the Address will only be created after the first connection is established.

### `code`

> `type: int` | **required**

Code is just an integer code number which is used as a identification code.

## Response

When the challenge is received at the server/node side, the server/node responds with a challenge response,

### `p2pConnectionStatus`

> `type: bool`

This peer to peer connection status is a boolean value which indicates whether the connection is existing or not.

### `code`

> `type: int`

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
                                      "Address", 404)
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
      String proxyIP, String Address, int code) async {
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
          .invalidatePermission(web3WalletPermission(Address: Address, code: code));

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
