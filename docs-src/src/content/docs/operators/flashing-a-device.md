---
title: 3. Preparing a device — flashing the disk
description: Operator task — register the device, identify the target disk, and write the HurricaneOS image to an individual device.
---

:::note[Operator task]
You need the device image file (a .wic file) provided by Global Storm,
a Linux workstation, and the target disk (the device's internal drive, an SSD, or a USB/
SD boot medium depending on hardware).

This section covers flashing individual devices. For production volumes, use the
manufacture-once, register-in-bulk workflow in section 4, Bulk provisioning at
manufacturing scale.
:::

## 3.1 Register the device first

Devices must be pre-registered with Global Storm before they can join your fleet. We walk you through the process during onboarding.

Make sure your device is registered before you flash it.

## 3.2 Identify the target disk

Plug in / connect the target disk and identify its device node. Be careful — writing to the
wrong disk will erase it.

```bash
lsblk
```

Look for the disk that matches your target's size (e.g. `/dev/sdX`, `/dev/nvme0n1`, or
`/dev/mmcblk0`). Note the name. In the commands below, replace `/dev/sdX` with your real target.

## 3.3 Write the image (Intel / x86 devices)

```bash
sudo dd if=<image-file-from-Global-Storm>.wic \
        of=/dev/sdX bs=4M status=progress
sync
```

- `if=` is the image file you were given.
- `of=` is the target disk (double-check it with `lsblk`).
- `sync` ensures all data is flushed before you unplug.

:::caution
This is destructive. Everything on `/dev/sdX` is overwritten. Confirm the target
twice before pressing Enter.
:::

## 3.4 NVIDIA Jetson devices

Jetson hardware uses the vendor flashing procedure rather than `dd`. Follow the Jetson
flashing guide supplied with your hardware kit (Global Storm provides a device-specific
bundle and steps).

## 3.5 Partition layout (for reference)

After flashing, the disk contains the EFI, Root A, Root B, and Data partitions described in
section 2.3. You do not need to manage these — the OS handles A/B slot switching and
expands the data partition to fill the disk automatically on first boot.
