# GraphQL



* * * [Architecture](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/1-architecture/)
    * [Fetching data - Queries](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/2-fetching-data-queries/)
    * [Writing data - Mutations](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/3-writing-data-mutations/)
    * [Watching data - Subscriptions](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/4-watching-data-subscriptions/)
  * [Hasura Backend Setup](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/hasura-backend/)
  * [Auth0 Setup](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/auth0-setup/)
    * [Custom Claims in Auth0 Rules](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/auth0-setup/1-custom-claims/)
    * [Connect Hasura with Auth0](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/auth0-setup/2-connect-hasura-auth0/)
    * [Sync Users with Rules](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/auth0-setup/3-user-sync-rule/)
  * [Next.js Boilerplate Setup](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/setup/)
  * [Configure Apollo Client with Next.js](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/)
  * [Queries](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/queries/)
    * [Fetch todos - query](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/queries/1-fetch-todos-query/)
    * [useQuery hook](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/queries/2-create-query/)
    * [Handle loading/errors](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/queries/3-handle-errors/)
  * [Mutations & Query variables](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/mutations-variables/)
    * [Create todos - mutation](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/mutations-variables/1-create-todo/)
    * [Query Variables](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/mutations-variables/2-query-variables/)
    * [useMutation Hook, Update Cache](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/mutations-variables/3-create-mutation/)
  * [Optimistic UI](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/)
    * [Update todos - mutation](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/1-update-todos/)
    * [Mutation and update cache](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/2-mutation-cache/)
    * [Remove todos - mutation](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/3-remove-todos/)
    * [Mutation and update cache](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/3.1-mutation-update-cache/)
    * [Bulk delete todos - mutation](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/3.2-bulk-delete-mutation/)
    * [Mutation and update cache](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/optimistic-update-mutations/3.3-clear-completed/)
  * [Subscriptions to show online users](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/subscriptions/)
    * [Apollo useSubscription React hook](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/subscriptions/1-apollo-subscription/)
    * [Create Subscription and Render Result](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/subscriptions/2-create-subscription/)
  * [Realtime Feed](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/realtime-feed/)
    * [Fetch public todos - subscription](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/realtime-feed/1-fetch-public/)
    * [Sync new todos](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/realtime-feed/2-sync-todo/)
  * [Deployment](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/deployment/)
  * [What next?](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/what-next/)
