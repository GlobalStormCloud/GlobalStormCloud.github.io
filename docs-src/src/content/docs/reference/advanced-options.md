---
title: 5. Advanced & custom options
description: Customizations Global Storm can tailor per customer — alternative device identifiers, secure network boot, managed telemetry & data-lake solutions, and custom kernel drivers.
---

The standard image is flashed in full to the device (sections 3–4). For customers with specialised hardware or heightened security
needs, Global Storm can tailor these behaviours. Both options below are customizations —
they are not part of the standard image and are scoped and delivered per customer
requirements.

## 5.1 Alternative device identifiers

By default devices must be pre-registered with Global Storm before they can join your fleet. The specific identifiers and registration procedure are customized per customer and provided in the onboarding pack.

If your hardware or process calls for specialized identifiers beyond the standard registration method, Global Storm can accommodate it as a build-time customization — tell us your requirements, and we'll tailor the device program to your specification.

:::note
Standard provisioning uses device pre-registration. Alternative identifier schemes are a build-time customization.
:::

## 5.2 Secure network boot (minimal bootloader + remote image pull)

For high-security or physically exposed deployments, Global Storm can provide a hardened boot mode in which the device obtains a verified operating system from the platform at boot rather than storing it locally. Scoped per customer; details are provided in the onboarding pack.

:::note
This is a specialised, security-hardened boot mode delivered as a customization.
:::

## 5.3 Managed telemetry & data-lake solutions

Many fleets need to move sensor and application data off the device and store, query, or
analyse it at scale. Rather than build this yourself, Global Storm can provide fully managed,
scalable, and cost-effective telemetry transmission and data-lake solutions as pre-
built containers you simply add to your application.

- Telemetry transmission — ready-made containers that reliably stream your device/
  application data to the cloud, buffering through intermittent connectivity and scaling from
  a single device to a large fleet. Our telemetry containers compress and combine data before transmission to reduce bandwidth and ingestion cost.
- Data lake / storage & analytics — managed cloud ingestion and storage so your
  telemetry lands in a queryable, analytics-ready data store, with costs that scale with
  usage rather than fixed infrastructure you have to run.

Because these ship as pre-built containers, you add the capability by including them in your
docker-compose.yml (section 9) — no custom data-pipeline engineering on your side. Tell
Global Storm what data you need to move and where it should land, and we provide the
matching containers and cloud backend.

:::note
This is an optional, add-on capability provided on request. Your own application
containers (sections 8–12) work exactly as documented whether or not you use it.
:::

## 5.4 Minimal builds & custom kernel drivers

For size and security reasons, Global Storm strips every OS build down to the absolute
minimum set of kernel drivers and system libraries required for your target hardware. A
smaller image means a smaller attack surface, faster updates, and less that can go wrong in
the field — nothing unnecessary ships on the device.

If your hardware needs capabilities beyond that minimal baseline, Global Storm can develop
and deliver the required kernel drivers and system support as part of your OS
build. Typical examples:

- Custom or uncommon peripherals — a specific sensor, radio, interface chip, or add-on
  board that needs its own kernel driver.
- Operational status indicators — driving special status/indicator lights (LEDs) that
  reflect OS and system state, such as GPS lock, Internet connectivity, cellular signal, or
  application health.
- Other board-specific hardware integration your deployment depends on.

Share your hardware details and the behaviours you need, and Global Storm folds the
necessary drivers and support into your device program.

:::note
The standard image ships only the minimal drivers for your target. Additional drivers
and hardware-integration features (including status-LED behaviour) are delivered as a
build customization, scoped to your requirements.
:::
