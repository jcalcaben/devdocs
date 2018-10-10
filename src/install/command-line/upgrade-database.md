---
group: installation-guide
title: Update the Magento database schema and data
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/install/cli/install-cli-subcommands-db-upgr.html
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{page.baseurl}}/install/command-line/getting-started.html#instgde-cli-subcommands-common).

## Prerequisites {#instgde-cli-subcommands-maint-prereq}

Before you use this command, you must [install the Magento software]({{page.baseurl}}/install/command-line/install.html).

## Upgrade the Magento database schema and data {#instgde-cli-db-upgr}

Anytime you perform an action that causes the Magento {% glossarytooltip 66b924b4-8097-4aea-93d9-05a81e6cc00c %}database schema{% endglossarytooltip %} or data to change, you must update them by running the command discussed in this section. A partial list of reasons follows:

* You upgraded the Magento software using the command line
* You installed or updated a component using the command line
* You enabled or disabled a component using the command line

Note the following:

* If you used the Web Setup Wizard to do any of the preceding, you don't have to use the command discussed in this topic.
* A Magento _component_ can be a module, theme, or language pack; it doesn't matter whether the component comes from the Magento Marketplace or not

Command usage:

```
magento setup:upgrade [--keep-generated]
```

where `--keep-generated` is an optional argument that does not update [static view files]({{page.baseurl}}/configure/command-line/static-content/deploy.html). This optional argument is for use _only_ in limited circumstances by experienced system integrators. It should be used _only_ in [production mode]({{page.baseurl}}/configure/application-initialization/magento-modes.html#production-mode). It should _not_ be used in [developer mode]({{page.baseurl}}/configure/application-initialization/magento-modes.html#developer-mode).

