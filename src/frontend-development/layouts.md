---
group: frontend-developer-guide
title: Layout overview
functional_areas:
  - Frontend
redirect_from: /guides/v2.3/frontend-dev-guide/layouts/layout-overview.html
---

## What's in this topic

This article describes the basic concepts you need to know to create layouts for your custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

## Introduction

In Magento, the basic components of page design are layouts, containers, and blocks. A _layout_ represents the structure of a web page (1). _Containers_ represent the placeholders within that web page structure (2). And _blocks_ represent the UI controls or components within the container placeholders (3). These terms are illustrated and defined below.

![web page sample layout][layout]

(1) _Layouts_ provide the structures for web pages using an XML file that identifies all the containers and blocks composing the page. The details of layout XML files are described later in this section.

(2) _Containers_ assign content structure to a page using container tags within a layout XML file. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer.

(3) _Blocks_ render the UI elements on a page using block tags within a layout XML file. Blocks use templates to generate the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} to insert into its parent structural block. Examples of blocks include a {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} list, a mini cart, product tags, and product listing.

## Basic layouts

The basic view of all Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} pages in defined in two page configuration layout files located in the Magento_Theme module:

* `<Magento_Theme_module_dir>/view/frontend/layout/default.xml`: defines the page layout.
* `<Magento_Theme_module_dir>/view/frontend/layout/default_head_blocks.xml`: defines the scripts, images, and meta data included in pages' `<head>` section.

These basic page configuration layouts are extended in other Magento modules and in Magento themes.

You can also [extend] or [override] these files in your custom theme.

## Layout handles {#layout-over-terms}

A _layout handle_ is a uniquely identified set of {% glossarytooltip bcbc9bf8-3251-4b3c-a802-07417770af3b %}layout instructions{% endglossarytooltip %} that serves as a name of a layout file.

There are three kinds of layout handles:

* **page-type layout handles** – Synonyms of the page type identifiers. Correspond to "full action names" of controller actions, for example, catalog_product_view.
* **page layout handles** – Identifiers of specific pages. Correspond to controller actions with parameters that identify specific pages, for example, catalog_product_view_type_simple_id_128 or for a CMS page, cms_page_view_id_home.xml.
* **arbitrary handles** - Do not correspond to any page type, but other handles use them by including.

## Layout files types and conventions

### Layout file types: by role

For a particular page, its layout is defined by two major layout components: _page layout_ file and _page configuration_ file (or _generic layout_ for pages returned in AJAX requests, emails, and so on).

Following are the definitions of each layout file type:

* _Page layout_: an XML file declaring a page wireframe inside the `<body>` section of the HTML page markup, for example, two-column page layout.
* _Page configuration_: an XML file declaring detailed structure, contents and meta-information of a page (includes the `<html>`, `<head>`, and `<body>` sections of the HTML page markup).
* _Generic layout_: an XML file declaring page detailed structure and contents inside the `body` section of the HTML page markup. Used for pages returned by AJAX requests, emails, HTML snippets, and so on.

For details, refer to [Layout file types].

In this guide we use _layout files_ when talking about concepts which are similarly applied to all of these types of layout files.

### Module and theme layout files {#layout-loc}

The following terms are used to distinguish layouts provided by different application components:

* _Base layouts_: Layout files provided by modules. Conventional location:
  		_ Page configuration and generic layout files: `<module_dir>/view/frontend/layout`
  		_ Page layout files: `<module_dir>/view/frontend/page_layout`
* _Theme layouts_: Layout files provided by themes. Conventional location:
  		_ Page configuration and generic layout files: `<theme_dir>/<Namespace>_<Module>/layout`
  		_ Page layout files: `<theme_dir>/<Namespace>_<Module>/page_layout`

## Customize layout {#layout-custom}

To ensure stability and secure your customizations from being deleted during upgrade, do not change out-of-the-box Magento {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and theme layouts.
To make the necessary changes, create [extending][extend] and [overriding][override] layout files in your custom theme.

## Layout files processing {#layout_processing}

The Magento application processes layout files in the following order:

1. Collects all layout files from modules. The order is determined by the modules order in the module list from `app/etc/config.php`.
2. Determines the sequence of [inherited] themes `[<parent_theme>, ..., <parent1_theme>] <current_theme>`
3. Iterates the sequence of themes from last ancestor to current:

   a.	Adds all extending theme layout files to the list.

   b.	Replaces overridden layout files in the list.

4. Merges all layout files from the list.

Layout files that belong to inactive modules or modules with disabled output are ignored.
{: .bs-callout .bs-callout-info #info}

## Layout files validation

After layouts are merged, Magento validates them.

Layout validations and error handling depends on the [application mode] in which you Magento instance runs:

* developer mode: syntax is validated in `.xml` and `.xsd` files, and `.xml` files are validated according to the xsd schema. If any validation fails, the hard failure with process halt occurs.

* production or default modes: syntax is validated in `.xml` and `.xsd` files. If validation fails, errors are logged to the `var/log` directory without throwing an exception. The validation according to the xsd schema is not performed.

## Related topics

* [Layout instructions]
* [Common layout customization tasks]
* [Extend a layout][extend]
* [Override a layout][override]
* [Customizing layout - step-by-step illustration]

<!-- Link definitions -->

[extend]: {{page.baseurl}}/frontend-development/layouts/extend.html

[override]: {{page.baseurl}}/frontend-development/layouts/override.html

[layout file types]: {{page.baseurl}}/frontend-development/layouts/file-types.html

[inherited]: {{page.baseurl}}/frontend-development/themes/set-inheritance.html

[application mode]: {{page.baseurl}}/configure/application-initialization/magento-modes.html

[layout instructions]: {{page.baseurl}}/frontend-development/layouts/xml-instructions.html

[common layout customization tasks]: {{page.baseurl}}/frontend-development/layouts/common-customization-tasks.html

[customizing layout - step-by-step illustration]: {{page.baseurl}}/frontend-development/layouts/sample-customization.html

<!-- Image Definitions -->

[layout]: {{site.baseurl}}/static/images/layouts_block_containers_defn21.png

