---
group: php-developer-guide
title: Developer roadmap
redirect_from: /guides/v2.3/extension-dev-guide/intro/developers_roadmap.html
---

This topic introduces the high-level workflow for a developer who wants to create or customize the Magento application. Developers can also package and distribute their customizations to merchants.

## Key points

* Minimum required elements:

  * [Declare component dependencies]({{page.baseurl}}/extension-development/files/composer-json.html) in `composer.json`.
  * [Register]({{page.baseurl}}/extension-development/build-tasks/register.html) the component using `registration.php`.
  * Component-specific XML definition files:

    * Modules: [`module.xml`]({{page.baseurl}}/extension-development/build-tasks/name.html)
    * Themes: [`theme.xml`]({{page.baseurl}}/frontend-development/themes/create-theme.html#fedg_create_theme_how-to_declare)
    * Language packages: [`language.xml`]({{page.baseurl}}/configure/command-line/localization.html#config-cli-subcommands-xlate-pack-meta-xml)

* Distribute your component:

  * [Package your component]({{page.baseurl}}/extension-development/package.html) in `.zip` format.

    Use our [validation tool](https://github.com/magento/marketplace-tools) to check your package before you distribute it.

  * If you upload the component to Magento Marketplace, it should be less than 30MB in size.

