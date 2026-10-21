---
title: 17. Glossary
description: The terms used across this manual — Application, Build, Deploy, Attach/detach, Provisioning, Deprovision, A/B update, and CVE.
---

- Application — one Git repository connected to the platform; builds into one or more
  container images.
- Build — a versioned set of container images produced from a push.
- Deploy — rolling a chosen build out to the devices attached to an app.
- Attach / detach — associating (or removing) a device with an application.
- Provisioning — a device's automatic first-boot setup of its hardware identity and cloud
  registration.
- Deprovision — factory-reset of a device (wipes app + credentials).
- A/B update — the OS update mechanism: a new OS is written to a standby slot and the
  device switches to it, falling back automatically if it fails to boot.
- CVE — a publicly catalogued software vulnerability; the platform scans your images for
  these on every build.

For hardware provisioning, OS updates, and account administration, contact your Global
Storm account manager.
