---
group: functional-testing-framework-guide
title: Functional Testing Framework Configuration
redirect_from: /guides/v2.3/mtf/configuration.html
---

The Functional Testing Framework configuration settings are located in two {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} files:

* `phpunit.xml`
* `config.xml`

## `phpunit.xml` {#phpunit_xml}

The `<magento2_root_dir>/dev/tests/functional/phpunit.xml` contains PHPUnit configuration settings. Blocks of settings are described in [PHPUnit documentation], except `<php>` that contains parameters described in the following table.

{% collapsible Show/hide the default phpunit.xml code %}

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.2/dev/tests/functional/phpunit.xml.dist %}
{% endhighlight %}
{% endcollapsible %}

| Parameter | Description | `value` | Usage |
|----------
| `app_frontend_url` | URL to Magento storefront under test. | `http://<name>.<domain>/` | [Set URL for Magento storefront under test]({{page.baseurl}}/testing/functional-testing-framework/quick-start/configuration-setting.html#mtf_quickstart_config_phpunitxml_frontend) |
| `app_backend_url` | URL to Magento Admin under test. | `"http://<name>.<domain>/<path to Admin>/"` | [Set URL for Magento Admin URL under test]({{page.baseurl}}/testing/functional-testing-framework/quick-start/configuration-setting.html#mtf_quickstart_config_phpunitxml_backend) |
| `testsuite_rule` | Test suite name to be run. | `"<test suite name>"` | [Set a test suite]({{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html#configure) |
| `testsuite_rule_path` | Path to a test suite. | `"<path to test suite>"` | [Set a path to test suite]({{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html#configure) |
| `log_directory` | Path to a directory with testing reports. | `"<path to the reporting directory>"` | [Set a reporting directory](http://localhost:4000/guides/v2.0/mtf/features/reporting.html#report-directory) |
| `events_preset` | Name of a reporting event preset. | `"<event preset name>"` | [Set a preset]({{page.baseurl}}/testing/functional-testing-framework/features/reporting.html#set-preset) |
| `module_whitelist` | List of special FTF modules which are present in functional tests but are not enabled in the Magento application. | `"<names of modules>"` | Make listed modules (that are not enabled in Magento) visible for the FTF. |
| `basedir` | A directory where PHPUnit reports are stored. | `"<directory for PHPUnit reports>"` |  |
| `credentials_file_path` | Path to the file with credentials required by services such as payment and shipment. | `"./credentials.xml.dist"` | [Edit `credentials.xml` to work with Magento modules that require credentials]({{page.baseurl}}/testing/functional-testing-framework/quick-start/configuration-setting.html) |
| `mage_mode` | Magento mode ([About Magento modes]({{page.baseurl}}/configure/application-initialization/magento-modes.html)). | `"default", "developer", "production"` | This parameter is intended to be used directly in a test. The FTF doesn't use it. [Open an example]({{site.mage2200url}}dev/tests/functional/tests/app/Magento/PageCache/Test/TestCase/FlushAdditionalCachesTest.php) |
| `module_filter` | Applicable for [test suites]({{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html) only. Enables you to select test cases for specific modules. [Learn more about the &lt;module> filter in a test suite.]({{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html#scope-testsuite) | `"Magento_<name_of_module>"` | Use it when you don't want to modify the test suite. |
| `module_filter_strict` | Applicable for a [tests suite]({{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html) only. It has the same effect as `strict` in the `<module>`. [Learn more about `strict` parameter of the &lt;module> filter in a test suite.]({{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html#scope-testsuite) | `"1"`, `"0"` | Use it when you don't want to modify the test suite. |

## `config.xml` {#config_xml}

The FTF configuration settings are declared and specified in two places:

{% collapsible in the Framework %}

The file is located in `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc`

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/mtf/develop/etc/config.xml.dist%}
{% endhighlight %}

![image]({{site.baseurl}}/static/images/ftf/ftf_mtf-config-xsd-dia.svg)

Figure 1. - XML Schema for the `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc/config.xml`.

{%endcollapsible%}

{% collapsible in Magento functional tests %}

The file is located in `<magento2_root_dir>dev/tests/functional/`

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.2/dev/tests/functional/etc/config.xml.dist %}
{% endhighlight %}

![image]({{site.baseurl}}/static/images/ftf/ftf_config-xsd-dia.svg)

Figure 2. - XML Schema for the `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc/config.xml`.

{% endcollapsible %}

The FTF merges settings from both files with the following priority:

* `config.xml` in Magento has higher priority then `config.xml` in the Framework
* `config.xml.dist` is omitted if `config.xml` exists

Settings are grouped into the following blocks:

* [`<application>`]
* [`<isolation>`]
* [`<server>`]
* [`<handler>`]
* [`<install>`] \(set in Magento functional tests only)

### `<application>` {#application}

**Description:** Application configuration settings.

| Parameter           | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| `<reopenBrowser>`   | Determines that a browser is to be restarted after each `test` or `testCase`. |
| `<backendLogin>`    | Magento Admin username that is used during functional testing.                |
| `<backendPassword>` | Magento Admin password that is used during functional testing.                |
| `<appBackendUrl>`   | Base URL of the Magento Admin. Not applicable currently.                      |
| `<backendLoginUrl>` | Relative path to the Magento Admin login page.                                |

### `<isolation>` {#isolation}

[Learn about isolation management][isolation management]

**Description:** Settings of a script to be run during functional testing.

| Parameter        | Description                                                                                                                                       | Values                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `<resetUrlPath>` | Relative path of a script to be run. The URL is opened as usual web page in a browser, so that corresponding permissions must be set to the file. | `<resetUrlPath>dev/tests/mtf/isolation.php</resetUrlPath>` |
| `<testSuite>`    | When the script must be called relatively to [test suite] run.                                                                                    | `none`, `before`, `after`, `both`                          |
| `<testCase>`     | When the script must be called relatively to [test case] run.                                                                                     | `none`, `before`, `after`, `both`                          |
| `<test>`         | When the script must be called relatively to test run.                                                                                            | `none`, `before`, `after`, `both`                          |

Values description:

* `none` - never run
* `before` - run before the entity to which it concerns
* `after` - run after the entity to which it concerns
* `both` - run before and after the entity to which it concerns

### `<server>` {#server}

[Open settings declarations in Selenium repository][open selenium code]

**Description:** Selenium server settings.

| Parameter                       | Description                                                                                          | Values                                                                                               |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                          | Name of an item.                                                                                     | `"selenium"`                                                                                         |
| `type`                          | Required Selenium setting. The FTF doesn't use it.                                                   | `"default"`                                                                                          |
| `browser`                       | A browser full name to be displayed where you needed it. The FTF doesn't use it.                     |                                                                                                      |
| `browserName`                   | A browser that can be used for functional testing.                                                   | `android`, `chrome`, `firefox`, `htmlunit`, `internet explorer`, `iPhone`, `iPad`, `opera`, `safari` |
| `host` and `port`               | Address of a Selenium Server.                                                                        |                                                                                                      |
| `seleniumServerRequestsTimeout` | A specified period of time to process a request.                                                     |                                                                                                      |
| `sessionStrategy`               | Standard Selenium Server parameter that sets a session strategy. Recommended to use `"shared"` only. | `"shared"`, `"isolated"`                                                                             |

#### **&lt;desiredCapabilities>**

[Learn about desiredCapabilities in Selenium official documentation.][desiredcapabilities]

### **&lt;handler>** {#handler}

Specifies priorities for different types of handlers. The lower the value, the higher the priority. The highest priority has value 0. `token` contains access token (used by WebAPI handlers only). [Learn more about handlers.][handler]

| Parameter  | Description                                  | Values  |
| ---------- | -------------------------------------------- | ------- |
| `<webapi>` | `priority` value of a WebAPI handler.        | Integer |
| `<curl>`   | `priority` value of a curl handler priority. | Integer |
| `<ui>`     | `priority` value of a UI handler priority.   | Integer |

### **&lt;install>** {#install}

Set of parameters to be used for [installation test case].

| Parameter       | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `<host>`        | Magento database hostname or IP address.                                                                                  |
| `<user>`        | Magento database username.                                                                                                |
| `<password>`    | Magento database user password.                                                                                           |
| `<dbName>`      | Name of a database.                                                                                                       |
| `<baseUrl>`     | Magento application base URL, starting with the scheme (`http://` or `https://`) and ending with a slash character (`/`). |
| `<backendName>` | Admin URI (following the base URL).                                                                                       |

[Learn more about installation parameters][installation parameters]

<!-- LINK DEFINITIONS -->

<!-- External -->

[desiredcapabilities]: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities

[open selenium code]: https://github.com/giorgiosironi/phpunit-selenium/blob/master/PHPUnit/Extensions/Selenium2TestCase.php#L233-L238

[phpunit documentation]: https://phpunit.de/manual/current/en/appendixes.configuration.html

[installation test case]: {{site.mage2200url}}dev/tests/functional/tests/app/Magento/Install/Test/TestCase/InstallTest.php#L60-L77

<!-- Internal -->

[handler]: {{page.baseurl}}/testing/functional-testing-framework/entities/handler.html

[installation parameters]: {{page.baseurl}}/install/command-line/install.html#instgde-install-cli-magento

[isolation management]: {{page.baseurl}}/testing/functional-testing-framework/features/isolation.html

[test case]: {{page.baseurl}}/testing/functional-testing-framework/entities/test-case.html

[test suite]: {{page.baseurl}}/testing/functional-testing-framework/features/test-suite.html#configure

["app_frontend_url"]: #app_frontend_url

["app_backend_url"]: #app_backend_url

["testsuite_rule"]: #testsuite_rule

["testsuite_rule_path"]: #testsuite_rule_path

["log_directory"]: #log_directory

["events_preset"]: #events_preset

["module_whitelist"]: #module_whitelist

["basedir"]: #basedir

["credentials_file_path"]: #credentials_file_path

["mage_mode"]: #mage_mode

[`<application>`]: #application

[`<isolation>`]: #isolation

[`<server>`]: #server

[`<handler>`]: #handler

[`<install>`]: #install

<!-- ABBREVIATIONS -->

*[FTF]: Functional Testing Framework