---
group: cloud-guide
title: Enable SSH keys
redirect_from: /guides/v2.3/cloud/before/before-workspace-ssh.html
functional_areas:
  - Cloud
  - Setup
---

#### Previous step:

[Install Magento prerequisites]({{page.baseurl}}/cloud/setup/install-magento-prerequisites.html)

The [SSH protocol ](https://en.wikipedia.org/wiki/Secure_Shell) is designed to maintain a secure connection between two systems—in this case, your local working environment and your {{site.data.var.ece}} Git project.

When initially setting up your local environment, you need to add the SSH keys to the following specific environments:

* Starter: Add to Master (Production) and any environments you create by branching from Master
* Pro: Add to Master Integration environment. After your Staging and Production environments are provisioned, you can add the SSH keys to those environments through the Project Web Interface or via SSH and CLI commands.

{% include cloud/enable-ssh.md %}

#### Next step:

[Set up the Magento file system owner]({{page.baseurl}}/cloud/setup/setup-magento-file-system-owner.html)

