---
group: configuration-guide
title: Build System Setup
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
redirect_from: /guides/v2.3/config-guide/deployment/pipeline/build-system.html
---

You can have one build system that meets the following requirements:

* All Magento code is under source control in the same repository as the development and production systems
* Make sure all of the following are _included_ in source control:

  * `app/etc/config.php`
  * `generated` directory (and subdirectories)
  * `pub/media` directory
  * `pub/media/wysiwyg` directory (and subdirectories)
  * `pub/static` directory (and subdirectories)

* Must have a compatible PHP version installed
* Must have Composer installed
* It has Magento file system ownership and permissions set as discussed in [Prerequisite for your development, build, and production systems]({{page.baseurl}}/configure/deployment/pipeline/technical-details.html#config-deploy-prereq).

The build system does _not_ need any of the following:

* Magento database connection
* Magento software installed (only the code must be present)

{:.bs-callout .bs-callout-info}
The build machine can be on its own host or on the same host as an installed Magento system.

## Configure the build machine

The following sections discuss how to configure the build machine.

### Install Composer

{% include install/composer-clone.md %}

### Install PHP

To install PHP on CentOS or Ubuntu see [PHP](../../../install-gde/prereq/php-centos-ubuntu.html).

### Set up the build system

To set up the build system:

1. Log in to the build system as, or switch to, the Magento file system owner.
2. Retrieve the Magento code from source control.

   If you use Git, use the following command:

   ```
   git clone [-b <branch name>] <repository URL>
   ```

3. Change to the Magento root directory and enter:

   ```
   composer install
   ```

4. Wait for Magento dependencies to update.
5. Set ownership:

   ```
   chown -R <magento file system owner name>:<web server username> .
   ```

   For example,

   ```
   chown -R magento_user:apache .
   ```

6. If you use Git, open `.gitignore` in a text editor.
7. Start each of the following lines with a `#` character to comment them out:

   ```
   # app/etc/config.php
   # pub/media/*
   # generated/*
   # pub/media/*.*
   # pub/media/wysiwyg/*
   # pub/static/*
   ```

8. Save your changes to `.gitignore` and exit the text editor.
9. If you use Git, use the following commands to commit the change:

   ```
   git add .gitignore && git commit -m "Modify .gitignore for build and production"
   ```

   See the [`.gitignore` reference]({{page.baseurl}}/configure/deployment/reference/gitignore.html) for more information.

#### Related topics

* [Set up your development systems]({{page.baseurl}}/configure/deployment/pipeline/development-system.html)
* [Set up your production system]({{page.baseurl}}/configure/deployment/pipeline/production-system.html)

