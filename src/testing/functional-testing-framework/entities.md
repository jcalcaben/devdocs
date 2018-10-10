---
group: functional-testing-framework-guide
title: Functional Testing Framework Entities
redirect_from: /guides/v2.3/mtf/mtf_entities.html
---

Functional Testing Framework entities enable you to create and modify functional tests. 
For example, you want to cover with functional tests the process of creation the {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} Link.
To do this you have to create [injectable test]({{page.baseurl}}/testing/functional-testing-framework/entities/test-case.html).

As widget functionality is not covered with tests, you need to create widget [fixture]({{page.baseurl}}/testing/functional-testing-framework/entities/fixture.html), that is your object for testing. You will describe the test data that will be applied to the widget object in [repository topic]({{page.baseurl}}/testing/functional-testing-framework/entities/fixture-repository.html).

You want to automate creating of Catalog Category Link widget, that requires to have a category. As far creating of new category is out of the scope of your testing, you will use [handlers]({{page.baseurl}}/testing/functional-testing-framework/entities/handler.html) to prepare it.

To understand what blocks and pages you need in the test, you should perform tests manually.
Using [blocks]({{page.baseurl}}/testing/functional-testing-framework/entities/block.html) and [pages]({{page.baseurl}}/testing/functional-testing-framework/entities/page.html) entities you can create and define blocks and pages objects for tests.

When you have all building blocks for the test you can determine steps of [injectable test]({{page.baseurl}}/testing/functional-testing-framework/entities/test-case.html).

Any test requires different variations of [data sets]({{page.baseurl}}/testing/functional-testing-framework/entities/data-set.html) and corresponding [constraints]({{page.baseurl}}/testing/functional-testing-framework/entities/constraint.html).

