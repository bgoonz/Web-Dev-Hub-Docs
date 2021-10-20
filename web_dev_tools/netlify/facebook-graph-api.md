# Facebook Graph API

## Graph API Explorer Guide <a id="graph-api-explorer-guide"></a>

The [Graph API Explorer tool](https://developers.facebook.com/tools/explorer) allows you to construct and perform Graph API queries and see their responses for any apps on which you have an admin, developer, or tester role.

### Common Uses <a id="common-uses"></a>

* Test API queries with your Live app's settings, including approved [login permissions](https://developers.facebook.com/docs/apps/review/login-permissions), [features](https://developers.facebook.com/docs/apps/review/feature), and settings for any added products such as Facebook Login.
* Test API queries with your Developer Mode app's settings using any [login permissions](https://developers.facebook.com/docs/apps/review/login-permissions) and [features](https://developers.facebook.com/docs/apps/review/feature) on test users or test data.
* Quickly generate access tokens.
* Get code samples of the queries you have run.
* Generate debug information to include in support requests.

### Requirements <a id="requirements"></a>

* A [Facebook Developer Account](https://developers.facebook.com/apps).
* An app for which you have a role, such as an [admin, developer, or tester role](https://developers.facebook.com/docs/apps#roles).

### Components <a id="components"></a>

#### Application Dropdown <a id="application-dropdown"></a>

The Application dropdown menu displays all the apps on which you have an admin, developer, or tester role. Use the dropdown to select the app that you wish to test.![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/79251764_578537029630374_1089724127452856320_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=nL1ZY7j_rzcAX-mFp44&_nc_ht=scontent.fewr1-6.fna&oh=1e872957049915cc3879589ff074de9b&oe=6159DFF1)

#### Access Token Dropdown <a id="access-token-dropdown"></a>

The Token dropdown menu allows you to get and exchange App, User, and Page access tokens for the currently selected app. You can also use it to uninstall your app from your User node, which destroys the current access token.![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79446757_993982860994763_1363200333165101056_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=-4W-dlzyItQAX8WEREY&_nc_ht=scontent.fewr1-5.fna&oh=03df1995ea901e4e9a4e3b0d695f52eb&oe=615988D1)

#### Add a Permission Dropdown <a id="permissions"></a>

Whenever you request a User access token, only one permission is given by default, `public_profile`. The Permission dropdown menu allows you to select User Data Permissions, such as `email` and `user_photos`, Events, Groups, and Pages Permissions, such as `manage_pages` and `ads_management`, and Other permissions, such as `instagram_basic` and `publish_video` permissions. This allows the current app User \(which is you\) to grant the app specific permissions. Only grant permissions that your app actually needs.

![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/79532377_432699407662681_8754821856827015168_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=rpxO7-wxTVEAX9bUjyC&_nc_ht=scontent.fewr1-6.fna&oh=a5db4d6a80faf70f2dd340b999a9bafe&oe=6159E76D)

If your app is in development mode, you can grant your app any permission and your queries respect them. If your app is live, however, granting a permission that your app has not been approved for by the [App Review](https://developers.facebook.com/docs/apps/review) process causes your query to fail whenever you submit it.

#### Access Token Field <a id="access-token-field"></a>

When you get an access token, it is displayed here. This is the token that is included in your Graph API query.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79241963_579505805926422_7830754897153753088_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=HZN-09dwvj8AX8pyD8Z&_nc_ht=scontent.fewr1-5.fna&oh=f59e4a7e615f41a8d2df1ba0f695a146&oe=615925E4)

Click the information icon to see information about the current token, including the app that it's tied to, and any login permissions that have been granted by the User who is using the app \(which is you\).![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79588248_2531830050434402_8742483506707300352_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=aRZh1i6SF3MAX957oiR&_nc_ht=scontent.fewr1-5.fna&oh=91d3e039da1be5ce1883ce7fda9978c5&oe=615A997F)

#### Query string Field <a id="query-string-field"></a>

The current query appears here. You can edit the current query by typing in a new one, or by searching for and selecting fields in the field viewer after executing the query. You can also use the dropdown menus to switch between operation methods, and target different versions of the Graph API.

If you click the star icon at the end of the field, the query is saved as a favorite. You can view your favorite queries by clicking the book icon.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79433831_2496738383900059_4484149369754353664_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=2xrUCpVHCh8AX-ecXam&_nc_ht=scontent.fewr1-5.fna&oh=6d059e1c443663651bac1cb9231a59d3&oe=6159D713)

#### Node Field Viewer <a id="node-field-viewer"></a>

When you submit a `GET` query on a node, the field viewer displays the name of the node and the fields returned by the Graph API. You can modify your query by searching for and selecting new fields, clicking the plus icon, and choosing from available fields, or unchecking unnecessary fields. These actions dynamically update your query in the query string field.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79360573_437031223866268_5947414435097214976_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=VUj8A42ThZ8AX_2z67-&_nc_ht=scontent.fewr1-5.fna&oh=d769fc707f5a487ab242ae0a20661c11&oe=6159311A)

#### Response Window <a id="response-window"></a>

The response to your last submitted query appears here.

![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/79352250_2571914689754767_3905651054900936704_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=sfx6krO3AFIAX8ZPg3E&_nc_ht=scontent.fewr1-6.fna&oh=6675a37b9656aa36fd8c83d1f721e2a9&oe=615A3F63)

#### Get Code <a id="get-code"></a>

If you are happy with your query, click the Get Code button to generate sample code based on the query. Typically you won't be able to copy and paste the sample code directly in your code base, but it gives you a useful starting point.![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/80064637_567020644084611_3472173251394797568_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=TTILDwwz_p8AX9xC61o&_nc_ht=scontent.fewr1-5.fna&oh=a4cdfbcf9f7451de958da51b20ec70ac&oe=6159F294)

#### Copy Debug Information <a id="copy-debug-information"></a>

If your query keeps failing and you can't figure out why, and you decide to contact Developer Support, click this button to copy your query and response details to your clipboard. You can submit this information with your support request to help us figure out what's going on.

![](https://scontent.fewr1-6.fna.fbcdn.net/v/t39.2365-6/78630150_491884384764225_5239037112371642368_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=iXklahBitH8AX_d25TK&_nc_ht=scontent.fewr1-6.fna&oh=e663d54a039922a8f1fb96356a272351&oe=61595F37)

#### Save Session <a id="save-session"></a>

Click the Save Session button to save the state of your query, with the access token removed. Include the link to this session if you decide to contact Developer Support.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79326442_474875476772137_6998622253617250304_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=IuF2sVIELokAX_mlNea&_nc_ht=scontent.fewr1-5.fna&oh=c8c9e08e45fa2ed64b5c3ecba0db8c3a&oe=6158DB5B)

### Sample Query <a id="sample-query"></a>

Try executing the default query that appears when you first load the Graph API Explorer. If you haven't already, [open the Graph API Explorer in a new window](https://developers.facebook.com/tools/explorer), select the app you want to test from the application dropdown menu, and get a User access token.

The default query appears in the query string field:

```text
GET https://developers.facebook.com/v5.0/me?fields=id,name
```

The default query is requesting the `id` and `name` fields on the `/me` node, which is a special node that maps to either the `/User` or `/Page` node identified by the token. Since your are using a User access token, this maps to your User node.

The `id` and `name` fields are publicly available and can be returned if the User has granted your app the `default` or `public_profile` permissions. These permissions are pre-approved for all apps \(you can confirm this by clicking the information icon in the **Access Token Field**\), so you don't have to grant your app any additional permissions for the query to work. Click **Get Access Token** and confirm that you want to grant your app access to your publicly available User information.

![](https://scontent.fewr1-5.fna.fbcdn.net/v/t39.2365-6/79918818_2547429572153654_5190211881201041408_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=MlqfKC_0EmoAX_Jv-Cp&_nc_ht=scontent.fewr1-5.fna&oh=3db497a3fb5d0edee62345524791e203&oe=61591A5A)

Submit your query, and you should see your app-scoped User ID and name appear in the response window.[Open the Graph API Explorer](https://developers.facebook.com/tools/explorer)

