---
layout: tutorial
group: how-do-i
title: Customize Checkout
functional_areas:
  - Checkout
redirect_from: /guides/v2.3/howdoi/checkout/checkout_overview.html
---

Magento {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} is implemented using the [UI components]({{site.baseurl}}/guides/v2.1/ui_comp_guide/bk-ui_comps.html).
Out of the box, the checkout consists of two steps:

* Shipping Information
* Review and Payment Information

The checkout totals and the corresponding side-bar are only displayed after the first step is completed.

The only {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} is checkout of virtual and/or downloadable products: if there are only these  types of products in the shopping cart, checkout is automatically transformed to one-step procedure, because shipping information is not required.

{: .bs-callout .bs-callout-info }
For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Add your customizations in a custom {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

## List of available customizations

You can customize the default checkout in multiple ways. This tutorial includes the following customizations:

* [Add a new checkout step]({{page.baseurl}}/ui-components/checkout-tutorial/add-new-step.html)
* [Customize the view of an existing step]({{page.baseurl}}/ui-components/checkout-tutorial/customize-view.html)
* [Add a custom payment method to checkout]({{page.baseurl}}/ui-components/checkout-tutorial/add-custom-payment.html)
* [Add custom validations before order placement]({{page.baseurl}}/ui-components/checkout-tutorial/add-custom-validations.html)
* [Add custom shipping carrier validations]({{page.baseurl}}/ui-components/checkout-tutorial/add-custom-shipping.html)
* [Add custom input mask for ZIP code]({{page.baseurl}}/ui-components/checkout-tutorial/add-zip-code.html)
* [Add a custom template for a form field on Checkout page]({{page.baseurl}}/ui-components/checkout-tutorial/add-edit-form.html)
* [Add a new input form to checkout]({{page.baseurl}}/ui-components/checkout-tutorial/add-input-form.html)
* [Add a new field in address form]({{page.baseurl}}/ui-components/checkout-tutorial/add-address-field.html)
* [Add custom shipping address renderer]({{page.baseurl}}/ui-components/checkout-tutorial/add-shipping.html)

