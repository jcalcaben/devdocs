---
group: installation-guide
title: 'During installation, Reflection Exception error'
redirect_from: /guides/v2.3/install-gde/trouble/tshoot_wrong-mysql.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During the installation, a  message similar to the following displays: 

```
[ERROR] exception 'ReflectionException' with message 'Class Magento\Framework\StoreManagerInterface does not exist' 
in /<path>/lib/internal/Magento/Framework/Code/Reader/ClassReader.php
```

### Solution

Clear all directories and files under Magento's `var` subdirectory and install the Magento software again.

As the [Magento file system owner]({{page.baseurl}}/install/getting-started/file-system-ownership-permissions.html) or as a user with `root` privileges, enter the following commands:

```
cd <your Magento install directory>/var
rm -rf cache/* di/* generation/* page_cache/*
```

#### Redis

If you use Redis and still get an error, clear the Redis cache as follows:

```bash
redis-cli FLUSHALL
```

