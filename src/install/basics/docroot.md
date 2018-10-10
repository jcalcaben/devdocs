---
group: installation-guide
title: What is a docroot?
level3_menu_node: level3child
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/basics/basics_docroot.html
---

The web server document root (often referred to as the _docroot_) is where you put all the files your website needs to function. You can use your web server's default docroot or [modify it to enhance security]({{page.baseurl}}/install-gde/tutorials/change-docroot-to-pub.html). For example, you should restrict browser access to Magento-specific files after installation.

The path to your web server's default docroot varies depending on the following:

* Operating system
* Web server software
* Hosting provider (if you use one)

{:.bs-callout .bs-callout-warning}
As part of the Magento 2 installation process, you specify a subdirectory (usually `magento2`) under the docroot. The Magento-specific files are installed in this subdirectory, so knowing where to locate the default docroot is critical.

## Contact your hosting provider

If you use one, contact your hosting provider to locate the web server docroot. For example, [cPanel](http://support.hostgator.com/articles/cpanel/what-is-a-document-root-folder) typically uses `public_html` as its docroot, but you should contact your provider to confirm.

## Find the docroot yourself

This section assumes you've already set up a simple web server using [Apache virtual hosts](https://httpd.apache.org/docs/2.4/vhosts/) or [nginx server blocks](https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/).

{:.bs-callout .bs-callout-info}
You can use _virtual hosts_ and _server blocks_ to run more than one website on a single machine (e.g., `company1.example.com` and `company2.example.com`) or override the web server's default docroot without changing it.

To find the docroot on your server:

1. Open one of the following files in a text editor:

   * **Ubuntu**

     ```
     /etc/apache2/sites-available/000-default.conf (Apache)
     /etc/nginx/sites-available/default (nginx)
     ```

   * **CentOS**

     ```
     /etc/httpd/conf/httpd.conf (Apache)
     /etc/nginx/nginx.conf (nginx)
     ```

2. Search the file for `DocumentRoot` or `root`.

   Typically, the default Apache docroot on Ubuntu _and_ CentOS is `/var/www/html` whereas the default nginx docroot on CentOS is `/usr/share/nginx/html`. For example:

   * **Apache + Ubuntu/CentOS**

     ```
     DocumentRoot "/var/www/html"
     ```

   * **nginx + CentOS**

     ```
     root      /usr/share/nginx/html
     ```

