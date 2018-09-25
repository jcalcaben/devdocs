---
group: installation-guide
title: Configure a database and a database user
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/install/hosted/hosted_start_db.html
---

To configure a MySQL database and database user:

1. In the Databases section, click **MySQL Databases** as the following figure shows.

   ![Start out creating a database]({{site.baseurl}}/static/images/install-merch_conf-db.png)

2. In the **New Database** field, enter a unique name for your database and click **Create Database**.

   ![Create a database]({{site.baseurl}}/static/images/install-merch_create-db.png){:width="550px"

3. In the MySQL Users section, enter information in the provided fields and click **Create User**.

   {:.bs-callout .bs-callout-info}
   Give the database user a strong password and <em>write down</em> the username and password you choose. You can optionally click **Password Generator** to create a strong password for you.

   ![Create a database user]({{site.baseurl}}/static/images/install-merch_create-db-user.png)

4. In the Add User to Database section, click the name of your Magento database and database user from the respective fields and click **Add**.

   ![Add the user to the database]({{site.baseurl}}/static/images/install-merch_add-user-to-db.png)

   The Manage User Privileges page displays.

5. Select the **ALL PRIVILEGES** checkbox at the top of the page and click **Make Changes**.

   ![Give the database user all privileges to the database]({{site.baseurl}}/static/images/install-merch_db-user-privs.png)

#### Next step

[Configure PHP]({{page.baseurl}}/install/hosted/system-requirements/configure-php.html)

