---
group: installation-guide
title: Reinstall the Magento software
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/install/cli/dev_reinstall.html
---

A contributing developer reinstalls Magento by updating `composer.json` to specify the Magento product version and component versions desired and runs `composer update`.

To reinstall the Magento software as a contributing developer:

2. Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the [switch to the Magento file system owner]({{page.baseurl}}/install/getting-started/file-system-ownership-permissions.html).
3. Make a backup copy of `composer.json` in your Magento installation directory:

   ```
   cd <your Magento install dir>
   cp composer.json composer.json.bak
   ```

4. Open `composer.json` in a text editor.
5. Locate the following line:

   ```
    "require": {
   	"magento/product-community-edition": "<version>"
   },
   ```

6. Replace `<version>` with the version to which you want to upgrade, where `<version>` is the product version to use.

   ```
   (The product version is in the format `2.0.x`)
   ```

   <!-- is the `magento/product-community-edition` version from -->.

7. Save your changes to `composer.json` and exit the text editor.
8. Enter the following command:

   ```
   composer update
   ```

   Wait for dependencies to update.

9. [Install the Magento software]({{page.baseurl}}/install/command-line.html).

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase