---
group: php-developer-guide
title: Adapters
redirect_from: /guides/v2.3/extension-dev-guide/adapters.html
---

## Overview

Adapter classes follow the [adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern) and wrap around classes from third-party libraries.
These classes allow you to use functionality from third-party libraries in your code by converting the third-party class interfaces into an interface that is expected by your native code.

## When to use

You should always use {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} classes instead of directly using classes from third-party libraries.
This reduces the change impact on your code when the {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} changes in a third-party {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %}.

We recommend using adapter classes for [dependency injection]({{page.baseurl}}/extension-development/core-concepts/dependency-injection.html) to get access to the functionality provided by third-party classes.

## How to write

A common approach in developing an adapter is to create an interface named `AdapterInterface` to describe the functionality the third-party class provides.
This class is typically found in a directory labeled `Adapter`.
Classes implementing this adapter interface use the third-party class directly to provide indirect functionality.

This approach allows you to update or substitute different implementations provided by other third-party classes without the need to update code that uses your adapter.

## Examples of adapters in Magento

### `Magento/Framework/Code/Minifier`

The [minifier](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Code/Minifier) functionality provided by the `Magento/Framework/Code` library involves the use of third-party libraries for code compression.

The [`AdapterInterface`]({{site.mage2000url}}lib/internal/Magento/Framework/Code/Minifier/AdapterInterface.php) for this class contains a `minify($content)` function that the [`CSSmin`]({{site.mage2000url}}lib/internal/Magento/Framework/Code/Minifier/Adapter/Css/CSSmin.php) and [`JShrink`]({{site.mage2000url}}lib/internal/Magento/Framework/Code/Minifier/Adapter/Js/JShrink.php) implementation class define.

The [jshrink](https://github.com/tedious/JShrink)(tedivm/jshrink) and [cssmin](https://github.com/tubalmartin/YUI-CSS-compressor-PHP-port)(tubalmartin/cssmin) libraries registered in the [`composer.json`]({{site.mage2000url}}composer.json) file provide the functionalities for the implementation classes.

### `Magento/Framework/Image`

The [`Magento/Framework/Image`](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Image) library uses adapters to access functionality provided by GD(php-gd2) and ImageMagick(php-imagick) third-party libraries.

The [`AdapterInterface`]({{site.mage2000url}}lib/internal/Magento/Framework/Image/Adapter/AdapterInterface.php) class defines the available functionality, and the [`Gd2`]({{site.mage2000url}}lib/internal/Magento/Framework/Image/Adapter/Gd2.php) and [`ImageMagick`]({{site.mage2000url}}lib/internal/Magento/Framework/Image/Adapter/ImageMagick.php) adapter classes provides the concrete implementation using the third-party libraries.

## Example Code

The code below describes an interface for an adapter that parses {% glossarytooltip a5ef9041-976f-4eb3-826e-bf836027d8c3 %}markdown{% endglossarytooltip %}.

{% highlight php startinline %}
/\*\*

* Interface for markdown library adapters
   \*/
  namespace MyCompany\\MyModule\\Markdown\\Parser\\Adapter;

interface AdapterInterface
{
    /\*\*
     _ Converts markdown text into another format
     _
     _ @param string $text
     _ @return string
     \*/
    public function parse($text);
}
{% endhighlight %}

<br/>

The code below is an implementation class of the `AdapterInterface` that uses the [php-markdown](https://github.com/michelf/php-markdown) library to convert markdown into {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %}.

{% highlight php startinline %}
namespace MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\PhpMarkdown;

use \\Michelf\\Markdown;
use MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\AdapterInterface;

/\*\*

* Adapter for php-markdown library
   _/
  class PhpMarkdown implements AdapterInterface
  {
      /\*\*
       _ Convert markdown into HTML
       \*
       _ @param string $text
       _ @return string
       \*/
      public function parse($text)
      {
          return Markdown::defaultTransform($text);
      }
  }
  {% endhighlight %}

<br/>

To configure the ObjectManager to use the PhpMarkdown implementation when the AdapterInterface class is requested as a dependency, add the following code in your di.xml file.

{% highlight php startinline %}
<preference for="MyCompany\MyModule\Markdown\Parser\Adapter\AdapterInterface" type="MyCompany\MyModule\Markdown\Parser\Adapter\PhpMarkdown\PhpMarkdown" />
{% endhighlight %}

<br/>

The code below is an alternate implementation class of the `AdapterInterface` that uses the [Ciconia](https://github.com/kzykhys/Ciconia) library to parse markdown into HTML.
This code differs from the previous implementations in that an instance of the `Ciconia` class is a constructor dependency.

{% highlight php startinline %}
namespace MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\Ciconia;
use Ciconia\\Ciconia;
use MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\AdapterInterface;

/\*\*

* Adapter for the Ciconia library
   _/
  class CiconiaParser implements AdapterInterface
  {
      /\*\*
       _ @var Ciconia
       \*/
       protected $parser;

  ```
  /**
   * @param Ciconia
   */
  public function __construct(Ciconia $parser)
  {
      $this->parser = $parser;
  }

  /**
   * Convert markdown into HTML
   *
   * @param string $text
   * @return string
   */
  public function parse($text)
  {
      return $this->parser->render($text);
  }
  ```

  }
  {% endhighlight %}

<br/>

The following {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} entries belong in the `di.xml` file.
They describe to the ObjectManager how to create the third-party and adapter classes.

{% highlight xml %}
<virtualType name="defaultCiconia" type="Ciconia\Ciconia" shared="false">
   <arguments>
       <argument name="renderer" xsi:type="null"/>
   </arguments>
</virtualType>
<type name="MyCompany\MyModule\Markdown\Parser\Adapter\Ciconia\CiconiaParser">
   <arguments>
       <argument name="parser" xsi:type="object">defaultCiconia</argument>
   </arguments>
</type>
{% endhighlight %}

