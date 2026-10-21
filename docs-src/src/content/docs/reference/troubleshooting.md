---
title: 16. Troubleshooting
description: Common symptoms and what to check — devices not coming online, failed builds, "not installed" after attaching, container networking, published ports, startup ordering, and stuck deployments.
---

| Symptom | What to check |
| --- | --- |
| Device never comes online after flashing | Confirm the device was pre-registered before boot. Confirm it has network/Internet access. It retries automatically. |
| Build failed | Open the build on the Builds page. Common causes: a Dockerfile error, or a service directory that doesn't match the compose `build:` path. Fix and push again. |
| Device shows "not installed" after attaching | You still need to Deploy a build to it, or use Install on new devices. |
| Containers can't reach each other | Use the service name as the hostname (e.g. `http://api:8080`), not an IP. Both services must be in the same application. |
| A published port isn't reachable from the network | Make sure the port is marked `external: true` under `x-hurricane.expose`. The default is device-local only. |
| Service starts before its dependency is ready | `depends_on` is not honored — have the service retry its connection on startup. |
| Deployment stuck on "deploying" | Confirm the target device is online. A deployment to a device that never reports back is automatically resolved after a timeout. |
