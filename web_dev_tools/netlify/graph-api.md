# Graph API

## Overview <a href="#overview" id="overview"></a>

The Graph API is the primary way to get data into and out of the Facebook platform. It's an HTTP-based API that apps can use to programmatically query data, post new stories, manage ads, upload photos, and perform a wide variety of other tasks.

The Graph API is named after the idea of a "social graph" — a representation of the information on Facebook. It's composed of nodes, edges, and fields. Typically you use nodes to get data about a specific object, use edges to get collections of objects on a single object, and use fields to get data about a single object or each object in a collection. Throughout our documentation, we may refer to both a node and edge as an "endpoint". For example, "send a `GET` request to the User endpoint".

### HTTP <a href="#http" id="http"></a>

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the Graph API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the Graph API directly in your browser. For example, requesting this URL in your browser...

[https://graph.facebook.com/facebook/picture?redirect=false](https://graph.facebook.com/facebook/picture?redirect=false)

... is equivalent to performing this cURL request:

```
curl -i -X GET "https://graph.facebook.com/facebook/picture?redirect=false"
```

We have also enabled the `includeSubdomains` HSTS directive on `facebook.com`, but this should not adversely affect your Graph API calls.

### Host URL <a href="#host-url" id="host-url"></a>

Almost all requests are passed to the `graph.facebook.com` host URL. The single exception is video uploads, which use `graph-video.facebook.com`.

### Access Tokens <a href="#access-tokens" id="access-tokens"></a>

Access tokens allow your app to access the Graph API. Almost all Graph API endpoints require an access token of some kind, so each time you access an endpoint, your request may require one. They typically perform two functions:

* They allow your app to access a User's information without requiring the User's password. For example, your app needs a User's email to perform a function. If the User agrees to allow your app to retrieve their email address from Facebook, the User will not need to enter their Facebook password for your app to get their email address.
* They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.

Visit our [access token documentation](https://developers.facebook.com/docs/facebook-login/access-tokens) to learn more.

### Nodes <a href="#nodes" id="nodes"></a>

A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook. Pages, Groups, Posts, Photos, and Comments are just some of the nodes of the Facebook Social Graph.

The following cURL example represents a call to the User node.

```
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN"
```

This request would return the following data by default, formatted using JSON:

```
{
  "name": "Your Name",
  "id": "YOUR-USER-ID"
}
```

#### Node Metadata <a href="#node-metadata" id="node-metadata"></a>

You can get a list of all fields, including the field name, description, and data type, of a node object, such as a User, Page, or Photo. Send a `GET` request to an object ID and include the `metadata=1` parameter:

```
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?
    metadata=1&access_token=ACCESS-TOKEN"
```

The resulting JSON response will include the `metadata` property that lists all the supported fields for the given node:

```
{
  "name": "Jane Smith",
  "metadata": {
    "fields": [
      {
        "name": "id",
        "description": "The app user's App-Scoped User ID. This ID is unique to the app and cannot be used by other apps.",
        "type": "numeric string"
      },
      {
        "name": "age_range",
        "description": "The age segment for this person expressed as a minimum and maximum age. For example, more than 18, less than 21.",
        "type": "agerange"
      },
      {
        "name": "birthday",
        "description": "The person's birthday.  This is a fixed format string, like `MM/DD/YYYY`.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)",
        "type": "string"
      },
...
```

### /me <a href="#me" id="me"></a>

The `/me` node is a special endpoint that translates to the object ID of the person or Page whose access token is currently being used to make the API calls. If you had a User access token, you could retrieve a User's name and ID by using:

```
curl -i -X GET \
  "https://graph.facebook.com/me?access_token=ACCESS-TOKEN"
```

### Edges <a href="#edges" id="edges"></a>

An edge is a connection between two nodes. For example, a User node can have photos connected to it, and a Photo node can have comments connected to it. The following cURL example will return a list of photos a person has published to Facebook.

```
curl -i -X GET \
  "https://graph.facebook.com/USER-ID/photos?access_token=ACCESS-TOKEN"
```

Each ID returned represents a Photo node and when it was uploaded to Facebook.

```
    {
  "data": [
    {
      "created_time": "2017-06-06T18:04:10+0000",
      "id": "1353272134728652"
    },
    {
      "created_time": "2017-06-06T18:01:13+0000",
      "id": "1353269908062208"
    }
  ],
}
```

### Fields <a href="#fields" id="fields"></a>

Fields are node properties. When you query a node, or an edge, it returns a set of fields by default, as the examples above show. However, you can specify which fields you want returned by using the `fields` parameter and listing each field. This overrides the defaults and returns only the fields you specify, and the ID of the object, which is always returned.

The following cURL request includes the `fields` parameter and the User's name, email, and profile picture.

```
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=ACCESS-TOKEN"
```

**Data Returned**

```
{
  "id": "USER-ID",
  "name": "EXAMPLE NAME",
  "email": "EXAMPLE@EMAIL.COM",
  "picture": {
    "data": {
      "height": 50,
      "is_silhouette": false,
      "url": "URL-FOR-USER-PROFILE-PICTURE",
      "width": 50
    }
  }
}
```

#### Complex Parameters <a href="#parameters" id="parameters"></a>

Most parameter types are straightforward primitives such as `bool`, `string` and `int`, but there are also `list` and `object` types that can be specified in the request.

The `list` type is specified in JSON syntax, for example: `["firstitem", "seconditem", "thirditem"]`

The `object` type is also specified in JSON syntax, for example: `{"firstkey": "firstvalue", "secondKey": 123}`

### Publishing, Updating, and Deleting <a href="#publishing--updating--and-deleting" id="publishing--updating--and-deleting"></a>

Visit our [Facebook Sharing guide](https://developers.facebook.com/docs/sharing) to learn how to publish to a User's Facebook or our [Pages API documentation](https://developers.facebook.com/docs/pages) to publish to a Page's Facebook feed.

Some nodes allow you to update fields with `POST` operations. For example, you could update your `email` field like this:

```
curl -i -X POST \
  "https://graph.facebook.com/USER-ID?email=YOURNEW@EMAILADDRESS.COM&access_token=ACCESS-TOKEN"
```

#### Read-After-Write <a href="#read-after-write" id="read-after-write"></a>

For create and update endpoints, the Graph API can immediately read a successfully published or updated object and return any fields supported by the corresponding read endpoint.

By default, an ID of the object created or updated will be returned. To include more information in the response, include the `fields` parameter in your request and list the fields you want returned. For example, to publish the message “Hello” to a Page's feed, you could make the following request:

```
curl -i - X POST "https://graph.facebook.com/PAGE-ID/feed?message=Hello&
  fields=created_time,from,id,message&access_token=ACCESS-TOKEN"
```

The above code example is formatted for readability.

This would return the specified fields as a JSON-formatted response, like this:

```
{
  "created_time": "2017-04-06T22:04:21+0000",
  "from": {
    "name": "My Facebook Page",
    "id": "PAGE-ID"
  },
  "id": "POST_ID",
  "message": "Hello",
}
```

Refer to each endpoint's [reference documentation](https://developers.facebook.com/docs/graph-api/reference) to see if it supports **read-after-write** and what fields are available.

**Errors**

If the read fails for any reason (for example, requesting a non-existent field), the Graph API will respond with a standard error response. Visit our [Handling Errors guide](https://developers.facebook.com/docs/graph-api/guides/error-handling) for more information.

You can usually delete a node, such as a Post or Photo node, by performing a DELETE operation on the object ID:

```
curl -i -X DELETE \
  "https://graph.facebook.com/PHOTO-ID?access_token=ACCESSS-TOKEN"
```

Usually you can only delete nodes that you created, but check each node's reference guide to see requirements for delete operations.

### Versions <a href="#versions" id="versions"></a>

The Graph API has multiple versions with quarterly releases. You can specify the version in your calls by adding "v" and the version number to the start of the request path. For example, here's a call to version 4.0:

```
curl -i -X GET \
  "https://graph.facebook.com/v4.0/USER-ID/photos
    ?access_token=ACCESS-TOKEN"
```

If you do not include a version number we will default to the oldest available version, so it's recommended to include the version number in your requests.

You can read more about versions in our [Versioning guide](https://developers.facebook.com/docs/graph-api/guides/versions) and learn about all available versions in the [Graph API Changelog](https://developers.facebook.com/docs/graph-api/changelog).

### Facebook APIs, SDKs, and Platforms <a href="#facebook-apis--sdks--and-platforms" id="facebook-apis--sdks--and-platforms"></a>

Connect interfaces and develop across platforms using Facebook's various [APIs, SDKs, and platforms](https://developers.facebook.com/docs#apis-and-sdks).

### Next Steps <a href="#next" id="next"></a>

[**Get Started with Graph API**](https://developers.facebook.com/docs/graph-api/get-started) – Let's explore the Facebook Social Graph using the Graph Explorer tool and run a couple requests to get data.

## Guides <a href="#guides" id="guides"></a>

Various Guides for how to use the Facebook Graph API to send and receive data to the Facebook Social Graph.

#### Batch Requests

The [Batch Requests](https://developers.facebook.com/docs/graph-api/batch-requests) guide describes how to make multiple Graph API requests in one call.

#### Debugging

The [Debug Requests guide](https://developers.facebook.com/docs/graph-api/guides/debugging) describes how to enable Debug Mode to view Graph API responses that may contain additional fields that explain potential issues with an API call.

#### Error Handling

The Handling Errors guide describes the recovery tactics and provides a list of error values with a map to the most common recovery tactic to use.

#### Graph Explorer Guide

The [Graph API Explorer guide](https://developers.facebook.com/docs/graph-api/guides/explorer) describes how to use the Graph Explorer tool]\(/tools/explorer). This tool allows you to construct, test, and debug queries and see their responses for any apps on which you have an admin, developer, or tester role.

#### Upload Files

The Upload Files guide describes how to upload photos and videos to the Facebook Social Graph that can then be shared in User, Group, or Page posts.

## Graph API Reference <a href="#graph-api-reference" id="graph-api-reference"></a>

#### Graph API Root Nodes

This is a full list of the Graph API root nodes. The main difference between a root node and a non-root node is that root nodes can be queried directly, while non-root nodes can be queried via root nodes or edges. If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api/), and if you want to know which APIs can solve some frequent issues, try our [Common Scenarios guide](https://developers.facebook.com/docs/graph-api/common-scenarios/).

| Node                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Album`](https://developers.facebook.com/docs/graph-api/reference/album)                                                                                             | Get [Fields](https://developers.facebook.com/docs/graph-api/reference/#fields) and [Edges](https://developers.facebook.com/docs/graph-api/reference/#edges) on an Album.                                                                                                                                                                                          |
| [`App Request`](https://developers.facebook.com/docs/graph-api/reference/app-request)                                                                                 | An individual app request received by someone, sent by an app or another person                                                                                                                                                                                                                                                                                   |
| [`Application`](https://developers.facebook.com/docs/graph-api/reference/application)                                                                                 | A Facebook app                                                                                                                                                                                                                                                                                                                                                    |
| [`Async Session`](https://developers.facebook.com/docs/graph-api/reference/async-session)                                                                             | Represents an async job request to Graph API                                                                                                                                                                                                                                                                                                                      |
| [`Atlas Ad Set`](https://developers.facebook.com/docs/graph-api/reference/atlas-ad-set)                                                                               | An Atlas AdSet                                                                                                                                                                                                                                                                                                                                                    |
| [`Atlas Campaign`](https://developers.facebook.com/docs/graph-api/reference/atlas-campaign)                                                                           | An Atlas Campaign                                                                                                                                                                                                                                                                                                                                                 |
| [`Atlas FBConversion Event`](https://developers.facebook.com/docs/graph-api/reference/atlas-fb-conversion-event)                                                      | Conversion Event Node                                                                                                                                                                                                                                                                                                                                             |
| [`Atlas Publisher`](https://developers.facebook.com/docs/graph-api/reference/atlas-publisher)                                                                         | An Atlas Publisher                                                                                                                                                                                                                                                                                                                                                |
| [`Atlas Report`](https://developers.facebook.com/docs/graph-api/reference/atlas-report)                                                                               | An Atlas Report                                                                                                                                                                                                                                                                                                                                                   |
| [`Atlas Report Run`](https://developers.facebook.com/docs/graph-api/reference/atlas-report-run)                                                                       | An Atlas ReportRun                                                                                                                                                                                                                                                                                                                                                |
| [`Atlas Report Schedule`](https://developers.facebook.com/docs/graph-api/reference/atlas-report-schedule)                                                             | An Atlas ReportSchedule                                                                                                                                                                                                                                                                                                                                           |
| [`Atlas Tracking Connection`](https://developers.facebook.com/docs/graph-api/reference/atlas-tracking-connection)                                                     | An Ad Platform Tracking Connection                                                                                                                                                                                                                                                                                                                                |
| [`Business Unit`](https://developers.facebook.com/docs/graph-api/reference/business-unit)                                                                             | Represents a group of certain types of Business objects in a Business. Will be used by Measurement Hub initially with more usage coming later on.                                                                                                                                                                                                                 |
| [`CPASAdvertiser Partnership Recommendation`](https://developers.facebook.com/docs/graph-api/reference/cpas-advertiser-partnership-recommendation)                    | <p>Returns a recommendation of a single retailer for a specific brand. This endpoint returns a retailer-brand pair and an advertiser who can advertise on behalf of the producer.</p><p>This endpoint is mainly for Facebook’s Marketing Partners using <a href="https://developers.facebook.com/docs/marketing-api/collaborative-ads">Collaborative Ads</a>.</p> |
| [`CPASCollaboration Request`](https://developers.facebook.com/docs/graph-api/reference/cpas-collaboration-request)                                                    | A collaboration request is a partnership request coming from a brand or agency to a retailer or marketing partner. Used for [Collaborative Ads](https://developers.facebook.com/docs/marketing-api/collaborative-ads).                                                                                                                                            |
| [`CTCert Domain`](https://developers.facebook.com/docs/graph-api/reference/ct-cert-domain)                                                                            | A domain name that has been issued new certificates.                                                                                                                                                                                                                                                                                                              |
| [`Canvas`](https://developers.facebook.com/docs/graph-api/reference/canvas)                                                                                           | A canvas document                                                                                                                                                                                                                                                                                                                                                 |
| [`Canvas Button`](https://developers.facebook.com/docs/graph-api/reference/canvas-button)                                                                             | A button inside the canvas                                                                                                                                                                                                                                                                                                                                        |
| [`Canvas Carousel`](https://developers.facebook.com/docs/graph-api/reference/canvas-carousel)                                                                         | A carousel inside a canvas                                                                                                                                                                                                                                                                                                                                        |
| [`Canvas Footer`](https://developers.facebook.com/docs/graph-api/reference/canvas-footer)                                                                             | A footer of the canvas                                                                                                                                                                                                                                                                                                                                            |
| [`Canvas Header`](https://developers.facebook.com/docs/graph-api/reference/canvas-header)                                                                             | A header inside the canvas.                                                                                                                                                                                                                                                                                                                                       |
| [`Canvas Photo`](https://developers.facebook.com/docs/graph-api/reference/canvas-photo)                                                                               | A photo inside a canvas                                                                                                                                                                                                                                                                                                                                           |
| [`Canvas Product List`](https://developers.facebook.com/docs/graph-api/reference/canvas-product-list)                                                                 | A product list inside the canvas                                                                                                                                                                                                                                                                                                                                  |
| [`Canvas Product Set`](https://developers.facebook.com/docs/graph-api/reference/canvas-product-set)                                                                   | A product set inside the canvas                                                                                                                                                                                                                                                                                                                                   |
| [`Canvas Store Locator`](https://developers.facebook.com/docs/graph-api/reference/canvas-store-locator)                                                               | A store locator inside the canvas                                                                                                                                                                                                                                                                                                                                 |
| [`Canvas Text`](https://developers.facebook.com/docs/graph-api/reference/canvas-text)                                                                                 | Text element of the canvas                                                                                                                                                                                                                                                                                                                                        |
| [`Canvas Video`](https://developers.facebook.com/docs/graph-api/reference/canvas-video)                                                                               | A video inside canvas                                                                                                                                                                                                                                                                                                                                             |
| [`Collaborative Ads Directory`](https://developers.facebook.com/docs/graph-api/reference/collaborative-ads-directory)                                                 | Directory of retailers that use [Collaborative Ads](https://developers.facebook.com/docs/marketing-api/collaborative-ads). This endpoint must be used in conjunction with the `collaborative_ads_merchants` field below.                                                                                                                                          |
| [`Comment`](https://developers.facebook.com/docs/graph-api/reference/comment)                                                                                         | A comment can be made on various types of content on Facebook. Most Graph API nodes have a /comments edge that lists all the comments on that object. The /comment node returns a single comment.                                                                                                                                                                 |
| [`Commerce Merchant Settings`](https://developers.facebook.com/docs/graph-api/reference/commerce-merchant-settings)                                                   | Commerce Merchant Settings object                                                                                                                                                                                                                                                                                                                                 |
| [`Commerce Order`](https://developers.facebook.com/docs/graph-api/reference/commerce-order)                                                                           | Represents an order placed directly on Facebook or Instagram                                                                                                                                                                                                                                                                                                      |
| [`Conversation`](https://developers.facebook.com/docs/graph-api/reference/conversation)                                                                               | Graph API Reference Conversation /conversation                                                                                                                                                                                                                                                                                                                    |
| [`Destination`](https://developers.facebook.com/docs/graph-api/reference/destination)                                                                                 | Represents a destination in a catalog                                                                                                                                                                                                                                                                                                                             |
| [`Doc`](https://developers.facebook.com/docs/graph-api/reference/doc)                                                                                                 | A Document                                                                                                                                                                                                                                                                                                                                                        |
| [`Event`](https://developers.facebook.com/docs/graph-api/reference/event)                                                                                             | Get fields and edges on an Event.                                                                                                                                                                                                                                                                                                                                 |
| [`Flight`](https://developers.facebook.com/docs/graph-api/reference/flight)                                                                                           | Represents a flight in a catalog                                                                                                                                                                                                                                                                                                                                  |
| [`Friend List`](https://developers.facebook.com/docs/graph-api/reference/friend-list)                                                                                 | This represents a user's friend list on Facebook                                                                                                                                                                                                                                                                                                                  |
| [`Group`](https://developers.facebook.com/docs/graph-api/reference/group)                                                                                             | A Facebook group.                                                                                                                                                                                                                                                                                                                                                 |
| [`Group Doc`](https://developers.facebook.com/docs/graph-api/reference/groupdoc)                                                                                      | Graph API Reference Group Doc /group-doc                                                                                                                                                                                                                                                                                                                          |
| [`Group Message`](https://developers.facebook.com/docs/graph-api/reference/group-message)                                                                             | GroupMessage                                                                                                                                                                                                                                                                                                                                                      |
| [`Image Copyright`](https://developers.facebook.com/docs/graph-api/reference/image-copyright)                                                                         | Represents a copyright on an image asset.                                                                                                                                                                                                                                                                                                                         |
| [`Instagram Oembed`](https://developers.facebook.com/docs/graph-api/reference/instagram-oembed)                                                                       | InstagramOembed                                                                                                                                                                                                                                                                                                                                                   |
| [`Lead Gen Data`](https://developers.facebook.com/docs/graph-api/reference/lead-gen-data)                                                                             | A lead ad form                                                                                                                                                                                                                                                                                                                                                    |
| [`Link`](https://developers.facebook.com/docs/graph-api/reference/link)                                                                                               | A link shared on a wall.                                                                                                                                                                                                                                                                                                                                          |
| [`Live Encoder`](https://developers.facebook.com/docs/graph-api/reference/live-encoder)                                                                               | Get fields and edges on a LiveEncoder.                                                                                                                                                                                                                                                                                                                            |
| [`Live Video`](https://developers.facebook.com/docs/graph-api/reference/live-video)                                                                                   | Get fields and edges on a LiveVideo.                                                                                                                                                                                                                                                                                                                              |
| [`Live Video Input Stream`](https://developers.facebook.com/docs/graph-api/reference/live-video-input-stream)                                                         | An ingest stream for a live video                                                                                                                                                                                                                                                                                                                                 |
| [`Mailing Address`](https://developers.facebook.com/docs/graph-api/reference/mailing-address)                                                                         | A mailing address object                                                                                                                                                                                                                                                                                                                                          |
| [`Media Fingerprint`](https://developers.facebook.com/docs/graph-api/reference/media-fingerprint)                                                                     | Media fingerprint                                                                                                                                                                                                                                                                                                                                                 |
| [`Message`](https://developers.facebook.com/docs/graph-api/reference/message)                                                                                         | An individual message in the Facebook messaging system.                                                                                                                                                                                                                                                                                                           |
| [`Milestone`](https://developers.facebook.com/docs/graph-api/reference/milestone)                                                                                     | Graph API Reference Milestone /milestone                                                                                                                                                                                                                                                                                                                          |
| [`Native Offer`](https://developers.facebook.com/docs/graph-api/reference/native-offer)                                                                               | A `native offer` represents an Offer on Facebook. The `/{offer_id}` node returns a single `native offer`. Each `native offer` requires a `view` to be rendered to users.                                                                                                                                                                                          |
| [`Object Comments`](https://developers.facebook.com/docs/graph-api/reference/object/comments)                                                                         | This reference describes the `/comments` edge that is common to multiple Graph API nodes. The structure and operations are the same for each node.                                                                                                                                                                                                                |
| [`Object Likes`](https://developers.facebook.com/docs/graph-api/reference/object/likes)                                                                               | This reference describes the `/likes` edge that is common to multiple Graph API nodes. The structure and operations are the same for each node.                                                                                                                                                                                                                   |
| [`Object Private Replies`](https://developers.facebook.com/docs/graph-api/reference/object/private\_replies)                                                          | Private replies for an object                                                                                                                                                                                                                                                                                                                                     |
| [`Object Reactions`](https://developers.facebook.com/docs/graph-api/reference/object/reactions)                                                                       | First revision to publish                                                                                                                                                                                                                                                                                                                                         |
| [`Object Sharedposts`](https://developers.facebook.com/docs/graph-api/reference/object/sharedposts)                                                                   | Graph API Reference /object/sharedposts                                                                                                                                                                                                                                                                                                                           |
| [`Oembed Page`](https://developers.facebook.com/docs/graph-api/reference/oembed-page)                                                                                 | OembedPage                                                                                                                                                                                                                                                                                                                                                        |
| [`Oembed Post`](https://developers.facebook.com/docs/graph-api/reference/oembed-post)                                                                                 | OembedPost                                                                                                                                                                                                                                                                                                                                                        |
| [`Oembed Video`](https://developers.facebook.com/docs/graph-api/reference/oembed-video)                                                                               | OembedVideo                                                                                                                                                                                                                                                                                                                                                       |
| [`Offline Conversion Data Set`](https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set)                                                 | A Data Set for Offline Conversions object                                                                                                                                                                                                                                                                                                                         |
| [`Offline Conversion Data Set Upload`](https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set-upload)                                   | A subset of Offline Event Data Set                                                                                                                                                                                                                                                                                                                                |
| [`Page`](https://developers.facebook.com/docs/graph-api/reference/page)                                                                                               | Get groups a Page is a member of.                                                                                                                                                                                                                                                                                                                                 |
| [`Page Call To Action`](https://developers.facebook.com/docs/graph-api/reference/page-call-to-action)                                                                 | Page's call-to-action                                                                                                                                                                                                                                                                                                                                             |
| [`Page Post`](https://developers.facebook.com/docs/graph-api/reference/page-post)                                                                                     | A Facebook feed story                                                                                                                                                                                                                                                                                                                                             |
| [`Page Upcoming Change`](https://developers.facebook.com/docs/graph-api/reference/page-upcoming-change)                                                               | Notification of page upcoming changes.                                                                                                                                                                                                                                                                                                                            |
| [`Page/insights`](https://developers.facebook.com/docs/graph-api/reference/insights)                                                                                  | This object represents a single Insights metric that is tied to another particular Graph API object (Page, App, Post, etc.).                                                                                                                                                                                                                                      |
| [`Payment`](https://developers.facebook.com/docs/graph-api/reference/payment)                                                                                         | Graph API Reference Payment /payment                                                                                                                                                                                                                                                                                                                              |
| [`Photo`](https://developers.facebook.com/docs/graph-api/reference/photo)                                                                                             | This represents a Photo on Facebook.                                                                                                                                                                                                                                                                                                                              |
| [`Place`](https://developers.facebook.com/docs/graph-api/reference/place)                                                                                             | A place                                                                                                                                                                                                                                                                                                                                                           |
| [`Place Topic`](https://developers.facebook.com/docs/graph-api/reference/place-topic)                                                                                 | The category of a place Page                                                                                                                                                                                                                                                                                                                                      |
| [`Post`](https://developers.facebook.com/docs/graph-api/reference/post)                                                                                               | A Facebook Feed story                                                                                                                                                                                                                                                                                                                                             |
| [`Profile`](https://developers.facebook.com/docs/graph-api/reference/profile)                                                                                         | Graph API Reference Profile /profile                                                                                                                                                                                                                                                                                                                              |
| [`RTBDynamic Post`](https://developers.facebook.com/docs/graph-api/reference/rtb-dynamic-post)                                                                        | A dynamically generated Post, used for Dynamic Ad Creatives                                                                                                                                                                                                                                                                                                       |
| [`Request`](https://developers.facebook.com/docs/graph-api/reference/request)                                                                                         | Graph API Reference Request /request                                                                                                                                                                                                                                                                                                                              |
| [`Store Catalog Settings`](https://developers.facebook.com/docs/graph-api/reference/store-catalog-settings)                                                           | Represents settings specific to local inventory of a product catalog                                                                                                                                                                                                                                                                                              |
| [`Test User`](https://developers.facebook.com/docs/graph-api/reference/test-user)                                                                                     | Graph API Reference Test User /test-user                                                                                                                                                                                                                                                                                                                          |
| [`Thread`](https://developers.facebook.com/docs/graph-api/reference/thread)                                                                                           | Graph API Reference Thread /thread                                                                                                                                                                                                                                                                                                                                |
| [`User`](https://developers.facebook.com/docs/graph-api/reference/user)                                                                                               | Get fields and edges on a User.                                                                                                                                                                                                                                                                                                                                   |
| [`Video`](https://developers.facebook.com/docs/graph-api/reference/video)                                                                                             | A Video                                                                                                                                                                                                                                                                                                                                                           |
| [`Video Copyright`](https://developers.facebook.com/docs/graph-api/reference/video-copyright)                                                                         | A video copyright                                                                                                                                                                                                                                                                                                                                                 |
| [`Video Copyright Rule`](https://developers.facebook.com/docs/graph-api/reference/video-copyright-rule)                                                               | A video copyright rules                                                                                                                                                                                                                                                                                                                                           |
| [`Video List`](https://developers.facebook.com/docs/graph-api/reference/video-list)                                                                                   | A playlist for videos                                                                                                                                                                                                                                                                                                                                             |
| [`Video Poll`](https://developers.facebook.com/docs/graph-api/reference/video-poll)                                                                                   | Embedded video poll                                                                                                                                                                                                                                                                                                                                               |
| [`Video Poll Option`](https://developers.facebook.com/docs/graph-api/reference/video-poll-option)                                                                     | Represents a single poll option that may be selected by the user                                                                                                                                                                                                                                                                                                  |
| [`Whats App Business Account`](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account)                                                   | Returns the account information of a WhatsApp Business Account                                                                                                                                                                                                                                                                                                    |
| [`Whats App Business Account To Number Current Status`](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status) | Returns information about a specific phone number.                                                                                                                                                                                                                                                                                                                |
| [`Whats App Business HSM`](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm)                                                           | Retrieves information about the message template                                                                                                                                                                                                                                                                                                                  |

#### Graph API Root Edges

Root edges are edges that can be queried directly. They allow you to access collections of nodes that are not on a parent node.

| Node                                                                                    | Description                                                                                                                                    |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Ads Archive`](https://developers.facebook.com/docs/graph-api/reference/ads\_archive/) | Returns archived ads based on your search. By default we only return all ads that are eligible for delivery and that have the `ACTIVE` status. |
| [`Debug Token`](https://developers.facebook.com/docs/graph-api/reference/debug\_token/) | DebugToken                                                                                                                                     |
