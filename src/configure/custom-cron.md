---
group: configuration-guide
title: Set up a custom cron job and cron group
functional_areas:
  - Configuration
  - System
  - Setup
redirect_from: /guides/v2.3/config-guide/cron/custom-cron.html
---

These topics discuss how to set up a custom cron job and optionally a custom cron group. If your Magento {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} requires scheduled tasks to run periodically, you can use these topics to set up a cron _job_ (the scheduled task) and optionally a cron _group_ (which runs custom tasks at the same time).

If you use a Magento-provided cron group, you don't have to define a custom cron group; however, if you want your cron jobs to run at a different schedule or you want them all to run together, you should define a cron group

The Magento application provides the following cron groups:

* `default`, which contains most cron jobs
* `index`, which refreshes [indexers]({{page.baseurl}}/configure/command-line/manage-indexers.html)
* These topics are available in {{site.data.var.ee}} only
  * `staging`, which runs [Staging-related](http://docs.magento.com/m2/ee/user_guide/cms/content-staging.html) tasks
  * `catalog_event`, which runs tasks for target and shopping cart rules

See the following topics for details:

* [Custom cron job and cron group reference]({{page.baseurl}}/configure/custom-cron/reference.html)
* [Configure a custom cron job and cron group (tutorial)]({{page.baseurl}}/configure/custom-cron/tutorial.html)

