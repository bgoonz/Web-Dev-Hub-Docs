# Intro

### What is a Graph?

A graph is a data structure - a specialized format for organizing and storing data. There are many kinds of data structures, some of which you are already familiar with like linked lists and binary search trees. Graphs are a simple and powerful data structure which consist of _nodes_ and _edges_.

The formal definition of a graph is as follows:

> A graph consists of a set of nodes and edges which connect pairs of nodes.

Although you might not realize it, you likely make use of graphs on a daily basis. Social networking sites such as Twitter or LinkedIn use graphs to model users and the relationships between them. In a path finding application such as Google Maps, intersections are represented as nodes while roads are represented as edges connecting the intersections. Graphs are also used in your computer's operating system to allocate resources to different processes.

Let's take a look at a simple graph which might represent users and follows on Twitter:

![simple-graph](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/graphql/d1/directed_graph.png)

The set of nodes in this graph is `N = {F, A, N, B, D}`. The set of edges is `E = {FN, NF, FA, AB, BF, BD, DA, NB}`. The graph represented here is called a _directed graph_ because each edge has a direction associated with it. This makes sense for an application like Twitter since, although user F follows user A, it does not necessarily mean that user A follows user F. This is different from an application like Facebook, where connected users are ‘friends’ of each other. In this case, the graph would be undirected and the edges would be drawn without arrows.

A _tree_ is simply a directed graph with no cycles, meaning that you cannot trace a path from any node that leads back to itself. Trees are hierarchical data structures with a signature pyramid appearance:

![tree](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/graphql/d1/tree.png)

### Graphs and GraphQL

Let's say you were building an application for an online store. A user visiting a product page would likely access it by ID. However, from this ID, we still need to access more data - product specifications, seller information, reviews, and so forth. Using a traditional REST API, this data would be aggregated by a cascade of many HTTP fetches to our backend.

The creators of GraphQL realized something important, which is that all of this contingent fetching can be represented as a tree. When we make a request to our server using GraphQL, we send this entire request tree to our backend instead of individual requests. This allows the server to fulfill all of our requests in one go, eliminating a large amount of unnecessary communication between the client and server.

GraphQL does not replace our database, and does not even necessarily replace our RESTful API. In fact, we can use GraphQL with any database, such as PostgreSQL or MongoDB. When adding GraphQL to an application, you as the developer will define the Types \(nodes\) and Relationships \(edges\) between the data in your application. We will still need access to our data through some API to tell GraphQL where the data is located. However, GraphQL will package these requests into a single request tree which will be fulfilled on the backend and returned in its entirety. Simply put, GraphQL is a query language that traverses your data graph to produce a query result tree. Later on, we'll learn how to cache our responses in the frontend to accelerate data fetching.

If this doesn't completely make sense to you right now, have no fear. The nature of the request tree will become clear as we begin to make GraphQL queries in the upcoming sections.





## RESTful Routing

In this section we will review the conventions of RESTful routing and discuss some of the associated drawbacks. Even if you have utilized a REST API in previous projects, it will be helpful to refresh your memory and discuss the reasons we might choose to augment our API with GraphQL.

### What is REST?

REST \(Representational State Transfer\) is an architecture style for designing networked applications. Typically associated with HTTP requests, developers can utilize REST architecture in their projects without installing additional libraries or additional software. The request methods and data type are decoupled, meaning that REST has the ability to return many different data formats such as JSON, XML, and YAML.

REST is defined by 6 architectural constraints:

