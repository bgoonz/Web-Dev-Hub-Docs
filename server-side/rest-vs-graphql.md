# Rest VS GraphQl

When choosing an API design architecture for a web app for transferring data, you can make a choice between REST and GraphQL. REST has become the industry standard for designing Web APIs.

Thus, according to Postman’s 2020 State of the API Report 93.4% of respondents were most familiar with REST. By contrast, GraphQL is a modern revolutionary alternative for developing an API. In this article, we will look at REST and GraphQL, consider their principles and weigh the pros and cons of both technologies.

## \#Request examples

Let’s start with the example. We consider an API for the library. The API provides information about authors and their books. Our application fetches the name of the author, and titles of all their books by author’s id.

### \#REST

With REST we send two HTTP requests with empty bodies and receive fixed data structures:NoneBashCSSCC\#GoHTMLJavaJavaScriptJSONPHPPowershellPythonRubySQLTypeScriptYAMLCopy

```text
Request: GET /author/7
Response: 200 OK
{
	"id": 7,
	"firstName": "Joshua",
	"lastName": "Bloch",
	"birthday": "08/28/1961"
}
```

NoneBashCSSCC\#GoHTMLJavaJavaScriptJSONPHPPowershellPythonRubySQLTypeScriptYAMLCopy

```text
Request: GET /author/7/books
Response: 200 OK
[
{
		"id": 1008,
	    "title": "Effective Java, 3rd Edition",
		"pages": 416,
		"lang": "en",
		"isbn": "9780134686097"
	},
	{
		"id": 1010,
	    "title": "Java Puzzlers: Traps, Pitfalls, and Corner Cases",
		"pages": 312,
		"lang": "en",
		"isbn": "032133678X"
	},
	…
}
```

If an author with a specified id does not exist:NoneBashCSSCC\#GoHTMLJavaJavaScriptJSONPHPPowershellPythonRubySQLTypeScriptYAMLCopy

```text
Response: 404 Not Found
```

### \#GraphQL

With GraphQL we send a single request and define in its body what data needs to be transmitted. The request is written in a special query language:NoneBashCSSCC\#GoHTMLJavaJavaScriptJSONPHPPowershellPythonRubySQLTypeScriptYAMLCopy

```text
Request: POST /graphql
query {
	author(id: 7) {
		firstName
		lastName
		books {
			title
		}
	}
}
Response: 200 OK
{
	"data": {
		"Author": {
			"firstName": "Joshua",
			"lastName": "Bloch"
		},
		"books": [
			{
				"title": "Effective Java, 3rd Edition"
			},
			{
				"title": "Java Puzzlers: Traps, Pitfalls, and Corner Cases"
			}
		]
	}
}
```

If an author with a specified id does not exist:NoneBashCSSCC\#GoHTMLJavaJavaScriptJSONPHPPowershellPythonRubySQLTypeScriptYAMLCopy

```text
Response: 200 OK
{
    "errors": [
        {
            "message": "Author with id=7 does not exist"
        }
    ]
}
```

## \#REST basics

REST \(Representational State Transfer\) is an architectural concept for web services that interact over HTTP protocol. The REST principles were introduced in 2000 by Roy Fielding in his Ph.D. dissertation. These principles are listed below.

### \#Client-Server

An architecture of API should correspond to the client-server model. The client and server distribute their concerns. The server proceeds and stores data while the client requests resources and services. Also, the client and server don’t know the implementation details of each other. A decoupled architecture allows to use of the same server across multiple clients and helps to reduce software complexity.

### \#Stateless

The server doesn’t store a client state. So, requests from the client should contain all needed information to perform operations and requests are independent.

### \#Cacheable

Servers, clients, and intermediaries can cache response data, as cacheability is one of the standard HTTP protocol features. Caching decreases interactions between system components and improves performance.

### \#Uniform Interface

There are four constraints for the uniform interface:

* All resources are identified using URIs \(Uniform Resource Identifiers\) and separate from the representations that are returned to the client. Any format, such as JSON or XML, can be used for data transmission.
* Representations contain all the necessary information for changing resources by the client.
* Self-descriptive messages returned to the client should contain all the information needed to process them.
* The server should implement Hypermedia as the Engine of Application State \(HATEOAS\), meaning that the client should be able to use hyperlinks to discover available actions.

### \#Layered System

The client is not aware of the intermediate components like a proxy, load balancer, or server that implement security policies. All intermediate layers should be invisible to the client.

### \#Code On Demand \(optional\)

The server can send an executable code from the client when requested, extending client functionality.

## \#GraphQL basics

GraphQL is a query language for APIs \(QL means query language\). GraphQL was started developing in 2012 as an internal project of Facebook, became open-source in 2015 and the first stable version was released in 2018. The key feature of the language is that the client decides what data is needed to obtain from the server.

Besides, Netflix or Coursera were working on REST alternatives for improving API interactions. Netflix has presented Falcor. However, Coursera stopped developing its own solution after Facebook open-sourced GraphQL.

Today GraphQL is the winner of this competition.

One of the most major GraphQL features is that it allows clients to query data from multiple resources in the same request. All data are fetched from a single URI.

GraphQL uses its own type system that is described by GraphQL Schema Definition Language \(SDL\). GraphQL SDL became part of the specification in 2018. The type system is expressive and supports polymorphism using interfaces. A schema defines a graph structure of data, which means that objects are connected hierarchically.

## \#Pros and Cons

* REST has become the de facto standard for API development. It’s a tried-and-proven approach that has been using for decades and most developers are familiar with it.
* With REST the server returns fixed data structures. But the client does not always need the entire dataset that is returned by the server. GraphQL solves the problem of over-fetching as it Enables the client to specify which data needs to be fetched.
* When developers are using REST, they face under-fetching and N+1 requests problem. The client makes multiple requests to obtain all data it needs. On the contrary, GraphQL allows aggregating the data in a single query.
* GraphQL uses a strong type system to define the contract between the client and the server using GraphQL SDL. REST does not require a strict API definition, but today almost every RESTful service is defined using OpenAPI Specification. OpenAPI, as GraphQL, provides high expressiveness.
* Since GraphQL uses a single endpoint, it can not utilize an HTTP caching mechanism, unlike REST. There are several ways to implement caching in GraphQL, such as Apollo Engine on the backend and Apollo Client and Relay on the frontend. However, HTTP caching wins completely over these technologies.
* With REST it is easy to organize error reporting and API monitoring because REST uses HTTP response status codes. Instead, in GraphQL the server always returns code 200, and analyzing the response body is required to capture errors in interaction.

## \#Conclusion

GraphQL is great for applications where related and nested data are fetched because you can use the full power of its query language.GraphQL is also well suited for mobile development as bandwidth usage is optimized by avoiding over-fetching and under-fetching. But after weighing the pros and cons, we see that GraphQL is not always the best option. If you need a clear and convenient API without overhead, or you want to use HTTP capabilities like caching or authentication, you should choose REST.

