---
group: php-developer-guide
title: Test your component
redirect_from: /guides/v2.3/extension-dev-guide/validate/test-module.html
---

## Unit and Integration Tests {#test-unit}

Run the PHPUnit based Magento unit and integration tests.
For more information see the [Magento Testing Overview]({{page.baseurl}}/testing/testing.html)

## Functional testing {#test-functional}

For further testing with the Magento functional testing frameworks, see
[Functional Testing Framework]({{page.baseurl}}/testing/functional-testing-framework/introduction.html).

## Test using {{site.data.var.ce}} {#test-comm}

Test your component by deploying {{site.data.var.ce}} and adding the component to the project's <code>composer.json</code>.

{% highlight JSON %}
"require": {
    "magento/magento-composer-installer": "\*",
    "magento/product-community-edition": "2.0.0",
    "yourvendorname/module-one": "0.1.1"
},
{% endhighlight %}

Remember to [register]({{page.baseurl}}/extension-development/build-tasks/register.html) your component as well, adding the location of your component. Confirm that your component works as expected and Magento functionality is not compromised.

## Test installing your component {#test-install}

Before you publish your component, you should test installing it using the [Magento Component Manager]({{page.baseurl}}/system-update-upgrade.html) (part of the Magento Admin).

One way to do this follows:

1. [Package your component]({{page.baseurl}}/extension-development/package.html) in a GitHub repository that's accessible by the machine on which you run the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.
2. On that machine, create a static route from `https://repo.magento.com` to your GitHub repository.

   To create a static route, add a line similar to the following to your `hosts` file:

   ```
   <IP or hostname of your GitHub repository> https://repo.magento.com
   ```

3. [Install your component]({{page.baseurl}}/system-update-upgrade/extension-manager.html) exactly like a merchant.
4. Verify the component installed properly.

## More information

For more information on testing in {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and validating Magento components, see the following:

* [Validating Magento Extensions](http://www.gorillagroup.com/trending/insight/validating-magento-extensions-phpunit/)

