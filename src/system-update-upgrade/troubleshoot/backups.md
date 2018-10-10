---
group: software-update-guide
title: Troubleshoot backups
functional_areas:
  - Upgrade
redirect_from: /guides/v2.3/comp-mgr/trouble/cman/tshoot_backup.html
---

A backup can fail for any of the following reasons:

* [Insufficient disk space](#trouble-backup-space)
* [An operating system error](#trouble-backup-os)
* [Backup fails](#trouble-backup-all)

### Insufficient disk space {#trouble-backup-space}

If the backup failed because of insufficient disk space, you should typically free up disk space by moving some files to another storage device or drive. However, there might be other ways to resolve the issue. See one of the following resources for tips:

* [8 Tips to Solve Linux & Unix Systems Hard Disk Problems Like Disk Full Or Can’t Write to the Disk](http://www.cyberciti.biz/datacenter/linux-unix-bsd-osx-cannot-write-to-hard-disk)
* [serverfault: df says disk is full, but it is not](http://serverfault.com/questions/315181/df-says-disk-is-full-but-it-is-not)
* [unix.stackexchange.com: Tracking down where disk space has gone on Linux?](http://unix.stackexchange.com/questions/125429/tracking-down-where-disk-space-has-gone-on-linux)

### Operating system error {#trouble-backup-os}

Unfortunately, we can't recommend anything specific because of the variety of errors you might encounter. We can suggest, however, you:

* Contact your system administrator
* Search public forums like [Stack Exchange](http://unix.stackexchange.com) or [Stack Overflow](http://stackoverflow.com)
* Open a [GitHub issue](https://github.com/magento/magento2/issues) and we'll try to help

### Backup fails {#trouble-backup-all}

If the backup fails or if all backup tests fail, it's possible the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/apache-user.html) doesn't have sufficient privileges and ownership of the Magento file system. For example, another user might own the files or the files might be read-only.

Pay particular attention to file system permissions and ownership of the `<your Magento install dir>/var` directory and subdirectories. For more information, see [Set file system permissions and ownership]({{page.baseurl}}/install/getting-started/file-system-ownership-permissions/setup.html)

