# GraphQL Concepts



## 

### TABLE OF CONTENTS

* [Why is GraphQL so cool?](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#why-is-graphql-so-cool)
* [What does a GraphQL query look like?](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#what-does-a-graphql-query-look-like)
  * [Understanding the parts of a query](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#understanding-the-parts-of-a-query)
    * [Query operation type](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#query-operation-type)
    * [Operation name](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#operation-name)
    * [Query fields](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#query-fields)
* [How to learn GraphQL](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#how-to-learn-graphql)
* [How do GraphQL and Gatsby work together?](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#how-do-graphql-and-gatsby-work-together)
* [Where does Gatsby's GraphQL schema come from?](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#where-does-gatsbys-graphql-schema-come-from)
* [Powerful data transformations](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#powerful-data-transformations)
  * [Formatting dates](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#formatting-dates)
  * [Markdown](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#markdown)
  * [Images](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#images)
* [Advanced](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#advanced)
  * [Fragments](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#fragments)
* [Further reading](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#further-reading)
  * [Getting started with GraphQL](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#getting-started-with-graphql)
  * [Advanced readings on GraphQL](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#advanced-readings-on-graphql)

There are many options for loading data into React components. One of the most popular and powerful of these is a technology called [GraphQL](https://graphql.org/).

GraphQL was invented at Facebook to help product engineers _pull_ needed data into React components.

GraphQL is a **q**uery **l**anguage \(the _QL_ part of its name\). If you’re familiar with SQL, it works in a very similar way. Using a special syntax, you describe the data you want in your component and then that data is given to you.

Gatsby uses GraphQL to enable [page and StaticQuery components](https://www.gatsbyjs.com/docs/conceptual/building-with-components/) to declare what data they and their sub-components need. Then, Gatsby makes that data available in the browser when needed by your components.

Data from any number of sources is made queryable in one unified layer, a key part of the Gatsby building process:ContentBuildDataViewAppGraphQL Response

```text
data: {
  site: {
    title: "Home"
    description: "Gatsby tips"
  }
}
```

**Data** returned by GraphQL comes back in the exact same shape that you asked for it, without having to travel across the network because it was already gathered at [build time](https://www.gatsbyjs.com/docs/glossary#build).

Since all data is combined in the data layer, it’s even possible to query multiple sources at the same time.

### Why is GraphQL so cool? <a id="why-is-graphql-so-cool"></a>

For a more in-depth look, read [why Gatsby uses GraphQL](https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/).

* Eliminate frontend data boilerplate — no need to worry about requesting & waiting for data. Just ask for the data you need with a GraphQL query and it’ll show up when you need it
* Push frontend complexity into queries — many data transformations can be done at _build-time_ within your GraphQL queries
* It’s the perfect data querying language for the often complex/nested data dependencies of modern applications
* Improve performance by removing data bloat — GraphQL enables you to select only the data you need, not whatever an API returns

### What does a GraphQL query look like? <a id="what-does-a-graphql-query-look-like"></a>

GraphQL lets you ask for the exact data you need. Queries look like JSON:

```text
Copycopy code to clipboard{  site {    siteMetadata {      title    }  }}
```

Which returns this:

```text
Copycopy code to clipboard{  "site": {    "siteMetadata": {      "title": "A Gatsby site!"    }  }}
```

A basic page component with a GraphQL query might look like this:

```text
Copycopy code to clipboardimport React from "react"import { graphql } from "gatsby"export default function Page({ data }) {  return (    <div>      <h1>About {data.site.siteMetadata.title}</h1>      <p>We're a very cool website you should return to often.</p>    </div>  )}export const query = graphql`  query {    site {      siteMetadata {        title      }    }  }`
```

The result of the query is automatically inserted into your React component on the `data` prop. GraphQL and Gatsby let you ask for data and then immediately start using it.

**Note:** To run GraphQL queries in non-page components you’ll need to use [Gatsby’s Static Query feature](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/).

#### Understanding the parts of a query <a id="understanding-the-parts-of-a-query"></a>

The following diagram shows a GraphQL query, with each word highlighted in a color corresponding to its name on the legend:

[![GraphQL query diagram](https://www.gatsbyjs.com/static/2442c8664739d2a23483e6f16e3208a5/321ea/basic-query.png)](https://www.gatsbyjs.com/static/2442c8664739d2a23483e6f16e3208a5/29007/basic-query.png)

**Query operation type**

The diagram marks the word `query` as the “Operation Type”, for Gatsby’s uses the only operation type you will deal with is `query`, this can be omitted from your queries if you prefer \(like in the above example\).

**Operation name**

`SiteInformation` is marked as the “Operation Name”, which is a unique name that you assign to a query yourself. This is similar to how you would name a function or a variable, and like a function this can be omitted if you would rather the query be anonymous.

**Query fields**

The four words `site`, `id`, `siteMetadata`, and `title` are marked as “Fields”. Any top-level fields — like `site` in the diagram — are sometimes referred to as **root level fields**, though the name doesn’t signify functional significance as all fields in GraphQL queries behave the same.

### How to learn GraphQL <a id="how-to-learn-graphql"></a>

Your experience developing with Gatsby might be the first time you’ve seen GraphQL! We hope you love it as much as we do and find it useful for all your projects.

When starting out with GraphQL, we recommend the following two tutorials:

* [https://www.howtographql.com/](https://www.howtographql.com/)
* [https://graphql.org/learn/](https://graphql.org/learn/)

[The official Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/part-four/) also includes an introduction to using GraphQL specifically with Gatsby.

### How do GraphQL and Gatsby work together? <a id="how-do-graphql-and-gatsby-work-together"></a>

One of the great things about GraphQL is how flexible it is. People use GraphQL with [many different programming languages](https://graphql.org/code/) and for web and native apps.

Most people run GraphQL on a server to respond live to requests for data from clients. You define a schema \(a schema is a formal way of describing the shape of your data\) for your GraphQL server and then your GraphQL resolvers retrieve data from databases and/or other APIs.

Gatsby uses GraphQL at _build-time_ and _not_ for live sites. This is unique, and it means you don’t need to run additional services \(e.g. a database and Node.js service\) to use GraphQL for production websites.

Gatsby is a great framework for building apps so it’s possible and encouraged to pair Gatsby’s native build-time GraphQL with GraphQL queries running against a live GraphQL server from the browser.

### Where does Gatsby’s GraphQL schema come from? <a id="where-does-gatsbys-graphql-schema-come-from"></a>

Most usages of GraphQL involve manually creating a GraphQL schema.

Gatsby uses plugins which can fetch data from different sources. That data is used to automatically _infer_ a GraphQL schema.

If you give Gatsby data that looks like this:

```text
Copycopy code to clipboard{  "title": "A long long time ago"}
```

Gatsby will create a schema that looks something like this:

```text
Copycopy code to clipboardtitle: String
```

This makes it possible to pull data from anywhere and immediately start writing GraphQL queries against your data.

This _can_ cause confusion as some data sources allow you to define a schema even when there’s not any data added for parts or all of the schema. If parts of the data haven’t been added, then those parts of the schema might not be recreated in Gatsby.

### Powerful data transformations <a id="powerful-data-transformations"></a>

GraphQL enables another unique feature of Gatsby — it lets you control data transformations with arguments to your queries. Some examples follow.

#### Formatting dates <a id="formatting-dates"></a>

People often store dates like “2018-01-05” but want to display the date in some other form like “January 5th, 2018”. One way of doing this is to load a date-formatting JavaScript library into the browser. Or, with Gatsby’s GraphQL layer, you can do the formatting at query-time like:

```text
Copycopy code to clipboard{  date(formatString: "MMMM Do, YYYY")}
```

See the full list of formatting options by viewing our [GraphQL reference page](https://www.gatsbyjs.com/docs/graphql-reference/#dates).

#### Markdown <a id="markdown"></a>

Gatsby has _transformer_ plugins which can transform data from one form to another. A common example is markdown. If you install [`gatsby-transformer-remark`](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/), then in your queries, you can specify if you want the transformed HTML version instead of markdown:

```text
Copycopy code to clipboardmarkdownRemark {  html}
```

#### Images <a id="images"></a>

Gatsby has rich support for processing images. Responsive images are a big part of the modern web and typically involve creating 5+ sized thumbnails per photo. With Gatsby’s [`gatsby-transformer-sharp`](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/), you can _query_ your images for responsive versions. The query automatically creates all the needed responsive thumbnails and returns `src` and `srcSet` fields to add to your image element.

Combined with a special Gatsby image component, [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/), you have a very powerful set of primitives for building sites with images.

This is what a component using `gatsby-image` looks like:

```text
Copycopy code to clipboardimport React from "react"import Img from "gatsby-image"import { graphql } from "gatsby"export default function Page({ data }) {  return (    <div>      <h1>Hello gatsby-image</h1>      <Img fixed={data.file.childImageSharp.fixed} />    </div>  )}export const query = graphql`  query {    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {      childImageSharp {        # Specify the image processing specifications right in the query.        # Makes it trivial to update as your page's design changes.        fixed(width: 125, height: 125) {          ...GatsbyImageSharpFixed        }      }    }  }`
```

See also the following blog posts:

* [Making Website Building Fun](https://www.gatsbyjs.com/blog/2017-10-16-making-website-building-fun/)
* [Image Optimization Made Easy with Gatsby.js](https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e)

### Advanced <a id="advanced"></a>

#### Fragments <a id="fragments"></a>

Notice that in the above example for [querying images](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#images), we used `...GatsbyImageSharpFixed`, which is a GraphQL Fragment, a reusable set of fields for query composition. You can read more about them [here](https://graphql.org/learn/queries/#fragments).

If you wish to define your own fragments for use in your application, you can use named exports to export them in any JavaScript file, and they will be automatically processed by Gatsby for use in your GraphQL queries.

For example, if I put a fragment in a helper component, I can use that fragment in any other query:src/components/PostItem.js

```text
Copysrc/components/PostItem.js: copy code to clipboardexport const markdownFrontmatterFragment = graphql`  fragment MarkdownFrontmatter on MarkdownRemark {    frontmatter {      path      title      date(formatString: "MMMM DD, YYYY")    }  }`
```

They can then be used in any GraphQL query after that!

```text
Copycopy code to clipboardquery ($path: String!) {  markdownRemark(frontmatter: { path: { eq: $path } }) {    ...MarkdownFrontmatter  }}
```

It’s good practice for your helper components to define and export a fragment for the data they need. For example, on your index page you might map over all of your posts to show them in a list.src/pages/index.jsx

```text
Copysrc/pages/index.jsx: copy code to clipboardimport React from "react"import { graphql } from "gatsby"export default function Home({ data }) {  return (    <div>      <h1>Index page</h1>      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>      {data.allMarkdownRemark.edges.map(({ node }) => (        <div key={node.id}>          <h3>            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>          </h3>        </div>      ))}    </div>  )}export const query = graphql`  query {    allMarkdownRemark {      totalCount      edges {        node {          id          frontmatter {            title            date(formatString: "DD MMMM, YYYY")          }        }      }    }  }`
```

If the index component becomes too large, you might want to refactor it into smaller components.src/components/IndexPost.jsx

```text
Copysrc/components/IndexPost.jsx: copy code to clipboardimport React from "react"import { graphql } from "gatsby"export default function IndexPost({ frontmatter: { title, date } }) {  return (    <div>      <h3>        {title} <span>— {date}</span>      </h3>    </div>  )}export const query = graphql`  fragment IndexPostFragment on MarkdownRemark {    frontmatter {      title      date(formatString: "MMMM DD, YYYY")    }  }`
```

Now, you can use the component together with the exported fragment in your index page.src/pages/index.jsx

```text
Copysrc/pages/index.jsx: copy code to clipboardimport React from "react"import IndexPost from "../components/IndexPost"import { graphql } from "gatsby"export default function Home({ data }) {  return (    <div>      <h1>Index page</h1>      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>      {data.allMarkdownRemark.edges.map(({ node }) => (        <div key={node.id}>          <IndexPost frontmatter={node.frontmatter} />        </div>      ))}    </div>  )}export const query = graphql`  query {    allMarkdownRemark {      totalCount      edges {        node {          id          ...IndexPostFragment        }      }    }  }`
```

### Further reading <a id="further-reading"></a>

* [Why Gatsby Uses GraphQL](https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/)
* [The Anatomy of a GraphQL Query](https://www.apollographql.com/blog/the-anatomy-of-a-graphql-query-6dffa9e9e747)

#### Getting started with GraphQL <a id="getting-started-with-graphql"></a>

* [https://graphql.org/learn/](https://graphql.org/learn/)
* [https://www.howtographql.com/](https://www.howtographql.com/)
* [https://reactjs.org/blog/2015/05/01/graphql-introduction.html](https://reactjs.org/blog/2015/05/01/graphql-introduction.html)
* [https://services.github.com/on-demand/graphql/](https://services.github.com/on-demand/graphql/)

#### Advanced readings on GraphQL <a id="advanced-readings-on-graphql"></a>

* [GraphQL specification](https://spec.graphql.org/October2016/)
* [Interfaces and Unions](https://medium.com/the-graphqlhub/graphql-tour-interfaces-and-unions-7dd5be35de0d)
* [Relay Compiler \(which Gatsby uses to process queries\)](https://facebook.github.io/relay/docs/en/compiler-architecture.html)