* **Uniform interface**: Individual resources are identified with URLs. The resources in the database are in a different form than the data returned to the client, and the client can modify the resources if given permission. Messages communicated between the client and server are self-descriptive and include enough information to process the request. When a developer is familiar with one of your APIs, they should be able to follow a similar approach for your other APIs.
* **Client-server**: The client and the server are decoupled, allowing them to evolve separately without any dependence on one another.
* **Stateless**: Information from requests not stored on the server. Each and every request is treated individually, with no dependece on prior requests. The client is responsible for managing the state of the application rather than the server, meaning that each request must contain the necessary information to fulfill the request, including authorization details.
* **Cacheable**: Caching should be applied to resources when applicable to improve application performance. Responses must define themselves as cacheable \(or not\) to prevent the client from sending extraneous data in response to subsequent requests.
* **Layered system**: The client cannot tell whether it is connected directly to the end system or to some intermediary. This helps to enforce security and enables scalability via load balancing.
* **Code on demand**: An optional constraint which allows the server to return executable code.

In practice, RESTful routes enable a simple-to-understand API for accessing and modifying data using HTTP methods - `GET`, `POST`, `PUT`, `DELETE`, and `PATCH`. For example, if we wished to retrieve all of the products on an online store for a given category, we would make a GET request to an endpoint that looks something like:

```text
http://shopurl.com/api/categories/20/products
```

This URL is easily read by a human, making the API developer friendly. Even if we keep adding parameters to the URL string, it is still reasonably simple to tell what kind of information we are after:

```text
http://shopurl.com/api/categories/20/products/112/reviews/10/replies?_positive=true
```

The flexibility and data-agnostic nature of RESTful architecture has allowed it to grow and evolve with the web, enabling feature rich and developer friendly applications. However, problems have arisen with the architecture in recent years as the web has grown to accomodate a growing number of mobile users, who typically use the Internet to access applications which are not only data-rich, but must also have access to constantly changing data.

### Limitations of REST

#### Repeated queries

REST architecture is still very useful for applications with segmented resources. However, in modern applications, much of the data we need to access is **highly relational**. In the last section we learned how to represent a graph with nodes and edges. If we think of the information in our database as a graph, a highly relational database is one with a large number of edges compared to the number of nodes.

Fetching highly relational data with a REST API often involves repeated requests to the backend. In our online store example, suppose we had a list of products for which we would like to return a list of comments. In order to do so we would need to iterate over the list of products and make a separate request for each one \(an N + 1 query\). We could, of course, add a RESTful endpoint to our application which takes a list of products and returns a list of comments. However, this results in a highly specialized endpoint for a single use case. If we have many connected resources in our application, we could potentially end up with hundreds of such specialized endpoints:

```text
http://shopurl.com/api/product_comments
http://shopurl.com/api/product_categories
http://shopurl.com/api/user_replies
...
```

This breaks our REST convention and results in an API schema which is very difficult to utilize as a developer.

#### Over fetching

When we make a RESTful request for some resource, we return all of the information on that resource - even that which we don't need. For example, let's say we wanted to generate a list of customer names and email addresses for vendors on our online shop so that they can add them to an email list. Querying `http://shopurl.com/api/users/:id` would return something like:

```text
{
    "id": 564,
    "name": "Paul Allen",
    "email": "paul@paulallen.com",
    "address": "1234 TMI Lane",
    "city": "Seattle",
    "state": "WA",
    "zip": "98145",
    "company": "Microsoft",
    "favorites": [
        { "id": 34, "name": "Sponge Bob temporary tattoo (pack of 24)" },
        { "id": 147, "name": "12th Man bumper sticker" },
        { "id": 42, "name": "Hitchhiker's Guide to the Galaxy" },
        ...
    ],
    ...
}
```

Although we really only needed each user's name and email address, our database retrieves a vast swath of unnecessary information which we will not end up using. Perhaps we could make another, specialized endpoint which returns only the information we require. However, if we repeated this strategy every time we ran into this scenario, the documentation for our API would quickly become ridiculous and overwhelming.

#### Thin client/fat server

Although the server and client are decoupled with REST, their relationship is unbalanced. The bulk of the processing is dependent on the server, which does all of the heavy lifting. This means that the client has very little control over the data returned to it and is limited by the endpoints exposed by the server. This made sense in the past when user devices were slow and unreliable. However, in recent years, devices have become more powerful in terms of processing power. It is difficult to take advantage of this power using a REST API.

