---
group: software-update-guide
title: Readiness check with multiple extension updates
level3_menu_node: level3child
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/extens-man/extensman-readiness-multi.html
---

## Readiness check with multiple extension updates {#extensman-readiness-multi}

If you're updating multiple extensions, the readiness check displays success and failure as discussed in this topic.

### Successful readiness check {#extensman-readiness-multi-success}

{% collapsible Successful readiness check %}

![Readiness check with multiple extension updates]({{site.baseurl}}/static/images/extensman_read-upd-multi-success.png)

You have the following options:

* Click **Update** or **Next** to continue to [Step 2. Backup]({{page.baseurl}}/system-update-upgrade/extension-manager/backup.html) with no changes
* To update the extension to a different version, select the desired version from the list 
* To remove the extension from the list and _not_ update it, click ![Remove extension from the list]({{site.baseurl}}/static/images/extensman_delete.png) (delete)

If you make changes, click **Try Again**.

{% endcollapsible %}

### Readiness check failure (conflicting dependencies) {#extensman-readiness-multi-fail}

{% collapsible Readiness check failure (conflicting dependencies) %}

If the readiness check fails because of version conflicts, you must resolve the conflicts before you continue your update. The following figure shows an example:

![Readiness check failure with multiple updates]({{site.baseurl}}/static/images/extensman_read-upd-multi-fail.png)

You have the following options:

* Click **Back** and select different extensions to update
* From the list, click different versions of the selected extensions
* To remove the extension from the list and _not_ update it, click ![Remove extension from the list]({{site.baseurl}}/static/images/extensman_delete.png) (delete)

After you make your changes, click **Try Again**. Repeat the process as necessary to resolve the conflicts.

{% endcollapsible %}

### Readiness check failure (other failures) {#compman-readiness-fail}

{% collapsible Readiness check failure (other failures) %}

Messages similar to the following display if a readiness check fails. 

![You must resolve all readiness check failures before you continue]({{site.baseurl}}/static/images/cman_readiness-fail-ex.png)

In the event of failure, see one of the following sections:

* [Updater check failure]({{page.baseurl}}/system-update-upgrade/troubleshoot/updater.html)
* [Cron script check failure]({{page.baseurl}}/system-update-upgrade/troubleshoot/cron.html)
* [Component dependency check failure]({{page.baseurl}}/system-update-upgrade/troubleshoot/component-dependency.html)
* [PHP version readiness check issues]({{page.baseurl}}/system-update-upgrade/troubleshoot/php-version.html)
* [PHP settings errors]({{page.baseurl}}/install/troubleshooting/php/settings.html)
* [PHP extensions check failure]({{page.baseurl}}/install-gde/system-requirements.html)

{% endcollapsible %}

#### Next step

[Step 2. Backup]({{page.baseurl}}/system-update-upgrade/extension-manager/backup.html)

