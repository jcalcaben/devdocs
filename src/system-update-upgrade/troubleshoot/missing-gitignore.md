---
group: software-update-guide
title: Missing .gitignore files
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/trouble/cman/gitignore.html
---

### Problem: missing `.gitignore` files {#missing-ignore}

If you downloaded a compressed archive, there might have been missing `.gitignore` files that prevent the upgrade from completing properly. To apply our update, patch `magento/magento-composer-installer` then run `composer update` from your Magento installation directory. 

The following figure shows an example of this issue when using the Setup Wizard.

![]({{site.baseurl}}/static/images/upgr_gitignore-err.png)

#### Solution

To solve this issue:

1. Log in to your Magento server as the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/apache-user.html).
2. Change to your Magento installation directory.
3. Run the following commands in the order shown:

   ```
   composer update magento/magento-composer-installer
   composer update
   ```

4. Try your upgrade again.

