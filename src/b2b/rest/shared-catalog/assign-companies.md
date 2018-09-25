---
group: b2b-developer-guide
title: Assign companies to a shared catalog
ee_only: true
level3_menu_node: level3child
functional_areas:
  - B2B
  - Catalog
  - Integration
redirect_from: /guides/v2.3/b2b/shared-cat-company.html
---

A shared catalog must be assigned to one or more companies before it can be accessed by the company users.

**Service name**

`sharedCatalogCompanyManagementV1`

**REST endpoints**

{% highlight json %}
POST /V1/sharedCatalog/:sharedCatalogId/assignCompanies
POST /V1/sharedCatalog/:sharedCatalogId/unassignCompanies
GET  /V1/sharedCatalog/:sharedCatalogId/companies
{% endhighlight %}

**Company parameters**

{: .bs-callout .bs-callout-info }
Although you can specify other parameters defined within a `categories` object, the `id` is the only one used to assign or unassign a category to a shared catalog.

| Name | Description           | Format  | Requirements                                                 |
| ---- | --------------------- | ------- | ------------------------------------------------------------ |
| `id` | The company ID number | integer | Required to assign or unassign a company to a shared catalog |

## Assign categories to shared catalog

This action works as an update. It does not replace companies that have already been assigned.

If a specified company is already assigned to a different shared catalog, this request unassigns the company from the previous catalog and assigns to the new one.

**Sample usage**

`POST /V1/sharedCatalog/2/assignCompanies`

**Payload**

{% highlight json %}

{
  "companies": [
    {
      "id": 1
    },
    {
      "id": 2
    }
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

## Unassign categories from a shared catalog

When you unassign a company from a custom catalog, the system automatically assigns this company to the public shared catalog. You cannot unassign a company from the public catalog.

**Sample usage**

`POST /V1/sharedCatalog/2/unassignCompanies`

**Payload**

{% highlight json %}
{
  "companies": [
    {
      "id": 2
    }
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

## List the shared catalog companies

The `GET` call returns an array of company IDs.

**Sample Usage**

`GET  /V1/sharedCatalog/2/companies`

**Payload**

Not applicable

**Response**

`"[\"1\",\"2\"]"`

## Related information

* [Integrate with the SharedCatalog module]({{page.baseurl}}/b2b/rest/shared-catalog.html)
* [Manage shared catalogs]({{page.baseurl}}/b2b/rest/shared-catalog/manage.html)
* [Assign categories and products]({{page.baseurl}}/b2b/rest/shared-catalog/assign-categories.html)

