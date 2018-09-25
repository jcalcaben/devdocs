---
group: installation-guide
title: cron readiness check issues
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/trouble/readiness/tshoot_rc_cron.html
---

Following are symptoms of cron issues:

* An error message about the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} setting `$HTTP_RAW_POST_DATA` displays even though it's set properly
* The PHP readiness check doesn't display the PHP version as the following figure shows.

  ![]({{site.baseurl}}/static/images/upgr-tshoot-no-cron.png)

* The following error displays in the Magento Admin:

  ![cron isn't running]({{site.baseurl}}/static/images/compman-cron-not-running.png)

  To see the error, you might need to click **System Messages** at the top of the window as follows:

  ![System Messages]({{site.baseurl}}/static/images/compman_sys-messages.png)

{% include install/trouble/rc_cron.md %}

