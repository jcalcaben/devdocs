---
group: installation-guide
title: 'During installation, xdebug maximum function nesting level error'
redirect_from: /guides/v2.3/install-gde/trouble/php/tshoot_xdebug.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During the installation, a  message similar to the following displays:

```
PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in <path>/ClassLoader.php
```

### Solution

There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} after installation.</p>

<p>For details, see [Known issue with xdebug]({{page.baseurl}}/install-gde/trouble/tshoot_install-issues.html#known-devbeta-xdebug).

