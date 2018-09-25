---
group: cloud-guide
title: Install Magento
redirect_from: /guides/v2.3/cloud/before/before-setup-env-install.html
functional_areas:
  - Cloud
  - Install
  - Setup
  - Configuration
---

#### Previous step:

[Clone and branch the project]({{page.baseurl}}/cloud/setup/clone-project-master.html)

With your workspace prepared, install Magento on your local to verify custom code, extensions, and more. This section includes the installation prep, options, and post-installation configuration you should complete.

## Prepare to install Magento {#prepare}

To customize the Magento software on your local workstation, prepare the following:

* Hostname or IP address of your machine
* Admin username, password, and URL created earlier
* Magento authentication keys for installing Magento

#### To see the Magento Admin environment variables:

You need the ADMIN environment variables for the installation command line.

List the environment variables.

```bash
magento-cloud variable:get -e <environment-ID>
```

```terminal
+----------------+---------------+-----------+------+
| ID             | Value         | Inherited | JSON |
+----------------+---------------+-----------+------+
| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
| ADMIN_URL      | magento_A8v10 | Yes       | No   |
| ADMIN_USERNAME | admin_A456    | Yes       | No   |
+----------------+---------------+-----------+------+
```

### Get Magento authentication keys

You need Magento authentication keys to install Magento in your local development environment. These are different than the authentication keys included in the code repository `auth.json` file. See [Add Magento authentication keys]({{page.baseurl}}/cloud/setup/import-prepare.html).

#### To create authentication keys through the Magento Marketplace:

1. Log in to the [Magento Marketplace](https://marketplace.magento.com). If you do not have an account, click **Register**.

2. Click your account name in the top-right and select **My Profile**.

3. Click **Access Keys** under _My Products_ in the _Marketplace_ tab.

   ![Click Access Keys]({{site.baseurl}}/static/images/cloud_access-key.png)

4. Click **Create A New Access Key**.

5. Enter a specific name for the keys, for example _CloudProductOwner_ or the name of the developer receiving the keys.

6. The keys generate a **Public** and **Private** key you can click to copy. Save this information or keep the page open when installing {{site.data.var.ee}}.

## Set the docroot

Set the `docroot` to the `/magento` directory until you complete all setup. If you change the `docroot` to `/magento/pub` prior to completion, you will encounter issues running the Web Setup Wizard.

For the Production environment, set the `docroot` to `/magento/pub`, which helps restrict access to vulnerable areas of the system. The webserver `docroot` should be set to `/magento/pub` only after Magento is installed (including any upgrades and patches), configured, and static files generated and populated in `/magento/pub`. Alternatively, you could create a subdomain (for example, `install.domain.com`) and configure your webserver `docroot` to the Magento installed root folder.

## Set file system permissions and ownership {#file-system-permissions}

After you have installed Magento, you need to set the file system permissions and ownership.

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{page.baseurl}}/cloud/setup/setup-magento-file-system-owner.html).

2. Enter the following commands in the order shown:

   ```bash
   cd <your Magento install dir>
   ```

   ```terminal
   find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
   find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
   ```

   ```bash
   chown -R :<web server group> .
   ```

   ```bash
   chmod u+x bin/magento
   ```

{% include install/file-system-perms-twouser_cmds-only.md %}

## Install Magento

Prior to installing, you should [Update installation dependencies]({{page.baseurl}}/install/methods/git/update-dependencies.html#install-composer-install) using Composer commands.

Be ready to install Magento using one of the following options:

* [Install the Magento software using the command line]({{page.baseurl}}/install/command-line.html)
* [Install the Magento software using the Web Setup Wizard]({{page.baseurl}}/install/web-setup-wizard.html)

#### To install Magento using the command line:

1. Switch to the user.

   ```bash
   sudo su - magento
   ```

2. Change directories for the installation.

   ```bash
   cd /app/bin
   ```

3. Enter a CLI command with options for entering the name, email, ADMIN credentials, URL, and additional information. For a list of all options, see [Installer help commands]({{page.baseurl}}/install/command-line/install.html#instgde-cli-help-cmds).

   ```bash
   php magento setup:install \
     --admin-firstname=John \
     --admin-lastname=Smith \
     --admin-email=jsmith@mail.com \
     --admin-user=admin \
     --admin-password=password1 \
     --base-url=http://magento.local/ \
     --db-host=localhost \
     --db-name=magento \
     --db-user=magento \
     --db-password=magento \
     --currency=USD \
     --timezone=America/Chicago \
     --language=en_US \
     --use-rewrites=1
   ```

## Post-install configurations

After installing Magento, run the commands for [compile]({{page.baseurl}}/configure/command-line/compile-code.html) and [deploy]({{page.baseurl}}/configure/command-line/static-content/deploy.html) for the code:

1. Switch to the correct user.

   ```bash
   sudo su - magento
   ```

2. Change to the `app/bin` directory.

3. Compile Magento.

   ```bash
   php magento setup:di:compile
   ```

4. Deploy Magento

   ```bash
   php magento setup:static:deploy
   ```

Optionally, if you used Vagrant with the _hostmanager_ plugin, update the hosts file.

1. Access the `localdev` root for the Vagrant box.

2. Update the hosts file.

   ```bash
   vagrant hostmanager
   ```

## Additional software and services

For development and testing in an environment as close to Integration as possible, you may also want to install additional tools, software, and services. These services are configured using [`services.yaml`]({{page.baseurl}}/cloud/configure/services-yaml.html).

* [Redis]({{page.baseurl}}/cloud/configure/services-redis.html)
* [ElasticSearch]({{page.baseurl}}/cloud/configure/services-elasticsearch.html)
* [RabbitMQ]({{page.baseurl}}/cloud/configure/services-rabbitmq.html)
* [Additional software]({{page.baseurl}}/install/getting-started/optional-software.html) for Magento

## Verify your local workspace

To verify the local, access the store using the URL you passed in the install command. For this example, you can access the local Magento store using the following URL formats:

* `http://magento.local/`
* `http://magento.local/admin`

To change the URI for the Admin panel, use this command to locate it:

```
php bin/magento info:adminuri
```

To verify the Integration master branch environment, log into the Project Web Interface and select your named project. In the list of branches, select the Master. Click Access site to pull up a list of URLs (HTTP and HTTPS) and click the preferred link to open the site. To view the admin, add /admin or other configured Admin URI.

![Click Access for list of URLs]({{site.baseurl}}/static/images/cloud-project-master-access.png)

With these steps completed, you should have:

* Magento Commerce account and initial project setup and master branch
* A local workspace configured with installations of required software, Magento Cloud CLI, and Magento
* SSH keys set up
* The Magento file system owner configured
* Your initial code branch
* Magento authentication keys set up and configured in the project and local

## Next steps:

For **Pro projects**, we strongly recommend fully deploying this base Magento template `master` branch without any code or configuration changes to Staging and Production. For instructions, see [First time deployment]({{page.baseurl}}/cloud/setup/first-time-deploy.html).

For **Starter projects**, you are ready to start developing.

