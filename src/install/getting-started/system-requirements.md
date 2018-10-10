---
group: installation-guide
title: Magento 2.3.x technology stack requirements
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/system-requirements-tech.html
---

### Operating systems (Linux x86-64)

Linux distributions, such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and similar.

### Memory requirement

Upgrading the Magento applications and extensions you obtain from Magento Marketplaces and other sources can require up to 2GB of RAM. If you are using a system with less than 2GB of RAM, we recommend you create a [swap file]({{page.baseurl}}/system-update-upgrade/troubleshoot/out-of-memory.html); otherwise, your upgrade might fail.

### Composer (latest stable version)

{% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} is required for developers who wish to contribute to the Magento 2 codebase or anyone who wishes to develop Magento extensions.

### Web servers

* [Apache 2.2 or 2.4](http://httpd.apache.org/download.cgi)

  In addition, you must enable the Apache `mod_rewrite` and `mod_version` modules. The [`mod_rewrite`](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html) module enables the server to perform URL rewriting. The [`mod_version`](https://httpd.apache.org/docs/2.4/mod/mod_version.html) module provides flexible version checking for different `httpd` versions. For more information, see [our Apache documentation]({{page.baseurl}}/install/getting-started/apache.html).

* [nginx 1.x](https://nginx.org/en/download.html)

### Database

MySQL 5.6, 5.7

Magento is also compatible with MySQL NDB Cluster 7.4.\*, MariaDB 10.0, 10.1, 10.2, Percona 5.7, and other binary-compatible MySQL technologies.

{:.bs-callout .bs-callout-info}
Magento only uses MySQL features compatible with MariaDB. MariaDB may not be compatible with all MySQL features, however, so be sure to research compatibility issues before using a feature in your Magento module.

### PHP

{:.bs-callout .bs-callout-info}
Magento, with assistance from our community, is implementing PHP 7.2 compatibility for the 2.3.0 release. Any backward-incompatibility issues will be resolved in this release, and all 3rd party libraries now support PHP 7.2. Fully tested 7.2 support will be delivered in following patch releases. If you are interested in participating in Magento Community projects we welcome your help! See our [ZenHub board](https://app.zenhub.com/workspace/o/magento-engcom/php-7.2-support/boards?repos=116423356,116426364,115111902) for a full list of outstanding issues.

{% include install/php_2.3.md %}

#### Required PHP extensions

{:.bs-callout .bs-callout-info}
The [PHP installation instructions](prereq/php-centos-ubuntu.html) include a step for installing these extensions.

* [bc-math](http://php.net/manual/en/book.bc.php) ({{site.data.var.ee}} only)
* [ctype](http://php.net/manual/en/book.ctype.php)
* [curl](http://php.net/manual/en/book.curl.php)
* [dom](http://php.net/manual/en/book.dom.php)
* [gd](http://php.net/manual/en/book.image.php)
* [intl](http://php.net/manual/en/book.intl.php)
* [mbstring](http://php.net/manual/en/book.mbstring.php)
* [hash](http://php.net/manual/en/book.hash.php)
* [openssl](http://php.net/manual/en/book.openssl.php)
* [PDO/MySQL](http://php.net/manual/en/ref.pdo-mysql.php)
* [SimpleXML](http://php.net/manual/en/book.simplexml.php)
* [soap](http://php.net/manual/en/book.soap.php)
* [spl](http://php.net/manual/en/book.spl.php)
* [libxml](http://php.net/manual/en/book.libxml.php)
* [xsl](http://php.net/manual/en/book.xsl.php)
* [azip](http://php.net/manual/en/book.zip.php)
* [json](http://php.net/manual/en/book.json.php)
* [iconv](http://php.net/manual/en/book.iconv.php)

#### PHP OPcache

We strongly recommend you verify that  [PHP OPcache](http://php.net/manual/en/intro.opcache.php) is enabled for performance reasons. The OPcache is enabled in many PHP distributions. To verify if it is installed, see our [PHP documentation](prereq/php-centos-ubuntu.html).

If you must install it separately, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php).

#### PHP settings

We recommend particular PHP configuration settings, such as `memory_limit`, that can avoid common problems when using Magento.

For more information, see [Required PHP settings]({{page.baseurl}}/install/getting-started/php/settings.html).

### SSL

* A valid {% glossarytooltip 363d6806-6a7d-4cb6-bc47-efc62bc26a1c %}security certificate{% endglossarytooltip %} is required for HTTPS.
* Self-signed SSL certificates are not supported.
* Transport Layer Security (TLS) requirement - PayPal and `repo.magento.com` both require TLS 1.1 or later:

  * [More information about PayPal]({{page.baseurl}}/install/getting-started/system-requirements/paypal-tls.html)

  * [More information about `repo.magento.com`]({{site.baseurl}}/guides/v2.1/release-notes/tech_bull_tls-repo.html)

### Mail server

Mail Transfer Agent (MTA) or an SMTP server

### Technologies Magento can use

* [Redis]({{page.baseurl}}/configure/caching/redis.html) version 3.2 (compatible with 2.4+ ) for page caching and session storage
* [Varnish]({{page.baseurl}}/configure/caching/varnish.html) version 4.x or 5.2

* [Elasticsearch]({{page.baseurl}}/configure/search/elastic-search.html)

  {{site.data.var.ee}} version 2.3.x supports the following Elasticsearch versions:

  * Elasticsearch [5.2.x](https://www.elastic.co/downloads/past-releases/elasticsearch-5-2-2)
  * Elasticsearch [2.x](https://www.elastic.co/downloads/past-releases/elasticsearch-2-4-5)

  Magento 2.3 uses [Elasticsearch PHP client](https://github.com/elastic/elasticsearch-php) version 5.2. (Before version 2.3, Magento used PHP client version 5.1.)

* RabbitMQ 3.7.x (compatible with 2.0 and later)

  [RabbitMQ]({{page.baseurl}}/configure/message-queues.html) can be used to publish messages to queue and to define the consumers that receive the messages asynchronously.

#### {{site.data.var.ee}} only

* Three master databases

  These [master databases]({{page.baseurl}}/configure/database/split-database-performance.html) provide scalability advantages for different functional areas of the Magento application such as checkout, orders, and all remaining Magento2 application tables.

### Optional but recommended

* [php_xdebug 2.5.x](http://xdebug.org/download.php) or later (development environments only; can have an adverse effect on performance)

{:.bs-callout .bs-callout-info}
There is a known issue with `xdebug` that can affect Magento installations or access to the storefront or Magento Admin after installation. For details, see [Known issue with xdebug]({{page.baseurl}}/install/troubleshooting/other/known-issues.html#known-devbeta-xdebug).

* [`mcrypt`](http://php.net/manual/en/book.mcrypt.php)
* PHPUnit (as a command-line tool) 6.2.0

