---
group: installation-guide
title: Check the Magento database status
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/install/cli/install-cli-subcommands-db-status.html
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{page.baseurl}}/install/command-line/getting-started.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{page.baseurl}}/install/command-line/configure-deployment.html).

## Command usage

To check the status of the Magento database, enter

```
magento setup:db:status
```

This command has no arguments or options.

Sample output follows:

```
All modules are up to date.
```

The command returns one of the following exit codes:

| Exit code | Description                                                     | Suggested action                                                                                                                                                                                                    |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0         | Normal                                                          | None                                                                                                                                                                                                                |
| 1         | Some modules use code versions newer or older than the database | Run [`magento setup:upgrade`]({{page.baseurl}}/install/command-line/upgrade-database.html) to update the database schema and run `composer update` from the Magento root directory to update component dependencies |
| 2         | setup:upgrade is required                                       | [`magento setup:upgrade`]({{page.baseurl}}/install/command-line/upgrade-database.html) to update the {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %}              |

#### Related topics

* [Installing the Magento software using the command line]({{page.baseurl}}/install/command-line/install.html)
* [Remove sample data modules or update sample data]({{page.baseurl}}/install/command-line/manage-sample-data.html)
* [Enable or disable modules]({{page.baseurl}}/install/command-line/enable-disable-modules.html)
* [Display or change the Admin URI]({{page.baseurl}}/install/command-line/adminurl.html)
* [Uninstall modules]({{page.baseurl}}/install/command-line/uninstall-module.html)
* [Create or update the deployment configuration]({{page.baseurl}}/install/command-line/configure-deployment.html)
* [Enable or disable maintenance mode]({{page.baseurl}}/install/command-line/maintenance-mode.html)
* [Update the Magento database schema and data]({{page.baseurl}}/install/command-line/upgrade-database.html)
* [Configure the store]({{page.baseurl}}/install/command-line/configure-store.html)
* [Create or unlock a Magento administrator]({{page.baseurl}}/install/command-line/admin.html)
* [Back up and roll back the file system, media, and database]({{page.baseurl}}/install/command-line/backup.html)
* [Uninstall themes]({{page.baseurl}}/install/command-line/uninstall-theme.html)
* [Uninstall language packages]({{page.baseurl}}/install/command-line/uninstall-language-package.html)
* [Uninstall the Magento software]({{page.baseurl}}/install/command-line/uninstall-reinstall.html#instgde-install-uninstall)
* [Update the Magento software]({{page.baseurl}}/install/command-line/uninstall-reinstall.html#instgde-install-magento-update)
* [Reinstall the Magento software]({{page.baseurl}}/install/command-line/uninstall-reinstall.html#instgde-install-magento-reinstall)

