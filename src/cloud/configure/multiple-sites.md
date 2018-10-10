---
group: cloud-guide
title: Set up multiple websites or stores
functional_areas:
  - Cloud
  - Configuration
  - Setup
  - Stores
redirect_from: /guides/v2.3/cloud/project/project-multi-sites.html
---

You can configure {{site.data.var.ee}} to have multiple websites or stores, such as an English store, a French store, and a German store. See [Understanding websites, stores, and store views]({{page.baseurl}}/cloud/configure/configure-best-practices.html#sites). The process to set up multiple stores is as follows:

1. Configure and test your local installation.
2. Configure {{site.data.var.ece}} routes and variables.
3. Push the changes to an Integration environment and test.

## Configure your local installation

To configure your local installation to use multiple stores, see [Multiple websites or stores]({{page.baseurl}}/configure/multi-site.html).

After successfully creating and testing the local installation to use multiple stores, you must prepare your Integration environment:

1. **Configure routes**—specify how incoming URLs are handled by {{site.data.var.ee}}
2. **Set up websites, stores, and store views**—configure using the {{site.data.var.ee}} Admin panel
3. **Modify `magento-vars.php` file**—specify the values of the `MAGE_RUN_TYPE` and `MAGE_RUN_CODE` variables
4. **Deploy**—deploy and test the `integration` branch

### Configure routes

Magento Enterprise Edition _routes_ define how incoming URLs are processed. The way you configure routes depends on how you want your site to operate. We suggest configuring routes for integration as follows. You can edit the values later if your needs change.

{:.bs-callout .bs-callout-info}
To set up routes in a staging or production environment, you must create a [Support ticket]({{page.baseurl}}/cloud/troubleshooting/troubleshooting-intro.html).

#### To configure routes in an integration environment:

1. On your local workstation, log in as the [Magento file system owner]({{page.baseurl}}/cloud/setup/setup-magento-file-system-owner.html).

2. Change to your {{site.data.var.ee}} base directory.

3. Open the `.magento/routes.yaml` file in a text editor.

4. Replace the contents with the following:

   ```
   "http://{default}/":
   	type: upstream
   	upstream: "mymagento:php"

   "https://{default}/":
   	type: upstream
   	upstream: "mymagento:php"

   "http://*.{default}/":
   	type: upstream
   	upstream: "mymagento:php"

   "https://*.{default}/":
   	type: upstream
   	upstream: "mymagento:php"
   ```

5. Save your changes to the `routes.yaml` file.

### Set up websites, stores, and store views

In the Admin panel, set up your {{site.data.var.ee}} websites, stores, and store views. See [Set up multiple websites, stores, and store views in the Admin]({{page.baseurl}}/configure/multi-site/setup-admin.html).

#### To retrieve Admin login information:

1. On your local workstation, log in as the [Magento file system owner]({{page.baseurl}}/cloud/setup/setup-magento-file-system-owner.html).

2. Change to your {{site.data.var.ee}} base directory.

3. Log in to your account.

   ```bash
   magento-cloud login
   ```

4. List the environments.

   ```bash
   magento-cloud environment:list
   ```

5. Check out your environment.

   ```bash
   magento-cloud environment:checkout <environment-ID>
   ```

6. Access the public URLs:

   ```bash
   magento-cloud environment:url
   ```

7. View Admin login information in the variable list.

   ```bash
   magento-cloud variable:list
   ```

Make sure you name your websites, stores, and store views in your Cloud Admin the same as you did when you set up your local installation.

See [Set up multiple websites, stores, and store views in the Admin]({{page.baseurl}}/configure/multi-site/setup-admin.html).

### Modify the `magento-vars.php` file

Instead of configuring an NGINX virtual host, pass the `MAGE_RUN_CODE` and `MAGE_RUN_TYPE` variables using the `magento-vars.php` file located in your project root directory.

#### To pass variables using the `magento-vars.php` file:

1. Open the `magento-vars.php` file in a text editor.

2. Uncomment everything after the first two lines.

3. Move the entire block starting with `if (isHttpHost("example.com")` after `function isHttpHost($host)`.

   The file should look like the following:

   ```php
   // enable, adjust and copy this code for each store you run
   // Store #0, default one
   function isHttpHost($host)
   {
       if (!isset($_SERVER['HTTP_HOST'])) {
          return false;
       }
          return strpos(str_replace('.', '.', $_SERVER['HTTP_HOST']), $host) === 0;
   }
   if (isHttpHost("example.com")) {
       $_SERVER["MAGE_RUN_CODE"] = "default";
       $_SERVER["MAGE_RUN_TYPE"] = "store";
   }
   ```

4. Change the following line:

   From:

   ```php
   return strpos(str_replace('.', '.', $_SERVER['HTTP_HOST']), $host) === 0;
   ```

   To:

   ```php
   return $_SERVER['HTTP_HOST'] ===  $host;
   ```

5. Replace the following values in the `if (isHttpHost("example.com"))` block:

   * `example.com`—with the base URL of your website
   * `default`—with the unique code for your website or store view
   * `store`—with one of the following values:
     * `website`—load the website in the storefront
     * `store`—load a storeview in the storefront

   ```php
   // enable, adjust and copy this code for each store you run
   // Store #0, default one
   function isHttpHost($host)
   {
       if (!isset($_SERVER['HTTP_HOST'])) {
       return false;
       }
       return $_SERVER['HTTP_HOST'] ===  $host;
   }
   if (isHttpHost("french.branch-sbg7pPa-f3dueAiM03tpy.us.magentosite.cloud"))
   {
       $_SERVER["MAGE_RUN_CODE"] = "french";
       $_SERVER["MAGE_RUN_TYPE"] = "website";
   }
   ```

6. Save your changes to the `magento-vars.php` file.

### Deploy and test on the Integration server

The final step is to push your changes to your {{site.data.var.ece}} server and test your site there.

1. Add, commit, and push code changes to the remote branch.

   ```bash
   git add -A && git commit -m "Implement multiple sites" && git push origin <branch name>
   ```

2. Wait for deployment to complete.

3. After deployment, open your site base URL in a web browser.

   Use the format: `http://<magento-run-code>.<site-URL>`  
   For example, `http://french.master-name-projectID.us.magentosite.cloud/`

4. Test your site thoroughly and merge the code to the `integration` branch for further deployment.

### Deploy to Staging and Production

Follow the deployment process for [deploying to Staging and Production]({{page.baseurl}}/cloud/deploy/migrate-files-data.html). For Starter and Pro environments, you use the Project Web Interface to push code across environments. For Pro accounts created before October 23, 2017 and not updated, you can use [SSH and CLI commands]({{page.baseurl}}/cloud/deploy/migrate-files-data.html#classic).

We recommend fully testing in the Staging environment prior to pushing to the Production environment. If you need to make changes, you should complete those in the Integration environment and begin the process to deploy across environments again.

