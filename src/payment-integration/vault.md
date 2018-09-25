---
group: payments-integrations
title: Adding vault integration
functional_areas:
  - Integration
redirect_from: /guides/v2.3/payments-integrations/vault/vault-intro.html
---

Vault as a {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} provides store customers with ability to use the previously saved credit card information for {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}. This information is stored safely on the side of trusted payments gateways (Braintree, PayPal). Not storing the sensitive credit card information is one of the [PCI compliance](https://www.pcisecuritystandards.org/)  requirements.

The [Magento Vault]({{site.mage2100url}}app/code/Magento/Vault) is implemented using the Magento [payment gateway]({{page.baseurl}}/payment-integration/gateway.html). It is used in the out-of-the-box vault implementation for the Braintree payment method. Third party developers can use it to add vault to their custom payment provider integration.

The following diagram shows a simplified interaction flow between Magento sales management, vault, payment integration and external payment service provider.

![Vault Interaction]({{site.baseurl}}/static/images/payments-integrations/vault_interaction_flow1.png)

The flow is similar to usual Magento [payment gateway interaction flow]({{page.baseurl}}/payment-integration/gateway.html). 

The main difference is that when vault is used, it defines what command is required and when it must be called.

## Adding vault: general steps

Magento vault implementation provides that vault is available as a separate payment method during order creation (storefront or admin). But technically it is tightly related to the corresponding payment provider integration.  
You do not need to create a new {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} for vault implementation. All required configuration and entities are added to the module of the payment provider integration. 

The topics of this chapter describe how to add the vault functionality to a payment method (the payment method must be implemented using Magento payment gateway):

1. [Add vault to module dependencies]({{page.baseurl}}/payment-integration/vault/module-configuration.html).
2. [Configure vault general parameters]({{page.baseurl}}/payment-integration/vault/payment-configuration.html).
3. [Add vault and payment methods entities using dependency injection configuration]({{page.baseurl}}/payment-integration/vault/di-configuration.html).
4. [Implement the ability for customers to choose whether to use vault]({{page.baseurl}}/payment-integration/vault/enable.html).
5. [Storing and processing the payment related data]({{page.baseurl}}/payment-integration/vault/payment-token.html).
6. [Adding and using  UI_Vault component to place orders on the storefront]({{page.baseurl}}/payment-integration/vault/token-component-provider.html).
7. [Display stored tokens for customer and process their deleting]({{page.baseurl}}/payment-integration/vault/stored-information.html).
8. [Using stored tokens to place an order from Admin panel]({{page.baseurl}}/payment-integration/vault/admin-integration.html). 

