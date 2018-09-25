---
group: installation-guide
title: Cannot install using nginx
functional_areas:
  - Install
  - System
  - Setup
redirect_from: /guides/v2.3/install-gde/trouble/php/tshoot_nginx-port.html
---

If you use the {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} web server and you attempt to install the Magento software, the installation sometimes fails.

### Detail

You can confirm the issue by the following error in the `var/report` directory:

```
NOTE: You cannot install Magento using the Setup Wizard because the Magento setup directory cannot be accessed.
You can install Magento using either the command line or you must restore access to the following directory: /var/www/html/setup
If you are using the sample nginx configuration, please go to http://ce.mtf03.bcn.magento.com/setup/";i:1;s:641:"#0 /var/www/html/lib/internal/Magento/Framework/App/Http.php(213): Magento\Framework\App\Http->redirectToSetup(Object(Magento\Framework\App\Bootstrap), Object(Exception))
```

### Workaround

Append `/setup` to the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} by which you access the Setup Wizard or install the Magento software using the [command line]({{page.baseurl}}/install/command-line.html).

