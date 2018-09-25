---
group: frontend-developer-guide
title: Overview of responsive web design in Magento
redirect_from: /guides/v2.3/frontend-dev-guide/responsive-web-design/rwd_overview.html
functional_areas:
  - Frontend
---

Responsive web design (RWD, also referred as _responsive design_) crafts web sites to provide an optimal viewing experience across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

The out of the box Magento Blank and Luma themes (Luma [inherits]({{page.baseurl}}/frontend-development/themes/set-inheritance.html) from Blank) use the mobile first RWD approach. It is ensured mostly by means of CSS and JavaScript.

The following image illustrates how the same page built on the Blank {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} looks on mobile, tablet and desktop devices.

![]({{site.baseurl}}/static/images/css_responsive1.jpg)

We recommend using the Blank theme, as a starting point for your customizations. That is, your custom theme should [inherit]({{page.baseurl}}/frontend-development/themes/set-inheritance.html) from Blank.

The articles in this chapter describe the particular approaches used in the Blank theme, and provide practical recommendations on how to use these approaches in your themes:

* [CSS in Magento responsive design]
* [JavaScript in Magento responsive design]
* [Customizing RWD: illustration]
* [Create a responsive mobile theme based on Blank]

## Terms used {#fedg_rwd_terms}

  Term           Description

* * *

  _Breakpoint_   The width of the user's screen that causes your responsive layout to change.

## Recommended reading

* [Magento Themes]({{page.baseurl}}/Delete)

[css in magento responsive design]: {{page.baseurl}}/frontend-development/responsive-web-design/css.html

[javascript in magento responsive design]: {{page.baseurl}}/frontend-development/responsive-web-design/js.html

[customizing rwd: illustration]: {{page.baseurl}}/frontend-development/responsive-web-design/sample-customization.html

[create a responsive mobile theme based on blank]: {{page.baseurl}}/frontend-development/responsive-web-design/mobile.html

