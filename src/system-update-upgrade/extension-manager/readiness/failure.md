---
group: software-update-guide
title: Readiness check failure
level3_menu_node: level3child
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/extens-man/extensman-readiness-fail.html
---

## Readiness check failure {#compman-readiness-fail}

Messages similar to the following display if any readiness check fails. 

![You must resolve all readiness check failures before you continue]({{site.baseurl}}/static/images/cman_readiness-fail-ex.png)

{: .bs-callout .bs-callout-info }
If you're updating multiple extensions, see [Readiness check with multiple extension updates]({{page.baseurl}}/system-update-upgrade/extension-manager/readiness/multiple-check.html#extensman-readiness-multi-fail) instead.

In the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} of failure, see one of the following sections:

* [Updater check failure]({{page.baseurl}}/system-update-upgrade/troubleshoot/updater.html)
* [Cron script check failure]({{page.baseurl}}/system-update-upgrade/troubleshoot/cron.html)
* [Component dependency check failure]({{page.baseurl}}/system-update-upgrade/troubleshoot/component-dependency.html)
* [PHP version readiness check issues]({{page.baseurl}}/system-update-upgrade/troubleshoot/php-version.html)
* [PHP settings errors]({{page.baseurl}}/install/troubleshooting/php/settings.html)
* [PHP extensions check failure]({{page.baseurl}}/install-gde/system-requirements.html)

