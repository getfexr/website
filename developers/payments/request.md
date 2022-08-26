---
sidebar_position: 3
---

# Requesting Payments

Format for payment request data (QR, NFC)

```json title="Example incoming payment request"
{
    "type": "sync-v1",
    "request" : {
        "for_did": "Qm....",
        "display_name": "...",
        "comment": "...",
        "from_did": "Qm....",
        "payload" : {
            "amount": 0.000
        },
        "signature_type": "default",
        "timestamp": "...."
    },
    "theme": {
        "gradient_color_one" : "#...",
        "gradient_color_two" : "#...",
    }
}
```
