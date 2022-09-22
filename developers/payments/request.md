---
sidebar_position: 4
title: Requesting Payments
description: This page explains how to request payments.
keywords: [Payments, Request, QR, NFC, data]
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
        "color_one" : "#...",
        "color_two" : "#...",
    }
}
```
