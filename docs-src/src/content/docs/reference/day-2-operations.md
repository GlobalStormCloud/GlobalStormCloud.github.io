---
title: 15. Day-2 operations
description: Updating and rolling back your application, moving devices between apps, removing apps, OTA operating-system updates, and decommissioning a device.
---

## Updating your application

Push new code → wait for the build to succeed → Deploy. The old containers are replaced
with the new ones; your named-volume data is preserved.

## Rolling back

Deploy an earlier known-good build from the Builds page. There is no special rollback step
— deploying an older build is the rollback.

## Moving a device to a different app

Attach it to the new application (section 11). It is automatically detached from the old one;
its old containers are removed on the next convergence.

## Removing an app from a device

Detach the device from the application. The app's containers are removed from the device.

## Operating-system updates

OS updates are delivered over-the-air by Global Storm only — you cannot and do not need
to trigger them. You can view OS version and update history per device. OS updates use A/B
slots with automatic rollback, and your application data is never touched by an OS update.

## Decommissioning a device

Your account manager (or an operator) can deprovision a device — this factory-resets it
(wipes its app and credentials) and it will re-provision cleanly on next boot, or be fully
removed from the fleet.
