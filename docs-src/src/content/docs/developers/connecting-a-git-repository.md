---
title: 8. Connecting a Git repository
description: Each application is one Git repository — connect a GitHub repository, provide a fine-grained read-only access token, and the platform wires up the build trigger.
---

:::note[Developer / operator task]
Each application is one Git repository.
:::

1. Go to the Applications page and click Connect a GitHub Repository.
2. Fill in:
   - Application Name — a friendly name (e.g. "Vision AI").
   - Repository — owner/repo (e.g. `acme/vision-ai`) or the full URL.
   - Branch — the branch to build from (e.g. `main`).
   - GitHub Access Token — a fine-grained personal access token with Contents:
     Read-only permission on that repository. (Public repositories do not need a token.)
3. Click Connect & Continue.

The token is stored securely in your account's private secret store and is used only to read
your repository during builds.

:::note[Creating the token]
In GitHub go to Settings → Developer settings → Personal access
tokens → Fine-grained tokens → Generate new token, select your repository, set
Repository permissions → Contents → Read-only, generate, and paste the github_pat_…
value into the dashboard.
:::

Once connected, the platform automatically wires up the build trigger — you do not need to
configure anything in GitHub manually.