### Advantages of GraphQL

#### Single request/single response

Perhaps the biggest advantage of GraphQL is that queries are packaged into a single request to the backend. This makes data delivery more efficient and grants more power to the client.

Let's say you would like to return a list of reviews for a single product's related products. That endpoint would look something like:

```text
http://shopurl.com/api/products/34/related/reviews
```

Imagine writing the controller for this endpoint. You would first have to iterate through the list of each of the product's relatives to fetch their review IDs. Then, you would iterate through the list of review IDs to fetch information on each review. Using GraphQL, these queries would be bundled into a single request to the backend with the data returned as a single response.

#### Relevant data fetching

When we make a query with GraphQL, we specify exactly which data we would like to return from the server. This means that we never over fetch data. Besides for increased efficiency, this results in easier data manipulation on the frontend.

#### Server client balance

Since we can tailor each query to our needs, GraphQL gives power back to the client. This increases functionality on the client side and reduces the burden on the server, leveling the relationship between server and client.

### Conclusion

RESTful architecture has catalyzed the growth of the Internet, but lends itself to segmented, non-relational data. However, as new applications increasingly necessitate highly connected data, the traditional practices of REST can become messy and confusing. GraphQL enables us to model the relationships between our data as a graph and specify the relationships between data types. This allows us to make fewer and more efficient requests retrieving only the data we need for each particular use case.



## JSON

Server responses in GraphQL are returned in JSON format. Since this is the case, let's refresh our memory on what JSON is and how to use it.

JSON \(JavaScript Object Notation\) is a self describing, data interchange format designed to be easily parseable by both humans and machines. It is based on the JavaScript language, and quickly gained prominence to replace XML as the standard data interchange format on the web. Data exchanged between a browser and server must be text, and JSON consists only of text. Any JavaScript object can easily be converted to JSON with built-in methods, and vice versa.

The syntax of JSON is very simple to follow:

* Data is in name/value pairs
* Data is separated by commas
* Curly braces hold objects
* Square brackets hold arrays
* String values must be written with double quotes

Let's take a look at an example of a JSON object:

```text
{
    "name": "Jeff Bezos",
    "age": 55,
    "children": 4,
    "height": 5.6,
    "wealth": 137000000000,
    "commendations": ["National Merit Scholar", "Silver Knight Award"]
}
```

We can also nest JSON data as deeply as we would like:

```text
{
    "name": "Jeff Bezos",
    "age": 55,
    "children": 4,
    "height": 5.6,
    "wealth": 137000000000,
    "commendations": ["National Merit Scholar", "Silver Knight Award"],
    "companies": {
        "Amazon": {
            "founded": 1994,
            "description": "Online marketplace",
            "missionStatement": "Our vision is to be earth's most customer-centric company; to build a place where people can come to find and discover anything they might want to buy online."
        },
        "blueOrigin": {
            "founded": 2000,
            "description": "Space travel",
            "missionStatement": "We're committed to building a road to space so our children can build the future."
        }
    }
}
```

You must convert your JSON object to JavaScript before you can make use of the data:

```text
let myJSON = '{"name": "Dr. Seuss", "books": ["Green Eggs and Ham", "Fox in Socks", "Horton Hears a Who!"]}';

let myObj = JSON.parse(myJSON);

console.log(myObj);

// >> {name: "Dr. Seuss", books: ["Green Eggs and Ham", "Fox in Socks", "Horton Hears a Who!"]}
```

Now you can manipulate your data just as you would any other JavaScript object.

We also need to convert a JavaScript object before we can send it to the server:

```text
let myObj = {name: "Dr. Seuss", books: ["Green Eggs and Ham", "Fox in Socks", "Horton Hears a Who!"]};

let myJSON = JSON.stringify(myObj);

console.log(myJSON);

// >> '{"name":"Dr. Seuss","books":["Green Eggs and Ham","Fox in Socks","Horton Hears a Who!"]}'
```

