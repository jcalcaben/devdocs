---
group: installation-guide
title: Transfer the Magento software to your hosted system
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/install/hosted/hosted_get-ftp.html
---

## Magento installation overview {#newbie-ftp-overview}

1. Download the software to your computer.
2. Set up the File Transfer Protocol (FTP) to your hosted system.
3. Upload the archive to your system using FTP.
4. Extract the archive.

{% include install/archives-php-issue.md %}

{% include install/get-software_zip.md %}

## Set up FTP and transfer the Magento archive {#set-up-ftp}

FTP is a way to transfer files from your computer to your managed server. To transfer the Magento archive, you need an FTP account that has access to the managed server's `public_html` directory. You might already have an account. If not, consult your shared hosting provider's documentation or technical support for more information.

### Transfer the Magento archive to your hosted system

To transfer the Magento archive:

1. Start your FTP client software.
2. Create a connection to your managed server.

   Follow the prompts on your screen or consult the documentation provided with your FTP software for more information.

3. After you log in to your managed server, browse to locate the Magento archive on your local system.

   On the remote system, browse to locate the `public_html` directory.

   The following figure shows an example.

   ![]({{site.baseurl}}/static/images/install-merch_ftp-transfer.png)

4. Transfer the archive from your local system to the `public_html` directory.

   On some FTP client software, you do this by dragging and dropping.

5. Wait while the transfer completes.

## Extract the archive {#extract-perms}

After transferring the Magento archive to your hosted system, you can use the cPanel to extract it, after which you can run the Magento Setup Wizard to install the software.

To extract the archive:

1. If necessary, log in to the cPanel.
2. In the Files section, click **File Manager**.


3. Click **Web Root**.

   ![]({{site.baseurl}}/static/images/install-merch_file-manager-setup.png)

4. Click **Go**.

   The File Manager displays in a separate browser window or tab page.

5. Right-click the Magento archive in the **public_html** directory.
6. From the pop-up menu, click **Extract** as the following figure shows.

   ![]({{site.baseurl}}/static/images/install-merch_file-manager-window.png)

7. Click **Extract Files**.
8. Wait while the archive extracts.

   The following figure shows an example of an extracted archive.

   ![]({{site.baseurl}}/static/images/install-merch_file-manager-after.png)

#### Next step

[Install the Magento software]({{page.baseurl}}/install/hosted.html)

