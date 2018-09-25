---
group: installation-guide
title: Update the Magento application
redirect_from: /guides/v2.3/install-gde/install/cli/dev_update-magento.html
functional_areas:
  - Install
  - System
  - Setup
---

This topic discusses how a contributing developer can update the Magento application without reinstalling it. To perform an upgrade if you're _not_ a contributing developer, see [Updating the Magento application and components]({{page.baseurl}}/system-update-upgrade.html).

To update the Magento software if you're a contributing developer:

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{page.baseurl}}/install/getting-started/file-system-ownership-permissions.html).
2. Save any changes you made to `composer.json` because the following steps will overwrite it:

   ```
   cd <your Magento install dir>
   cp composer.json composer.json.old
   ```

3. Update your local repository to get the latest code:

   ```
   		git pull origin develop

   	{:.bs-callout .bs-callout-info}
   ```

   If `git pull origin develop` fails, see [troubleshooting]({{page.baseurl}}/install/troubleshooting/git/pull-origin-update.html).

4. Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
5. Enter the following command:

   ```
   composer update
   ```

6. Update the Magento database:

   ```
   php <your Magento install dir>/bin/magento setup:upgrade
   ```

