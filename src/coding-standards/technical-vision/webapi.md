---
group: coding-standards
title: Web API technical vision
redirect_from: /guides/v2.3/coding-standards/technical-vision/webapi.html
---

Web API is crucial for Magento because of the need to integrate with order management, customer management, and other enterprise management software systems.

There are many headless Magento installations in which a merchant partially uses Magento functionality, while the other pieces of an eCommerce website are provided by other systems.

See [more details](https://en.wikipedia.org/wiki/Web_API) about the importance of web APIs in modern web applications.

### Components Dependencies

The following diagram shows Web API component dependencies.

![Web API components dependencies]({{site.baseurl}}/static/images/coding-standards/webapi-components-dependencies.png)

### High-level Architecture

The following image provides an overview of how Web API requests are processed.

![Web API request processing overview]({{site.baseurl}}/static/images/coding-standards/webapi-request-processing-high-level-overview.png)

### Extension Scenarios

#### Declare a new REST and SOAP endpoint

Any [service contract]({{page.baseurl}}/extension-development/core-concepts/service-contracts.html) can be [exposed as REST and SOAP]({{page.baseurl}}/extension-development/services/web-api.html) endpoints via configuration in a module's `webapi.xml` file.

#### Declare a new GraphQL query/mutation

1. Create custom resolvers.
2. Declare a custom query/mutation and all necessary types in `schema.graphqls`.

If the target module is called `MyModule`, then create the resolvers and configuration files in a new module called `MyModuleGraphQl`.

See the [GraphQL documentation]({{site.baseurl}}/guides/v2.3/graphql/index.html) for more information.

#### Add a custom authentication mechanism

1. Provide a custom implementation of `\Magento\Authorization\Model\UserContextInterface`, that verifies a user's identity using a  custom authentication mechanism.
2. Declare custom user context in the composite user context for the target area(s) (`webapi_rest`, `webapi_soap`, `webapi_graphql`) :

```xml
<type name="Magento\Authorization\Model\CompositeUserContext">
    <arguments>
        <argument name="userContexts" xsi:type="array">
            <item name="customUserContext" xsi:type="array">
                <item name="type" xsi:type="object">Vendor\Module\Model\Authentication\CustomUserContext</item>
                <item name="sortOrder" xsi:type="string">100</item>
            </item>
        </argument>
    </arguments>
</type>
```

#### Modify the schema of an existing SOAP and REST endpoint

The recommended approach for modifying an interface is to define a new endpoint. If you simply modify the schema, you might break existing integrations or extensions.

To extend an interface, use [extension attributes]({{page.baseurl}}/extension-development/core-concepts/attributes.html).

#### Modify the schema of an existing GraphQL query

1. Add a `schema.graphqls` file to the `<ModuleName>GraphQl` module. Magento merges this file with configurations from other modules using the same merge rules as other types of configuration.

2. Write any necessary plugins for existing resolvers related to the query, or create a custom resolver and enable it via override in `schema.graphqls`

### Model Consistency Constraints

Any new design related to Web API must satisfy the following constraints to keep the model consistency.

**General**

1. REST and SOAP must be designed for Admin Panel integrations and be equal in terms of coverage. GraphQL should be designed for storefront scenarios.
2. Any identifier exposed in guest APIs (for example, cart ID) must be masked to prevent the possibility of unauthorized access to the data of other guest users.
3. Authentication must be done via `\Magento\Authorization\Model\UserContextInterface`.
4. Customer-specific identifiers (such as customer ID or cart ID) must be deducted from the record of the successfully authenticated customer. They must not be accepted via request parameters.
5. All new web API endpoints must be covered with web API functional tests.
   * For REST and SOAP, by default, the same test will be executed in the scope of different continuous integration jobs. The base class for REST and SOAP tests is `\Magento\TestFramework\TestCase\WebapiAbstract`
   * The base class for GraphQL tests is: `\Magento\TestFramework\TestCase\GraphQlAbstract`
6. Web API requests must be processed by custom front controllers with optimized routing to prevent the admin and storefront areas from executing routers.
7. Web API schema should be strictly typed. (All complex types should eventually be resolved to scalar types.)
8. Authentication parameters must be passed via headers.
9. Throttling must be configured by the system integrator. It is not supported by Magento
10. Internal server errors must be masked and never shown to the user in production mode. In developer mode, original exceptions must never be masked and should be displayed along with the related stacktrace.
11. Pagination must be supported by all list operations.

**GraphQL**

1. Unlimited nesting should be supported during requests for related entities. (For example, get Order => Order Items => Products => Related Products)
2. Field filtration must be performed with SQL queries. Do not filter on the application layer after you've fetched all possible fields.
3. Third-party customizations must be done separately for Service Contracts and for GraphQL
4. For modularity purposes, GraphQL configuration must be declared in a separate module. For example, to expose GraphQL for the module `MyModule`, you must create the `schema.graphqls` file in the `MyModuleGraphQl` module.
5. GraphQL is primarily designed for store-front one-page apps and mobile applications. It supports token and cookie authentication, as well as guest access to public queries
6. All queries must return the 200 HTTP status code. If an error occurs, return the error in the response body. A 500 status code is allowed when an exception occurs when generating a schema, but not during requests.
7. The Store code should be passed via headers.

**REST**

1. The resource URL should be versioned (for example: V1). The version must be specified in the following format: `V\d.+`
2. Resource names in a URL should be in plural form (for example: products, carts)
3. ID parameters for operations on entities should be part of the resource URL (for example: /V1/products/**:sku** )
4. POST should be used to create an entity.
   PUT should be used to update an entity.
   PATCH should be used to patch (update only selected fields) an entity(s) update.
5. REST is designed for system integrations, mobile app integrations, as well as for one-page apps. It supports tokens, cookies and OAuth 1.0 with token exchange. It also supports guest access to public resources.
6. Responses must return responses with standard [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
7. The store code must be passed via URL. For example `GET /rest/frenchStoreView/V1/products`. Persistence operations that should be performed for all stores at once, should have 'all' store code in the URL.

**SOAP**

1. SOAP is designed for systems integration. It supports token authentication for customers and admins, as well as no authentication for anonymous service methods. Cookie authentication and OAuth 1.0 are not supported.
2. The schema is available in the form of a WSDL for all exposed services.
3. All requests must return the 200 HTTP status code. If an error occurs, return the error in the response. 

