---
group: cloud-guide
title: Import existing code into a project
level3_menu_node: level3child
redirect_from: /guides/v2.3/cloud/setup/first-time-setup-import-first-steps.html
functional_areas:
  - Cloud
  - Setup
---

You can create a {{site.data.var.ece}} project from a blank template or by importing existing code. We recommend starting with a blank template first, and then importing existing Magento code on top of it.

## Prerequisites for importing code {#prereqs}

Before you begin, do the following:

* Add the existing {{site.data.var.ee}} code to a Git repository. We recommend using [GitHub]({{page.baseurl}}/cloud/integrations/github-integration.html).
* Set up your [local development environment]({{page.baseurl}}/cloud/setup/first-time-setup.html).
* Gather required information:

  * [SSH access link](#ssh) to the target environment
  * [Database credentials](#db-creds)

### SSH access to cloud environments {#ssh}

To transfer the database dump and files to {{site.data.var.ece}}, you must know the SSH access link. You can locate the SSH access link using the [`magento-cloud`] CLI tool({{page.baseurl}}/cloud/reference/cli-ref-topic.html):

  magento-cloud environment:ssh --pipe

{:.bs-callout .bs-callout-info}
You must enter all {{site.data.var.ece}} commands on the machine on which your Cloud SSH keys are stored. For more information, see [Enable SSH keys]({{page.baseurl}}/cloud/setup/enable-setup-ssh-keys.html) and [SSH and sFTP]({{page.baseurl}}/cloud/env/environment-intro/ssh-access.html).

### Database credentials {#db-creds}

You need your {{site.data.var.ece}} database name and credentials so that you can import your {{site.data.var.ee}} data. You can find the name and credentials for your {{site.data.var.ece}} database in the `$MAGENTO_CLOUD_RELATIONSHIPS` environment variable.

To find {{site.data.var.ece}} database access information:

1. Log in to your remote repository using  [SSH]({{page.baseurl}}/cloud/env/environment-intro/ssh-access.html#ssh).

   ```
   magento-cloud ssh -p <project ID> -e <environment ID>
   ```

2. List all database information:

   ```
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp

   <pre class="no-copy">database" : [
         {
            "username" : "user",
            "query" : {
               "is_master" : true
            },
            "path" : "main",
            "port" : 3306,
            "host" : "database.internal",
            "password" : "",
            "scheme" : "mysql",
            "ip" : "192.0.2.150"
         }
      ]</pre>
   ```

In the previous example, the database name is `main`, the listen port is `3306`, the hostname is `database.internal`, the root username is `user`, and the user has no password.

### Cloud unsecure base URL

After you import the {{site.data.var.ee}} database into {{site.data.var.ece}}, you must change the base URL so you can access the Magento Admin and storefront.

Use the magento-cloud CLI tool to locate the base URL:

```
magento-cloud url
```

## Import workflow for existing code {#import}

The complete workflow for importing existing code includes the following steps:

1. If you do not have a project, create a new [project from a template](#cloud-import-proj). This new project has files and directories specific to {{site.data.var.ece}}.
2. [Replace the contents]({{page.baseurl}}/cloud/setup/import.html) of this project with your code using Git.
3. [Import your Magento database]({{page.baseurl}}/cloud/setup/import.html#cloud-import-db) into your {{site.data.var.ece}} project.
4. [Import your static files]({{page.baseurl}}/cloud/setup/import.html#media) into your {{site.data.var.ece}} project.
5. Copy your {{site.data.var.ee}} [encryption key]({{page.baseurl}}/cloud/setup/import.html#encryption-key) to your {{site.data.var.ece}} project. This key is required for data migration and access.
6. Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} and verify the project imported successfully.

## Create a new {{site.data.var.ece}} project {#cloud-import-proj}

1. Access your account. Open the email you received from Magento Cloud (accounts@magento.cloud) and click the _Access your project now_ link. Or you can log in to [your Magento Commerce account](https://accounts.magento.cloud).

2. Click the _This project has no code yet_ link next to the project name.

   ![Project without code]({{site.baseurl}}/static/images/cloud_project_empty.png)

3. Enter a name for the project.

   ![Project name]({{site.baseurl}}/static/images/cloud_project_name.png)

4. Click **Create a blank site from a template** and click **Continue**. We recommend starting with the Magento template as your initial project option. If you have an existing Magento deployment, you can import existing code later.

   ![Create a site using the sample Magento project]({{site.baseurl}}/static/images/cloud_project_template.png)

5. When prompted, enter your {{site.data.var.ee}} [Magento authentication keys]({{page.baseurl}}/install/getting-started/magento-authentication-keys.html) in the provided fields. You created these keys earlier in the Magento Marketplace. Enter the private and public keys and click **Finish**.

   ![Enter your authentication keys]({{site.baseurl}}/static/images/cloud-project-magento-auth-creds.png)

   The keys are added to the `auth.json` file and the file is required for all branches and deployments.

6. Wait a few minutes while the project deploys. A status of _Pending_ displays until completed, similar to the following:

   ![Your sample Magento project]({{site.baseurl}}/static/images/cloud_project_template2.png)

7. After the project deploys, **Success** displays next to the name of your project.

#### Next step

[Prepare your existing Magento Commerce install]({{page.baseurl}}/cloud/setup/import-prepare.html)

