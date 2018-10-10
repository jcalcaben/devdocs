---
group: configuration-guide
title: Overview
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
redirect_from: /guides/v2.3/config-guide/deployment/pipeline/index.html
---

{% include config/split-deploy/split-deploy-overview.md %}

## Other deployment methods

You can optionally use other deployment methods, including:

* Secure copying with SCP or rsync
* [Capistrano](http://capistranorb.com/documentation/overview/what-is-capistrano)
* The [Deployer tool](https://deployer.org/)
* Other methods discussed on the [Community resources page]({{site.baseurl}}/community/resources/#installdeploy)

## Manage the configuration

Modeling after [factor 3 in the 12-factor app design](https://12factor.net/config), Magento now stores the configuration for each system in the system itself. (Development configuration settings are stored on the development system, production settings are stored on the production system.)

We also provide a way to synchronize the configuration of your systems:

{% include config/split-deploy/config-mgmt-over1.md %}

For a complete list of configuration paths, see the following references:

* [Sensitive and system-specific configuration paths reference]({{page.baseurl}}/configure/deployment/reference/sensitive-settings.html)
* [Payment configuration paths reference]({{page.baseurl}}/configure/deployment/reference/payment-paths.html)
* [Other configuration paths reference]({{page.baseurl}}/configure/deployment/reference/other.html)
* [Magento Enterprise B2B Extension configuration paths reference]({{page.baseurl}}/config-guide/prod/config-reference-b2b.html)

## Assumptions

{% include config/split-deploy/split-deploy-assumptions.md %}

#### Next step

[Deployment technical overview (implementation details)]({{page.baseurl}}/configure/deployment/pipeline/technical-details.html)

