---
sidebar_position: 2
title: Challenge Response
description: Learn how challenge response verify blockchain address owner in Fexr. 
keywords: [Decentralised, Signing, payload, request, signature, QR, code, NFC, service, Fexr, app, web3]
---



## Using QR Code and optional NFC

```json title="Format for signing request data (QR, NFC)"
{
    "type": "sync-v1",
    "request" : {
        "for_did": "Qm....",
        "display_name": "...",
        "comment": "...",
        "from_did": "Qm....",
        "payload" : {
            "data": "actual content to be signed"
        },
        "signature_type": "default",
        "timestamp": "...."
    },
    "theme": {
        "color_one" : "#...",
        "color_two" : "#...",
    }
}
```

On prompt by the user to approve the request, the user will be shown a QR code or NFC tag to scan. The user will be shown a request card with the information provided by the requesting service. The user can then approve the request by signing the payload and returning the signed data to the requesting service.

See next for the format of the signed data.