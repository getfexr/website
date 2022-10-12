---
title: fexr.challenge
description: This page explains the fexr.challenge API.
keywords: [challenge, connection, response, node, type, code, value, servernode, string, import]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import useBaseUrl from "@docusaurus/useBaseUrl";

The fexr.challenge is passed to the server/node to get the otp as response . The node/server responds with challenge response. The challenge response is received at the client which indicates whether the connection is success or not.

<Tabs
  groupId="language"
  defaultValue="flutter"
  values={[
    { label: 'Flutter', value: 'flutter', }
  ]
}>
<TabItem value="flutter">

## Parameters

The input parameters for ValidatePermission is the IP,Address and a code. When this challenge is given to the server which is the node to which we want to establish a connection.

### `IP`

> `type: string` | **required**

proxyIP or the public IP address of the node or server is the mandatory input parameter for ValidatePermission. It is using this public IP address the connection between the node and the wallet is established.

### `Address`

> `type: string` | **optional**

Address or Decentralized Identity is the unique identity of each node. This value is an optional parameter because for a new node in the network the Address will only be created after the first connection is established.

### `Code`

> `type: int` | **required**

Code is just an integer code number which is used as a identification code.

## Response

When the challenge is received at the server/node side, the server/node responds with a challenge response.

### `p2pChallengeResponse`

> `type: bool`

This peer to peer connection status is a boolean value which indicates whether the connection is existing or not.

### `challenge`

> `type: string`

This challenge response is the otp which is passed.

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
  PassportService().requestChallenge("IP Address",
                                      "Address", 0)
                                  .then((p2pChallengeResponse value) => setState(() {
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
Future<p2pConnectionStatus> requestChallenge(
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
          .requestChallenge(web3WalletPermission(Address: Address, code: code, payload: ""));
      // result = response.toString();
    } catch (e) {
      return p2pChallengeResponse(
          connected: false, code: 404, message: e.toString());
    }
    await channel.shutdown();
    return response;
  }
```

</div>
</details>

</TabItem>
</Tabs>
