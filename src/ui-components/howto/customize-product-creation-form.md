---
layout: tutorial
group: how-do-i
title: Customize product creation form
redirect_from: /guides/v2.3/howdoi/customize_product.html
---

This tutorial describes how developers can customize the product creation form used on the product creation and product edit pages in {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. The product creation form is implemented using the [form UI component]({{site.baseurl}}/guides/v2.1/ui_comp_guide/components/ui-form.html).

Product attributes and attribute sets available in the form, can be customized and added under **STORES** > **Attributes** in the Admin. But you can also customize the form view and behavior in code. The following sections describe what files define the form and how they can be customized in your {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

## Prerequisites {#prereqs}

[Set Magento to developer mode]({{page.baseurl}}/configure/command-line/set-magento-mode.html) while you perform all customizations and debugging.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Instead, add your customizations in a separate module.

## List of customization methods

This tutorial includes the following customizations:

* [Customize the form configuration]({{page.baseurl}}/howdoi/customize-form-configuration.html)
* [Customize using a modifier class]({{page.baseurl}}/howdoi/customize-modifier-class.html)

#### Recommended reading

* [Form UI component]({{page.baseurl}}/ui-components/components/form.html)
* [About PHP modifiers in UI components]({{page.baseurl}}/ui-components/concepts/php-modifiers.html)
* [Dependency injection]({{page.baseurl}}/extension-development/core-concepts/dependency-injection.html)

The following image is an illustration of the default view of the form on the **New Product** page:

![The product creation page in Admin]({{site.baseurl}}/static/images/product_pmg.png)

