---
group: contributor-guide
title: Basic template
redirect_from: /guides/v2.3/contributor-guide/templates/basic_template.html
---

Introductory text that gives an overview of the topic you will be writing about.

The purpose of this page is to provide you with a pre-formatted template and useful {% glossarytooltip a5ef9041-976f-4eb3-826e-bf836027d8c3 %}markdown{% endglossarytooltip %} references to help you get started writing docs.

You can start off by editing the local version of this file using markdown language (and {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} where needed). Then, create a Pull Request to have your contribution reviewed by the DevDocs team.

## Metadata parameters

Add the following metadata parameters at the top of your page. We use YAML for the metadata in front matter. We use this data when generating the DevDocs for the following:

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `group:`            | The table of contents this file belongs to, which points to files located in `_data/toc/`. Only add the name of the file without the extension. For example, the group of this file is `group: contributor-guide`, which points to the table of contents defined in `_data/toc/contributor-guide.yml`.                                                                                                                                                                          |
| `title:`            | The title of the page.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `functional_areas:` | Optional. Adds facets for search results. Available facets include: Sales, Products, Carts, Customers, Marketing, Account, Content, Reports, Stores, System, Catalog, Orders, Frontend, Theme, Staging, Search, Configurations, Integration, Services, Tools, Setup, Testing, test, Standards, Install, Upgrade, B2B, Cloud, and Bundled extensions. These facets are case sensitive and support multiple facets separated by commas. For example: `functional_areas: Install`. |
| `redirect_from`     | Optional. Add a list of other pages in DevDocs that should redirect to this page. The link should start with the `/guides` directory. For an example, see the source code for this template page.                                                                                                                                                                                                                                                                               |
| `ee_only:`          | Optional. If set to `true`, graphics/cues display on the page indicating it applies to {{site.data.var.ee}}.                                                                                                                                                                                                                                                                                                                                                                    |

{:style="table-layout:auto;"}

{%
include note.html
type='info'
content='If you need help with metadata, we can help in your submitted pull requests.'
%}

## Basic Markdown Syntax {#basic}

Below are some basic examples of what you can do with markdown.

### Text Effects {#text}

| Example             | Output        |
| ------------------- | ------------- |
| `*emphasis*`        | _emphasis_    |
| `**bold**`          | **bold**      |
| `` `inline code` `` | `inline code` |

By indenting your content by at least 4 spaces, you can create a code block. For extensive examples of adding code samples, see [Code blocks](#code-blocks).

```
//This is a code block!
print "Hello World!";
```

For more examples of basic markdown please follow this [link](https://daringfireball.net/projects/markdown/syntax).

### Lists {#lists}

Lists are useful for organizing and displaying related items. Below are examples of a bulleted list and an ordered list.

**Bulleted List:**

```markdown
* List Item 1
* List Item 2
* List Item 3
```

_Output:_

* List Item 1
* List Item 2
* List Item 3

**Ordered List:**

```markdown
1. First Step
2. Second Step
3. Third Step
```

_Output:_

1. First Step
2. Second Step
3. Third Step

### Images {#images}

Please add any images you may need to the [`common/images`](https://GitHub.com/magento/devdocs/tree/develop/common/images) directory.

Once the image is added, you can use it in your documentation:

_Example:_ `![Image]({{site.baseurl}}/static/images/install_cygwin.png)`

_Output:_

![Image Example]({{site.baseurl}}/static/images/install_cygwin.png)

You can even scale the image if it is too large:

_Example:_ `![Scaled Image]({{site.baseurl}}/static/images/install_cygwin.png){:width="446" height="246"}`

_Output:_

![Scaled Image Example]({{site.baseurl}}/static/images/install_cygwin.png)

### Tables {#tables}

Tables can be useful for displaying different kinds of data in an organized way.

_Example:_

```markdown
<!-- Basic Markdown Table Syntax -->
| Column Heading | Column Heading | Column Heading |
|----------------|----------------|----------------|
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |
```

_Output:_

| Column Heading | Column Heading | Column Heading |
| -------------- | -------------- | -------------- |
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |

You can read more about table syntax [here](http://kramdown.gettalong.org/syntax.html#tables).

## Advanced Syntax {#advanced}

### Code blocks {#code-blocks}

Code blocks can also be defined using [Rouge formatting](http://rouge.jneen.net/). View the .md file of this template for examples.

For inline code, surround the content with single backticks: `` `example` ``.

For blocks of code, surround content with 3 backticks and an optional [supported language](https://GitHub.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).

_Example:_

````
```html
<div class="container">
  <h4 class="title">Title</h4>

  <div class="content">
    <p>Paragraph content.</p>
  </div>

</div>

```
````

_Output:_

```html
<div class="container">
  <h4 class="title">Title</h4>

  <div class="content">
    <p>Paragraph content.</p>
  </div>

</div>
```

### Callout Messages {#callouts}

Use these messages to highlight or bring attention to a piece of information.

**Notes:**

```liquid
{%raw%}
{%
include note.html
type='info'
content='This is a note callout. You can use these to provide important information on a topic.'
%}
{%endraw%}
```

_Output:_

{%
include note.html
type='info'
content='This is a note callout. You can use these to provide important information on a topic.'
%}

**Warnings:**

```liquid
{%raw%}
{%
include note.html
type='warning'
content='This is a warning callout. This can be used to convey important information to the reader.'
%}
{%endraw%}
```

_Output:_

{%
include note.html
type='warning'
content='This is a warning callout. This can be used to convey important information to the reader.'
%}

**Tips:**

```liquid
{%raw%}
{%
include note.html
type='tip'
content='This is a tip callout. These can be used to provide useful tips or interesting facts on a topic.'
%}
{%endraw%}
```

_Output:_

{%
include note.html
type='tip'
content='This is a tip callout. These can be used to provide useful tips or interesting facts on a topic.'
%}

### Collapsible content {#collapsible}

You can use the collapsible content tag for large code samples in your content. Any content in a collapse is blocked from searching on page.

{: .bs-callout .bs-callout-info }
The `{%raw%}{% collapsible %}{%endraw%}` tag must be preceded by a blank line.

_Example:_

```liquid
{%raw%}
{% collapsible This is the title %}
Markdown content goes in this area.
{% endcollapsible %}
{%endraw%}
```

_Output:_

{% collapsible This is the title %}
Markdown content goes in this area.
{% endcollapsible %}

