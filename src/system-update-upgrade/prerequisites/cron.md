---
group: software-update-guide
title: Set up cron for update and upgrade
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/prereq/prereq_cron.html
---

To enable us to update or upgrade your system, you must have two cron jobs. Each cron job should run every minute.

The cron jobs schedule tasks for the Setup Wizard and for the updater application. These applications work together to install, update, and upgrade the Magento application and components.

{% include config/setup-cron_2.2_about.md %}

{% include config/setup-cron_2.2_how-to.md %}

For more information about cron, including how to remove a crontab and run cron from the command line, see [Configure and run cron]({{page.baseurl}}/configure/command-line/cron.html).

