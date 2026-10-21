---
title: 9. Writing your application
description: Describe your application with a docker-compose.yml — inter-container networking, publishing ports with x-hurricane.expose, persistent volumes, and brokered device hardware capabilities.
---

Your application is described by a docker-compose.yml file at the root of your repository. Each
service has its own directory containing a Dockerfile.

```text
my-app/
├── docker-compose.yml
├── web/
│   ├── Dockerfile
│   └── ...source...
└── api/
    ├── Dockerfile
    └── ...source...
```

A minimal two-service example:

```yaml
services:
  web:
    build: ./web
    restart: always
  api:
    build: ./api
    restart: always
```

## Talking between containers

All services in one application share a private network on the device. A container reaches
another by its service name as the hostname — exactly like Docker Compose. No
configuration is needed.

```bash
# from the "web" container, call the "api" container:
requests.get("http://api:8080/health")
```

## Publishing a port on the device

By default a service is reachable only by its sibling containers. To publish a port, declare it
under `x-hurricane.expose`:

```yaml
services:
  web:
    build: ./web
    x-hurricane:
      expose:
        - port: 8080             # serve this on the device's network
          external: true
        - "9090:3000"            # device-local only (loopback)
```

- Loopback (default): the port is reachable only by processes on the device itself.
- `external: true`: the device publishes the port on its network interfaces so other
  machines can reach the service the device is hosting.

## Persistent storage

Use named volumes for data that must survive restarts and updates:

```yaml
services:
  api:
    build: ./api
    volumes:
      - app-data:/data
```

Each named volume is private to your app — your container sees only its own data, never
the host or another application.

## Device hardware capabilities (WiFi AP, cellular)

By default, HurricaneOS ships with communication ports and other I/O interfaces
disabled on all supported platforms — serial/COM ports, and other input/output interfaces
are closed off out of the box to minimise the attack surface. Nothing is exposed unless it is
explicitly needed.

Customer applications run isolated and cannot touch the device hardware directly. For a
controlled set of hardware actions, a service declares the capability it needs under
`x-hurricane.capabilities`. The platform grants only approved capabilities (deny-by-default),
and the request is brokered — your container never gets raw host access. Some of the
otherwise-disabled interfaces can be made available to a customer app this way, through the
broker, when your account is approved for them.

```yaml
services:
  controller:
    build: ./controller
    x-hurricane:
      capabilities:
        - wifi_ap            # manage the device's WiFi access point
        - mobile_network     # bring the cellular modem up/down
```

WiFi access point (supported today). With the `wifi_ap` capability, your app can turn the
device into a WiFi access point and set its network name and password — useful for on-site
setup or for the device to serve a local network. The platform:

- enables AP mode with your chosen SSID and passphrase (SSID 1–32 chars; passphrase
  8–63 chars), bringing the access point up at `192.168.4.1`,
- lets you add/replace the SSID by enabling the access point again with new values, and
- lets you disable the access point when it is no longer needed.

The passphrase and SSID are validated before use, and the whole operation goes through
the approved-capability broker — so only an app you authorised can change the device's
WiFi AP.

Cellular (supported today). With `mobile_network`, your app can bring the 4G/5G modem
up (with an APN) or down.

:::note
Connecting the device to an existing WiFi network (client/station mode) — i.e.
adding an SSID the device should join as a client — is not exposed through the
managed capability API in the standard image today. WiFi station connectivity is
typically configured at provisioning time (wired/cellular is recommended for first boot). If
you need in-field, app-driven joining of arbitrary WiFi networks, contact Global Storm —
it can be added as a customization (section 5).
:::

:::note[Notes]
- A plain compose `ports:` entry is not published automatically — use `x-hurricane.expose`.
- `depends_on` is not honored; containers start independently. If one
  service needs another, have it retry the connection on startup.
- Capabilities are deny-by-default: a service gets only what it declares and what Global
  Storm has approved for your account.
:::
