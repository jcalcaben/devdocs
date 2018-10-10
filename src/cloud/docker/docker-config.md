---
group: cloud-guide
title: Launch Docker configuration
redirect_from: /guides/v2.3/cloud/docker/docker-config.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The `{{site.data.var.ct}}` package v2002.0.13 or later deploys to a read-only file system in the Docker container, which mirrors the read-only file system deployed in the Production environment. You can use the `docker:build` command in the `{{site.data.var.ct}}` package to generate the Docker compose configuration and deploy {{site.data.var.ece}} in a Docker container. To specify a particular version, use the following options:

* PHP: `--php`
* NGINX: `--nginx`
* MariaDB: `--db`

This version also provides a `docker:config:convert` command to convert PHP configuration files to Docker ENV files.

#### To launch Docker:

1. Download a template from the [Magento Cloud repository](https://github.com/magento/magento-cloud).

2. Add your credentials to the `auth.json` file.

3. Install the template dependencies.

   ```bash
   composer install
   ```

   {: .bs-callout .bs-callout-info}
   You can use the `--ignore-platform-reqs` option to bypass restrictions related to the PHP version.

4. In your local environment, start the Docker configuration generator.

   ```bash
   vendor/bin/ece-tools docker:build
   ```

5. Copy the raw configuration files.

   ```bash
   cp docker/config.php.dist docker/config.php
   ```

   ```bash
   cp docker/global.php.dist docker/global.php
   ```

6. Convert the PHP configuration files to Docker ENV files.

   ```bash
   vendor/bin/ece-tools docker:config:convert
   ```

   This command generates the following Docker ENV files:

   * `docker/config.env`
   * `docker/global.env`

   {: .bs-callout .bs-callout-info}
   The `{{site.data.var.ct}}` v2002.0.12 package does not support the `docker:config:convert` command.

7. Build files to containers and run in the background.

   ```bash
   docker-compose up -d --build
   ```

8. Install Magento in your Docker environment.

   * Build Magento in the Docker container:

     ```bash
     docker-compose run build cloud-build
     ```

   * Deploy Magento in the Docker container:

     ```bash
     docker-compose run deploy cloud-deploy
     ```

   {: .bs-callout .bs-callout-info}
   For `{{site.data.var.ct}}` v2002.0.12, install Magento with the `docker-compose run cli magento-installer` command.

9. Access your local Magento Cloud template by opening one of the following secure URLs in a browser:

   * [`http://localhost:8080`](http://localhost:8080)

   * [`https://localhost`](https://localhost)

#### To stop and remove the Docker configuration:

Remove all components of your local Docker instance including containers, networks, volumes, and images.

```bash
docker-compose down
```

