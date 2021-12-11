# GraphQL

*
  *
    * [Architecture](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/1-architecture/)
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
*
* [Hasura Docs](https://hasura.io/docs/latest/graphql/core/index.html)
* [GraphQL API](https://hasura.io/graphql/)

## Intro to GraphQL

[![Github logo](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FmipUY1dVdGH66GPRovnW%2Ffile.svg?alt=media)Edit on GitHub](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql.md)

### What is GraphQL? <a href="#whatisgraphql" id="whatisgraphql"></a>

GraphQL is a specification for how to talk to an API. It's typically used over HTTP where the key idea is to `POST` a "query" to an HTTP endpoint, instead of hitting different HTTP endpoints for different resources.

GraphQL is designed for developers of web/mobile apps (HTTP clients) to be able to make API calls to fetch the data they need from their backend APIs conveniently.

### GraphQL vs REST: an example <a href="#graphqlvsrest-anexample" id="graphqlvsrest-anexample"></a>

Let's say you have an API to fetch a user's profile and their address. In a typical REST scenario, this is what the request/response would look like:

![GraphQL API example](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/rest-api.png)

If your API server was a GraphQL server instead, this is what your API calls would look like:

![GraphQL API example](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/graphql-api.gif)

You can see that the response JSON is different for different "queries" sent by the client.

```
Request1:         |  Response1:query {           |  {  user (id: 1) {  |    "user": {    id            |       "id": 1  }               |     }}                 |  }----------------------------------------Request2:         |   Response2:query {           |   {  user (id: 1) {  |     "user": {    id            |       "id": 1    name          |       "name": "Elmo"  }               |     }}                 |   }
```

### Thinking in GraphQL <a href="#thinkingingraphql" id="thinkingingraphql"></a>

We're changing the way we think about API calls. Instead of making different API calls to different URLs to fetch data, we're making ad-hoc queries to a "single URL endpoint" that returns data based on the query.

* Instead of 'GET'ing a resource you 'POST' a query that describes what data you want.
* You think of the data your API returns as a "graph", this allows you to make queries to fetch "related" pieces of data in a single shot. In the example above, you fetch the user and the user's address (as a nested JSON object) in the same API call, as opposed to making 2 API calls.
* The "query" you send as data in the POST request has a structure and a syntax. This "language" is called GraphQL.

As you can see in the example above, GraphQL queries look very neat and easy to read! This is because the query is the "shape" of the final JSON data you desire. This is one of the key-reasons that makes GraphQL a joy to work with!

### GraphQL benefits <a href="#graphqlbenefits" id="graphqlbenefits"></a>

* **Avoid over-fetching**: You avoid fetching more data than you need because you can specify the exact **fields** you need.
* **Prevent multiple API calls**: In case you need more data, you can also avoid making multiple calls to your API. In the case above, you don't need to make 2 API calls to fetch `user` and `address` separately.
* **Lesser communication with API developers**: Sometimes to fetch the exact data you need, especially if you need to fetch more data and want to avoid multiple API calls, you will need to ask your API developers to build a new API. With GraphQL, your work is _independent_ of the API team! This allows you to work faster on your app.
* **Self-documenting**: Every GraphQL API conforms to a "schema" which is the graph data model and what kinds of queries a client can make. This allows the community to build lots of cool tools to explore & visualise your API or create IDE plugins that autocomplete your GraphQL queries and even do "codegen". We'll understand this in more detail later!

Here's a quick chart to show you the GraphQL analogs of typical REST-ish terms:

| Requirement                  | REST             | GraphQL      |
| ---------------------------- | ---------------- | ------------ |
| Fetching data objects        | GET              | query        |
| Writing data                 | POST             | mutation     |
| Updating/deleting data       | PUT/PATCH/DELETE | mutation     |
| Watching/subscribing to data | -                | subscription |

### Try out GraphQL queries <a href="#tryoutgraphqlqueries" id="tryoutgraphqlqueries"></a>

For this tutorial we've set up a GraphQL API for you. The most common way to browse a GraphQL API is to use GraphiQL. GraphiQL is a tool built by Facebook, (pronounced "graphical") that makes it easy to explore any GraphQL API.

When you connect GraphiQL to a GraphQL endpoint, it queries the server for its GraphQL schema and gives you a UI to browse and test queries, and that powers its amazing autocomplete!

![GraphiQL demo](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/graphiql.gif)

Tools like GraphiQL make GraphQL APIs really easy to use and integrate APIs in your app without requiring external documentation tools.

You can access the GraphiQL for this realtime todo app tutorial here: [hasura.io/learn/graphql/graphiql](https://hasura.io/learn/graphql/graphiql)

When you work with a GraphQL API in a project you will almost always use a tool like GraphiQL to explore and test your GraphQL queries.

### Basic GraphQL query <a href="#basicgraphqlquery" id="basicgraphqlquery"></a>

1. Open GraphiQL at: [hasura.io/learn/graphql/graphiql](https://hasura.io/learn/graphql/graphiql). You'll have to login to get an auth token to query the API. In a real-world scenario your GraphQL APIs will be protected.
2. You'll see a URL, and headers that contain the auth token that will be sent along with your GraphQL query.
3. Now, paste this GraphQL query in the GraphiQL window

```
 query {   users {     name   } }
```

1. Hit `ctrl + enter` or `cmd + enter` (mac) or click on the ▶️ icon to run the GraphQL query
2. On the right, you should see a list of users by their names that are in the system!

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

Recall that there is no magic here! The hosted GraphiQL app is sending a GraphQL query string to the server at the given endpoint with the HTTP headers. The server then sends the response that you see on the right hand side.

### Fetching "graphs" <a href="#fetching-graphs" id="fetching-graphs"></a>

Our todo app has users, todos and information about users that are currently online. This is what our API "schema" looks like:

![Schema](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/schema.png)

As you can see, it is a "graph" like schema where all the 3 models are linked to each other.

Let's try making queries that fetch different slices of our data from the overall "graph".

#### Fetch users and their todos <a href="#fetchusersandtheirtodos" id="fetchusersandtheirtodos"></a>

This GraphQL query will fetch all the users and their publicly visible todos:

```
 query {   users {     name     todos {       title     }   } }
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

#### Fetch online users and their profile information <a href="#fetchonlineusersandtheirprofileinformation" id="fetchonlineusersandtheirprofileinformation"></a>

This GraphQL query will fetch all the currently online users and their profile information (which is just their name for now):

```
 query {   online_users {     last_seen     user {       name     }   } }
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Adding parameters (arguments) to GraphQL queries <a href="#addingparameters-arguments-tographqlqueries" id="addingparameters-arguments-tographqlqueries"></a>

In most API calls, you usually use parameters. For example, to specify what data you're fetching. If you're familiar with making `GET` calls, you would have used a query parameter. For example, to fetch only 10 todos you might have made this API call: `GET /api/todos?limit=10`.

The GraphQL query analog of this is _arguments_ that you can attach to a "field".

#### Basic argument: Fetch 10 todos <a href="#basicargument-fetch10todos" id="basicargument-fetch10todos"></a>

This GraphQL query will fetch 10 todos and not all of them.

```
query {  todos(limit: 10) {    id    title  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

The most important bit to check here is `limit: 10`. GraphQL servers will provide a list of arguments that can be used in `()` next to specific fields. In our case, we are using Hasura for creating the GraphQL backend which provides filter, sort and pagination arguments. The GraphQL server or API that you use, might provide a different set of arguments that can be used.

#### Multiple arguments on multiple fields: Fetch 1 user and 5 most recent todos for each user <a href="#multipleargumentsonmultiplefields-fetch1userand5mostrecenttodosforeachuser" id="multipleargumentsonmultiplefields-fetch1userand5mostrecenttodosforeachuser"></a>

```
query {  users (limit: 1) {    id    name    todos(order_by: {created_at: desc}, limit: 5) {      id      title    }  }}
```

Notice that we are passing arguments to different fields. This GraphQL query reads as:

> Fetch users (with limit 1), and their todos (ordered by descending creation time, and limited to 5).

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### GraphQL variables: Passing arguments to your queries dynamically <a href="#graphqlvariables-passingargumentstoyourqueriesdynamically" id="graphqlvariables-passingargumentstoyourqueriesdynamically"></a>

This is great, but we still have a problem. If we want to create a query where we are fetching data with arguments that are provided dynamically, we'd have to create the entire query string again.

This is what we don't want to do:

```
var limit = getMaxTodosFromUserInput();var query = "query { todos (limit: " + limit.toString() + ") {id title} }";
```

Thankfully, we don't ever have to do this! GraphQL variables are extra variables that you can send in a query so that the "arguments" can be provided dynamically!

### Fetch $limit number of todos <a href="#fetchusdlimitnumberoftodos" id="fetchusdlimitnumberoftodos"></a>

This is what our GraphQL query would look like:

```
query ($limit: Int!) {  todos(limit: $limit) {    id    title  }}
```

In addition to the query above, we send a variables object:

```
{   "limit": 10}
```

Now instead of sending just the query to the GraphQL server, from our client we'll send both the query and the variables. The GraphQL server will use the variable in the right place in the query automatically for us!

Let's try this out in GraphiQL:

1. Head to GraphiQL
2. Write out this query
3. Scroll to the bottom of the page, where you see a smaller panel "Query Variables"
4. Add the query variable as a JSON object

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Summary <a href="#summary" id="summary"></a>

* You can now make GraphQL queries
* You know how to pass arguments to your GraphQL queries
* You know how to make your arguments dynamic by using query variables

Next, let's look at writing data and not just fetching data!

## Architecture

[![Github logo](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FC5JzJzSjyw8S0TxePSrA%2Ffile.svg?alt=media)](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql/1-architecture.md)Before going further in understanding GraphQL, it's useful to get a sense of how GraphQL is actually used in an HTTP client (typically a web/mobile app).

### GraphQL over HTTP <a href="#graphqloverhttp" id="graphqloverhttp"></a>

Check out the diagram below, to get a sense of how GraphQL is typically used in your stack:

![GraphQL over HTTP](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-react/graphql-on-http.png)

#### GraphQL client-server flow: <a href="#graphqlclient-serverflow" id="graphqlclient-serverflow"></a>

1. Note that the GraphQL query is not really JSON; it looks like the shape of the JSON you _want_. So when we make a 'POST' request to send our GraphQL query to the server, it is sent as a "string" by the client.
2. The server gets the JSON object and extracts the query string. As per the GraphQL syntax and the graph data model (GraphQL schema), the server processes and validates the GraphQL query.
3. Just like a typical API server, the GraphQL API server then makes calls to a database or other services to fetch the data that the client requested.
4. The server then takes the data and returns it to the client in a JSON object.

#### Example GraphQL client setup: <a href="#examplegraphqlclientsetup" id="examplegraphqlclientsetup"></a>

In your day to day work, you don't actually need to worry about the underlying HTTP requests & responses.

Just like when you work with a REST API and use a HTTP client to reduce the boilerplate in making API calls and handling responses, you can choose a GraphQL client to make writing GraphQL queries, sending them and handling responses much easier.

In fact, the mechanism of how you send the GraphQL query and accept the GraphQL response has become standard. This makes working with GraphQL very easy on the client.

Here's what a typical GraphQL client setup and making a query would look like:

```
// Setup a GraphQL client to use the endpointconst client = new client("https://myapi.com/graphql");// Now, send your query as a string (Note that ` is used to create a multi-line// string in javascript).client.query(`  query {    user {      id      name    }  }`);
```

## Writing data - Mutations

[![Github logo](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FrLlP1sdYa4yd1CdLcJgW%2Ffile.svg?alt=media)Edit on GitHub](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql/3-writing-data-mutations.md)

These are the concepts you should know before you attack mutations (haha):

* [Using GraphiQL](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/2-fetching-data-queries/#tryoutgraphqlqueries)
* [Using query variables](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/2-fetching-data-queries/#graphqlvariables:passingargumentstoyourqueriesdynamically)

Now, let's get started with seeing how we can use GraphQL to "write" data. GraphQL mutations are types of GraphQL queries that may result in the state of your backend "mutating" or changing, just like typical `'POST'`, `'PUT'`, `'PATCH'`, `'DELETE'` APIs.

### Basic mutations <a href="#basicmutations" id="basicmutations"></a>

Since we're using Hasura for our GraphQL API, we get mutations for inserts, updates or deletes that we can use in our app.

Let's try these mutations out in the context of a todo app to see what mutations look like. Mutations that you get from another GraphQL service, say if your API team has built their own, might be different.

#### Create a todo <a href="#createatodo" id="createatodo"></a>

Let's make an API call to create a todo. As you would have guessed, this will be a critical portion of our todo app. 😉

> **Protip**: Now let's say we don't know what the name of the mutation to create a todo. GraphiQL to the rescue! Head to GraphiQL and on the right, click on the "docs" tab. Type "todo" there and you'll see a list of GraphQL queries and types that use todo. Read through their descriptions and you'll soon find that `insert_todos` is what you need.

The mutation to create todos is titled `insert_todos`.

```
mutation {  insert_todos(objects: [{title: "new todo"}]) {    returning {      id    }  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Returning data after the mutation <a href="#returningdataafterthemutation" id="returningdataafterthemutation"></a>

Notice that the data of the todo that is to be inserted is sent as an argument to the `insert_todos` mutation. But the "fields" of the mutation specify the shape of the _response_ that you want from the server.

Let's say we'd like to get the entire todo object once it's been created as a response:

```
mutation {  insert_todos(objects: [{title: "new todo"}]) {    returning {      id      title      is_completed      is_public      created_at    }  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

### Parameterise what you insert <a href="#parameterisewhatyouinsert" id="parameterisewhatyouinsert"></a>

For mutations, we would almost always have to parameterise the arguments! We would rarely, if ever, have a "hardcoded" mutation in our app. This is because the arguments of what data to capture, how to modify or delete something is usually dependent on some user action.

Now that we know how to parameterise using query variables, let's use that:

```
# The parameterised GraphQL mutationmutation($todo: todos_insert_input!){  insert_todos(objects: [$todo]) {    returning {      id    }  }}
```

```
# As a query variable{  "todo": {    "title": "A new dynamic todo"  }}
```

[**Try it out in GraphiQL**](https://hasura.io/learn/graphql/graphiql)

We'll explore more mutations to update or delete data a little later. This is a good start to grokking mutations!

### Summary <a href="#summary" id="summary"></a>

* You can make basic GraphQL mutations
* You can pass dynamic arguments/data to mutations with query variables

Next, let's look at GraphQL subscriptions

## Watching data - Subscriptions

[![Github logo](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FKAMsK050B7txng9nxtOj%2Ffile.svg?alt=media)Edit on GitHub](https://github.com/hasura/learn-graphql/tree/master/tutorials/frontend/nextjs/tutorial-site/content/intro-to-graphql/4-watching-data-subscriptions.md)

The GraphQL specification allows for something called subscriptions that are like GraphQL queries but instead of returning data in one read, you get data pushed from the server.

This is useful for your app to subscribe to "events" or "live results" from the backend, but while allowing you to control the "shape" of the event from your app.

GraphQL subscriptions are a critical component of adding realtime or reactive features to your apps easily. GraphQL clients and servers that support subscriptions are great because they allow you to build great experiences without having to deal with websocket code!

### Make your first GraphQL subscription <a href="#makeyourfirstgraphqlsubscription" id="makeyourfirstgraphqlsubscription"></a>

Step 1: Head to [https://hasura.io/learn/graphql/graphiql](https://hasura.io/learn/graphql/graphiql) Step 2: Write this GraphQL query in the textarea:

```
subscription {  online_users {    id    last_seen    user {      name    }  }}
```

Step 3: Click on the play button.

Every time the set of online users change, you'll see the latest set on the response window on the right.

### How do GraphQL subscriptions work? <a href="#howdographqlsubscriptionswork" id="howdographqlsubscriptionswork"></a>

GraphQL queries and mutations are strings sent to a POST endpoint. What is a GraphQL subscription? That can't happen over a POST endpoint, because a simple HTTP endpoint would just return the response and the connection would close.

A GraphQL subscription is a subscription query string sent to a websocket endpoint. And whenever data changes on the backend, new data is pushed over websockets from the server to the client.

### Summary <a href="#summary" id="summary"></a>

* You know how to make GraphQL subscriptions

Now that you're comfortable with the basics of using GraphQL, let's start integrating GraphQL APIs with an app!![Close](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2F6ZYcrgdhyIAxzgjRUqzt%2Ffile.svg?alt=media)

### Get Started with GraphQL Now

Hasura Cloud gives you a fully managed, production ready GraphQL API as a service to help you build modern apps faster.[Try Hasura Cloud for Free](https://cloud.hasura.io/signup?pg=learn\_graphql\_nextjs-fullstack-serverless\_intro-to-graphql\_4-watching-data-subscriptions\&plcmt=floating\&cta=use-hasura-cloud-free\&tech=default)[![Pocket](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2F95XwVpJxZsg3YW2YqlNi%2Ffile.svg?alt=media)](https://getpocket.com/save?url=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)![Copy](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FBgIcOzpDT3h9YBjJ6ToD%2Ffile.svg?alt=media)[![Whatsapp](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2Fn9AKVdTBxEuhT8tyonpE%2Ffile.svg?alt=media)](https://wa.me/?text=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions)[![Twitter](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FpgKHBoRKMyvtEtqQj8d1%2Ffile.svg?alt=media)](https://twitter.com/intent/tweet?\&text=Watching%20data%20-%20Subscriptions\&url=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)[![Linkedin](https://firebasestorage.googleapis.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MjLjuvITJh8ZwT8mVxp%2Fuploads%2FX44z22FCUqXDWaAjMjGi%2Ffile.svg?alt=media)](http://www.linkedin.com/shareArticle?mini=true\&url=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/\&title=Watching%20data%20-%20Subscriptions\&summary=Watching%20data%20-%20Subscriptions\&source=https://hasura.io/learn/graphql/intro-graphql/graphql-subscriptions/)[\
](https://hasura.io/learn/graphql/nextjs-fullstack-serverless/intro-to-graphql/3-writing-data-mutations/)
