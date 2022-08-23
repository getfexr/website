---
sidebar_position: 3
---

# Decentralised Verification

```json title="Example content in request QR for signature verification"
{
    "type": "sync-v1",
    "request" : {
        "for_did": "Qm....",
        "display_name": "...",
        "reason": "...",
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
        "gradient_color_one" : "#...",
        "gradient_color_two" : "#...",
    }
}
```