We'll get a lot of practice using JSON in the upcoming sections. Just keep in mind that a JSON object is not a JavaScript object, but that we can easily coerce JavaScript objects to JSON in order to send information through HTTP requests.



{% embed url="https://www.youtube.com/watch?v=b7tMHnxzK34" %}

## Graphiql

We'll be making use of a tool called Graphiql in today's project as we begin to practice writing queries, fragments, and mutations. Let's take a moment to familiarize ourselves with Graphiql's interface before we get started.

### What is Graphiql?

[Graphiql](https://github.com/graphql/graphiql) is browser based IDE for writing GraphQL queries. It allows us to write test queries on our actual server, and provides us with a documentation explorer which we can use to quickly view our application's schema.

When we open Graphiql in the browser, we see two panels. We write queries in the left-hand panel. Once we click the 'Play' button at the top of the screen, the query is executed and the result is displayed in the right-hand panel.

![graphiql-screenshot](https://assets.aaonline.io/graphql/d1/graphQLplay.png)

When we configure a GraphQL application, we define our data in 'types,' with each type representing a singular resource on the server. Graphiql knows this schema and provides us with error highlighting and prompts. If we try to query for a variable which is not present on the current type, the variable will be underlined in red. Hovering over the variable will also display an error message.





![graphiql-error](https://assets.aaonline.io/graphql/d1/graphiql_2.png)

If we hover over any valid variable, a modal appears which displays the related types for that variable.

![graphiql-modal](https://assets.aaonline.io/graphql/d1/graphiql_3.png)

If we select the related type, the schema will appear in a new Document Explorer panel. We can click nested types to navigate through the schema of our application. We can also open this explorer with the 'Docs' button and navigate starting at the top level of the schema.

![graphiql-explorer](https://assets.aaonline.io/graphql/d1/graphiql_4.png)

We can use the navigation buttons to prettify our query or view the history of our recent queries. The history will persist even if we have to close and restart our server.





## Inline Fragments and Interfaces

### Interfaces

The GraphQL type system supports interfaces, which are just an abstract type which include a certain set of fields that a type must include to implement the interface. This is best explained by an example.

Suppose we are writing a GraphQL application to display information on characters in the Harry Potter universe. We might have different GraphQL types to account for the different types of beings in our universe - let's say `Muggles` and `Wizards`. However, when we query for a character, we might simply want to look up a `Character` by ID or name instead of having to be specific about their magical ability. In this case, we would define an interface:

```text
interface Character {
  id: ID!
  name: String!
}
```

Then, we can use our newly created interface to define our `Muggle` and `Wizard` types:

```text
type Muggle implements Character {
  id: ID!
  name: String!
}

type Wizard implements Character {
  id: ID!
  name: String!
  house: [House]!
}
```

As you can see, each type has all of the fields specified by `Character`, but the `Wizard` type adds its own field - `house` - to its definition. Now we can return a generic `Character` when we query for an individual from the frontend, but we're going to run into some trouble with this custom field. We can solve this with an inline fragment.

### Implementing Inline Fragments

Let's imagine we are writing this query to find a character by ID. It would look something like:

```text
query FindCharacter {
  character(id: 117) {
    name
    house
  }
}
```

Running this query would result in an error: `"Cannot query field \"house\" on type \"Character\". Did you mean to use an inline fragment on \"Wizard\"?",`

Since the `character` field returns a generic character, GraphQL may be querying either for a `Muggle` or a `Wizard` depending on the argument. The problem is the `house` field - we are only allowed to query for fields listed on the `Character` type.

So, how do we access the house information when we query for a wizard? We can solve this problem with an inline fragment:

```text
query FindCharacter {
  character(id: 117) {
    name
    // this allow us to only get house information if this character is a Wizard
    ... on Wizard {
      house
    }
  }
}
```

Now, since we have specified that we should only return the `house` field for `Wizard` types, we can run our query and retrieve the expected data.

