---
group: functional-testing-framework-guide
title: Quick start. Prepare Magento application
redirect_from: /guides/v2.3/mtf/mtf_quickstart/mtf_quickstart_magento.html
---

## Change WYSIWYG settings

A Selenium web-driver cannot enter data to fields with {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %}. This option disables the WYSIWYG and enables the web-driver to process these fields as simple text areas.

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Follow **Stores > Configuration > General > Content Management > WYSIWYG Options**.
3. Set **Enable WYSIWYG Editor** to **Disabled Completely**.
4. Click **Save Config**.

![Change content settings]({{site.baseurl}}/static/images/ftf/mtf_qstart_mag_wysiwyg.png)

## Change security settings

Enable the **Admin Account Sharing** setting to avoid unpredictable logout during testing session. And disable the **Add Secret Key in URLs** setting to open pages using direct URLs.

1. Follow **Stores > Configuration > Advanced > {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} > Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.

![Change security settings]({{site.baseurl}}/static/images/ftf/mtf_qstart_mag_secur.png)

## Refresh page cache

* Go to **Cache Management**.
  ![Cache Management message]({{site.baseurl}}/static/images/ftf/mtf_cache_mngt.png)

* Select the checkboxes next to **Configuration** and **Page Cache**.
* * From the **Actions** list in the upper left, click **Refresh**.
* * Click **Submit**.
    \## Enable CLI commands

Functional tests require access to utilities working with Magento during test run. Depending on a web server, use the following instructions to enable access to the commands.

### Apache

Copy `/dev/tests/functional/.htaccess.sample` to `/dev/tests/functional/.htaccess`.

### NGINX

In `nginx.conf`, add declaration blocks for each command listed in `/dev/tests/functional/.htaccess.sample` using the following example:

{% highlight nginx %}

location ~\* ^/dev/tests/functional/utils($|/) {
    root $MAGE_ROOT;
    location ~ ^/dev/tests/functional/utils/command.php {
        fastcgi_pass   fastcgi_backend;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

location ~\* ^/dev/tests/functional/utils($|/) {
    root $MAGE_ROOT;
    location ~ ^/dev/tests/functional/utils/website.php {
        fastcgi_pass   fastcgi_backend;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

{% endhighlight %}

[&lt;&lt; Adjust configuration]({{page.baseurl}}/testing/functional-testing-framework/quick-start/configuration-setting.html) | [Prepare environment for test run >>]({{page.baseurl}}/testing/functional-testing-framework/quick-start/environment-setting.html)

