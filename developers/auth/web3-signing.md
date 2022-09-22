---
sidebar_position: 2
title: Decentralised Signing
description: This page explains what is Decentralised Signing.
keywords: [Decentralised, Signing, payload, request, signature, QR, code, NFC, service, Fexr, app, web3]
---

# Decentralised Signing

This platform verifies access of external services using image based private key algorithm. This allows for higher security but requre signing request coming to your Fexr app should be approved by user to authenticate. This approval can be optionally made verifiable by the user in blockchain for the public.

A sample request for third party auth approval is given below. SDK type is automatically added when the request is generated from any of the available Fexr library added to your project. The object `request` contains information of the requesting service and `payload` string which will be signed by the user on completing request.

`theme` enables gradient animated request card shown to the user before verification.


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