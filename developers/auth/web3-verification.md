---
sidebar_position: 3
---

# Decentralised Verification

Verification involved user signing the request coming from app builder and third party services. `signature` object is added to the signature request and shared back to the requested service for verifying signature with the public key of the user. This can be done even without ever using a Fexr service of app before. This puts user in control of the data they generate over Fexr during any kind of transaction.

```json title="Format of verified (signed) request data (QR, NFC)"
{
    "type": "sync-v1",
    "request" : {
        "for_did": "Qm....",
        "display_name": "...",
        "comment": "...",
        "from_did": "Qm....",
        "payload" : {
            "data": "...."
        },
        "signature_type": "default",
        "timestamp": "...."
    },
    "signature": {
        "signature": "....",
        "signer": "Qm....",
        "signature_type": "default",
        "timestamp": "...."
    },
    "theme": {
        "color_one" : "#...",
        "color_two" : "#...",
    }
}
```
