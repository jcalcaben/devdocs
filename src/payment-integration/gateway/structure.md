---
group: payments-integrations
title: Payment provider gateway structure
redirect_from: >-
  /guides/v2.3/payments-integrations/payment-gateway/payment-gateway-structure.html
---

The following diagram shows the basic components of the Magento payment provider gateway:

![Payment Gateway Structure]({{site.baseurl}}/static/images/payments-integrations/pg_structure.png)

The interaction between the {% glossarytooltip 5b963536-8f03-45c4-963b-688021f4eea7 %}payment gateway{% endglossarytooltip %} components looks like following:

![Payment Gateway Structure]({{site.baseurl}}/static/images/pg_internal_flow.png)

Each component from this scheme is described in the corresponding topic:

* [Gateway Command]({{page.baseurl}}/payment-integration/gateway/command.html)
* [Gateway Command Pool]({{page.baseurl}}/payment-integration/gateway/command/pool.html)
* [Request Builder]({{page.baseurl}}/payment-integration/gateway/request-builder.html)
* [Gateway Client]({{page.baseurl}}/payment-integration/gateway/client.html)
* [Response Validator]({{page.baseurl}}/payment-integration/gateway/response-validator.html)
* [Response Handler]({{page.baseurl}}/payment-integration/gateway/response-handler.html)

