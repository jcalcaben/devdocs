---
group: migration-guide
title: After Migration
redirect_from: /guides/v2.3/migration/migration-migrate-after.html
functional_areas:
  - Tools
---

After you have completed your migration and thoroughly tested your new Magento 2 site, perform the following tasks:

* Put Magento 1 in maintenance mode and permanently stop all {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} activities

* Start Magento 2 cron jobs

* [Flush all Magento 2 cache types]({{page.baseurl}}/configure/command-line/manage-cache.html#config-cli-subcommands-cache-clean)

* [Reindex all Magento 2 indexers]({{page.baseurl}}/configure/command-line/manage-indexers.html#config-cli-subcommands-index-reindex)

* Change DNS, load balancers, etc. to point to Magento 2 production hardware

