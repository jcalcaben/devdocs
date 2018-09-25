---
group: software-update-guide
title: Start the Module Manager
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/module-man/compman-start.html
---

## Start the Module Manager from the Magento Admin {#compman-access}

To run the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}Module{% endglossarytooltip %} Manager:

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Click **System** > **Web Setup Wizard**.
3. Click **Module Manager**.

   ![]({{site.baseurl}}/static/images/modman_select.png)

To upgrade Magento system software instead, see [Run System Upgrade]({{page.baseurl}}/system-update-upgrade/product/start.html).

See one of the following sections:

* [About the Module Manager](#modman-about)
* [Enable or disable a module](#modman-about-endis)

## About the Module Manager {#modman-about}

The Module Manager displays a list of currently installed modules. You can either disable a module that's currently enabled or you can enable a module that's currently disabled.

### Enabled and disabled modules {#modman-about-icons}

![A green icon means that the module is enabled]({{site.baseurl}}/static/images/cman_comp-status-green.png) Green, which means the module is enabled.

![A red icon means the module is disabled]({{site.baseurl}}/static/images/cman_comp-status-red.png) Red, which means the module is disabled.

### Use pagination controls {#modman-about-page}

To control the number of modules that display at a time, you can:

![Specify number of items to display on page]({{site.baseurl}}/static/images/cman_page_number.png) Specify the number of items to display on a page.

![Move back and forward or specify a page number]({{site.baseurl}}/static/images/cman_page_move.png) From left to right, move back one page, go to a specific page, or move forward one page.

### Display module dependencies {#modman-about-depend}

Any module that depends on other modules displays as follows:

![Module that depends on other modules]({{site.baseurl}}/static/images/modman_depend.png)

When you expand it, you see the modules it depends on; an example follows:

![]({{site.baseurl}}/static/images/modman_dependencies.png)

To disable such a module, you must first disable all dependent modules one at a time.

## Enable or disable a module {#modman-about-endis}

This example shows how to disable a currently enabled module. You can use the same basic procedure to enable a disabled module.

To disable a module:

1. Click **Disable** from the **Action** column, as the following figure shows.

   ![Disable a module]({{site.baseurl}}/static/images/modman_disable.png)

2. Continue with [Step 1. Readiness check]({{page.baseurl}}/system-update-upgrade/component-manager/readiness-check.html).

