---
group: installation-guide
title: Create the Magento database schema
redirect_from: /guides/v2.3/install-gde/install/cli/install-cli-subcommands-db.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}

In addition to the command arguments discussed here, see [Common arguments]({{page.baseurl}}/install/command-line/getting-started.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-db-prereq}

Before you run this command, you must [Create or update the deployment configuration]({{page.baseurl}}/install/command-line/configure-deployment.html).

## Configure the database and add data {#instgde-cli-dbconfig}

Command usage:

```
magento setup:db-schema:upgrade
magento setup:db-data:upgrade
```

To see the status of the database, enter

```
magento setup:db:status
```

