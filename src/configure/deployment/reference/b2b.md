---
group: configuration-guide
title: Magento Enterprise B2B Extension configuration paths reference
functional_areas:
  - Configuration
  - System
  - Setup
redirect_from: /guides/v2.3/config-guide/prod/config-reference-b2b.html
---

This topic lists configuration paths for Magento Enterprise B2B Extension. The [`magento app:config:dump` command]({{page.baseurl}}/configure/command-line/export-configuration.html) writes these values to the shared configuration file, `app/etc/config.php`, which should be in source control.

{:.bs-callout .bs-callout-info}
This reference lists _only_ configuration paths unique to Magento Enterprise B2B Extension. Magento Enterprise B2B Extension includes all configuration paths for {{site.data.var.ce}} and {{site.data.var.ee}} as well.

For those configuration paths, see:

* [Payment configuration paths]({{page.baseurl}}/configure/deployment/reference/payment-paths.html)
* [Sensitive and system-specific configuration paths reference]({{page.baseurl}}/configure/deployment/reference/sensitive-settings.html)

To optionally override any configuration settings or to set sensitive settings, see [Use environment variables to override configuration settings]({{page.baseurl}}/configure/deployment/reference/environment-variables.html).

{% include config/config-reference-b2b.md %}

