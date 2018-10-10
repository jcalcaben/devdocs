---
group: software-update-guide
title: Error upgrading from CE to EE
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/trouble/cman/ce-ee-upgrade.html
---

### Problem: Error upgrading from CE to EE {#ce-ee}

Your upgrade from **{{site.data.var.ce}}** to **{{site.data.var.ee}}** might fail with the following error:

```
[2016-01-19 23:33:24 UTC] An error occurred while executing job 
"setup:upgrade {"command":"setup:upgrade"}": Could not complete 
setup:upgrade {"command":"setup:upgrade"} successfully: Source 
class "\Cybersource" for "CybersourceLogger" generation does not exist.
```

If this error displays, resolve it as follows:

1. Log in to your Magento server as the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2. Enter the following commands in the order shown:

   ```
   php <your Magento install dir>/bin/magento setup:upgrade
   ```

3. After the command completes, verify your upgrade was successful:

   ```
   php bin/magento --version
   ```

