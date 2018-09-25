---
group: php-developer-guide
title: PHP Developer Guide
landing-page: PHP Developer Guide
redirect_from: /guides/v2.3/extension-dev-guide/bk-extension-dev-guide.html
---

The {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} Developer Guide contains information for developers who want to know more about developing or modifying Magento components. With this knowledge you can extend or customize any of the existing components in the Magento application. You can also create components that introduce new functionality and distribute them to merchants.

## Magento components

The Magento application is made up of _Modules_, _Themes_, and _Language Packages_:

* [**Modules**]({{page.baseurl}}/architecture/components/modules.html) interact with other parts of the application to accomplish a particular business function or provide a feature. A {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} can contain a user interface for displaying information or interacting with the user. It can also contain application interfaces that another Magento module or code chunk might call.

* [**Themes**]({{page.baseurl}}/Delete) provide a personalized touch for each Magento installation by changing the look and feel of the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. Two themes are already available within the default Magento 2.x code structure: Blank theme and Luma theme. Refer to these default themes when creating custom themes. 

* [**Language packages**]({{page.baseurl}}/frontend-development/translations.html) assist in internationalization(i18n) and localization by providing translations for strings that display on the storefront and Admin.

{: .bs-callout .bs-callout-info }
You must follow a [PSR-4 compliant](http://www.php-fig.org/psr/psr-4/) structure when building a module.

#### Related topics

* [Developer roadmap]({{page.baseurl}}/extension-development/roadmap.html)
* [Introduction to Composer]({{page.baseurl}}/extension-development/core-concepts/composer.html)
* [Glossary of common terms]({{page.baseurl}}/remove)

