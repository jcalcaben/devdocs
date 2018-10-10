---
group: software-update-guide
title: Run System Upgrade
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/upgrader/upgrade-checklist.html
---

## Overview of System Upgrade {#compman-overview}

This section discusses how to start System Upgrade, which upgrades the version of Magento core components as well as any other installed components.

You can upgrade in any of the following ways:

* Using the System Upgrade utility, a wizard that walks you through the upgrade step by step; continue with this topic.

  Use this method if you don't have a to the Magento server's file system or if you're a non-technical user.

* Using the [command line]({{page.baseurl}}/system-update-upgrade/cli.html).

  This upgrade method is more advanced and it requires access to the Magento server's file system.	

{:.bs-callout .bs-callout-info}
_System upgrade_ refers to updating the Magento 2.x core components and other installed components. To migrate from Magento 1.x to Magento 2, see the [Migration Guide]({{page.baseurl}}/migration.html).

{:.bs-callout .bs-callout-warning}

* Authorization keys from a [shared account](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html) _cannot_ be used for upgrade. You must get your authorization keys from `magento.com` account owner.
* If you installed the Magento application by [cloning the GitHub repository]({{page.baseurl}}/install/methods/git.html), you _cannot_ use the System Upgrade utility to upgrade the software. Instead, you must [update it manually]({{page.baseurl}}/install/methods/git.html).

## System Upgrade checklist

{% include comp-man/checklist_2.2.md %}

#### Next step

[Start System Upgrade]({{page.baseurl}}/system-update-upgrade/product/start.html)