* * [Hasura Docs](https://hasura.io/docs/latest/graphql/core/index.html)
* [GraphQL API](https://hasura.io/graphql/)

## Intro to GraphQL

[![Github logo](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjM1MCAyMzE0LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExNzUsMEM1MjUuOCwwLDAsNTI1LjgsMCwxMTc1YzAsNTUyLjIsMzc4LjksMTAxMC41LDg5MC4xLDExMzkuN2MtNS45LTE0LjctOC44LTM1LjMtOC44LTU1Ljh2LTE5OS44SDczNC40DQoJYy03OS4zLDAtMTUyLjgtMzUuMi0xODUuMS05OS45Yy0zOC4yLTcwLjUtNDQuMS0xNzkuMi0xNDEtMjQ2LjhjLTI5LjQtMjMuNS01LjktNDcsMjYuNC00NC4xYzYxLjcsMTcuNiwxMTEuNiw1OC44LDE1OC42LDEyMC40DQoJYzQ3LDYxLjcsNjcuNiw3Ni40LDE1NS43LDc2LjRjNDEuMSwwLDEwNS43LTIuOSwxNjQuNS0xMS44YzMyLjMtODIuMyw4OC4xLTE1NS43LDE1NS43LTE5MC45Yy0zOTMuNi00Ny01ODEuNi0yNDAuOS01ODEuNi01MDUuMw0KCWMwLTExNC42LDQ5LjktMjIzLjMsMTMyLjItMzE3LjNjLTI2LjQtOTEuMS02MS43LTI3OS4xLDExLjgtMzUyLjVjMTc2LjMsMCwyODIsMTE0LjYsMzA4LjQsMTQzLjljODguMS0yOS40LDE4NS4xLTQ3LDI4NC45LTQ3DQoJYzEwMi44LDAsMTk2LjgsMTcuNiwyODQuOSw0N2MyNi40LTI5LjQsMTMyLjItMTQzLjksMzA4LjQtMTQzLjljNzAuNSw3MC41LDM4LjIsMjYxLjQsOC44LDM1Mi41YzgyLjMsOTEuMSwxMjkuMywyMDIuNywxMjkuMywzMTcuMw0KCWMwLDI2NC40LTE4NS4xLDQ1OC4zLTU3NS43LDQ5OS40YzEwOC43LDU1LjgsMTg1LjEsMjE0LjQsMTg1LjEsMzMxLjlWMjI1NmMwLDguOC0yLjksMTcuNi0yLjksMjYuNA0KCUMyMDIxLDIxMjMuOCwyMzUwLDE2ODkuMSwyMzUwLDExNzVDMjM1MCw1MjUuOCwxODI0LjIsMCwxMTc1LDBMMTE3NSwweiIvPg0KPC9zdmc+DQo=)Edit on GitHub](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql.md)

### What is GraphQL? <a id="whatisgraphql?"></a>

GraphQL is a specification for how to talk to an API. It's typically used over HTTP where the key idea is to `POST` a "query" to an HTTP endpoint, instead of hitting different HTTP endpoints for different resources.

GraphQL is designed for developers of web/mobile apps \(HTTP clients\) to be able to make API calls to fetch the data they need from their backend APIs conveniently.

### GraphQL vs REST: an example <a id="graphqlvsrest:anexample"></a>

Let's say you have an API to fetch a user's profile and their address. In a typical REST scenario, this is what the request/response would look like:

![GraphQL API example](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/rest-api.png)

If your API server was a GraphQL server instead, this is what your API calls would look like:

![GraphQL API example](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/graphql-api.gif)

You can see that the response JSON is different for different "queries" sent by the client.

```text
Request1:         |  Response1:query {           |  {  user (id: 1) {  |    "user": {    id            |       "id": 1  }               |     }}                 |  }----------------------------------------Request2:         |   Response2:query {           |   {  user (id: 1) {  |     "user": {    id            |       "id": 1    name          |       "name": "Elmo"  }               |     }}                 |   }
```

### Thinking in GraphQL <a id="thinkingingraphql"></a>

We're changing the way we think about API calls. Instead of making different API calls to different URLs to fetch data, we're making ad-hoc queries to a "single URL endpoint" that returns data based on the query.

* Instead of 'GET'ing a resource you 'POST' a query that describes what data you want.
* You think of the data your API returns as a "graph", this allows you to make queries to fetch "related" pieces of data in a single shot. In the example above, you fetch the user and the user's address \(as a nested JSON object\) in the same API call, as opposed to making 2 API calls.
* The "query" you send as data in the POST request has a structure and a syntax. This "language" is called GraphQL.

As you can see in the example above, GraphQL queries look very neat and easy to read! This is because the query is the "shape" of the final JSON data you desire. This is one of the key-reasons that makes GraphQL a joy to work with!

### GraphQL benefits <a id="graphqlbenefits"></a>

* **Avoid over-fetching**: You avoid fetching more data than you need because you can specify the exact **fields** you need.
* **Prevent multiple API calls**: In case you need more data, you can also avoid making multiple calls to your API. In the case above, you don't need to make 2 API calls to fetch `user` and `address` separately.
* **Lesser communication with API developers**: Sometimes to fetch the exact data you need, especially if you need to fetch more data and want to avoid multiple API calls, you will need to ask your API developers to build a new API. With GraphQL, your work is _independent_ of the API team! This allows you to work faster on your app.
* **Self-documenting**: Every GraphQL API conforms to a "schema" which is the graph data model and what kinds of queries a client can make. This allows the community to build lots of cool tools to explore & visualise your API or create IDE plugins that autocomplete your GraphQL queries and even do "codegen". We'll understand this in more detail later!

Here's a quick chart to show you the GraphQL analogs of typical REST-ish terms:

| Requirement | REST | GraphQL |
| :--- | :--- | :--- |
| Fetching data objects | GET | query |
| Writing data | POST | mutation |
| Updating/deleting data | PUT/PATCH/DELETE | mutation |
| Watching/subscribing to data | - | subscription |





### Try out GraphQL queries <a id="tryoutgraphqlqueries"></a>

For this tutorial we've set up a GraphQL API for you. The most common way to browse a GraphQL API is to use GraphiQL. GraphiQL is a tool built by Facebook, \(pronounced "graphical"\) that makes it easy to explore any GraphQL API.

When you connect GraphiQL to a GraphQL endpoint, it queries the server for its GraphQL schema and gives you a UI to browse and test queries, and that powers its amazing autocomplete!

![GraphiQL demo](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/graphiql.gif)

Tools like GraphiQL make GraphQL APIs really easy to use and integrate APIs in your app without requiring external documentation tools.

You can access the GraphiQL for this realtime todo app tutorial here: [hasura.io/learn/graphql/graphiql](https://hasura.io/learn/graphql/graphiql)

When you work with a GraphQL API in a project you will almost always use a tool like GraphiQL to explore and test your GraphQL queries.

### Basic GraphQL query <a id="basicgraphqlquery"></a>

1. Open GraphiQL at: [hasura.io/learn/graphql/graphiql](https://hasura.io/learn/graphql/graphiql). You'll have to login to get an auth token to query the API. In a real-world scenario your GraphQL APIs will be protected.
2. You'll see a URL, and headers that contain the auth token that will be sent along with your GraphQL query.
3. Now, paste this GraphQL query in the GraphiQL window

```text
 query {   users {     name   } }
```

1. Hit `ctrl + enter` or `cmd + enter` \(mac\) or click on the ▶️ icon to run the GraphQL query
2. On the right, you should see a list of users by their names that are in the system!

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

Recall that there is no magic here! The hosted GraphiQL app is sending a GraphQL query string to the server at the given endpoint with the HTTP headers. The server then sends the response that you see on the right hand side.

### Fetching "graphs" <a id="fetching&quot;graphs&quot;"></a>

Our todo app has users, todos and information about users that are currently online. This is what our API "schema" looks like:

![Schema](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/schema.png)

As you can see, it is a "graph" like schema where all the 3 models are linked to each other.

Let's try making queries that fetch different slices of our data from the overall "graph".

#### Fetch users and their todos <a id="fetchusersandtheirtodos"></a>

This GraphQL query will fetch all the users and their publicly visible todos:

```text
 query {   users {     name     todos {       title     }   } }
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

#### Fetch online users and their profile information <a id="fetchonlineusersandtheirprofileinformation"></a>

This GraphQL query will fetch all the currently online users and their profile information \(which is just their name for now\):

```text
 query {   online_users {     last_seen     user {       name     }   } }
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Adding parameters \(arguments\) to GraphQL queries <a id="addingparameters(arguments)tographqlqueries"></a>

In most API calls, you usually use parameters. For example, to specify what data you're fetching. If you're familiar with making `GET` calls, you would have used a query parameter. For example, to fetch only 10 todos you might have made this API call: `GET /api/todos?limit=10`.

The GraphQL query analog of this is _arguments_ that you can attach to a "field".

#### Basic argument: Fetch 10 todos <a id="basicargument:fetch10todos"></a>

This GraphQL query will fetch 10 todos and not all of them.

```text
query {  todos(limit: 10) {    id    title  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

The most important bit to check here is `limit: 10`. GraphQL servers will provide a list of arguments that can be used in `()` next to specific fields. In our case, we are using Hasura for creating the GraphQL backend which provides filter, sort and pagination arguments. The GraphQL server or API that you use, might provide a different set of arguments that can be used.

#### Multiple arguments on multiple fields: Fetch 1 user and 5 most recent todos for each user <a id="multipleargumentsonmultiplefields:fetch1userand5mostrecenttodosforeachuser"></a>

```text
query {  users (limit: 1) {    id    name    todos(order_by: {created_at: desc}, limit: 5) {      id      title    }  }}
```

Notice that we are passing arguments to different fields. This GraphQL query reads as:

> Fetch users \(with limit 1\), and their todos \(ordered by descending creation time, and limited to 5\).

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### GraphQL variables: Passing arguments to your queries dynamically <a id="graphqlvariables:passingargumentstoyourqueriesdynamically"></a>

This is great, but we still have a problem. If we want to create a query where we are fetching data with arguments that are provided dynamically, we'd have to create the entire query string again.

This is what we don't want to do:

```text
var limit = getMaxTodosFromUserInput();var query = "query { todos (limit: " + limit.toString() + ") {id title} }";
```

Thankfully, we don't ever have to do this! GraphQL variables are extra variables that you can send in a query so that the "arguments" can be provided dynamically!

### Fetch $limit number of todos <a id="fetch$limitnumberoftodos"></a>

This is what our GraphQL query would look like:

```text
query ($limit: Int!) {  todos(limit: $limit) {    id    title  }}
```

In addition to the query above, we send a variables object:

```text
{   "limit": 10}
```

Now instead of sending just the query to the GraphQL server, from our client we'll send both the query and the variables. The GraphQL server will use the variable in the right place in the query automatically for us!

Let's try this out in GraphiQL:

1. Head to GraphiQL
2. Write out this query
3. Scroll to the bottom of the page, where you see a smaller panel "Query Variables"
4. Add the query variable as a JSON object

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Summary <a id="summary"></a>

* You can now make GraphQL queries
* You know how to pass arguments to your GraphQL queries
* You know how to make your arguments dynamic by using query variables

Next, let's look at writing data and not just fetching data!

## Architecture

[![Github logo](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjM1MCAyMzE0LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExNzUsMEM1MjUuOCwwLDAsNTI1LjgsMCwxMTc1YzAsNTUyLjIsMzc4LjksMTAxMC41LDg5MC4xLDExMzkuN2MtNS45LTE0LjctOC44LTM1LjMtOC44LTU1Ljh2LTE5OS44SDczNC40DQoJYy03OS4zLDAtMTUyLjgtMzUuMi0xODUuMS05OS45Yy0zOC4yLTcwLjUtNDQuMS0xNzkuMi0xNDEtMjQ2LjhjLTI5LjQtMjMuNS01LjktNDcsMjYuNC00NC4xYzYxLjcsMTcuNiwxMTEuNiw1OC44LDE1OC42LDEyMC40DQoJYzQ3LDYxLjcsNjcuNiw3Ni40LDE1NS43LDc2LjRjNDEuMSwwLDEwNS43LTIuOSwxNjQuNS0xMS44YzMyLjMtODIuMyw4OC4xLTE1NS43LDE1NS43LTE5MC45Yy0zOTMuNi00Ny01ODEuNi0yNDAuOS01ODEuNi01MDUuMw0KCWMwLTExNC42LDQ5LjktMjIzLjMsMTMyLjItMzE3LjNjLTI2LjQtOTEuMS02MS43LTI3OS4xLDExLjgtMzUyLjVjMTc2LjMsMCwyODIsMTE0LjYsMzA4LjQsMTQzLjljODguMS0yOS40LDE4NS4xLTQ3LDI4NC45LTQ3DQoJYzEwMi44LDAsMTk2LjgsMTcuNiwyODQuOSw0N2MyNi40LTI5LjQsMTMyLjItMTQzLjksMzA4LjQtMTQzLjljNzAuNSw3MC41LDM4LjIsMjYxLjQsOC44LDM1Mi41YzgyLjMsOTEuMSwxMjkuMywyMDIuNywxMjkuMywzMTcuMw0KCWMwLDI2NC40LTE4NS4xLDQ1OC4zLTU3NS43LDQ5OS40YzEwOC43LDU1LjgsMTg1LjEsMjE0LjQsMTg1LjEsMzMxLjlWMjI1NmMwLDguOC0yLjksMTcuNi0yLjksMjYuNA0KCUMyMDIxLDIxMjMuOCwyMzUwLDE2ODkuMSwyMzUwLDExNzVDMjM1MCw1MjUuOCwxODI0LjIsMCwxMTc1LDBMMTE3NSwweiIvPg0KPC9zdmc+DQo=)](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql/1-architecture.md)Before going further in understanding GraphQL, it's useful to get a sense of how GraphQL is actually used in an HTTP client \(typically a web/mobile app\).

### GraphQL over HTTP <a id="graphqloverhttp"></a>

Check out the diagram below, to get a sense of how GraphQL is typically used in your stack:

![GraphQL over HTTP](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/graphql-on-http.png)

#### GraphQL client-server flow: <a id="graphqlclient-serverflow:"></a>

1. Note that the GraphQL query is not really JSON; it looks like the shape of the JSON you _want_. So when we make a 'POST' request to send our GraphQL query to the server, it is sent as a "string" by the client.
2. The server gets the JSON object and extracts the query string. As per the GraphQL syntax and the graph data model \(GraphQL schema\), the server processes and validates the GraphQL query.
3. Just like a typical API server, the GraphQL API server then makes calls to a database or other services to fetch the data that the client requested.
4. The server then takes the data and returns it to the client in a JSON object.

#### Example GraphQL client setup: <a id="examplegraphqlclientsetup:"></a>

In your day to day work, you don't actually need to worry about the underlying HTTP requests & responses.

Just like when you work with a REST API and use a HTTP client to reduce the boilerplate in making API calls and handling responses, you can choose a GraphQL client to make writing GraphQL queries, sending them and handling responses much easier.

In fact, the mechanism of how you send the GraphQL query and accept the GraphQL response has become standard. This makes working with GraphQL very easy on the client.

Here's what a typical GraphQL client setup and making a query would look like:

```text
// Setup a GraphQL client to use the endpointconst client = new client("https://myapi.com/graphql");// Now, send your query as a string (Note that ` is used to create a multi-line// string in javascript).client.query(`  query {    user {      id      name    }  }`);
```



## Writing data - Mutations

[![Github logo](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjM1MCAyMzE0LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExNzUsMEM1MjUuOCwwLDAsNTI1LjgsMCwxMTc1YzAsNTUyLjIsMzc4LjksMTAxMC41LDg5MC4xLDExMzkuN2MtNS45LTE0LjctOC44LTM1LjMtOC44LTU1Ljh2LTE5OS44SDczNC40DQoJYy03OS4zLDAtMTUyLjgtMzUuMi0xODUuMS05OS45Yy0zOC4yLTcwLjUtNDQuMS0xNzkuMi0xNDEtMjQ2LjhjLTI5LjQtMjMuNS01LjktNDcsMjYuNC00NC4xYzYxLjcsMTcuNiwxMTEuNiw1OC44LDE1OC42LDEyMC40DQoJYzQ3LDYxLjcsNjcuNiw3Ni40LDE1NS43LDc2LjRjNDEuMSwwLDEwNS43LTIuOSwxNjQuNS0xMS44YzMyLjMtODIuMyw4OC4xLTE1NS43LDE1NS43LTE5MC45Yy0zOTMuNi00Ny01ODEuNi0yNDAuOS01ODEuNi01MDUuMw0KCWMwLTExNC42LDQ5LjktMjIzLjMsMTMyLjItMzE3LjNjLTI2LjQtOTEuMS02MS43LTI3OS4xLDExLjgtMzUyLjVjMTc2LjMsMCwyODIsMTE0LjYsMzA4LjQsMTQzLjljODguMS0yOS40LDE4NS4xLTQ3LDI4NC45LTQ3DQoJYzEwMi44LDAsMTk2LjgsMTcuNiwyODQuOSw0N2MyNi40LTI5LjQsMTMyLjItMTQzLjksMzA4LjQtMTQzLjljNzAuNSw3MC41LDM4LjIsMjYxLjQsOC44LDM1Mi41YzgyLjMsOTEuMSwxMjkuMywyMDIuNywxMjkuMywzMTcuMw0KCWMwLDI2NC40LTE4NS4xLDQ1OC4zLTU3NS43LDQ5OS40YzEwOC43LDU1LjgsMTg1LjEsMjE0LjQsMTg1LjEsMzMxLjlWMjI1NmMwLDguOC0yLjksMTcuNi0yLjksMjYuNA0KCUMyMDIxLDIxMjMuOCwyMzUwLDE2ODkuMSwyMzUwLDExNzVDMjM1MCw1MjUuOCwxODI0LjIsMCwxMTc1LDBMMTE3NSwweiIvPg0KPC9zdmc+DQo=)Edit on GitHub](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql/3-writing-data-mutations.md)

These are the concepts you should know before you attack mutations \(haha\):

* [Using GraphiQL](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/2-fetching-data-queries/#tryoutgraphqlqueries)
* [Using query variables](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/2-fetching-data-queries/#graphqlvariables:passingargumentstoyourqueriesdynamically)

Now, let's get started with seeing how we can use GraphQL to "write" data. GraphQL mutations are types of GraphQL queries that may result in the state of your backend "mutating" or changing, just like typical `'POST'`, `'PUT'`, `'PATCH'`, `'DELETE'` APIs.

### Basic mutations <a id="basicmutations"></a>

Since we're using Hasura for our GraphQL API, we get mutations for inserts, updates or deletes that we can use in our app.

Let's try these mutations out in the context of a todo app to see what mutations look like. Mutations that you get from another GraphQL service, say if your API team has built their own, might be different.

#### Create a todo <a id="createatodo"></a>

Let's make an API call to create a todo. As you would have guessed, this will be a critical portion of our todo app. 😉

> **Protip**: Now let's say we don't know what the name of the mutation to create a todo. GraphiQL to the rescue! Head to GraphiQL and on the right, click on the "docs" tab. Type "todo" there and you'll see a list of GraphQL queries and types that use todo. Read through their descriptions and you'll soon find that `insert_todos` is what you need.

The mutation to create todos is titled `insert_todos`.

```text
mutation {  insert_todos(objects: [{title: "new todo"}]) {    returning {      id    }  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Returning data after the mutation <a id="returningdataafterthemutation"></a>

Notice that the data of the todo that is to be inserted is sent as an argument to the `insert_todos` mutation. But the "fields" of the mutation specify the shape of the _response_ that you want from the server.

Let's say we'd like to get the entire todo object once it's been created as a response:

```text
mutation {  insert_todos(objects: [{title: "new todo"}]) {    returning {      id      title      is_completed      is_public      created_at    }  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Parameterise what you insert <a id="parameterisewhatyouinsert"></a>

For mutations, we would almost always have to parameterise the arguments! We would rarely, if ever, have a "hardcoded" mutation in our app. This is because the arguments of what data to capture, how to modify or delete something is usually dependent on some user action.

Now that we know how to parameterise using query variables, let's use that:

```text
# The parameterised GraphQL mutationmutation($todo: todos_insert_input!){  insert_todos(objects: [$todo]) {    returning {      id    }  }}
```

```text
# As a query variable{  "todo": {    "title": "A new dynamic todo"  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

We'll explore more mutations to update or delete data a little later. This is a good start to grokking mutations!

### Summary <a id="summary"></a>

* You can make basic GraphQL mutations
* You can pass dynamic arguments/data to mutations with query variables

Next, let's look at GraphQL subscriptions



## Watching data - Subscriptions

[![Github logo](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjM1MCAyMzE0LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExNzUsMEM1MjUuOCwwLDAsNTI1LjgsMCwxMTc1YzAsNTUyLjIsMzc4LjksMTAxMC41LDg5MC4xLDExMzkuN2MtNS45LTE0LjctOC44LTM1LjMtOC44LTU1Ljh2LTE5OS44SDczNC40DQoJYy03OS4zLDAtMTUyLjgtMzUuMi0xODUuMS05OS45Yy0zOC4yLTcwLjUtNDQuMS0xNzkuMi0xNDEtMjQ2LjhjLTI5LjQtMjMuNS01LjktNDcsMjYuNC00NC4xYzYxLjcsMTcuNiwxMTEuNiw1OC44LDE1OC42LDEyMC40DQoJYzQ3LDYxLjcsNjcuNiw3Ni40LDE1NS43LDc2LjRjNDEuMSwwLDEwNS43LTIuOSwxNjQuNS0xMS44YzMyLjMtODIuMyw4OC4xLTE1NS43LDE1NS43LTE5MC45Yy0zOTMuNi00Ny01ODEuNi0yNDAuOS01ODEuNi01MDUuMw0KCWMwLTExNC42LDQ5LjktMjIzLjMsMTMyLjItMzE3LjNjLTI2LjQtOTEuMS02MS43LTI3OS4xLDExLjgtMzUyLjVjMTc2LjMsMCwyODIsMTE0LjYsMzA4LjQsMTQzLjljODguMS0yOS40LDE4NS4xLTQ3LDI4NC45LTQ3DQoJYzEwMi44LDAsMTk2LjgsMTcuNiwyODQuOSw0N2MyNi40LTI5LjQsMTMyLjItMTQzLjksMzA4LjQtMTQzLjljNzAuNSw3MC41LDM4LjIsMjYxLjQsOC44LDM1Mi41YzgyLjMsOTEuMSwxMjkuMywyMDIuNywxMjkuMywzMTcuMw0KCWMwLDI2NC40LTE4NS4xLDQ1OC4zLTU3NS43LDQ5OS40YzEwOC43LDU1LjgsMTg1LjEsMjE0LjQsMTg1LjEsMzMxLjlWMjI1NmMwLDguOC0yLjksMTcuNi0yLjksMjYuNA0KCUMyMDIxLDIxMjMuOCwyMzUwLDE2ODkuMSwyMzUwLDExNzVDMjM1MCw1MjUuOCwxODI0LjIsMCwxMTc1LDBMMTE3NSwweiIvPg0KPC9zdmc+DQo=)Edit on GitHub](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql/4-watching-data-subscriptions.md)

The GraphQL specification allows for something called subscriptions that are like GraphQL queries but instead of returning data in one read, you get data pushed from the server.

This is useful for your app to subscribe to "events" or "live results" from the backend, but while allowing you to control the "shape" of the event from your app.

GraphQL subscriptions are a critical component of adding realtime or reactive features to your apps easily. GraphQL clients and servers that support subscriptions are great because they allow you to build great experiences without having to deal with websocket code!

### Make your first GraphQL subscription <a id="makeyourfirstgraphqlsubscription"></a>

Step 1: Head to [https://hasura.io/learn/graphql/graphiql](https://hasura.io/learn/graphql/graphiql) Step 2: Write this GraphQL query in the textarea:

```text
subscription {  online_users {    id    last_seen    user {      name    }  }}
```

Step 3: Click on the play button.

Every time the set of online users change, you'll see the latest set on the response window on the right.

### How do GraphQL subscriptions work? <a id="howdographqlsubscriptionswork?"></a>

GraphQL queries and mutations are strings sent to a POST endpoint. What is a GraphQL subscription? That can't happen over a POST endpoint, because a simple HTTP endpoint would just return the response and the connection would close.

A GraphQL subscription is a subscription query string sent to a websocket endpoint. And whenever data changes on the backend, new data is pushed over websockets from the server to the client.

### Summary <a id="summary"></a>

* You know how to make GraphQL subscriptions

Now that you're comfortable with the basics of using GraphQL, let's start integrating GraphQL APIs with an app!![Close](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDE2SDIyIiBzdHJva2U9IiNBOEE4QTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xIDE2QzEgMTkuOTc4MiAyLjU4MDM1IDIzLjc5MzYgNS4zOTM0IDI2LjYwNjZDOC4yMDY0NCAyOS40MTk2IDEyLjAyMTggMzEgMTYgMzFDMTkuOTc4MiAzMSAyMy43OTM2IDI5LjQxOTYgMjYuNjA2NiAyNi42MDY2QzI5LjQxOTYgMjMuNzkzNiAzMSAxOS45NzgyIDMxIDE2QzMxIDEyLjAyMTggMjkuNDE5NiA4LjIwNjQ0IDI2LjYwNjYgNS4zOTM0QzIzLjc5MzYgMi41ODAzNSAxOS45NzgyIDEgMTYgMUMxMi4wMjE4IDEgOC4yMDY0NCAyLjU4MDM1IDUuMzkzNCA1LjM5MzRDMi41ODAzNSA4LjIwNjQ0IDEgMTIuMDIxOCAxIDE2VjE2WiIgc3Ryb2tlPSIjQThBOEE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)

### Get Started with GraphQL Now

Hasura Cloud gives you a fully managed, production ready GraphQL API as a service to help you build modern apps faster.[Try Hasura Cloud for Free](https://cloud.hasura.io/signup?pg=learn_graphql_nextjs-fullstack-serverless_intro-to-graphql_4-watching-data-subscriptions&plcmt=floating&cta=use-hasura-cloud-free&tech=default)[![Pocket](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzOCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjMzMDM2IDAuNjg3NUgzNC45NTU0QzM2LjI0MTcgMC42ODc1IDM3LjI4NTcgMS43MzM4MyAzNy4yODU3IDMuMDE3ODZWMTUuODM0OEMzNy4yODU3IDI1LjQ3MzIgMjkuNDQ2NCAzMy4zMTI1IDE5LjgwOCAzMy4zMTI1SDE3LjQ3NzdDNy44MzkzMiAzMy4zMTI1IDAgMjUuNDczMiAwIDE1LjgzNDhWMy4wMTc4NkMwIDEuNzMzODMgMS4wNDYzMyAwLjY4NzUgMi4zMzAzNiAwLjY4NzVaTTE2Ljk5NTQgMjMuMzA4MkMxNy40NDk4IDIzLjc2MjYgMTguMDQ2MyAyMy45OTA5IDE4LjY0MjkgMjMuOTkwOUMxOS4yMzk0IDIzLjk5MDkgMTkuODM2IDIzLjc2MjYgMjAuMjkwNCAyMy4zMDgyTDI5LjYxMTMgMTMuOTg3MUMzMC41MjI1IDEzLjA3NiAzMC41MjI1IDExLjYwMzMgMjkuNjExMyAxMC42OTIyQzI4LjcwMDIgOS43ODEwMiAyNy4yMjc1IDkuNzgxMDIgMjYuMzE2NCAxMC42OTIyTDE4LjY0MjkgMTguMzY1N0wxMC45Njk0IDEwLjY5MjJDMTAuMDU4MyA5Ljc4MTAyIDguNTg1NTcgOS43ODEwMiA3LjY3NDQ1IDEwLjY5MjJDNi43NjMzMiAxMS42MDMzIDYuNzYzMzIgMTMuMDc2IDcuNjc0NDUgMTMuOTg3MUwxNi45OTU0IDIzLjMwODJaIiBmaWxsPSIjQThBOEE4Ii8+Cjwvc3ZnPgo=)](https://getpocket.com/save?url=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)![Copy](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjA4ODkgMi4xOTY3NkMyNy4xNTk5IC0wLjczMjI0MyAyMi40MTEzIC0wLjczMjI0MyAxOS40ODIzIDIuMTk2N0wxMy4yMTM5IDguNDY1MDhDMTAuMTg0MiAxMS40OTQ5IDEwLjQ2NDcgMTYuMzIyNCAxMy4yMTM5IDE5LjA3MTdDMTMuNjc0MyAxOS41MzIxIDE0LjE4MzYgMTkuOTA3NSAxNC43MjE1IDIwLjIxNThMMTUuODY1NiAxOS4wNzE3QzE2LjYxNiAxOC4zMjEyIDE2LjM1MTggMTcuNDQzOSAxNi4zMzgzIDE2LjgxMDhDMTYuMTczNiAxNi42OTQxIDE2LjAxMzUgMTYuNTY3OSAxNS44NjU2IDE2LjQyQzE0LjQ1NDggMTUuMDA5MyAxNC4zOTEzIDEyLjU5MSAxNS44NjU2IDExLjExNjdDMTYuMDg0NSAxMC44OTc4IDIyLjAwMSA0Ljk4MTMzIDIyLjEzMzggNC44NDg0NUMyMy41OTYzIDMuMzg2MDEgMjUuOTc0NyAzLjM4NjAxIDI3LjQzNzIgNC44NDg0NUMyOC44OTk2IDYuMzEwODkgMjguODk5NiA4LjY4OTMzIDI3LjQzNzIgMTAuMTUxOEwyMy4yOTM4IDE0LjI5NTFDMjMuNDEzNyAxNC45NTggMjQuMTMyNyAxNi41Mjg0IDIzLjc2MjggMTkuMTE4OUMyMy43ODA5IDE5LjEwMTIgMjMuODAyNSAxOS4wODk3IDIzLjgyMDUgMTkuMDcxOEwzMC4wODg5IDEyLjgwMzRDMzMuMDE3OCA5Ljg3NDM5IDMzLjAxNzggNS4xMjU3NiAzMC4wODg5IDIuMTk2NzZaIiBmaWxsPSIjQThBOEE4Ii8+CjxwYXRoIGQ9Ik0xOS44NDMgMTIuNDQyOUMxOS4zODI3IDExLjk4MjUgMTguODczMyAxMS42MDcxIDE4LjMzNTUgMTEuMjk4OEwxNy4xOTE0IDEyLjQ0MjlDMTYuNDQwOSAxMy4xOTMzIDE2LjcwNTEgMTQuMDcwNiAxNi43MTg2IDE0LjcwMzZDMTYuODgzNCAxNC44MjA0IDE3LjA0MzYgMTQuOTQ2NiAxNy4xOTE0IDE1LjA5NDVDMTguNjAyMyAxNi41MDUzIDE4LjY2NTcgMTguOTIzNSAxNy4xOTE0IDIwLjM5NzhDMTYuOTcyIDIwLjYxNzIgMTAuNTY1NSAyNy4wMjM3IDEwLjQzNzMgMjcuMTUxOUM4Ljk3NDg3IDI4LjYxNDMgNi41OTY0MyAyOC42MTQzIDUuMTMzOTkgMjcuMTUxOUMzLjY3MTU1IDI1LjY4OTUgMy42NzE1NSAyMy4zMTEgNS4xMzM5OSAyMS44NDg2TDkuNzYzMTkgMTcuMjE5NEM5LjY0MzM3IDE2LjU1NjUgOC45MjQyNSAxNC45ODYxIDkuMjk0MTkgMTIuMzk1NkM5LjI3NjEyIDEyLjQxMzMgOS4yNTQzNyAxMi40MjQ5IDkuMjM2MzcgMTIuNDQyOEwyLjQ4MjMgMTkuMTk3Qy0wLjQ0NjU3NSAyMi4xMjYgLTAuNDQ2NTc1IDI2Ljg3NDcgMi40ODIzIDI5LjgwMzdDNS40MTEzMSAzMi43MzI1IDEwLjE1OTkgMzIuNzMyNSAxMy4wODg5IDI5LjgwMzdMMTkuODQzIDIzLjA0OTVDMjIuODE2NSAyMC4wNzYgMjIuNjU0IDE1LjI1MzggMTkuODQzIDEyLjQ0MjlaIiBmaWxsPSIjQThBOEE4Ii8+Cjwvc3ZnPgo=)[![Whatsapp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzMyAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2Ljc1MyAwLjgxMzQ3N0gxNi43NDQ5QzcuODIwMSAwLjgxMzQ3NyAwLjU2MjUgOC4wNzMxIDAuNTYyNSAxNi45OTk5QzAuNTYyNSAyMC41NDA3IDEuNzAzNjUgMjMuODIyNSAzLjY0NCAyNi40ODcyTDEuNjI2NzYgMzIuNTAwNUw3Ljg0ODQzIDMwLjUxMTZDMTAuNDA3OSAzMi4yMDcxIDEzLjQ2MTEgMzMuMTg2NCAxNi43NTMgMzMuMTg2NEMyNS42Nzc4IDMzLjE4NjQgMzIuOTM1NCAyNS45MjQ3IDMyLjkzNTQgMTYuOTk5OUMzMi45MzU0IDguMDc1MTMgMjUuNjc3OCAwLjgxMzQ3NyAxNi43NTMgMC44MTM0NzdaTTI2LjE3MTUgMjMuNjcwOEMyNS43ODEgMjQuNzczNSAyNC4yMzExIDI1LjY4OCAyMi45OTQ5IDI1Ljk1NTFDMjIuMTQ5MiAyNi4xMzUyIDIxLjA0NDQgMjYuMjc4OCAxNy4zMjU2IDI0LjczNzFDMTIuNTY4OCAyMi43NjY0IDkuNTA1NTIgMTcuOTMyNyA5LjI2Njc3IDE3LjYxOTFDOS4wMzgxMyAxNy4zMDU1IDcuMzQ0NjIgMTUuMDU5NiA3LjM0NDYyIDEyLjczNjhDNy4zNDQ2MiAxMC40MTQxIDguNTI0MjEgOS4yODMwNCA4Ljk5OTY5IDguNzk3NDVDOS4zOTAxOSA4LjM5ODg1IDEwLjAzNTYgOC4yMTY3NiAxMC42NTQ4IDguMjE2NzZDMTAuODU1MSA4LjIxNjc2IDExLjAzNTEgOC4yMjY4NyAxMS4xOTcgOC4yMzQ5N0MxMS42NzI1IDguMjU1MiAxMS45MTEyIDguMjgzNTMgMTIuMjI0OCA5LjAzNDE3QzEyLjYxNTMgOS45NzUwMSAxMy41NjYzIDEyLjI5NzggMTMuNjc5NiAxMi41MzY1QzEzLjc5NDkgMTIuNzc1MyAxMy45MTAzIDEzLjA5OSAxMy43NDg0IDEzLjQxMjZDMTMuNTk2NiAxMy43MzYzIDEzLjQ2MzEgMTMuODggMTMuMjI0NCAxNC4xNTUyQzEyLjk4NTYgMTQuNDMwMyAxMi43NTkgMTQuNjQwOCAxMi41MjAyIDE0LjkzNjJDMTIuMzAxNyAxNS4xOTMxIDEyLjA1NDkgMTUuNDY4MyAxMi4zMzAxIDE1Ljk0MzhDMTIuNjA1MiAxNi40MDkxIDEzLjU1NjIgMTcuOTYxIDE0Ljk1NjMgMTkuMjA3NEMxNi43NjMxIDIwLjgxNTkgMTguMjI4IDIxLjMyOTggMTguNzUyIDIxLjU0ODNDMTkuMTQyNSAyMS43MTAyIDE5LjYwNzkgMjEuNjcxNyAxOS44OTMyIDIxLjM2ODNDMjAuMjU1MyAyMC45Nzc4IDIwLjcwMjUgMjAuMzMwMyAyMS4xNTc3IDE5LjY5M0MyMS40ODE1IDE5LjIzNTcgMjEuODkwMiAxOS4xNzkgMjIuMzE5MSAxOS4zNDA5QzIyLjc1NjIgMTkuNDkyNiAyNS4wNjg4IDIwLjYzNTggMjUuNTQ0MyAyMC44NzI1QzI2LjAxOTcgMjEuMTExMyAyNi4zMzM0IDIxLjIyNDYgMjYuNDQ4NyAyMS40MjQ5QzI2LjU2MiAyMS42MjUyIDI2LjU2MiAyMi41NjYgMjYuMTcxNSAyMy42NzA4WiIgZmlsbD0iI0E4QThBOCIvPgo8L3N2Zz4K)](https://wa.me/?text=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)[![Twitter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA0MSAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwLjU2MDMgNC41MjU3M0MzOS4wNjk2IDUuMTk3NDMgMzcuNDYyOCA1LjYzODgyIDM1Ljc5NzkgNS44NDk5M0MzNy41MDE1IDQuODMyNzkgMzguODE4IDMuMjIwNzMgMzkuNDM3NSAxLjI4MjQzQzM3LjgzMDYgMi4yNDE5OSAzNi4wNDk1IDIuOTEzNjggMzQuMTcxNyAzLjI5NzVDMzIuNjQyMyAxLjY0NzA2IDMwLjQ5MzQgMC42ODc1IDI4LjA1NDEgMC42ODc1QzIzLjUwNDYgMC42ODc1IDE5Ljc4NzYgNC4zNzIyMSAxOS43ODc2IDguOTIwNTFDMTkuNzg3NiA5LjU3MzAxIDE5Ljg2NSAxMC4yMDYzIDIwLjAwMDYgMTAuODAxMkMxMy4xMDg2IDEwLjQ1NTggNi45NzE2MyA3LjE3NDEyIDIuODg2NzggMi4yMDM2QzIuMTcwNDggMy40MTI2NSAxLjc2Mzk0IDQuODMyNzkgMS43NjM5NCA2LjMyOTcxQzEuNzYzOTQgOS4xODkxOSAzLjIxNTkgMTEuNzIyNCA1LjQ2MTU5IDEzLjE2MThDNC4wODcwNyAxMy4xNjE4IDIuODA5MzUgMTIuNzc3OSAxLjY4NjUgMTIuMjAyMkMxLjY4NjUgMTIuMjAyMiAxLjY4NjUgMTIuMjAyMiAxLjY4NjUgMTIuMjU5OEMxLjY4NjUgMTYuMjUxNSA0LjU1MTcgMTkuNTkwOCA4LjM0NjE1IDIwLjMzOTNDNy42NDkyMSAyMC41MzEyIDYuOTEzNTUgMjAuNjI3MSA2LjE1ODUzIDIwLjYyNzFDNS42MzU4MyAyMC42MjcxIDUuMTEzMTIgMjAuNTY5NiA0LjYwOTc4IDIwLjQ3MzZDNS42NTUxOSAyMy43MTY5IDguNjk0NjIgMjYuMTM1IDEyLjM1MzYgMjYuMTkyNkM5LjUyNzA4IDI4LjQxODcgNS45NDU1OCAyOS43MjM3IDIuMDM0OTcgMjkuNzIzN0MxLjM3Njc1IDI5LjcyMzcgMC43MTg1MjUgMjkuNjg1NCAwLjA2MDMwMjcgMjkuNjA4NkMzLjczODYgMzEuOTQ5OSA4LjExMzg0IDMzLjMxMjUgMTIuNzk4OCAzMy4zMTI1QzI4LjA1NDEgMzMuMzEyNSAzNi40MzY3IDIwLjc2MTUgMzYuNDM2NyA5Ljg4MDA3QzM2LjQzNjcgOS41MTU0NCAzNi40MzY3IDkuMTcgMzYuNDE3NCA4LjgwNTM3QzM4LjA0MzYgNy42NTM5IDM5LjQzNzUgNi4xOTUzNyA0MC41NjAzIDQuNTI1NzNaIiBmaWxsPSIjQThBOEE4Ii8+Cjwvc3ZnPgo=)](https://twitter.com/intent/tweet?&text=Watching%20data%20-%20Subscriptions&url=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)[![Linkedin](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5LjY4NTMgMC42ODc1QzMwLjY0NjcgMC42ODc1IDMxLjU2ODcgMS4wNjk0MiAzMi4yNDg2IDEuNzQ5MjRDMzIuOTI4NCAyLjQyOTA2IDMzLjMxMDMgMy4zNTEwOSAzMy4zMTAzIDQuMzEyNVYyOS42ODc1QzMzLjMxMDMgMzAuNjQ4OSAzMi45Mjg0IDMxLjU3MDkgMzIuMjQ4NiAzMi4yNTA4QzMxLjU2ODcgMzIuOTMwNiAzMC42NDY3IDMzLjMxMjUgMjkuNjg1MyAzMy4zMTI1SDQuMzEwM0MzLjM0ODg5IDMzLjMxMjUgMi40MjY4NiAzMi45MzA2IDEuNzQ3MDQgMzIuMjUwOEMxLjA2NzIyIDMxLjU3MDkgMC42ODUzMDMgMzAuNjQ4OSAwLjY4NTMwMyAyOS42ODc1VjQuMzEyNUMwLjY4NTMwMyAzLjM1MTA5IDEuMDY3MjIgMi40MjkwNiAxLjc0NzA0IDEuNzQ5MjRDMi40MjY4NiAxLjA2OTQyIDMuMzQ4ODkgMC42ODc1IDQuMzEwMyAwLjY4NzVIMjkuNjg1M1pNMjguNzc5IDI4Ljc4MTJWMTkuMTc1QzI4Ljc3OSAxNy42MDc5IDI4LjE1NjUgMTYuMTA1IDI3LjA0ODQgMTQuOTk2OUMyNS45NDAzIDEzLjg4ODggMjQuNDM3NCAxMy4yNjYyIDIyLjg3MDMgMTMuMjY2MkMyMS4zMjk3IDEzLjI2NjIgMTkuNTM1MyAxNC4yMDg3IDE4LjY2NTMgMTUuNjIyNVYxMy42MTA2SDEzLjYwODRWMjguNzgxMkgxOC42NjUzVjE5Ljg0NTZDMTguNjY1MyAxOC40NSAxOS43ODkxIDE3LjMwODEgMjEuMTg0NyAxNy4zMDgxQzIxLjg1NzcgMTcuMzA4MSAyMi41MDMxIDE3LjU3NTUgMjIuOTc5IDE4LjA1MTNDMjMuNDU0OCAxOC41MjcyIDIzLjcyMjIgMTkuMTcyNiAyMy43MjIyIDE5Ljg0NTZWMjguNzgxMkgyOC43NzlaTTcuNzE3OCAxMC43NjVDOC41MjUzOSAxMC43NjUgOS4yOTk4OSAxMC40NDQyIDkuODcwOTQgOS44NzMxNEMxMC40NDIgOS4zMDIwOSAxMC43NjI4IDguNTI3NTggMTAuNzYyOCA3LjcyQzEwLjc2MjggNi4wMzQzNyA5LjQwMzQzIDQuNjU2ODcgNy43MTc4IDQuNjU2ODdDNi45MDU0MSA0LjY1Njg3IDYuMTI2MjkgNC45Nzk2IDUuNTUxODUgNS41NTQwNEM0Ljk3NzQgNi4xMjg0OSA0LjY1NDY4IDYuOTA3NjEgNC42NTQ2OCA3LjcyQzQuNjU0NjggOS40MDU2MiA2LjAzMjE4IDEwLjc2NSA3LjcxNzggMTAuNzY1Wk0xMC4yMzcyIDI4Ljc4MTJWMTMuNjEwNkg1LjIxNjU1VjI4Ljc4MTJIMTAuMjM3MloiIGZpbGw9IiNBOEE4QTgiLz4KPC9zdmc+Cg==)](http://www.linkedin.com/shareArticle?mini=true&url=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/&title=Watching%20data%20-%20Subscriptions&summary=Watching%20data%20-%20Subscriptions&source=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)[  
](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/3-writing-data-mutations/)

