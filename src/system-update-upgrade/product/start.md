---
group: software-update-guide
title: Start System Upgrade
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/upgrader/upgrade-start.html
---

## Prerequisites {#compman-prereq}

Before continuing, complete all tasks discussed in [Prerequisites]({{page.baseurl}}/system-update-upgrade/prerequisites.html).

{:.bs-callout .bs-callout-warning}
If you're upgrading to version 2.1, see [Upgrade to Magento version 2.1 (June 22, 2016)]({{site.baseurl}}/guides/v2.1/release-notes/tech_bull_21-upgrade.html).

## Optional custom maintenance page

During the time you're upgrading, your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} is partially available. Users can see a list of files and so on but cannot shop or check out.

To avoid the appearance of a disabled site and to set up a custom maintenance page that displays during the upgrade, see [Maintenance mode options for upgrade]({{page.baseurl}}/system-update-upgrade/troubleshoot/maintenance-page.html).

## Start System Upgrade from the Magento Admin {#compman-access}

To run System Upgrade:

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Click **System** > **Tools** > **Web Setup Wizard**.
   The following page displays.<br><br>
   ![Specify whether to manage components or upgrade Magento]({{site.baseurl}}/static/images/cman_upgr_initial.png)
3. Click **System Configuration**.
4. If you haven't already done so, enter your [authentication keys]({{page.baseurl}}/install/getting-started/magento-authentication-keys.html) in the provided fields.

   ```
   The following figure shows an example if you *have* already entered your keys.

   ![Authentication keys entered in the Setup Wizard]({{site.baseurl}}/static/images/compman_auth-keys.png)

   <div class="bs-callout bs-callout-warning" markdown="1">
   ```

   For upgrade or update, you must use the same authentication keys you used to install the Magento software. For example, you _cannot_ use {{site.data.var.ce}} authentication keys to update or upgrade Magento EE or vice versa. You also _cannot_ use:

* Another user's authentication keys
* [Shared account](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html) authentication keys
  </div>

5. Click **Save Config**.
6. Click **System Upgrade**.

   Magento begins searching for core module updates immediately. To also search for component updates, click **Yes**. A sample follows:

   ![Magento begins searching for upgrades right away]({{site.baseurl}}/static/images/upgr_initial-pg.png)

   The page displays similar to the following when we find components to upgrade.<br><br>
   ![Magento finds software to upgrade]({{site.baseurl}}/static/images/upgr_stuff-2-upgrade.png)<br><br>

7. ```
   Continue with [Step 1. Select versions to upgrade]({{page.baseurl}}/comp-mgr/upgrader/upgrade-main-pg.html).
   ```

#### Error

The following error can indicate one of several issues, including that you haven't entered your [authentication keys]({{page.baseurl}}/system-update-upgrade/prerequisites/authentication-keys.html) in the Magento Admin:

![]({{site.baseurl}}/static/images/upgr-sorry.png)

For suggested solutions to other causes indicated by this message, see [troubleshooting]({{page.baseurl}}/system-update-upgrade/troubleshoot/sorry.html).

#### Sample data

The System Upgrade utility installs sample data for you but doesn't display it, if you:

* Used the [`magento sampledata:deploy`]({{page.baseurl}}/install/command-line/composer-sample-data.html) command to download, but not installed sample data
* You chose to update components at the same time as the Magento system software

