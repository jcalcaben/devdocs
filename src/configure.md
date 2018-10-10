---
group: configuration-guide
title: Configuration Guide
functional_areas:
  - Configuration
  - System
  - Setup
redirect_from: /guides/v2.3/config-guide/bk-config-guide.html
---

## Configure the Magento application {#configuration}

You can configure the Magento application in any of the following ways:

* General configuration

  * ```
    Using a [command-line utility]({{page.baseurl}}/config-guide/cli/config-cli.html) (for example, enable or disable cache types, run indexers, set up translations, and so on)
    ```
  * ```
    Manually to set up [bootstrap parameters]({{page.baseurl}}/config-guide/bootstrap/magento-bootstrap.html)
    ```

* Caching

  * [Set up Varnish]({{page.baseurl}}/configure/caching/varnish.html)
  * [Set up caching]({{page.baseurl}}/configure/cache.html)
  * [Use Redis for the Magento page and default cache]({{page.baseurl}}/configure/caching/redis/use-redis.html)
  * [Use Redis for session storage]({{page.baseurl}}/configure/caching/redis/session-storage.html)
  * [Set up database caching]({{page.baseurl}}/config-guide/cache/caching-database.html)

* Magento in production

  * [pipeline deployment]({{page.baseurl}}/config-guide/deployment/pipeline/)
  * [Magento ownership and permissions in development and production]({{page.baseurl}}/configure/deployment/file-system-ownership-permissions.html)
  * [Single machine deployment]({{page.baseurl}}/configure/deployment/single-machine.html)

* Session storage

  * [memcache]({{page.baseurl}}/configure/caching/session-storage.html)
  * [Redis]({{page.baseurl}}/configure/caching/redis/session-storage.html)
  * [How to locate session files]({{page.baseurl}}/configure/caching/session-storage/locate-files.html)

* Search engine

  * [Install and configure Elasticsearch]({{page.baseurl}}/configure/search/elastic-search.html)

* Message queues

  * [RabbitMQ]({{page.baseurl}}/configure/message-queues.html)

* {{site.data.var.ee}} only
  * [Split databases]({{page.baseurl}}/configure/database/split-database-performance.html)

