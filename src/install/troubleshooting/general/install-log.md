---
group: installation-guide
title: Installation fails; cannot create install.log
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/trouble/tshoot_install-log.html
---

### Symptom

The Setup Wizard does not create `install.log` during the installation; as a result, the installation fails.

### Details

Running Magento processes at the same time might result in problems creating the installation log. (For example, two different installations in separate tab pages.)

### Solution

Review your setting for `open_basedir` in `php.ini`. The Setup Wizard uses the [sys_get_temp_dir ( void )](http://php.net/manual/en/function.sys-get-temp-dir.php) PHP call to get the value of the temporary directory. If [open_basedir](http://php.net/manual/en/ini.core.php#ini.open-basedir) is set to refuse connections to a directory specified by `sys_get_temp_dir`, the installation fails.

To resolve the issue, change the value of `open_basedir` and restart the web server.

If you're not sure how to change this value, use the following steps:

1. If you haven't already done so, create [phpinfo.php]({{page.baseurl}}/install/getting-started/optional-software.html#install-optional-phpinfo).
2. Enter the following {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} in your browser's address or location field:

   <code><http://<your> web server IP or hostname>/&lt;path to docroot>/phpinfo.php</code>

3. Look for the location of `php.ini`.

   `php.ini` is typically specified as **Loaded Configuration File** in the displayed results.

4. As a user with root privileges, open `php.ini` in a text editor.
5. Locate the value of `open_basedir` and change it.
6. Save your changes to `php.ini`.
7. Restart the web server.

