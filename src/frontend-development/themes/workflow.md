---
group: frontend-developer-guide
title: Theme development workflow
functional_areas:
  - Frontend
  - Theme
redirect_from: /guides/v2.3/frontend-dev-guide/themes/theme-workflow.html
---

Continue From:
**Install Magento**

### Enable development mode

In the Magento root directory, run:

```php
php bin/magento deploy:mode:set developer
```

See:

* [About Magento modes]({{page.baseurl}}/configure/application-initialization/magento-modes.html)
* [Get started with command-line configuration]({{page.baseurl}}/configure/command-line/getting-started.html)

{:.bs-callout .bs-callout-tip}
To check the current mode of your Magento instance, in the root directory, run:

```bash
php bin/magento deploy:mode:show
```

### Create basic theme files

In the `<magento_root>/app/design/frontend/<Your_Vendor>/<your_theme>` directory, create the following files:

* `theme.xml`
* `registration.php`
* (optionally) `composer.json`

For details, see [Create a new storefront theme]({{page.baseurl}}/frontend-development/themes/create-theme.html)

### Apply the theme

1. In the Admin Panel, go to **CONTENT** > **Design** > **Configuration**
2. Find the record corresponding to your store view and click **Edit**.
3. In the **Applied Theme** drop-down, select your newly created theme.
4. Click **Save Configuration**.

For details, see [Apply and configure a storefront theme]({{page.baseurl}}/frontend-development/themes/apply-theme.html)

### Choose .less compilation mode

#### Grunt (recommended)

* [Setup Grunt]({{page.baseurl}}/frontend-development/tools/using-grunt.html)
* [Add the theme to Grunt configuration]({{page.baseurl}}/frontend-development/css/debug.html#add_theme)
* [Track changes]({{page.baseurl}}/frontend-development/css/debug.html#grunt_commands)

#### Client-side compilation

See [CSS preprocessing#client-side compilation mode]({{page.baseurl}}/frontend-development/css/preprocess.html#client-side)

#### Server-side compilation (default)

See [CSS preprocessing#server-side compilation mode]({{page.baseurl}}/frontend-development/css/preprocess.html#server-side)

#### Custom preprocessor

See [Using custom CSS preprocessor]({{page.baseurl}}/remove)

### Create your styles

See:

* [Quick start guide to working with styles]({{page.baseurl}}/frontend-development/css-quickstart.html)
* [All about styles in Magento themes]({{page.baseurl}}/frontend-development/css.html)

### Debug

See:

* [Locate the CSS/Less file you need to change]({{page.baseurl}}/frontend-development/themes/debug-theme.html)
* [CSS source maps]({{page.baseurl}}/frontend-development/css/debug.html#source_maps)
* [Track changes using Grunt]({{page.baseurl}}/frontend-development/css/debug.html#use_cases)

### Clean cache and/or static files if necessary

* Certain changes in styles require cleaning previously pre-processed and published static view files. Run `grunt clean <theme>` or manually clear the `pub/static` and `var/view_preprocessed` directories. Do this after any changes in server-side compilation mode. For the client-side or Grunt compilation, see [Сlean static files]({{page.baseurl}}/frontend-development/css/preprocess.html#css_exception) for details.

* Changes in layout and templates requires cleaning cache. See [Clean cache]({{page.baseurl}}/frontend-development/cache.html#clean_cache) for details.

### Make sure that the same styles are delivered to production (optional)

When you finish developing and your styles are ready to go to production, you can configure your Grunt/Gulp less compiler to minify compiled code, disable source maps generation and then copy the compiled files to `/app/design/frontend/<Vendor>/<theme>/web/css` directory next to source files. They will be used in static content deploy instead of running backend compilation (and static content deployment process will run faster).

### Switch to production mode

In the Magento root directory, run:

```php
php bin/magento deploy:mode:set production
```

See [Magento modes]({{page.baseurl}}/configure/application-initialization/magento-modes.html#production-mode) for details.

### Deploy static content

To publish your static files to the `pub/static` directory when your Magento instance is set to production mode, [run the static content deployment tool]({{page.baseurl}}/configure/command-line/static-content/deploy.html).

