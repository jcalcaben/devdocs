---
group: frontend-developer-guide
title: Cascading style sheets (CSS)
functional_areas:
  - Frontend
redirect_from: /guides/v2.3/frontend-dev-guide/css-topics/css-overview.html
---

## Overview

Magento 2 incorporates [Less](http://lesscss.org/), a CSS pre-processor that simplifies the management of complex CSS files.
To define styles of a Magento store, you can use both - CSS and Less stylesheets.

Magento application provides a built-in Less UI library, which you can optionally extend. 

To customize {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} styles, you need to [create a custom design theme]({{page.baseurl}}/frontend-development/themes/create-theme.html). Then you can use one of the following approaches:

* If your theme [inherits]({{page.baseurl}}/frontend-development/themes/set-inheritance.html) from the Magento out-of-the-box Blank or Luma theme, you can override the default Less files; for example to [change the values of the variables]({{page.baseurl}}/frontend-development/css/ui-library.html#fedg_using-ui-lib_predef-vars) used in the default files. 
* Create your own Less files using the built-in Less preprocessor. 
* Create your own CSS files, optionally having compiled them using third-party CSS preprocessor.

## Things to remember when working with styles

Make sure that you [set]({{page.baseurl}}/configure/command-line/set-magento-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}/configure/application-initialization/magento-modes.html).

If your style changes do not apply after refreshing the page, cleaning the static files cache might help. See the [Clean static files cache topic]({{page.baseurl}}/frontend-development/cache.html#clean_static_cache) for instructions how to do this.

## Change styles: walkthrough {#css_walk}

Here is a simple illustration of changing styles using the first approach: changing the color of the buttons of a certain class.
In the Blank theme, the buttons of the `.action.primary` class, so called _primary_ buttons, are blue. The following image illustrates this:

![The default view of a product page, with the orange Add to Cart button]

OrangeCo wants to change the color of the primary buttons to orange. To achieve this, they do the following:

1. Create a new Orange theme, which inherits from the Blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.
2. In the Orange theme directory add the overriding `app/design/frontend/OrangeCo/orange/web/css/source/_theme.less` file with the following code:

   ```less
   //  Primary button
   @button-primary__color: @color-white;
   @button-primary__hover__color: @color-white;
   @button-primary__background: @color-orange-red1;
   @button-primary__hover__background: @color-orange-red4;
   @button-primary__border: 1px solid @color-orange-red2;
   @button-primary__hover__border: 1px solid @color-orange-red2;
   ```

When OrangeCo [applies their theme]({{page.baseurl}}/frontend-development/themes/apply-theme.html), the primary buttons will look like on the following image:

![The customized view of a product page, with the grey Add to Cart button]

## What's in this chapter {#css_topics}

Other topics of this chapter describe the following:

* [Including CSS]({{page.baseurl}}/frontend-development/css/include-css.html): how stylesheets are organized and included to be used for store pages in the Magento application. 
* [CSS Preprocessing]({{page.baseurl}}/frontend-development/css/preprocess.html): how stylesheets are preprocessed and compiled
* [Magento UI Library]({{page.baseurl}}/frontend-development/css/ui-library.html): how to use the Magento styles {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} in your custom themes
* [Using Custom Fonts]({{page.baseurl}}/frontend-development/css/custom-fonts.html): how to add custom fonts 
* [Customizing styles illustration]({{page.baseurl}}/frontend-development/css/illustration.html): how to change a theme's color scheme using Magento UI library. 

[the default view of a product page, with the orange add to cart button]: {{site.baseurl}}/static/images/css_over1.png

[the customized view of a product page, with the grey add to cart button]: {{site.baseurl}}/static/images/css_over2.png

