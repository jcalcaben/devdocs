---
group: php-developer-guide
title: Introduction to Composer
redirect_from: /guides/v2.3/extension-dev-guide/intro/intro-composer.html
---

{% include install/composer-overview.md %}

## Links to Magento code

The key to developing any {% glossarytooltip 3425e9ae-5edf-4fc6-b645-06023e9e5e5b %}Magento component{% endglossarytooltip %} is its [`composer.json`](https://getcomposer.org/doc/04-schema.md), which specifies version and dependency information for a component, among other things. You can look at Magento 2 code, such as:

* Metapackage, look at `<your Magento install dir>/composer.json`.
* [Customer module]({{site.mage2000url}}app/code/Magento/Customer/composer.json)
* [Luma theme]({{site.mage2000url}}app/design/frontend/Magento/luma/composer.json)
* [en_us language package]({{site.mage2000url}}app/i18n/magento/en_us/composer.json)

## For more information

For more information about Composer, see the [Composer documentation](https://getcomposer.org/doc/00-intro.md).

