# FB-Dev-Open Source

## Content Publishing <a id="content-publishing"></a>

You can use the Instagram Graph API to publish [IG Media](https://developers.facebook.com/docs/instagram-api/reference/ig-media) objects on Instagram Business [IG Users](https://developers.facebook.com/docs/instagram-api/reference/ig-user). Publishing media objects is a two step process — first create a media object container, then use the container to publish the media.

### Limitations <a id="limitations"></a>

* Can only be used to publish to business [IG User](https://developers.facebook.com/docs/instagram-api/reference/ig-user) accounts; Creator IG User accounts are not supported.
* Accounts are limited to 25 API-published posts within a 24 hour period.
* JPEG is the only image format supported. Extended JPEG formats such as MPO and JPS are not supported.
* Stories are not supported.
* Shopping tags are not supported.
* Branded content tags are not supported.
* Filters are not supported.
* Multi-image posts are not supported.
* If the caption contains a hashtag, it should be HTML URL-encoded as %23 in the request.
* Publishing to IGTV is not supported.

For additional limitations, please refer to the [IG User Media](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media) endpoint reference.

### Requirements <a id="requirements"></a>

#### Access Tokens <a id="access-tokens"></a>

All requests must include the app user's [User](https://developers.facebook.com/docs/facebook-login/access-tokens/#usertokens) access token.

#### Permissions <a id="permissions"></a>

Publishing relies on a combination of the following permissions. The exact combination depends on which [endpoints](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#endpoints) your app will be using. Refer to our [endpoint](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#endpoints) references to determine which permissions they require.

* [ads\_management](https://developers.facebook.com/docs/permissions/reference/ads_management)
* [business\_management](https://developers.facebook.com/docs/permissions/reference/business_management)
* [instagram\_basic](https://developers.facebook.com/docs/permissions/reference/instagram_basic)
* [instagram\_content\_publish](https://developers.facebook.com/docs/permissions/reference/instagram_content_publish)
* [pages\_read\_engagement](https://developers.facebook.com/docs/permissions/reference/pages_read_engagement)

If your app will be used by app users who do not have a [role](https://developers.facebook.com/docs/development/build-and-test/app-roles) on your app or a role in a [Business](https://www.facebook.com/business/help/442345745885606?id=180505742745347) that claimed your app, you must request approval for each permission via [App Review](https://developers.facebook.com/docs/app-review) before non-role app users can grant them to your app.

#### Public Server <a id="public-server"></a>

We will cURL your media object using the passed in URL so the object must be on a public server.

#### Page Publishing Authorization <a id="page-publishing-authorization"></a>

Instagram Business accounts connected to a [Page](https://developers.facebook.com/docs/instagram-api/overview#pages) that requires [Page Publishing Authorization](https://www.facebook.com/business/m/one-sheeters/page-publishing-authorization) \(PPA\) cannot be published to until PPA has been completed.

It's possible that an app user may be able to perform [Tasks](https://developers.facebook.com/docs/instagram-api/overview#tasks) on a Page that initially does not require PPA but later requires it. In this scenario, the app user would not be able to publish content to their Instagram Business account until completing PPA. Since there's no way for you to determine if an app user's Page requires PPA, we recommend that you advise app users to preemptively complete PPA.

### Rate Limit <a id="rate-limit"></a>

Instagram accounts are limited to 25 API-published posts within a 24 hour moving period. This limit is enforced on the [IG User Media Publish](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media_publish) endpoint when attempting to publish a media container. We recommend that your app also enforce the publishing rate limit, especially if your app allows app users to schedule posts to be published in the future.

To check an IG Business acccount's current rate limit usage, query the [IG User Content Publishing Limit](https://developers.facebook.com/docs/instagram-api/reference/ig-user/content_publishing_limit) endpoint.

### Endpoints <a id="endpoints"></a>

The API consists of the following endpoints. Refer to each endpoint's reference document for usage requirements.

* [`POST /{ig-user-id}/media`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media#creating) — upload media and create media containers.
* [`POST /{ig-user-id}/media_publish`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media_publish#creating) — publish uploaded media using their media containers.
* [`GET /{ig-container-id}?fields=status_code`](https://developers.facebook.com/docs/instagram-api/reference/ig-container#reading) — check media container publishing eligibility and status.
* [`GET /{ig-user-id}/content_publishing_limit`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/content_publishing_limit) — check app user's current publishing rate limit usage.

### Examples <a id="common-uses"></a>

* [Publishing Photos](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#publish-photos)
* [Publishing Photos w/ Tagged Users](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#publish-with-tagged-users)
* [Publishing Photos w/ Locations](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#publish-with-locations)
* [Publishing Videos](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#publish-videos)
* [Checking Rate Limit Usage](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#checking-rate-limit-usage)

#### Publishing Photos <a id="publish-photos"></a>

Publishing photos is a two-step process:

1. Use the [`POST /{ig-user-id}/media`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media#creating) endpoint to upload a photo and create an [IG Container](https://developers.facebook.com/docs/instagram-api/reference/ig-container).
2. Use the [`POST /{ig-user-id}/media_publish`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media_publish#creating) endpoint to publish the photo using its container.

For example, let's say you have a photo at...

```text
https://www.example.com/images/bronz-fonz.jpg
```

... that you want to publish with the hashtag "\#BronzFonz" as its caption. You could use the `POST /{ig-user-id}/media` endpoint to create the container like this, using HTML URL-encoding for the hashtag \(\#\) character in the caption.

**Sample Request**

```text
POST graph.facebook.com/17841400008460056/media
  ?image_url=https//www.example.com/images/bronz-fonz.jpg
  &caption=%23BronzFonz
```

This would return a container ID \(let's say `17889455560051444`\), which you would then publish using the `POST /{ig-user-id}/media_publish` endpoint, like this:

**Sample Request**

```text
POST graph.facebook.com/17841405822304914/media_publish
  ?creation_id=17889455560051444
```

#### Publishing Photos w/ Tagged Users <a id="publish-with-tagged-users"></a>

You can tag public Instagram users in a photo and they will receive a notification when it is published.

To do this, follow the [Publishing Photos](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#publish-photos) steps above, but when creating the media container, include the `user_tags` parameter and an array of objects indicating the Instagram users in the photo as well as their `x`/`y` coordinates within the photo itself.

For example, let's say you want to publish a photo that depicts two of your Instagram friends who you want to tag. You could use the `POST /{ig-user-id}/media` endpoint to create the container like this:

**Sample Request**

```text
POST graph.facebook.com/17841400008460056/media
  ?image_url=https://www.example.com/images/bronzed-fonzes.jpg
  &caption=%23BronzedFonzes!
  &user_tags=
   [
     {
       username:'kevinhart4real',
       x: 0.5,
       y: 0.8
     },
     {
       username:'therock',
       x: 0.3,
       y: 0.2
     }
   ]
```

This would return a container ID which you would then use with the `POST /{ig-user-id}/media_publish` endpoint to publish the photo.

**Notes**

* The `user_tags` value must be an array of objects formatted with JSON.
* You can only tag users with public Instagram accounts.
* The object must contain all three properties \(`username`, `x`, and `y`\) for each user.
* `x` and `y` values must be `float` numbers that originate from the top-left of the image, with a range of `0.0`–`1.0`.
* The hashtag character \(\#\) is HTML URL-encoded in the request \(%23\).

#### Publishing Photos w/ Locations <a id="publish-with-locations"></a>

You can use the [Pages Search API](https://developers.facebook.com/docs/pages/searching) to search for [Pages](https://developers.facebook.com/docs/graph-api/reference/page) whose names match a search string, then parse the results to identify any Pages that have been created for a physical location. If you include a Page's ID when publishing a photo, the photo will be tagged with the location associated with that Page.

For example:

```text
GET https://graph.facebook.com/pages/search
  ?q=guggenheim
  &fields=name,location,link
  &access_token={access-token}
```

This would return an array of Pages with "guggenheim" in their name, one of which is for the Guggenheim in New York City:

```text
...
{
  "name": "Solomon R. Guggenheim Museum",
  "location": {
    "city": "New York",
    "country": "United States",
    "latitude": 40.782910059774,
    "longitude": -73.959075808525,
    "state": "NY",
    "street": "1071 5th Ave",
    "zip": "10128"
    },
  "link": "https://www.facebook.com/7640348500",
  "id": "7640348500"  // This is the page ID, which you can use for location tagging
}
...
```

Be sure to include the `location` field in your query and verify that the Page you want to use has location data that include latitude and longitude. Attempting to create a container using a Page that has no location data will fail with coded exception `INSTAGRAM_PLATFORM_API__INVALID_LOCATION_ID`.

Once you have the Page ID, follow the [Publishing Photos](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/#publish-photos) steps above and use the `location_id` parameter to pass us the Page ID when creating your media object container.

To be eligible for tagging, a Page must have latitude and longitude location data.

**Sample Request**

```text
POST graph.facebook.com/17841400008460056/media
  ?image_url=https://www.example.com/images/gugges.jpg
  &caption=Exhibiting!
  &location_id=7640348500
```

This would return a container ID which you would then use with the `POST /{ig-user-id}/media_publish` endpoint to publish the photo.

#### Publishing Videos <a id="publish-videos"></a>

Publishing videos is a two-step process:

1. Use the [`POST /{ig-user-id}/media`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media#creating) endpoint to create an [IG Container](https://developers.facebook.com/docs/instagram-api/reference/ig-container).
2. Use the [`POST /{ig-user-id}/media_publish`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media_publish#creating) endpoint to publish the video using its container.

For example, let's say you have a video at...

```text
https://www.example.com/videos/hungry-fonzes.mov
```

... that you want to publish with the hashtag "\#Heyyyyyyyy!" as its caption. You could use the `POST /{ig-user-id}/media` edge, applying HTML URL-encoding to the hashtag character in the caption to create the container like this:

**Sample Request**

```text
POST graph.facebook.com/17841400008460056/media
  ?media_type=VIDEO
  &video_url=https//www.example.com/videos/hungry-fonzes.mov
  &caption=%23Heyyyyyyyy!
```

This would return a container ID \(let's say `17889455560051447`\), which you would then use with the `POST /{ig-user-id}/media_publish` endpoint to publish the video, like this:

**Sample Request**

```text
POST graph.facebook.com/17841405822304914/media_publish
  ?creation_id=17889455560051447
```

#### Checking Rate Limit Usage <a id="checking-rate-limit-usage"></a>

Instagram accounts are limited to 25 API-published posts within a 24 hour moving period. You can query the [IG User Content Publishing Limit](https://developers.facebook.com/docs/instagram-api/reference/ig-user/content_publishing_limit) endpoint to check your app user's current rate limit usage.

**Sample Request**

```text
GET graph.facebook.com/17841400008460056/content_publishing_limit
```

**Sample Response**

```text
{
  "data": [
    {
      "quota_usage": 2
    }
  ]
}
```

### Troubleshooting <a id="troubleshooting"></a>

If you are able to create a container for a video but the [`POST /{ig-user-id}/media_publish`](https://developers.facebook.com/docs/instagram-api/reference/ig-user/media_publish#creating) endpoint does not return the published media ID, you can get the container's publishing status by querying the `GET /{ig-container-id}?fields=status_code` endpoint. This endpoint will return one of the following:

* `EXPIRED` — The container was not published within 24 hours and has expired.
* `ERROR` — The container failed to complete the publishing process.
* `FINISHED` — The container and its media object are ready to be published.
* `IN_PROGRESS` — The container is still in the publishing process.
* `PUBLISHED` — The container's media object has been published.

We recommend querying a container's status once per minute, for no more than 5 minutes.

### Errors <a id="errors"></a>

See the [Error Codes](https://developers.facebook.com/docs/instagram-api/reference/error-codes) reference.

