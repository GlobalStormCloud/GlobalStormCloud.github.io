---
title: 12. Deploying a build to your devices
description: Deployment is manual — pick a successful build and roll it out to every attached device; deploying to 1 device or 10,000 is a single action.
---

Deployment is manual — a new build never ships by itself. You decide what goes live.

1. Go to the Builds page (or the Applications page).
2. Find a build with status succeeded.
3. Click Deploy (or Deploy Latest on the application card).
4. Confirm. The build rolls out to every device attached to that application.

What happens next:

- Each device pulls the image variant for its own CPU and starts the container(s).
- The device's app status moves not installed → installing → running.
- Progress streams live to the dashboard; the Deployments page records the outcome per
  device (succeeded / failed).

Deploying the same way to 1 device or 10,000 is a single action — devices converge as they
come online.

:::note[Install on newly attached devices]
If you attach more devices after a deploy, use the
application's Install on new devices action to bring them onto the current build
without rolling the whole fleet onto a newer one.
:::
