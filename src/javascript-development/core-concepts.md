---
group: javascript-developer-guide
title: JavaScript
redirect_from: /guides/v2.3/javascript-dev-guide/javascript/js_overview.html
---

By default, the Magento application uses the [RequireJS file and module loader] to optimize the time of loading pages with included JavaScript files, and to manage dependencies of JavaScript resources.

You can follow the same approach when customizing Magento JavaScript, or [disable all the default scripts and their load by RequireJS].

For information about how JS resources are located and configured, see [Configure JavaScript].

## What's in this chapter {#js_contents}

Topics of this chapter describe the following:

* [JavaScript initialization]({{page.baseurl}}/javascript-development/core-concepts/script-initialize-call.html): how to initialize JavaScript components and widgets in JavaScript files and `.phtml` templates
* [Use custom JavaScript]({{page.baseurl}}/javascript-development/core-concepts/custom-code.html): how to extend or replace default JavaScript components/widgets.
* [Locate JavaScript]({{page.baseurl}}/javascript-development/core-concepts/locate-components.html) components: how to define which components (scripts) are used on a particular store page.
* [Magento jQuery widgets]({{page.baseurl}}/javascript-development/jquery-widget.html): Magento {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} documentation.
* [Customizing JavaScript illustration]({{page.baseurl}}/javascript-development/tutorial/widget-customization.html): practical illustration of custom widgets related tasks.

## Terms used {#js_terms}

| Term                                  | Description                                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| _JavaScript component (JS component)_ | Any separate `.js` file decorated as [AMD module].                                                                              |
| _Ui component_                        | JS component located in the `Magento_Ui` module, in the [app/code/Magento/Ui/view] directory.                                   |
| _jQuery UI widget_                    | A JS component/widget provided by [jQuery UI library used in Magento].                                                          |
| _jQuery widget_                       | Custom widget created using jQuery UI Widget Factory and decorated as AMD module. Many Magento JS components are jQuery widget. |

{:style="table-layout:auto"}

[requirejs file and module loader]: http://requirejs.org/

[disable all the default scripts and their load by requirejs]: {{page.baseurl}}/javascript-development/core-concepts/custom-code.html#disable_default_js

[configure javascript]: {{page.baseurl}}/javascript-development/core-concepts/resources.html

[amd module]: http://requirejs.org/docs/whyamd.html#amd

[app/code/magento/ui/view]: {{site.mage2000ur}}app/code/Magento/Ui/view

[jquery ui library used in magento]: {{site.mage2000url}}lib/web/jquery/jquery-ui-1.9.2.js

