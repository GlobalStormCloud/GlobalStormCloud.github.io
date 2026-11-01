---
title: 4. Bulk provisioning at manufacturing scale
description: The manufacture-once, register-in-bulk workflow — one golden image per hardware type, device pre-registration, and zero-touch first boot in the field.
---

Flashing devices one at a time (section 3) is fine for a handful of units. For production
volumes, HurricaneOS supports a manufacture-once, register-in-bulk workflow so
devices come online automatically the first time they are powered on at the customer site —
with no per-device setup on the line.

## 4.1 How it works

```text
Global Storm                      Customer                          Device (first boot)
────────────                      ────────                          ───────────────────

Builds one golden      ──►   Flashes it to every unit's      ──►   Powers on with Internet
disk image per target        eMMC / NVMe at manufacturing             │
                                                                      ▼
Receives the customer's ◄──  Sends Global Storm the list     ──►   Registers with the platform
identifier list                                                     and appears ONLINE in the
                                                                    dashboard — ready to use
```

The same single image goes on every device of a given hardware type. Each device creates its own secure identity on first boot and connects to the platform. Details are provided in the onboarding pack.

## 4.2 Step 1 — Golden image from Global Storm

Global Storm provides a single golden disk image per target hardware type:

- an eMMC image for devices that boot from on-board eMMC, or
- an NVMe/SSD image for devices that boot from an NVMe/SATA drive.

The correct image for your hardware is supplied with your device program. It is identical for
every unit — nothing in it is device-specific.

## 4.3 Step 2 — Flash at manufacturing

The contract manufacturer (or your production line) writes the golden image to each device's
storage during assembly, using whatever mass-flashing tooling fits the hardware:

- eMMC — typically flashed over the vendor's production programming interface (e.g. a
  USB/fastboot programming mode or a bed-of-nails/UFP fixture), or with a standard block-
  write to the eMMC device node on an assembly host.
- NVMe / SSD — written with a standard block copy to the drive (the same image, same
  `dd`-style write used in section 3.3), or duplicated with a hardware disk duplicator for high
  volume.

Because every unit receives the identical image, this step parallelizes cleanly across a
production line and needs no network or cloud interaction at the factory.

:::note
Global Storm can supply hardware-specific flashing instructions and the exact
programming command for your target as part of the device program.
:::

## 4.4 Step 3 — Send Global Storm the device list

As units are built, collect their identifying information and provide the list to Global Storm — for example as a CSV:

```bash
device_identifier,device_name
GS-DEV-0001,warehouse-sensor-0001
GS-DEV-0002,warehouse-sensor-0002
GS-DEV-0003,warehouse-sensor-0003
```

- The device identifier is a unique code that will be used to register it with the platform.
- The optional device name is a friendly label that will show in your dashboard.

Global Storm registers the whole list in one operation. Registration ensures that only authorized devices can join your fleet.

## 4.5 Step 4 — First boot in the field

When a pre-registered device is powered on with an Internet connection, it automatically:

1. generates its private key inside its TPM chip (never leaves the device),
2. registers with the platform,
3. connects securely and appears online.

Within a minute or two each device appears in your Devices dashboard as online. No
operator action is required at the device.

Devices can be powered on in any order, at any time, at any location — each one provisions
itself independently the moment it has power and Internet.

## 4.6 Step 5 — Provision them as applications

Once devices appear online, they are ready to use exactly as described in the rest of this
manual:

- attach them to an application (section 11), and
- deploy a build to them (section 12).

You can select many devices at once when attaching, so bringing a large batch onto an
application is a single action.

## Bulk provisioning at a glance

| Who | Does what | When |
| --- | --- | --- |
| Global Storm | Supplies one golden image per hardware type (eMMC or NVMe) | Before manufacturing |
| Manufacturer | Flashes the identical image to every unit | On the production line |
| Customer | Sends Global Storm the device identifiers | As units are built |
| Global Storm | Pre-registers all devices in one operation | Before deployment |
| Device | Self-provisions and appears online | First boot with Internet |
| Customer | Attaches devices to apps and deploys builds | Any time after they appear |

Devices are ready to use once they appear online and are pre-registered with your fleet.
