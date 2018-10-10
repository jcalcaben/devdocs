---
group: javascript-developer-guide
title: JavaScript Developer Guide
landing-page: JavaScript Developer Guide
redirect_from: /guides/v2.3/javascript-dev-guide/bk-javascript-dev-guide.html
---

## Introduction {#overview-introduction}

By default, the Magento application uses the [RequireJS file and module loader] to optimize the time of loading pages with included JavaScript files, and to manage dependencies of JavaScript resources.

You can follow the same approach when customizing Magento JavaScript, or [disable all the default scripts and their load by RequireJS].

For information about how JS resources are located and configured, see the [JavaScript resources] topic in the Configuration Guide.

## What's in this guide {#js_contents}

Topics of this book describe the following:

* [JavaScript initialization] - how to initialize JavaScript components and widgets in JavaScript files and `.phtml` templates
* [Use custom JavaScript] - how to extend or replace default JavaScript components/widgets.
* [Locate JavaScript] components - how to define which components (scripts) are used on a particular store page.
* [Magento jQuery widgets] - Magento jQuery widget API documentation.
* [Customizing JavaScript illustration] - practical illustration of custom widgets related tasks.

JavaScript automatic testing is described in a separate [JavaScript unit testing] topic.

## Terms used {#js_terms}

| Term                                  | Description                                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| _JavaScript component (JS component)_ | Any separate `.js` file decorated as [AMD module].                                                                              |
| _Ui component_                        | JS component located in the `Magento_Ui` module, in the [app/code/Magento/Ui/view] directory.                                   |
| _jQuery UI widget_                    | A JS component/widget provided by [jQuery UI library used in Magento].                                                          |
| _jQuery widget_                       | Custom widget created using jQuery UI Widget Factory and decorated as AMD module. Many Magento JS components are jQuery widget. |

{:style="table-layout:auto"}

[amd module]: http://requirejs.org/docs/whyamd.html#amd

[`magento_ui`]: {{site.mage2100url}}app/code/Magento/Ui

[app/code/magento/ui/view]: {{site.mage2100url}}app/code/Magento/Ui/view

[jquery ui library used in magento]: {{site.mage2100url}}lib/web/jquery/jquery-ui-1.9.2.js

[jquery widget]: https://jqueryui.com/widget/

[requirejs file and module loader]: http://requirejs.org/

[disable all the default scripts and their load by requirejs]: {{page.baseurl}}/javascript-development/core-concepts/custom-code.html#disable_default_js

[javascript resources]: {{page.baseurl}}/javascript-development/core-concepts/resources.html

[javascript initialization]: {{page.baseurl}}/javascript-development/core-concepts/script-initialize-call.html

[use custom javascript]: {{page.baseurl}}/javascript-development/core-concepts/custom-code.html

[locate javascript]: {{page.baseurl}}/javascript-development/core-concepts/locate-components.html

[magento jquery widgets]: {{page.baseurl}}/javascript-development/jquery-widget.html

[customizing javascript illustration]: {{page.baseurl}}/javascript-development/tutorial/widget-customization.html

[javascript unit testing]: {{page.baseurl}}/testing/js/jasmine.html

