---
slug: Optimising-image-private-key-mobile
title: Optimising image based private key for mobile and IoT computation
authors: [allen]
tags: [Blockchain, DID, App]
description: Optimising image based private key for mobile and IoT computation
keywords: [Blockchain, DID, App, Image, Private Key, Mobile, IoT, Computation, Optimisation, Rubix, Fexr, SHA3]
---

When reading the heading there can be some doubts about the terms mentioned there, so I will start by giving a brief explanation about the terms. So the first question arising in this context will be about public-private key pair. As the name suggests, a public-private key pair is a pair of keys that are used to encrypt and decrypt data. The public key is used to encrypt the data and the private key is used to decrypt the data.In our blockchain scenario the private key is used to sign the data and the public key is used to verify the data. The public key is available to anyone and the private key is only available to the owner of the key. This is how a public-private key pair works.

Since the first part, which explains about the public-private key pair is completed, we will now talk about how the public-private key pair becomes public-private key pair images and how it is generated. So the process begins by selecting a random 256*256 bit image and giving a random passphrase of the user's choice. The given image is converted to binary, the passphrase is hashed using SHA3-256 and is embedded with the image binary, using this set of binary digits a new image known as the DID image is created. From this DID image a new pair of images are created, one for the public key and one for the private key. These images are created using a complex patented algorithm known as Non-Linear Secret Sharing (NLSS) algorithm. The algorithm works based on some really complex mathematical equations. The program which generates the images iterates till a matching public and private key is found. These private and public key images are then used to sign and verify data. This is the basic generation of image based public-private key pair generation. 

Though the above process seems simple the inbound computation is really complex and cpu intensive. Performing such a cpu intensive task on a small device was really a challenge. The part where the key-pair generation requires high computation power is finding the matching public and private key images. The program reecursively checks for the matching public and private key images and if it finds one it returns the key images.  