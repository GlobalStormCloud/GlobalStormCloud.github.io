---
title: 14. Security scan — reviewing vulnerabilities
description: Every image you build is automatically scanned for known CVEs — review findings by severity per service and remediate by updating the affected package or base image.
---

Every image you build is automatically scanned for known vulnerabilities (CVEs) —
there is nothing for you to install or run.

1. On the Builds page, click Security scan on a build.
2. The panel shows, per service, a count of findings by severity — Critical / High /
   Medium / Low — and lists each vulnerability with:
   - the CVE identifier (linked to the public advisory),
   - the affected package and version.
3. A service with no known issues shows no vulnerabilities.

Use this to catch a vulnerable dependency before it reaches the field. To remediate, update
the affected package or base image in your repository and push again — the new build is re-
scanned automatically.
