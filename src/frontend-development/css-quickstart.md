---
group: frontend-developer-guide
title: Quick start guide to working with styles for a new theme
functional_areas:
  - Frontend
redirect_from: /guides/v2.3/frontend-dev-guide/css-guide/css_quick_guide_overview.html
---

This chapter combines the topics aiming to help you to quickly start working with styles of your custom theme:

* [Simple ways to customize a theme's styles]
* [Simple style changes with client-side LESS compilation vs. server-side]

## High-level steps to create a theme and change styles

1. [Set] your Magento application to the developer [mode].
2. In the file system, [add a new theme] inheriting from Magento Blank or Luma.
3. [Apply your theme]
4. Decide which CSS compilation mode you will use. Compilation modes are described in the following topics:
   * Detailed description: [Styles debugging]
   * Practical illustration: [Simple style changes with client-side LESS compilation vs. server-side]
5. Customize styles. To learn how, check out the following sources:
   * [CSS chapter of this book][css overview]
   * [Simple ways to customize a theme's styles]

## Why do you need to create a custom theme?

Magento provides two themes out of the box: Blank and Luma. If Magento is installed with sample data, the theme applied after installation is Luma. If no sample data is installed, the Blank theme is installed by default.

![Storefront with Luma applied]

Luma inherits from Blank, which contains all the basic functionality and styling required for a theme.

You can use either Luma or Blank for your storeview, if there is literally nothing you want to change in their design.

But if there is something you want to improve, the only recommended way is creating a new theme. It can inherit from Blank or Luma so you can preserve all you need, and change or add whatever is required.

Making changes in the Magento out-of-the-box themes is a bad idea, because can result in your changes being overwritten during upgrade.

## Related topics

* [CSS in Magento themes][css overview]
* [Simple ways to customize a theme's styles]
* [Simple style changes with client-side LESS compilation vs. server-side]

<!-- Link Definitions -->

[simple ways to customize a theme's styles]: {{page.baseurl}}/frontend-development/css-quickstart/customize.html

[simple style changes with client-side less compilation vs. server-side]: {{page.baseurl}}/frontend-development/css-quickstart/modes.html

[set]: {{page.baseurl}}/configure/command-line/set-magento-mode.html

[mode]: {{page.baseurl}}/configure/application-initialization/magento-modes.html

[add a new theme]: {{page.baseurl}}/frontend-development/themes/create-theme.html

[apply your theme]: {{page.baseurl}}/frontend-development/themes/apply-theme.html

[styles debugging]: {{page.baseurl}}/frontend-development/css/debug.html

[simple style changes with client-side less compilation vs. server-side]: {{page.baseurl}}/frontend-development/css-quickstart/modes.html

[css overview]: {{page.baseurl}}/frontend-development/css.html

[simple ways to customize a theme's styles]: {{page.baseurl}}/frontend-development/css-quickstart/customize.html

[simple style changes with client-side less compilation vs. server-side]: {{page.baseurl}}/frontend-development/css-quickstart/modes.html

<!-- Image definitions -->

[storefront with luma applied]: {{site.baseurl}}/static/images/css_guide_luma21.png

