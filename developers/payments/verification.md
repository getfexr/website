---
sidebar_position: 2
---

# Verifying Payments

```json title="Example content in request QR for payment verification"
{
    "type": "sync-v1",
    "request" : {
        "for_did": "Qm....",
        "display_name": "...",
        "comment": "...",
        "from_did": "Qm....",
        "payload" : {
            "data": "....",
            "amount": 0.000
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
