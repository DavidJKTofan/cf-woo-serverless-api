# Serverless API

**Disclaimer:** This project is intended for educational purposes only and was originally developed approximately in the year 2022.

Followed this tutorial: [Build a Serverless API with Cloudflare Workers](https://egghead.io/lessons/cloudflare-introduction-to-build-a-serverless-api-with-cloudflare-workers)

The API data is saved at `src/resources_store.ts`.

For more advanced use cases: [Build an API for your front end using Cloudflare Workers](https://developers.cloudflare.com/pages/tutorials/build-an-api-with-workers)

## WOO API

Overview and usage: https://api.cf-testing.com/

The entire API data content can be accessed like this: `https://api.cf-testing.com/api/resources/`

Add a number at the end of the URL to return the specific ID: `https://api.cf-testing.com/api/resources/1`

## OpenAPI Schema

With OpenAPI Schema one can use Cloudflare's [API Shield Schema Validation](https://developers.cloudflare.com/api-shield/security/schema-validation/) feature in order to define which API requests are valid.

View the OpenAPI Schema of this API here: [SwaggerHub OpenAPI Schema](https://app.swaggerhub.com/apis/tototatutu/serverless-api-resources/0.1#/info)

```
openapi: 3.0.1
info:
  title: Serverless API on Resources
  description: World of Opportunities API through Cloudflare Workers
  version: '0.1'
  license:
    name: MIT
servers:
  - url: https://api.cf-testing.com/api
paths:
  /resources:
    get:
      summary: List all resources from the World of Opportunities database
      operationId: listResources
      tags:
        - resources
      description: Auto generated using Swagger Inspector
      responses:
        '200':
          description: Auto generated using Swagger Inspector

  /resources/{id}:
    get:
      summary: Resource from the World of Opportunities database
      operationId: listResource
      tags:
        - resource
      description: Auto generated using Swagger Inspector
      parameters:
        - name: id
          in: path
          required: true
          description: The id of the resource to retrieve (max 381)
          schema:
            type: integer
            format: int32
      responses:
        '200':
          description: Auto generated using Swagger Inspector
          content:
            application/json:
              schema:
                type: object
                properties:
                  main_cat1:
                    type: string
                  tag1:
                    type: string
                  main_cat2:
                    type: string
                  description:
                    type: string
                  id:
                    type: integer
                  title:
                    type: string
                  url:
                    type: string
                  tag2:
                    type: string
                  tag3:
                    type: string
              examples:
                '0':
                  value: >-
                    {"id":2,"title":"1 Million Free
                    Pictures","description":"Alternative source of free public
                    domain
                    pictures","url":"https://www.1millionfreepictures.com/","main_cat1":"CREATIVE","main_cat2":"","tag1":"PHOTO
                    STOCKS","tag2":"","tag3":""}
  /resources/category/{category}:
    get:
      summary: Filter resources by category from the World of Opportunities database
      operationId: filterResourcesByCategory
      tags:
        - resources
      description: Auto generated using Swagger Inspector
      parameters:
        - name: category
          in: path
          required: true
          description: The main category to filter resources by (e.g., 'WEB DEV')
          schema:
            type: string
      responses:
        '200':
          description: Auto generated using Swagger Inspector
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    main_cat1:
                      type: string
                    tag1:
                      type: string
                    main_cat2:
                      type: string
                    description:
                      type: string
                    id:
                      type: integer
                    title:
                      type: string
                    url:
                      type: string
                    tag2:
                      type: string
                    tag3:
                      type: string
              examples:
                '0':
                  value: >-
                    [{"id":0,"title":"000WebHost","description":"Zero cost website hosting with PHP, MySQL, cPanel & no ads","url":"https://www.000webhost.com/","main_cat1":"WEB
                    DEV","main_cat2":"","tag1":"HOSTING","tag2":"WEBSITE","tag3":""}]
```
