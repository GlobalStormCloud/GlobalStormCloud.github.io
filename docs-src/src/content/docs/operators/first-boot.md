---
title: 6. First boot & automatic provisioning
description: HurricaneOS is zero-touch — once flashed and connected, the device generates its hardware identity, registers with the cloud, and comes online with no manual key handling.
---

HurricaneOS is zero-touch: once flashed and connected to the network, the device sets
itself up with no manual key handling.

1. Connect the device to the network (wired Ethernet is recommended for first boot)
   and power it on.
2. On first boot the device automatically:
   - generates a private key inside its TPM chip (the key never leaves the device),
   - registers with the cloud platform,
   - connects securely,
   - expands its data partition to fill the disk.
3. Within a minute or two the device appears in the dashboard as online.

If the device was not pre-registered, it will keep retrying quietly until an operator
registers it — then it provisions on the next attempt automatically. No reflash is needed.

:::tip[Self-healing]
If a device ever loses its connection to the platform, it recovers automatically — no field visit required.
:::
