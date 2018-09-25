---
group: installation-guide
title: Enable or disable maintenance mode
redirect_from: /guides/v2.3/install-gde/install/cli/install-cli-subcommands-maint.html
functional_areas:
  - Install
  - System
  - Setup
---

Magento uses [maintenance mode]({{page.baseurl}}/configure/application-initialization/magento-modes.html#maintenance-mode) to disable bootstrapping; for example, while you're maintaining, upgrading, or reconfiguring your site.

Magento detects maintenance mode as follows:

* If `var/.maintenance.flag` does not exist, maintenance mode is off and Magento operates normally.
* Otherwise, maintenance mode is on unless `var/.maintenance.ip` exists:

  `var/.maintenance.ip` can contain a list of IP addresses. If an entry point is accessed using HTTP and the client IP address corresponds to one of the entries in that list, then maintenance mode is off.

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{page.baseurl}}/install/command-line/getting-started.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-maint-prereq}

Before you use this command, you must [install the Magento software]({{page.baseurl}}/install/command-line/install.html).

## Enable or disable maintenance mode {#instgde-cli-maint}

Use the `magento maintenance` CLI command to enable or disable Magento maintenance mode.

Command usage:

```
magento maintenance:enable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
magento maintenance:disable [--ip=<ip address> ... --ip=<ip address>] | [ip=none]
magento maintenance:status
```

where

`--ip=<ip address>` is an IP address to exempt from maintenance mode (for example, developers doing the maintenance). To exempt more than one IP address in the same command, use the option multiple times.

{:.bs-callout .bs-callout-info}
Using `--ip=&lt;ip address>` with `magento maintenance:disable` means only that you're saving the list of IPs for later use. To clear the list of exempt IPs, you can use `magento maintenance:enable --ip=none` or see [Maintain the list of exempt IP addresses](#instgde-cli-maint-exempt).

`magento maintenance:status` displays the current status of maintenance mode.

For example, to enable maintenance mode with no IP address exemptions:

```
magento maintenance:enable
```

To enable maintenance mode for all clients except 192.0.2.10 and 192.0.2.11:

```
magento maintenance:enable --ip=192.0.2.10 --ip=192.0.2.11
```

{: .bs-callout .bs-callout-info }
  After you place Magento in maintenance mode, you must stop all message queue consumer processes. One way to find these processes is to run the `ps -ef | grep queue:consumer:start` command. Then run the `kill <process_id>` command for each consumer. In a multiple node environment, be sure to repeat this task on each node.

## Maintain the list of exempt IP addresses {#instgde-cli-maint-exempt}

To maintain the list of exempt IP addresses, you can either use the `[--ip=<ip list>]` option in the preceding commands or you can use the following:

```
magento maintenance:allow-ips <ip address> .. <ip address> [--none]
```

where

`<ip address> .. <ip address>` is an optional space-delimited list of IP addresses to exempt.

`--none` clears the list.

#### Related topics

* [Installing the Magento software using the command line]({{page.baseurl}}/install/command-line/install.html)
* [Remove sample data modules or update sample data]({{page.baseurl}}/install/command-line/manage-sample-data.html)
* [Enable or disable modules]({{page.baseurl}}/install/command-line/enable-disable-modules.html)
* [Display or change the Admin URI]({{page.baseurl}}/install/command-line/adminurl.html)
* [Uninstall modules]({{page.baseurl}}/install/command-line/uninstall-module.html)
* [Create or update the deployment configuration]({{page.baseurl}}/install/command-line/configure-deployment.html)
* [Create the Magento database schema]({{page.baseurl}}/install/command-line/configure-database.html)
* [Update the Magento database schema and data]({{page.baseurl}}/install/command-line/upgrade-database.html)
* [Configure the store]({{page.baseurl}}/install/command-line/configure-store.html)
* [Create or unlock a Magento administrator]({{page.baseurl}}/install/command-line/admin.html)
* [Back up and roll back the file system, media, and database]({{page.baseurl}}/install/command-line/backup.html)
* [Uninstall themes]({{page.baseurl}}/install/command-line/uninstall-theme.html)
* [Uninstall language packages]({{page.baseurl}}/install/command-line/uninstall-language-package.html)
* [Uninstall the Magento software]({{page.baseurl}}/install/command-line/uninstall-reinstall.html#instgde-install-uninstall)
* [Update the Magento software]({{page.baseurl}}/install/command-line/uninstall-reinstall.html#instgde-install-magento-update)
* [Reinstall the Magento software]({{page.baseurl}}/install/command-line/uninstall-reinstall.html#instgde-install-magento-reinstall)

