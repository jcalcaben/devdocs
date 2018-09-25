---
group: php-developer-guide
title: Build
redirect_from: /guides/v2.3/extension-dev-guide/build/build.html
---

Building your component involves laying out the file structure, creating the necessary configuration files, building out any needed {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} interfaces and services, and adding any {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} parts needed for your component.

## Prerequisites {#create-component-basics}

Before you begin creating your new component, make sure that you have a working installation of Magento 2, and the Magento [System Requirements]({{page.baseurl}}/install-gde/system-requirements.html).

Also, Magento recommends that you disable caching while setting up the component file structure and adding configuration files.

The following details the component building process:

* [Create composer.json]({{page.baseurl}}/extension-development/files/composer-json.html)
* [Define your configuration files]({{page.baseurl}}/extension-development/build-tasks/configuration-files.html)
* [Create your component file structure]({{page.baseurl}}/extension-development/build-tasks/file-structure.html)
* [Register your component]({{page.baseurl}}/extension-development/build-tasks/register.html)
* [URN schema validation]({{page.baseurl}}/extension-development/validate-urn-schema.html)
* [Name your component]({{page.baseurl}}/extension-development/build-tasks/name.html)
* [Component load order]({{page.baseurl}}/extension-development/build-tasks/load-order.html)
* [Enable your component]({{page.baseurl}}/extension-development/build-tasks/enable-disable.html)

