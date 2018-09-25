---
group: functional-testing-framework-guide
title: Modularity in the Functional Testing Framework
redirect_from: /guides/v2.3/mtf/features/modularity.html
---

The Functional Testing Framework (FTF) enables you to follow the principle of modularity as Magento does. Functional tests for each {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} are collected in separate directory with the name of corresponding module.

![Functional tests modules image]({{site.baseurl}}/static/images/ftf/mtf_modularity_dirs.png)

Modularity gives the following advantages:

* You can add and remove Magento modules with no affect to functional tests. For this purpose the FTF has a special structure of functional test, which is split into different [entities].
* You can use scenarios in functional testing. Test flow in [scenario tests] can be modified.

It is achieved due to the FTF capabilities like:

* merging for a [fixture], a [data set], a [page], a [fixture repository]
* [extending a fixture]
* replacement in a [data set] and a [fixture repository].

<!-- LINK DEFINITIONS -->

[entities]: {{page.baseurl}}/testing/functional-testing-framework/entities.html

[scenario tests]: {{page.baseurl}}/testing/functional-testing-framework/entities/scenario-test.html

[fixture]: {{page.baseurl}}/testing/functional-testing-framework/entities/fixture.html

[extending a fixture]: {{page.baseurl}}/testing/functional-testing-framework/entities/fixture.html#mtf_fixture_extend

[data set]: {{page.baseurl}}/testing/functional-testing-framework/entities/data-set.html

[page]: {{page.baseurl}}/testing/functional-testing-framework/entities/page.html

[fixture repository]: {{page.baseurl}}/testing/functional-testing-framework/entities/fixture-repository.html

