---
group: functional-testing-framework-guide
title: Create a test in the Functional Testing Framework
redirect_from: /guides/v2.3/mtf/create_test.html
---

The Magento testing framework (FTF) works with functional tests only. Functional tests check that an application meets business requirements. These requirements usually are collected in the functional specifications that describe expected behavior of the application.

Tests usually cover functionality of a business {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %}. A goal is to find discrepancies between expected and real behavior of the product.
Magento provides functional tests in the `<magento2_root_dir>/dev/tests/functional/` directory. In this guide, we call them [out-of-the-box tests][out-of-the-box test]. You can use them to test the default Magento functionality. Also, you can create a test [extending from the out-of-the-box test][], or [create your own functional tests][].

## Related topics

[Out-of-the-box test][out-of-the-box test]

[New functional test: Theory][]

[New functional test: Practice][]

<!-- LINK DEFINITIONS -->

[out-of-the-box test]: {{page.baseurl}}/testing/testing/functional-testing-framework/test-creation/out-of-the-box.html

[extending from the out-of-the-box test]: {{page.baseurl}}/testing/testing/functional-testing-framework/test-creation/custom-general.html#extending-oob-test

[create your own functional tests]: {{page.baseurl}}/testing/testing/functional-testing-framework/test-creation/custom-general.html#create-test

[new functional test: theory]: {{page.baseurl}}/testing/testing/functional-testing-framework/test-creation/custom-general.html

[new functional test: practice]: {{page.baseurl}}/testing/testing/functional-testing-framework/test-creation/custom-tutorial.html

