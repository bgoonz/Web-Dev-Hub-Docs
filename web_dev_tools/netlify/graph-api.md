# Graph API

## Overview <a id="overview"></a>

The Graph API is the primary way to get data into and out of the Facebook platform. It's an HTTP-based API that apps can use to programmatically query data, post new stories, manage ads, upload photos, and perform a wide variety of other tasks.

The Graph API is named after the idea of a "social graph" — a representation of the information on Facebook. It's composed of nodes, edges, and fields. Typically you use nodes to get data about a specific object, use edges to get collections of objects on a single object, and use fields to get data about a single object or each object in a collection. Throughout our documentation, we may refer to both a node and edge as an "endpoint". For example, "send a `GET` request to the User endpoint".

### HTTP <a id="http"></a>

All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Because the Graph API is HTTP-based, it works with any language that has an HTTP library, such as cURL and urllib. This means you can use the Graph API directly in your browser. For example, requesting this URL in your browser...

[https://graph.facebook.com/facebook/picture?redirect=false](https://graph.facebook.com/facebook/picture?redirect=false)

... is equivalent to performing this cURL request:

```text
curl -i -X GET "https://graph.facebook.com/facebook/picture?redirect=false"
```

We have also enabled the `includeSubdomains` HSTS directive on `facebook.com`, but this should not adversely affect your Graph API calls.

### Host URL <a id="host-url"></a>

Almost all requests are passed to the `graph.facebook.com` host URL. The single exception is video uploads, which use `graph-video.facebook.com`.

### Access Tokens <a id="access-tokens"></a>

Access tokens allow your app to access the Graph API. Almost all Graph API endpoints require an access token of some kind, so each time you access an endpoint, your request may require one. They typically perform two functions:

* They allow your app to access a User's information without requiring the User's password. For example, your app needs a User's email to perform a function. If the User agrees to allow your app to retrieve their email address from Facebook, the User will not need to enter their Facebook password for your app to get their email address.
* They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.

Visit our [access token documentation](https://developers.facebook.com/docs/facebook-login/access-tokens) to learn more.

### Nodes <a id="nodes"></a>

A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook. Pages, Groups, Posts, Photos, and Comments are just some of the nodes of the Facebook Social Graph.

The following cURL example represents a call to the User node.

```text
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN"
```

This request would return the following data by default, formatted using JSON:

```text
{
  "name": "Your Name",
  "id": "YOUR-USER-ID"
}
```

#### Node Metadata <a id="node-metadata"></a>

You can get a list of all fields, including the field name, description, and data type, of a node object, such as a User, Page, or Photo. Send a `GET` request to an object ID and include the `metadata=1` parameter:

```text
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?
    metadata=1&access_token=ACCESS-TOKEN"
```

The resulting JSON response will include the `metadata` property that lists all the supported fields for the given node:

```text
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

### /me <a id="me"></a>

The `/me` node is a special endpoint that translates to the object ID of the person or Page whose access token is currently being used to make the API calls. If you had a User access token, you could retrieve a User's name and ID by using:

```text
curl -i -X GET \
  "https://graph.facebook.com/me?access_token=ACCESS-TOKEN"
```

### Edges <a id="edges"></a>

An edge is a connection between two nodes. For example, a User node can have photos connected to it, and a Photo node can have comments connected to it. The following cURL example will return a list of photos a person has published to Facebook.

```text
curl -i -X GET \
  "https://graph.facebook.com/USER-ID/photos?access_token=ACCESS-TOKEN"
```

Each ID returned represents a Photo node and when it was uploaded to Facebook.

```text
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

### Fields <a id="fields"></a>

Fields are node properties. When you query a node, or an edge, it returns a set of fields by default, as the examples above show. However, you can specify which fields you want returned by using the `fields` parameter and listing each field. This overrides the defaults and returns only the fields you specify, and the ID of the object, which is always returned.

The following cURL request includes the `fields` parameter and the User's name, email, and profile picture.

```text
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=ACCESS-TOKEN"
```

**Data Returned**

```text
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

#### Complex Parameters <a id="parameters"></a>

Most parameter types are straightforward primitives such as `bool`, `string` and `int`, but there are also `list` and `object` types that can be specified in the request.

The `list` type is specified in JSON syntax, for example: `["firstitem", "seconditem", "thirditem"]`

The `object` type is also specified in JSON syntax, for example: `{"firstkey": "firstvalue", "secondKey": 123}`

### Publishing, Updating, and Deleting <a id="publishing--updating--and-deleting"></a>

Visit our [Facebook Sharing guide](https://developers.facebook.com/docs/sharing) to learn how to publish to a User's Facebook or our [Pages API documentation](https://developers.facebook.com/docs/pages) to publish to a Page's Facebook feed.

Some nodes allow you to update fields with `POST` operations. For example, you could update your `email` field like this:

```text
curl -i -X POST \
  "https://graph.facebook.com/USER-ID?email=YOURNEW@EMAILADDRESS.COM&access_token=ACCESS-TOKEN"
```

#### Read-After-Write <a id="read-after-write"></a>

For create and update endpoints, the Graph API can immediately read a successfully published or updated object and return any fields supported by the corresponding read endpoint.

By default, an ID of the object created or updated will be returned. To include more information in the response, include the `fields` parameter in your request and list the fields you want returned. For example, to publish the message “Hello” to a Page's feed, you could make the following request:

```text
curl -i - X POST "https://graph.facebook.com/PAGE-ID/feed?message=Hello&
  fields=created_time,from,id,message&access_token=ACCESS-TOKEN"
```

The above code example is formatted for readability.

This would return the specified fields as a JSON-formatted response, like this:

```text
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

If the read fails for any reason \(for example, requesting a non-existent field\), the Graph API will respond with a standard error response. Visit our [Handling Errors guide](https://developers.facebook.com/docs/graph-api/guides/error-handling) for more information.

You can usually delete a node, such as a Post or Photo node, by performing a DELETE operation on the object ID:

```text
curl -i -X DELETE \
  "https://graph.facebook.com/PHOTO-ID?access_token=ACCESSS-TOKEN"
```

Usually you can only delete nodes that you created, but check each node's reference guide to see requirements for delete operations.

### Versions <a id="versions"></a>

The Graph API has multiple versions with quarterly releases. You can specify the version in your calls by adding "v" and the version number to the start of the request path. For example, here's a call to version 4.0:

```text
curl -i -X GET \
  "https://graph.facebook.com/v4.0/USER-ID/photos
    ?access_token=ACCESS-TOKEN"
```

If you do not include a version number we will default to the oldest available version, so it's recommended to include the version number in your requests.

You can read more about versions in our [Versioning guide](https://developers.facebook.com/docs/graph-api/guides/versions) and learn about all available versions in the [Graph API Changelog](https://developers.facebook.com/docs/graph-api/changelog).

### Facebook APIs, SDKs, and Platforms <a id="facebook-apis--sdks--and-platforms"></a>

Connect interfaces and develop across platforms using Facebook's various [APIs, SDKs, and platforms](https://developers.facebook.com/docs#apis-and-sdks).

### Next Steps <a id="next"></a>

[**Get Started with Graph API**](https://developers.facebook.com/docs/graph-api/get-started) – Let's explore the Facebook Social Graph using the Graph Explorer tool and run a couple requests to get data.







## Guides <a id="guides"></a>

Various Guides for how to use the Facebook Graph API to send and receive data to the Facebook Social Graph.

#### Batch Requests

The [Batch Requests](https://developers.facebook.com/docs/graph-api/batch-requests) guide describes how to make multiple Graph API requests in one call.

#### Debugging

The [Debug Requests guide](https://developers.facebook.com/docs/graph-api/guides/debugging) describes how to enable Debug Mode to view Graph API responses that may contain additional fields that explain potential issues with an API call.

#### Error Handling

The Handling Errors guide describes the recovery tactics and provides a list of error values with a map to the most common recovery tactic to use.

#### Graph Explorer Guide

The [Graph API Explorer guide](https://developers.facebook.com/docs/graph-api/guides/explorer) describes how to use the Graph Explorer tool\]\(/tools/explorer\). This tool allows you to construct, test, and debug queries and see their responses for any apps on which you have an admin, developer, or tester role.

#### Upload Files

The Upload Files guide describes how to upload photos and videos to the Facebook Social Graph that can then be shared in User, Group, or Page posts.





## Graph API Reference <a id="graph-api-reference"></a>

#### Graph API Root Nodes

This is a full list of the Graph API root nodes. The main difference between a root node and a non-root node is that root nodes can be queried directly, while non-root nodes can be queried via root nodes or edges. If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api/), and if you want to know which APIs can solve some frequent issues, try our [Common Scenarios guide](https://developers.facebook.com/docs/graph-api/common-scenarios/).

<table>
  <thead>
    <tr>
      <th style="text-align:left">Node</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/album"><code>Album</code></a>
      </td>
      <td style="text-align:left">Get <a href="https://developers.facebook.com/docs/graph-api/reference/#fields">Fields</a> and
        <a
        href="https://developers.facebook.com/docs/graph-api/reference/#edges">Edges</a>on an Album.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/app-request"><code>App Request</code></a>
      </td>
      <td style="text-align:left">An individual app request received by someone, sent by an app or another
        person</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/application"><code>Application</code></a>
      </td>
      <td style="text-align:left">A Facebook app</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/async-session"><code>Async Session</code></a>
      </td>
      <td style="text-align:left">Represents an async job request to Graph API</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-ad-set"><code>Atlas Ad Set</code></a>
      </td>
      <td style="text-align:left">An Atlas AdSet</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-campaign"><code>Atlas Campaign</code></a>
      </td>
      <td style="text-align:left">An Atlas Campaign</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-fb-conversion-event"><code>Atlas FBConversion Event</code></a>
      </td>
      <td style="text-align:left">Conversion Event Node</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-publisher"><code>Atlas Publisher</code></a>
      </td>
      <td style="text-align:left">An Atlas Publisher</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-report"><code>Atlas Report</code></a>
      </td>
      <td style="text-align:left">An Atlas Report</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-report-run"><code>Atlas Report Run</code></a>
      </td>
      <td style="text-align:left">An Atlas ReportRun</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-report-schedule"><code>Atlas Report Schedule</code></a>
      </td>
      <td style="text-align:left">An Atlas ReportSchedule</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/atlas-tracking-connection"><code>Atlas Tracking Connection</code></a>
      </td>
      <td style="text-align:left">An Ad Platform Tracking Connection</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/business-unit"><code>Business Unit</code></a>
      </td>
      <td style="text-align:left">Represents a group of certain types of Business objects in a Business.
        Will be used by Measurement Hub initially with more usage coming later
        on.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/cpas-advertiser-partnership-recommendation"><code>CPASAdvertiser Partnership Recommendation</code></a>
      </td>
      <td style="text-align:left">
        <p>Returns a recommendation of a single retailer for a specific brand. This
          endpoint returns a retailer-brand pair and an advertiser who can advertise
          on behalf of the producer.</p>
        <p>This endpoint is mainly for Facebook&#x2019;s Marketing Partners using
          <a
          href="https://developers.facebook.com/docs/marketing-api/collaborative-ads">Collaborative Ads</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/cpas-collaboration-request"><code>CPASCollaboration Request</code></a>
      </td>
      <td style="text-align:left">A collaboration request is a partnership request coming from a brand or
        agency to a retailer or marketing partner. Used for <a href="https://developers.facebook.com/docs/marketing-api/collaborative-ads">Collaborative Ads</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/ct-cert-domain"><code>CTCert Domain</code></a>
      </td>
      <td style="text-align:left">A domain name that has been issued new certificates.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas"><code>Canvas</code></a>
      </td>
      <td style="text-align:left">A canvas document</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-button"><code>Canvas Button</code></a>
      </td>
      <td style="text-align:left">A button inside the canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-carousel"><code>Canvas Carousel</code></a>
      </td>
      <td style="text-align:left">A carousel inside a canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-footer"><code>Canvas Footer</code></a>
      </td>
      <td style="text-align:left">A footer of the canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-header"><code>Canvas Header</code></a>
      </td>
      <td style="text-align:left">A header inside the canvas.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-photo"><code>Canvas Photo</code></a>
      </td>
      <td style="text-align:left">A photo inside a canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-product-list"><code>Canvas Product List</code></a>
      </td>
      <td style="text-align:left">A product list inside the canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-product-set"><code>Canvas Product Set</code></a>
      </td>
      <td style="text-align:left">A product set inside the canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-store-locator"><code>Canvas Store Locator</code></a>
      </td>
      <td style="text-align:left">A store locator inside the canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-text"><code>Canvas Text</code></a>
      </td>
      <td style="text-align:left">Text element of the canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/canvas-video"><code>Canvas Video</code></a>
      </td>
      <td style="text-align:left">A video inside canvas</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/collaborative-ads-directory"><code>Collaborative Ads Directory</code></a>
      </td>
      <td style="text-align:left">Directory of retailers that use <a href="https://developers.facebook.com/docs/marketing-api/collaborative-ads">Collaborative Ads</a>.
        This endpoint must be used in conjunction with the <code>collaborative_ads_merchants</code> field
        below.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/comment"><code>Comment</code></a>
      </td>
      <td style="text-align:left">A comment can be made on various types of content on Facebook. Most Graph
        API nodes have a /comments edge that lists all the comments on that object.
        The /comment node returns a single comment.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/commerce-merchant-settings"><code>Commerce Merchant Settings</code></a>
      </td>
      <td style="text-align:left">Commerce Merchant Settings object</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/commerce-order"><code>Commerce Order</code></a>
      </td>
      <td style="text-align:left">Represents an order placed directly on Facebook or Instagram</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/conversation"><code>Conversation</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Conversation /conversation</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/destination"><code>Destination</code></a>
      </td>
      <td style="text-align:left">Represents a destination in a catalog</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/doc"><code>Doc</code></a>
      </td>
      <td style="text-align:left">A Document</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/event"><code>Event</code></a>
      </td>
      <td style="text-align:left">Get fields and edges on an Event.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/flight"><code>Flight</code></a>
      </td>
      <td style="text-align:left">Represents a flight in a catalog</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/friend-list"><code>Friend List</code></a>
      </td>
      <td style="text-align:left">This represents a user&apos;s friend list on Facebook</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/group"><code>Group</code></a>
      </td>
      <td style="text-align:left">A Facebook group.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/groupdoc"><code>Group Doc</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Group Doc /group-doc</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/group-message"><code>Group Message</code></a>
      </td>
      <td style="text-align:left">GroupMessage</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/image-copyright"><code>Image Copyright</code></a>
      </td>
      <td style="text-align:left">Represents a copyright on an image asset.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/instagram-oembed"><code>Instagram Oembed</code></a>
      </td>
      <td style="text-align:left">InstagramOembed</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/lead-gen-data"><code>Lead Gen Data</code></a>
      </td>
      <td style="text-align:left">A lead ad form</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/link"><code>Link</code></a>
      </td>
      <td style="text-align:left">A link shared on a wall.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/live-encoder"><code>Live Encoder</code></a>
      </td>
      <td style="text-align:left">Get fields and edges on a LiveEncoder.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/live-video"><code>Live Video</code></a>
      </td>
      <td style="text-align:left">Get fields and edges on a LiveVideo.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/live-video-input-stream"><code>Live Video Input Stream</code></a>
      </td>
      <td style="text-align:left">An ingest stream for a live video</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/mailing-address"><code>Mailing Address</code></a>
      </td>
      <td style="text-align:left">A mailing address object</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/media-fingerprint"><code>Media Fingerprint</code></a>
      </td>
      <td style="text-align:left">Media fingerprint</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/message"><code>Message</code></a>
      </td>
      <td style="text-align:left">An individual message in the Facebook messaging system.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/milestone"><code>Milestone</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Milestone /milestone</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/native-offer"><code>Native Offer</code></a>
      </td>
      <td style="text-align:left">A <code>native offer</code> represents an Offer on Facebook. The <code>/{offer_id}</code> node
        returns a single <code>native offer</code>. Each <code>native offer</code> requires
        a <code>view</code> to be rendered to users.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/object/comments"><code>Object Comments</code></a>
      </td>
      <td style="text-align:left">This reference describes the <code>/comments</code> edge that is common
        to multiple Graph API nodes. The structure and operations are the same
        for each node.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/object/likes"><code>Object Likes</code></a>
      </td>
      <td style="text-align:left">This reference describes the <code>/likes</code> edge that is common to
        multiple Graph API nodes. The structure and operations are the same for
        each node.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/object/private_replies"><code>Object Private Replies</code></a>
      </td>
      <td style="text-align:left">Private replies for an object</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/object/reactions"><code>Object Reactions</code></a>
      </td>
      <td style="text-align:left">First revision to publish</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/object/sharedposts"><code>Object Sharedposts</code></a>
      </td>
      <td style="text-align:left">Graph API Reference /object/sharedposts</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/oembed-page"><code>Oembed Page</code></a>
      </td>
      <td style="text-align:left">OembedPage</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/oembed-post"><code>Oembed Post</code></a>
      </td>
      <td style="text-align:left">OembedPost</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/oembed-video"><code>Oembed Video</code></a>
      </td>
      <td style="text-align:left">OembedVideo</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set"><code>Offline Conversion Data Set</code></a>
      </td>
      <td style="text-align:left">A Data Set for Offline Conversions object</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set-upload"><code>Offline Conversion Data Set Upload</code></a>
      </td>
      <td style="text-align:left">A subset of Offline Event Data Set</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/page"><code>Page</code></a>
      </td>
      <td style="text-align:left">Get groups a Page is a member of.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/page-call-to-action"><code>Page Call To Action</code></a>
      </td>
      <td style="text-align:left">Page&apos;s call-to-action</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/page-post"><code>Page Post</code></a>
      </td>
      <td style="text-align:left">A Facebook feed story</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/page-upcoming-change"><code>Page Upcoming Change</code></a>
      </td>
      <td style="text-align:left">Notification of page upcoming changes.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/insights"><code>Page/insights</code></a>
      </td>
      <td style="text-align:left">This object represents a single Insights metric that is tied to another
        particular Graph API object (Page, App, Post, etc.).</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/payment"><code>Payment</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Payment /payment</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/photo"><code>Photo</code></a>
      </td>
      <td style="text-align:left">This represents a Photo on Facebook.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">A place</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/place-topic"><code>Place Topic</code></a>
      </td>
      <td style="text-align:left">The category of a place Page</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/post"><code>Post</code></a>
      </td>
      <td style="text-align:left">A Facebook Feed story</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/profile"><code>Profile</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Profile /profile</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/rtb-dynamic-post"><code>RTBDynamic Post</code></a>
      </td>
      <td style="text-align:left">A dynamically generated Post, used for Dynamic Ad Creatives</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/request"><code>Request</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Request /request</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/store-catalog-settings"><code>Store Catalog Settings</code></a>
      </td>
      <td style="text-align:left">Represents settings specific to local inventory of a product catalog</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/test-user"><code>Test User</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Test User /test-user</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/thread"><code>Thread</code></a>
      </td>
      <td style="text-align:left">Graph API Reference Thread /thread</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/user"><code>User</code></a>
      </td>
      <td style="text-align:left">Get fields and edges on a User.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/video"><code>Video</code></a>
      </td>
      <td style="text-align:left">A Video</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/video-copyright"><code>Video Copyright</code></a>
      </td>
      <td style="text-align:left">A video copyright</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/video-copyright-rule"><code>Video Copyright Rule</code></a>
      </td>
      <td style="text-align:left">A video copyright rules</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/video-list"><code>Video List</code></a>
      </td>
      <td style="text-align:left">A playlist for videos</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/video-poll"><code>Video Poll</code></a>
      </td>
      <td style="text-align:left">Embedded video poll</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/video-poll-option"><code>Video Poll Option</code></a>
      </td>
      <td style="text-align:left">Represents a single poll option that may be selected by the user</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account"><code>Whats App Business Account</code></a>
      </td>
      <td style="text-align:left">Returns the account information of a WhatsApp Business Account</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status"><code>Whats App Business Account To Number Current Status</code></a>
      </td>
      <td style="text-align:left">Returns information about a specific phone number.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm"><code>Whats App Business HSM</code></a>
      </td>
      <td style="text-align:left">Retrieves information about the message template</td>
    </tr>
  </tbody>
</table>

#### Graph API Root Edges

Root edges are edges that can be queried directly. They allow you to access collections of nodes that are not on a parent node.

| Node | Description |
| :--- | :--- |
| [`Ads Archive`](https://developers.facebook.com/docs/graph-api/reference/ads_archive/) | Returns archived ads based on your search. By default we only return all ads that are eligible for delivery and that have the `ACTIVE` status. |
| [`Debug Token`](https://developers.facebook.com/docs/graph-api/reference/debug_token/) | DebugToken |







