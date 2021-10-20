# GRAPHQL

## Gatsby

This guide will help you get started using Netlify CMS and Gatsby.

To get up and running with Gatsby, you’ll need to have [Node.js](https://nodejs.org/) installed on your computer. _Note: Gatsby's minimum supported Node.js version is Node 8._

### Create a new Gatsby site <a id="create-a-new-gatsby-site"></a>

Let's create a new site using the default Gatsby Starter Blog. Run the following commands in the terminal, in the folder where you'd like to create the blog:

```text
npm install -g gatsby-cli
gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
cd blog
```

### Get to know Gatsby <a id="get-to-know-gatsby"></a>

In your favorite code editor, open up the code generated for your "Gatsby Starter Blog" site, and take a look at the `content` directory.

You will see that there are multiple Markdown files that represent blog posts. Open one `.md` file and you will see something like this:

```text
---
title: New Beginnings
date: "2015-05-28T22:40:32.169Z"
description: This is an optional description for SEO and Open Graph purposes, rather than the default generated excerpt.
---

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts.
```

We can see above that each blog post has a title, a date, a description and a body. Now, let's recreate this using Netlify CMS.

### Add Netlify CMS to your site <a id="add-netlify-cms-to-your-site"></a>

First let's install some dependencies. We'll need `netlify-cms-app` and `gatsby-plugin-netlify-cms`. Run the following command in the terminal at the root of your site:

```text
npm install --save netlify-cms-app gatsby-plugin-netlify-cms
```

#### Configuration <a id="configuration"></a>

For the purpose of this guide we will deploy to Netlify from a GitHub repository which requires the minimum configuration.

Create a `config.yml` file in the directory structure you see below:

```text
├── static
│   ├── admin
│   │   ├── config.yml
```

In your `config.yml` file paste the following configuration:

```text
backend:
  name: git-gateway
  branch: main # Branch to update (optional; defaults to master)

media_folder: static/img
public_folder: /img

collections:
  - name: 'blog'
    label: 'Blog'
    folder: 'content/blog'
    create: true
    slug: 'index'
    media_folder: ''
    public_folder: ''
    path: '{{title}}/index'
    editor:
      preview: false
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

**Note:** The above configuration allows assets to be stored relative to their content. Therefore posts would be stored in the format below as it is in `gatsby-starter-blog`.

```text
content/
├── blog
│   ├── first-post-title
│   │   ├── index.md
│   │   └── post-image.jpg
└── └── second-post-title
        ├── index.md
        └── post-image.jpg
```

Finally, add the plugin to your `gatsby-config.js`.

```text
plugins: [`gatsby-plugin-netlify-cms`]
```

#### Push to GitHub <a id="push-to-github"></a>

It's now time to commit your changes and push to GitHub. The Gatsby starter initializes Git automatically for you, so you only need to do:

```text
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
git push -u origin main
```

#### Add your repo to Netlify <a id="add-your-repo-to-netlify"></a>

Go to Netlify and select 'New Site from Git'. Select GitHub and the repository you just pushed to. Click Configure Netlify on GitHub and give access to your repository. Finish the setup by clicking Deploy Site. Netlify will begin reading your repository and starting building your project.

#### Enable Identity and Git Gateway <a id="enable-identity-and-git-gateway"></a>

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

1. Go to **Settings &gt; Identity**, and select **Enable Identity service**.
2. Under **Registration preferences**, select **Open** or **Invite only**. In most cases, you want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
3. If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under **External providers**.
4. Scroll down to **Services &gt; Git Gateway**, and click **Enable Git Gateway**. This authenticates with your Git host and generates an API access token. In this case, we're leaving the **Roles** field blank, which means any logged in user may access the CMS. For information on changing this, check the [Netlify Identity documentation](https://www.netlify.com/docs/identity/).

### Start publishing <a id="start-publishing"></a>

It's time to create your first blog post. Login to your site's `/admin/` page and create a new post by clicking New Blog. Add a title, a date and some text. When you click Publish, a new commit will be created in your GitHub repo with this format `Create Blog “year-month-date-title”`.

Then Netlify will detect that there was a commit in your repo, and will start rebuilding your project. When your project is deployed you'll be able to see the post you created.

#### Cleanup <a id="cleanup"></a>

It is now safe to remove the default Gatsby blog posts.

## About the GraphQL API

The GitHub GraphQL API offers flexibility and the ability to define precisely the data you want to fetch.

### [In this article](https://docs.github.com/en/graphql/overview/about-the-graphql-api#in-this-article) <a id="in-this-article"></a>

* [Overview](https://docs.github.com/en/graphql/overview/about-the-graphql-api#overview)
* [About GraphQL](https://docs.github.com/en/graphql/overview/about-the-graphql-api#about-graphql)
* [Why GitHub is using GraphQL](https://docs.github.com/en/graphql/overview/about-the-graphql-api#why-github-is-using-graphql)
* [About the GraphQL schema reference](https://docs.github.com/en/graphql/overview/about-the-graphql-api#about-the-graphql-schema-reference)
* [Requesting support](https://docs.github.com/en/graphql/overview/about-the-graphql-api#requesting-support)

### Overview <a id="overview"></a>

Here are some quick links to get you up and running with the GraphQL API v4:

* [Authentication](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Root endpoint](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Schema introspection](https://docs.github.com/en/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Rate limits](https://docs.github.com/en/graphql/overview/resource-limitations)
* [Migrating from REST](https://docs.github.com/en/graphql/guides/migrating-from-rest-to-graphql)

### About GraphQL <a id="about-graphql"></a>

The [GraphQL](https://graphql.github.io/) data query language is:

* **A** [**specification**](https://graphql.github.io/graphql-spec/June2018/)**.** The spec determines the validity of the [schema](https://docs.github.com/en/graphql/guides/introduction-to-graphql#schema) on the API server. The schema determines the validity of client calls.
* [**Strongly typed**](https://docs.github.com/en/graphql/overview/about-the-graphql-api#about-the-graphql-schema-reference)**.** The schema defines an API's type system and all object relationships.
* [**Introspective**](https://docs.github.com/en/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)**.** A client can query the schema for details about the schema.
* [**Hierarchical**](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql)**.** The shape of a GraphQL call mirrors the shape of the JSON data it returns. [Nested fields](https://docs.github.com/en/graphql/guides/migrating-from-rest-to-graphql#example-nesting) let you query for and receive only the data you specify in a single round trip.
* **An application layer.** GraphQL is not a storage model or a database query language. The _graph_ refers to graph structures defined in the schema, where [nodes](https://docs.github.com/en/graphql/guides/introduction-to-graphql#node) define objects and [edges](https://docs.github.com/en/graphql/guides/introduction-to-graphql#edge) define relationships between objects. The API traverses and returns application data based on the schema definitions, independent of how the data is stored.

### Why GitHub is using GraphQL <a id="why-github-is-using-graphql"></a>

GitHub chose GraphQL for our API v4 because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want—and _only_ the data you want—is a powerful advantage over the REST API v3 endpoints. GraphQL lets you replace multiple REST requests with _a single call_ to fetch the data you specify.

For more details about why GitHub has moved to GraphQL, see the original [announcement blog post](https://githubengineering.com/the-github-graphql-api/).

### About the GraphQL schema reference <a id="about-the-graphql-schema-reference"></a>

The docs in the sidebar are generated from the GitHub GraphQL [schema](https://docs.github.com/en/graphql/guides/introduction-to-graphql#discovering-the-graphql-api). All calls are validated and executed against the schema. Use these docs to find out what data you can call:

* Allowed operations: [queries](https://docs.github.com/en/graphql/reference/queries) and [mutations](https://docs.github.com/en/graphql/reference/mutations).
* Schema-defined types: [scalars](https://docs.github.com/en/graphql/reference/scalars), [objects](https://docs.github.com/en/graphql/reference/objects), [enums](https://docs.github.com/en/graphql/reference/enums), [interfaces](https://docs.github.com/en/graphql/reference/interfaces), [unions](https://docs.github.com/en/graphql/reference/unions), and [input objects](https://docs.github.com/en/graphql/reference/input-objects).

You can access this same content via the [Explorer Docs sidebar](https://docs.github.com/en/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Note that you may need to rely on both the docs and the schema validation to successfully call the GraphQL API.

For other information, such as authentication and rate limit details, check out the [guides](https://docs.github.com/en/graphql/guides).

### Requesting support <a id="requesting-support"></a>

For questions, bug reports, and discussions about GitHub Apps, OAuth Apps, and API development, explore the [GitHub API Development and Support Forum](https://github.community/c/github-api-development-and-support/37). The forum is moderated and maintained by GitHub staff, but questions posted to the forum are not guaranteed to receive a reply from GitHub staff.

Consider reaching out to [GitHub Support](https://github.com/contact) directly using the contact form for:

* guaranteed response from GitHub staff
* support requests involving sensitive data or private concerns
* feature requests
* feedback about GitHub products

## Overview

A backend is JavaScript code that allows Netlify CMS to communicate with a service that stores content - typically a Git host like GitHub or GitLab. It provides functions that Netlify CMS can use to do things like read and update files using API's provided by the service.

### Backend Configuration <a id="backend-configuration"></a>

Individual backends should provide their own configuration documentation, but there are some configuration options that are common to multiple backends. A full reference is below. Note that these are properties of the `backend` field, and should be nested under that field.

| Field | Default | Description |
| :--- | :--- | :--- |
| `repo` | none | **Required** for `github`, `gitlab`, and `bitbucket` backends; ignored by `git-gateway`. Follows the pattern `[org-or-username]/[repo-name]`. |
| `branch` | `master` | The branch where published content is stored. All CMS commits and PRs are made to this branch. |
| `api_root` | `https://api.github.com` \(GitHub\), `https://gitlab.com/api/v4` \(GitLab\), or `https://api.bitbucket.org/2.0` \(Bitbucket\) | The API endpoint. Only necessary in certain cases, like with GitHub Enterprise or self-hosted GitLab. |
| `site_domain` | `location.hostname` \(or `cms.netlify.com` when on `localhost`\) | Sets the `site_id` query param sent to the API endpoint. Non-Netlify auth setups will often need to set this for local development to work properly. |
| `base_url` | `https://api.netlify.com` \(GitHub, Bitbucket\) or `https://gitlab.com` \(GitLab\) | OAuth client hostname \(just the base domain, no path\). **Required** when using an external OAuth server or self-hosted GitLab. |
| `auth_endpoint` | `auth` \(GitHub, Bitbucket\) or `oauth/authorize` \(GitLab\) | Path to append to `base_url` for authentication requests. Optional. |
| `cms_label_prefix` | `netlify-cms/` | Pull \(or Merge\) Requests label prefix when using editorial workflow. Optional. |

### Creating a New Backend <a id="creating-a-new-backend"></a>

Anyone can write a backend, but we don't yet have a finalized and documented API. If you would like to write your own backend for a service that does not have one currently, we recommend using the [GitHub backend](https://github.com/netlify/netlify-cms/tree/master/packages/netlify-cms-backend-github) as a reference for API and best practices.









## Creating Custom Widgets

The NetlifyCMS exposes a `window.CMS` a global object that you can use to register custom widgets, previews, and editor plugins. The same object is also the default export if you import Netlify CMS as an npm module. The available widget extension methods are:

* **registerWidget:** registers a custom widget.
* **registerEditorComponent:** adds a block component to the Markdown editor.

#### Writing React Components inline <a id="writing-react-components-inline"></a>

The `registerWidget` requires you to provide a React component. If you have a build process in place for your project, it is possible to integrate with this build process.

However, although possible, it may be cumbersome or even impractical to add a React build phase. For this reason, NetlifyCMS exposes two constructs globally to allow you to create components inline: ‘createClass’ and ‘h’ \(alias for React.createElement\).

### `registerWidget` <a id="registerwidget"></a>

Register a custom widget.

```text
// Using global window object
CMS.registerWidget(name, control, [preview], [schema]);

// Using npm module import
import CMS from 'netlify-cms';
CMS.registerWidget(name, control, [preview], [schema]);
```

**Params:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Param</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>name</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Widget name, allows this widget to be used via the field <code>widget</code> property
        in config</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>control</code>
      </td>
      <td style="text-align:left"><code>React.Component</code> or <code>string</code>
      </td>
      <td style="text-align:left">
        <ul>
          <li>React component that renders the control, receives the following props:
            <ul>
              <li><b>value:</b> Current field value</li>
              <li><b>field:</b> Immutable map of current field configuration</li>
              <li><b>forID:</b> Unique identifier for the field</li>
              <li><b>classNameWrapper:</b> class name to apply CMS styling to the field</li>
              <li><b>onChange:</b> Callback function to update the field value</li>
            </ul>
          </li>
          <li>Name of a registered widget whose control should be used (includes built
            in widgets).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">[<code>preview</code>]</td>
      <td style="text-align:left"><code>React.Component</code>, optional</td>
      <td style="text-align:left">
        <p>Renders the widget preview, receives the following props:</p>
        <ul>
          <li><b>value:</b> Current preview value</li>
          <li><b>field:</b> Immutable map of current field configuration</li>
          <li><b>metadata:</b> Immutable map of any available metadata for the current
            field</li>
          <li><b>getAsset:</b> Function for retrieving an asset url for image/file fields</li>
          <li><b>entry:</b> Immutable Map of all entry data</li>
          <li><b>fieldsMetaData:</b> Immutable map of metadata from all fields.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">[<code>schema</code>]</td>
      <td style="text-align:left"><code>JSON Schema object</code>, optional</td>
      <td style="text-align:left">Enforces a schema for the widget&apos;s field configuration</td>
    </tr>
  </tbody>
</table>

**Example:**

`admin/index.html`

```text
<script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
<script>
var CategoriesControl = createClass({
  handleChange: function(e) {
    const separator = this.props.field.get('separator', ', ')
    this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
  },

  render: function() {
    const separator = this.props.field.get('separator', ', ');
    var value = this.props.value;
    return h('input', {
      id: this.props.forID,
      className: this.props.classNameWrapper,
      type: 'text',
      value: value ? value.join(separator) : '',
      onChange: this.handleChange,
    });
  },
});

var CategoriesPreview = createClass({
  render: function() {
    return h('ul', {},
      this.props.value.map(function(val, index) {
        return h('li', {key: index}, val);
      })
    );
  }
});

var schema = {
  properties: {
    separator: { type: 'string' },
  },
}

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);
</script>
```

`admin/config.yml`

```text
collections:
  - name: posts
    label: Posts
    folder: content/posts
    fields:
      - name: title
        label: Title
        widget: string
      - name: categories
        label: Categories
        widget: categories
        separator: __
```

### `registerEditorComponent` <a id="registereditorcomponent"></a>

Register a block level component for the Markdown editor:

```text
CMS.registerEditorComponent(definition)
```

**Params**

* **definition:** The component definition; must specify: id, label, fields, patterns, fromBlock, toBlock, toPreview

**Example:**

```text
<script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
<script>
CMS.registerEditorComponent({
  // Internal id of the component
  id: "collapsible-note",
  // Visible label
  label: "Collapsible Note",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'summary',
      label: 'Summary',
      widget: 'string'
    },
    {
      name: 'details',
      label: 'Details',
      widget: 'markdown'
    }
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /^<details>$\s*?<summary>(.*?)<\/summary>\n\n(.*?)\n^<\/details>$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function(match) {
    return {
      summary: match[1],
      detail: match[2]
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function(data) {
    return `
<details>
  <summary>${data.summary}</summary>

  ${data.detail}

</details>
`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(data) {
    return `
<details>
  <summary>${data.summary}</summary>

  ${data.detail}

</details>
`;
  }
});
</script>
```

**Result:**

!\[youtube-widget\]\(/img/screen shot 2018-01-05 at 4.25.07 pm.png\)

### Advanced field validation <a id="advanced-field-validation"></a>

All widget fields, including those for built-in widgets, [include basic validation](https://www.netlifycms.org/docs/widgets/#common-widget-options) capability using the `required` and `pattern` options.

With custom widgets, the widget control can also optionally implement an `isValid` method to perform custom validations, in addition to presence and pattern. The `isValid` method will be automatically called, and it can return either a boolean value, an object with an error message or a promise. Examples:

**Boolean** No errors:

```text
  isValid = () => {
    // Do internal validation
    return true;
  };
```

Existing error:

```text
  isValid = () => {
    // Do internal validation
    return false;
  };
```

**Object with `error` \(useful for returning custom error messages\)** Existing error:

```text
  isValid = () => {
    // Do internal validation
    return { error: { message: 'Your error message.' } };
  };
```

**Promise** You can also return a promise from `isValid`. While the promise is pending, the widget will be marked as "in error". When the promise resolves, the error is automatically cleared.

```text
  isValid = () => {
    return this.existingPromise;
  };
```

**Note:** Do not create a promise inside `isValid` - `isValid` is called right before trying to persist. This means that even if a previous promise was already resolved, when the user hits 'save', `isValid` will be called again. If it returns a new promise, it will be immediately marked as "in error" until the new promise resolves.

### Writing custom widgets as a separate package <a id="writing-custom-widgets-as-a-separate-package"></a>

Widgets are inputs for the Netlify CMS editor interface. It's a React component that receives user input and outputs a serialized value. Those are the only rules - the component can be extremely simple, like text input, or extremely complicated, like a full-blown markdown editor. They can make calls to external services, and generally do anything that JavaScript can do.

For writing custom widgets as a separate package you should follow these steps:

1. Create a directory

   ```text
   mkdir my-custom-widget
   ```

2. Navigate to the directory

   ```text
   cd my-custom-widget
   ```

3. For setting up a new npm package run this command:

   ```text
   npm init
   ```

4. Answer the questions in the command line questionnaire.
5. In order to build React components, we need to set up a build step. We'll be using Webpack. Please run the following commands to install the required dependencies:

```text
   npm install --save-dev babel-loader@7 babel-core babel-plugin-transform-class-properties babel-plugin-transform-export-extensions babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react cross-env css-loader html-webpack-plugin netlify-cms react source-map-loader style-loader webpack webpack-cli webpack-serve
```

```text
   npm install --save prop-types
```

And you should manually add "**peerDependencies**" and "**scripts**" as shown below.

Here is the content of `package.json` that you will have at the end:

```text
{
  "name": "netlify-cms-widget-starter",
  "description": "A boilerplate for creating Netlify CMS widgets.",
  "author": "name of developer",
  "keywords": [
    "netlify",
    "netlify-cms",
    "cms",
    "widget",
    "starter",
    "boilerplate"
  ],
  "version": "0.0.1",
  "homepage": "https://github.com/netlify/netlify-cms-widget-starter",
  "license": "MIT",
  "main": "dist/main.js",
  "devDependencies": {
    "babel-loader": "^7.1.4",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-export-extensions": "^6.22.0",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "cross-env": "^5.1.4",
    "css-loader": "^0.28.11",
    "html-webpack-plugin": "^3.2.0",
    "netlify-cms": "^1.5.0",
    "react": "^16.3.2",
    "source-map-loader": "^0.2.3",
    "style-loader": "^0.20.3",
    "webpack": "^4.6.0",
    "webpack-cli": "^2.0.14",
    "webpack-serve": "^0.3.1"
  },
  "dependencies": {
    "prop-types": "^15.6.1"
  },
  "peerDependencies": {
    "react": "^16"
  },
  "scripts": {
    "start": "webpack-serve --static public --open"
  }
}
```

1. Create a Webpack configuration file with this content:

   `webpack.config.js`

   ```text
   const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')

   const developmentConfig = {
     mode: 'development',
     entry: './dev/index.js',
     output: {
       path: path.resolve(__dirname, 'public'),
     },
     optimization: { minimize: false },
     module: {
       rules: [
         {
           test: /\.js$/,
           loader: 'source-map-loader',
           enforce: 'pre',
         },
         {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
         },
         {
           test: /\.css$/,
           use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
         },
       ],
     },
     plugins: [
       new HtmlWebpackPlugin(),
     ],
     devtool: 'eval-source-map',
   }

   const productionConfig = {
     mode: 'production',
     module: {
       rules: [
         {
           test: /\.jsx?$/,
           loader: 'babel-loader',
         },
       ],
     },
     devtool: 'source-map',
   }

   module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig
   ```

2. The `.babelrc` file is our local configuration for our code in the project. You should create it under the root of the application repo. It will affect all files that Babel processes. So, create a `.babelrc` file under the main project with this content:

```text
{
  "presets": [
    "react",
    "env",
  ],
  "plugins": [
    "transform-export-extensions",
    "transform-class-properties",
    "transform-object-rest-spread",
  ],
}
```

1. Create a `src` directory with the files `Control.js`, `Preview.js` and `index.js`

`src/Control.js`

```text
 import PropTypes from 'prop-types';
 import React from 'react';

 export default class Control extends React.Component {
   static propTypes = {
     onChange: PropTypes.func.isRequired,
     forID: PropTypes.string,
     value: PropTypes.node,
     classNameWrapper: PropTypes.string.isRequired,
   }

   static defaultProps = {
     value: '',
   }

   render() {
     const {
       forID,
       value,
       onChange,
       classNameWrapper,
     } = this.props;

     return (
       <input
         type="text"
         id={forID}
         className={classNameWrapper}
         value={value || ''}
         onChange={e => onChange(e.target.value)}
       />
     );
   }
 }
```

`src/Preview.js`

```text
import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({ value }) {
  return <div>{ value }</div>;
}

Preview.propTypes = {
  value: PropTypes.node,
};
```

`src/index.js`

```text
import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.Control = Control
  window.Preview = Preview
}

export { Control, Preview }
```

1. Now you need to set up the locale example site. Under the main project, create a `dev` directory with the files `bootstrap.js` and `index.js`

`bootstrap.js`

```text
window.CMS_MANUAL_INIT = true
```

`index.js`

```text
import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { Control, Preview } from '../src'

const config = {
backend: {
 name: 'test-repo',
 login: false,
},
media_folder: 'assets',
collections: [{
 name: 'test',
 label: 'Test',
 files: [{
   file: 'test.yml',
   name: 'test',
   label: 'Test',
   fields: [
     { name: 'test_widget', label: 'Test Widget', widget: 'test'},
   ],
 }],
}],
}

CMS.registerWidget('test', Control, Preview)

init({ config })
```

#### Development <a id="development"></a>

To run a copy of Netlify CMS with your widget for development, use the start script:

```text
npm start
```

Your widget source is in the `src` directory, where there are separate files for the `Control` and `Preview` components.

#### Production & Publishing <a id="production--publishing"></a>

You'll want to take a few steps before publishing a production built package to npm:

1. Customize `package.json` with details for your specific widget, e.g. name, description, author, version, etc.

   ```text
   {
     "name": "netlify-cms-widget-starter",
     "description": "A boilerplate for creating Netlify CMS widgets.",
     "author": "name of developer",
     "keywords": [
       "netlify",
       "netlify-cms",
       "cms",
       "widget",
       "starter",
       "boilerplate"
     ],
     "version": "0.0.1",
     // ... rest
   }
   ```

2. For discoverability, ensure that your package name follows the pattern `netlify-cms-widget-<name>`.
3. Delete this `README.md`, rename `README_TEMPLATE.md` to `README.md`, and update the new file for your specific widget.
4. Rename the exports in `src/index.js`. For example, if your widget is `netlify-cms-widget-awesome`, you would do:

```text
if (typeof window !== 'undefined') {
  window.AwesomeControl = Control
  window.AwesomePreview = Preview
}

export { Control as AwesomeControl, Preview as AwesomePreview }
```

1. Optional: customize the component and file names in `src`.
2. If you haven't already, push your repo to your GitHub account so the source available to other developers.
3. Create a production build, which will be output to `dist`:

```text
npm run build
```

1. Finally, if you're sure things are tested and working, publish!

```text
npm publish
```

