---
title: 2. Prerequisites & hardware requirements
description: The 64-bit edge hardware requirements for HurricaneOS — CPU architecture, UEFI boot, TPM 2.0, storage, memory, and networking.
---

HurricaneOS runs on 64-bit edge hardware that meets a small set of requirements. Confirm
these before you order devices or request an image.

## 2.1 Minimum hardware

| Requirement | Minimum | Notes |
| --- | --- | --- |
| CPU architecture | 64-bit x86-64 (Intel/AMD) or 64-bit ARM (aarch64) | The image is architecture-specific — see 2.4 |
| Firmware / boot | UEFI (EFI) boot on x86-64 hardware | The OS uses an EFI bootloader with A/B slots; legacy BIOS-only boards are not supported. ARM targets (e.g. NVIDIA Jetson) boot via the vendor firmware flow |
| Security chip | TPM 2.0 | Required for the device's hardware-backed identity. The private key is generated and held in the TPM; without it the device cannot provision securely |
| Storage | ≈ 16 GB or larger, on eMMC or NVMe/SSD | Must be large enough for two OS slots plus a data partition (see 2.3). Larger storage is used automatically |
| Memory (RAM) | 2 GB or more | Depends on your application; 2 GB is the baseline for the OS + runtime |
| Networking | Wired Ethernet (recommended for first boot); WiFi, 4G/5G also supported | Internet access is required at first boot so the device can register |

:::note
If a board lacks UEFI boot or a TPM 2.0, it cannot run HurricaneOS as shipped. If you
are unsure about a specific board, send its specification to Global Storm and we will
confirm compatibility.
:::

## 2.2 Why TPM 2.0 and EFI are required

- TPM 2.0 is what makes each device's identity hardware-rooted and designed so it cannot be copied to another device. The device generates its key inside the TPM at first boot; the key never leaves the chip. This underpins the mutual-TLS trust between the device and the platform. It is not optional.
- EFI boot is what enables safe A/B updates with automatic rollback on x86-64 — the bootloader selects between two OS slots and falls back to the previous one if a new OS fails to boot.

## 2.3 Storage layout & automatic disk expansion

Every device image contains a fixed set of partitions:

| Partition | Purpose |
| --- | --- |
| EFI | Bootloader (x86-64) |
| Root A | The running operating system |
| Root B | Standby slot for the next OS update |
| Data | Application data, container images, and device identity — survives OS updates |

The image itself is small, but on first boot the device automatically expands its data
partition to fill the entire disk. This means:

- Global Storm ships one image size regardless of the drive it will be written to.
- A device with a larger drive automatically gets more application/data space — no manual
  repartitioning, no per-size image.
- You can standardise on one image per hardware type even if different production batches
  ship with different drive capacities.

## 2.4 Architecture & storage type must be confirmed in advance

The device image is specific to the target's CPU architecture and storage type, so
Global Storm must build and supply the correct image for your hardware. Before your
device program starts, tell Global Storm:

1. CPU architecture — x86-64 (Intel/AMD) or ARM (aarch64 / which board, e.g. NVIDIA
   Jetson).
2. Boot storage type — eMMC or NVMe/SSD (and the board model, since ARM targets
   boot through vendor-specific firmware).
3. Drive capacity range (optional) — not strictly required thanks to automatic expansion
   (2.3), but useful for sizing.

Global Storm then provides the matching golden image for that architecture and storage
type (used for both single-unit flashing in section 3 and bulk manufacturing in section 4).
Using the wrong-architecture or wrong-storage image will not boot — so this is confirmed up
front, once, per hardware type.

:::tip[In short]
Tell us your CPU architecture and boot-storage type, and we hand you the
right image. Disk size takes care of itself.
:::
