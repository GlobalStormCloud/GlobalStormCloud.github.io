---
title: 1. How the system works
description: An overview of HurricaneOS — a secure edge operating system plus a cloud control plane, and the end-to-end flow from Git push to a running container.
---

HurricaneOS is a secure edge operating system plus a cloud control plane. You work entirely
through a web dashboard and your normal Git workflow — you never SSH into a device to
deploy software.

The end-to-end flow:

```text
    You push code to Git
          │
          ▼
    Cloud builds a container image ──► scans it for vulnerabilities
          │
          ▼
    You pick a successful build and click Deploy
          │
          ▼
    Every attached device pulls the image and runs it in an isolated container
          │
          ▼
    Live health, logs, and status stream back to the dashboard
```

## Key principles

- The OS updates itself safely (A/B updates with automatic rollback) — a failed update falls back automatically instead of bricking a device.
- Identity is hardware-backed — each device holds its own key in a TPM 2.0 chip and is designed so the identity cannot be copied to another device.
- Deployment is manual and deliberate — a new build never auto-ships. You choose which build goes live.
- Secure by default — devices ship locked down: a deny-by-default firewall, isolated containers, and communication/I/O interfaces (serial/COM ports, etc.) disabled out of the box. Hardware access is granted only through the approved capability broker (section 9).
