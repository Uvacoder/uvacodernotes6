# Gatsby

## Getting data

- There a two ways: **structured** (GraphQL) and **unstructured** (with `createPages` API)

### GraphQL (structured)

- Usually we only query the data in pages components. But there is a way to query data in components with the `StaticQuery` API.
- `StatiQuery` is useful to pull data into a `Layout` component for example.

## Source plugins and rendering queried data

- Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc.

- A `node` is an object in a graph.

- It is useful to build our page using the GraphiQL tool and `console.log()` the data.

- Source plugins allow us to pull raw data into Gatsby. One of these plugins is the `gatsby-source-filesystem` plugin.

## Transformer plugins

- Like the name says, they transform the data we pull. For example, from .md to HTML.

- We can manipulate the queries in many ways (sorting, filtering, limits). These all are GraphQL specs.

## Debugging slow builds

- [Wes Bos' Twitter thread](https://twitter.com/wesbos/status/1234583291812089858)
