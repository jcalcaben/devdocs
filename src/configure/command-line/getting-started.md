---
group: configuration-guide
title: Get started with command-line configuration
functional_areas:
  - Configuration
  - System
  - Setup
redirect_from: /guides/v2.3/config-guide/cli/config-cli-subcommands.html
---

## Before you configure the Magento application {#config-install-cli-prereq}

{% include install/before-you-begin-cli.md %}

## First steps {#config-cli-before}

1. Log in to the Magento server as, or switch to, the [Magento file system owner]({{page.baseurl}}/install/getting-started/file-system-ownership-permissions.html).
2. Change to the following directory:

   ```
   cd <your Magento install dir>/bin
   ```

   Examples:

   * Ubuntu: `cd /var/www/magento2/bin`
   * CentOS: `cd /var/www/html/magento2/bin`

You can run the commands in any of the following ways:

* `php magento <command>`
* `./magento <command>`
* `magento <command>` (after [adding](http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables) `<your Magento install dir>/bin` to your system `PATH`)

## Command summary {#config-cli-summary}

The following table summarizes the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

{:.bs-callout .bs-callout-info}
Before you run any of these commands, you must either [install the Magento application]({{page.baseurl}}/install/command-line/install.html) or [enable some modules]({{page.baseurl}}/install/command-line/enable-disable-modules.html).

| Command                                                                                                                                                | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`magento cache:{enable/disable/clean/flush/status}`]({{page.baseurl}}/configure/command-line/manage-cache.html)                                       | Manages the cache                                                                                                                                                                                 |
| [`magento indexer:{status/show-mode/set-mode/reindex/info}`]({{page.baseurl}}/configure/command-line/manage-indexers.html)                             | Manages the indexers                                                                                                                                                                              |
| [`magento cron:run`]({{page.baseurl}}/configure/command-line/cron.html)                                                                                | Runs Magento cron jobs                                                                                                                                                                            |
| [`magento setup:di:compile`]({{page.baseurl}}/configure/command-line/compile-code.html)                                                                | Compiles all non-existent proxies and factories; and pre-compiles class definitions, inheritance information, and plug-in definitions for one store and website.                                  |
| [`magento info:dependencies:{show-modules/show-modules-circular/show-framework}`]({{page.baseurl}}/configure/command-line/run-dependency-reports.html) | Module dependencies, circular dependencies, and Magento framework dependencies.                                                                                                                   |
| [`magento i18n:{collect-phrases/pack}`]({{page.baseurl}}/configure/command-line/localization.html)                                                     | Creates a translation dictionary or a translation package                                                                                                                                         |
| [`magento setup:static-content:deploy`]({{page.baseurl}}/configure/command-line/static-content/deploy.html)                                            | Deploys static view files                                                                                                                                                                         |
| [`magento dev:source-theme:deploy`]({{page.baseurl}}/configure/command-line/create-stylesheet-symlinks.html)                                           | Creates CSS from LESS                                                                                                                                                                             |
| [`magento dev:tests:run`]({{page.baseurl}}/configure/command-line/run-unit-tests.html)                                                                 | Runs automated tests                                                                                                                                                                              |
| [`magento dev:xml:convert`]({{page.baseurl}}/configure/command-line/convert-layout-xml-files.html)                                                     | Update your layout XML files to match the new Extensible Stylesheet Language Transformations (XSLT) stylesheet                                                                                    |
| [`magento setup:perf:generate-fixtures`]({{page.baseurl}}/configure/command-line/generate-data-for-performance-testing.html)                           | Generate data to use for performance testing.                                                                                                                                                     |
| [`magento sampledata:install`]({{page.baseurl}}/*remove#instgde-install-sample-enable-after)                                                           | Installs optional Magento sample data after you install the Magento application.<br><br>For more details about Magento sample data, see [Optional Magento sample data]({{page.baseurl}}/*remove). |

## Help commands {#config-cli-help}

{% include install/cli_help-commands.md %}

## Common arguments {#config-cli-subcommands-common}

{% include install/cli_common-commands.md %}

