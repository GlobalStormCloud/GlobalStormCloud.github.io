---
title: 10. Pushing code & building
description: Push to the connected branch to trigger a build — each service is built as a multi-architecture image, stored in your private registry, and versioned so you can always deploy a known-good build.
---

1. Commit and push to the branch you connected:

   ```bash
   git push
   ```

2. A build starts automatically. Watch it on the Builds page.
3. Each service in your compose file is built as a multi-architecture image (Intel + ARM) and
   stored in your private image registry — your images are never public.
4. When the build finishes you will see succeeded (or failed, with the build highlighted).
   Each service shows its own status dot.

Builds are stored and versioned, so you can always deploy an older known-good build.
