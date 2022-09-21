---
sidebar_position: 2
title: Prepare your node for Web3 APIs 
description: This page describes how to prepare your node for Fexr APIs.
keywords: [Web3, APIs, Subnets, Node, Fexr, Sky, Rubix, Blockchain, Wallet, Lite Wallet]
---


# Prepare your node for Web3 APIs

Fexr allows you to setup your own node to serve Fexr APIs for your use-cases.

## Prerequisites

### Sky

Sky is a wrapper for Rubix Blockchain Protocol that helps to:

Create private key pairs remotely within a cold wallet or mobile device and supports manually (in case of cold wallet) or automatically (in case of lite wallet) moves to public parts to the hot wallet. This tool also supports auto sync and backup of your node data to lite wallet.

Connect your wallet to authenticate or sign third party accounts which are integrated with Rubix Blockchain Platform and uses Fexr APIs. Strict permission requirements built in Fexr apps will protect the access to your data also while allowing seamless integration.

The latest Sky release can be found [here](https://github.com/getfexr/sky/releases/tag/0.1.0)




## Web3 Subnets

### Prerequisites for setting up Rubix Subnet

Any computer or personal laptop with 8GB of RAM and a decent internet connection can seamlessly run a Rubix instance for Token transfers / become a validator / Mining node. In order to build a Rubix Subnet, 23 systems are required and they need not be in the same lan or any geographical location. These 23 systems can be spread over anywhere. 

For smoother and faster configuration we recommend you to have the following installed:

1. Unzip (sudo apt install -y unzip)
2. Zip (sudo apt install -y zip)
3. Screen (sudo apt install -y screen)
4. Curl (sudo apt install -y curl)

One-click-setup tool of Rubix jar prerequisites are available according to the OS:

1. [Linux](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux)
2. [MacOS](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS)
3. [Windows](https://github.com/rubixchain/rubixnetwork/raw/master/setupscripts/OneClickSetup/RubixOneClickSetup-Windows.exe)

You can follow the setup confirmation steps as mentioned in the above links too, once the setup is confirmed you can go ahead to download CLI/GUI Rubix Wallet

Once Rubix Wallet/JAR is running in node, DID creation can be initiated
`
1. For JAR/CLI:

 ### Download the following file using wget:
 
```
$ wget https://www.dropbox.com/s/s3twvapecq5dbsg/didcreateimag.png?dl=0 -O didcreateimag.png

```


### Run the following in screen:

```
$ screen -dmS ipfs bash -c 'ipfs daemon'


$ screen -dmS rubixjar bash -c 'java -jar <path/to/rubixJar.jar>'

```

### Once Rubix Jar is running, run the following command

```
$ curl --location --request POST 'http://localhost:1898/create' --form 'data="<Any Text>"' --form 'image=@"<path/to/didcreateimag.png/>"'

```
You’ll get status as success on successful creation of DID, this process may take 5-20sec depending on network bandwidth

Repeat the above steps in all of your 23 nodes. Do note that out of 23 nodes, one node will be sender and another one will be receiver node. The rest of the 21 are quorum nodes / members / validators.


Once the setup is completed and 23 DIDs are created, create a new file called “quorumlist.json” (w/o quotes(“ ”) ) in DATA folder under Rubix, path is mentioned below:

```
For Windows - C:\Rubix\DATA
For MacOS - Applications/Rubix/DATA/
For Linux - home/<userName>/Rubix/DATA/

```

### Format of the file content will be : 



```
["Qme8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxq9gF",
    "QmZ4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxTJf",
    "QmT3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxMMH9",
    "QmeexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxFi2r",
    "QmPExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx3yvi5",
    "QmPyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1UWQ",
    "QmR1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxemCT",
    "QmR5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx6UdU",
    "QmZBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxqwbL",
    "QmUkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVGFE",
    "QmSvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxVgX3",
    "QmT1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxYayw",
    "QmYzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx19zb",
    "Qmbwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx9oyS",
    "QmQ6mxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx3fgW",
    "QmRgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxSkJB",
    "QmVUxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxSbtq",
    "QmWYxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpkKP",
    "QmTpxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxB7tU",
    "QmSJxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxiYZp",
    "QmZRxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxLdBo"
]

```

 
Now your Rubix Subnet setup is completed, now  you can start with type 2 transactions and other operations.
Where validators don't have enough unspent Proof Credits, they can stake RBT utility tokens instead for an equivalent value. It should be noted that the staking in PoP is quite different from PoS. The tokens are not permanently staked, but only till enough Proof Credits are earned to reach the threshold level. Since every Subnet does its own staking, the centralization & security risks associated with PoS protocols are mostly avoided. 

When the outstanding proof credits are converted into RBT tokens, Quorum need to earn new proof credits before being eligible for ⍺ Quorum. Since nodes are in continuous competition with each other to convert the outstanding proof credits into RBT tokens, accumulation of proof credits in order to control the network is not possible. Hence, every node in the network gets equal opportunity to become a ⍺ Quorum member & there is no scope for concentration in Quorum powers. Thus eliminating the need for staking further obviates the need for rent seeking - a crucial bone of contention with PoS algorithms.





## Lite Wallet < > Node Connection

The Lite Wallet is a mobile app that allows you to connect to your node and manage your node. The Lite Wallet is available on both Android and iOS. The connection between the node and the lite wallet happens through fexr-flutter in the mobile device end and Sky in the node end. The IP of the node is provided in the lite wallet and the connection is established. The connection is established through the fexr-flutter plugin which is a wrapper for the fexr RPC APIs. The fexr-flutter plugin is available in the pub.dev. For more information regarding fexr-flutter you can check [fexr-flutter](https://github.com/getfexr/fexr-flutter) 


## (optional) Rent Rubix nodes to setup your APIs

Once your [application](/apply) for integrating Fexr into your services are reviewed and approved, you can rent Rubix nodes to setup your APIs. Fexr nodes comes with recommended configurations for the most common use-cases. You can rent a node for a single service, or for a whole stack of services.
