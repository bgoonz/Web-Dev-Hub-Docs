# Netlify CMS



## Overview

Netlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

At its core, Netlify CMS is an open-source React app that acts as a wrapper for the Git workflow, using the GitHub, GitLab, or Bitbucket API. This provides many advantages, including:

* **Fast, web-based UI:** With rich-text editing, real-time preview, and drag-and-drop media uploads.
* **Platform agnostic:** Works with most static site generators.
* **Easy installation:** Add two files to your site and hook up the backend by including those files in your build process or linking to our Content Delivery Network \(CDN\).
* **Modern authentication:** Using GitHub, GitLab, or Bitbucket and JSON web tokens.
* **Flexible content types:** Specify an unlimited number of content types with custom fields.
* **Fully extensible:** Create custom-styled previews, UI widgets, and editor plugins.

### Netlify CMS vs. Netlify <a id="netlify-cms-vs-netlify"></a>

[Netlify.com](https://www.netlify.com/) is a platform you can use to automatically build, deploy, serve, and manage your frontend sites and web apps. It also provides a variety of other features like form processing, serverless functions, and split testing. Not all Netlify sites use Netlify CMS, and not all sites using Netlify CMS are on Netlify.

The folks at Netlify created Netlify CMS to fill a gap in the static site generation pipeline. There were some great proprietary headless CMS options, but no real contenders that were open source and extensible—that could turn into a community-built ecosystem like WordPress or Drupal. For that reason, Netlify CMS is _made_ to be community-driven, and has never been locked to the Netlify platform \(despite the name\).

With this in mind, you can:

* Use Netlify CMS without Netlify and deploy your site where you always have, hooking up your own CI, site hosting, CDN, etc.
* Use Netlify without Netlify CMS and edit your static site in your code editor.
* Or, use them together and have a fully-working CMS-enabled site with [one click](https://www.netlifycms.org/docs/start-with-a-template/)!

If you hook up Netlify CMS to your website, you're basically adding a tool for content editors to make commits to your site repository without touching code or learning Git.

#### Find out more <a id="find-out-more"></a>

* Get a feel for the UI in the [demo site](https://cms-demo.netlify.com/). \(No login required. Click the login button to go straight to the CMS editor UI.\)
* [Start with a template](https://www.netlifycms.org/docs/start-with-a-template/) to make a Netlify CMS-enabled site of your own.
* Configure your existing site by following a [tutorial](https://www.netlifycms.org/docs/add-to-your-site/) or checking [configuration options](https://www.netlifycms.org/docs/configuration-options).
* Ask questions and share ideas in the Netlify CMS [community chat](https://netlifycms.org/chat).
* Get involved in new developments and become a [contributor](https://www.netlifycms.org/docs/contributor-guide/).



## Beta Features!

We run new functionality in an open beta format from time to time. That means that this functionality is totally available for use, and we _think_ it might be ready for primetime, but it could break or change without notice.

**Use these features at your own risk.**

### Working with a Local Git Repository <a id="working-with-a-local-git-repository"></a>

_**added in**_ [_**netlify-cms@2.10.17**_](mailto:netlify-cms@2.10.17) _**/**_ [_**netlify-cms-app@2.11.14**_](mailto:netlify-cms-app@2.11.14)

You can connect Netlify CMS to a local Git repository, instead of working with a live repo.

1. Navigate to a local Git repository configured with the CMS.
2. Add the top-level property `local_backend` configuration to your `config.yml`:

```text
backend:
  name: git-gateway

# when using the default proxy server port
local_backend: true
```

1. Run `npx netlify-cms-proxy-server` from the root directory of the above repository.
   * If the default port \(8081\) is in use, the proxy server won't start and you will see an error message. In this case, follow [these steps](https://www.netlifycms.org/docs/beta-features/#configure-the-netlify-cms-proxy-server-port-number) before proceeding.
2. Start your local development server \(e.g. run `gatsby develop`\).
3. Open [http://localhost:8000/admin](http://localhost:8000/admin) to verify that your can administer your content locally.

**Note:** `netlify-cms-proxy-server` runs an unauthenticated express server. As any client can send requests to the server, it should only be used for local development.

#### Configure the Netlify CMS proxy server port number <a id="configure-the-netlify-cms-proxy-server-port-number"></a>

1. Create a `.env` file in the project's root folder and define the PORT you'd like the proxy server to use

```text
PORT=8082
```

1. Update the `local_backend` object in `config.yml` and specify a `url` property to use your custom port number

```text
backend:
  name: git-gateway

local_backend:
  # when using a custom proxy server port
  url: http://localhost:8082/api/v1
  # when accessing the local site from a host other than 'localhost' or '127.0.0.1'
  allowed_hosts: ['192.168.0.1']
```

### GitLab and BitBucket Editorial Workflow Support <a id="gitlab-and-bitbucket-editorial-workflow-support"></a>

_**added in**_ [_**netlify-cms@2.10.6**_](mailto:netlify-cms@2.10.6) _**/**_ [_**netlify-cms-app@2.11.3**_](mailto:netlify-cms-app@2.11.3)

You can enable the Editorial Workflow with the following line in your Netlify CMS `config.yml` file:

```text
publish_mode: editorial_workflow
```

In order to track unpublished entries statuses the GitLab implementation uses merge requests labels and the BitBucket implementation uses pull requests comments.

### i18n Support <a id="i18n-support"></a>

The CMS can provide a side by side interface for authoring content in multiple languages. Configuring the CMS for i18n support requires top level configuration, collection level configuration and field level configuration.

#### Top level configuration <a id="top-level-configuration"></a>

```text
i18n:
  # Required and can be one of multiple_folders, multiple_files or single_file
  # multiple_folders - persists files in `<folder>/<locale>/<slug>.<extension>`
  # multiple_files - persists files in `<folder>/<slug>.<locale>.<extension>`
  # single_file - persists a single file in `<folder>/<slug>.<extension>`
  structure: multiple_folders

  # Required - a list of locales to show in the editor UI
  locales: [en, de, fr]

  # Optional, defaults to the first item in locales.
  # The locale to be used for fields validation and as a baseline for the entry.
  default_locale: en
```

#### Collection level configuration <a id="collection-level-configuration"></a>

```text
collections:
  - name: i18n_content
    # same as the top level, but all fields are optional and defaults to the top level
    # can also be a boolean to accept the top level defaults
    i18n: true
```

When using a file collection, you must also enable i18n for each individual file:

```text
collections:
  - name: pages
    label: Pages
    # Configure i18n for this collection.
    i18n:
      structure: single_file
      locales: [en, de, fr]
    files:
      - name: about
        label: About Page
        file: site/content/about.yml
        # Enable i18n for this file.
        i18n: true
        fields:
          - { label: Title, name: title, widget: string, i18n: true }
```

#### Field level configuration <a id="field-level-configuration"></a>

```text
fields:
  - label: Title
    name: title
    widget: string
    # same as 'i18n: translate'. Allows translation of the title field
    i18n: true
  - label: Date
    name: date
    widget: datetime
    # The date field will be duplicated from the default locale.
    i18n: duplicate
  - label: Body
    name: body
    # The markdown field will be omitted from the translation.
    widget: markdown
```

Example configuration:

```text
i18n:
  structure: multiple_folders
  locales: [en, de, fr]

collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    i18n: true
    fields:
      - label: Title
        name: title
        widget: string
        i18n: true
      - label: Date
        name: date
        widget: datetime
        i18n: duplicate
      - label: Body
        name: body
        widget: markdown
```

#### Limitations <a id="limitations"></a>

1. File collections support only `structure: single_file`.
2. List widgets only support `i18n: true`. `i18n` configuration on sub fields is ignored.
3. Object widgets only support `i18n: true` and `i18n` configuration should be done per field:

```text
- label: 'Object'
  name: 'object'
  widget: 'object'
  i18n: true
  fields:
    - { label: 'String', name: 'string', widget: 'string', i18n: true }
    - { label: 'Date', name: 'date', widget: 'datetime', i18n: duplicate }
    - { label: 'Boolean', name: 'boolean', widget: 'boolean', i18n: duplicate }
    - {
        label: 'Object',
        name: 'object',
        widget: 'object',
        i18n: true,
        field: { label: 'String', name: 'string', widget: 'string', i18n: duplicate },
      }
```

### GitHub GraphQL API <a id="github-graphql-api"></a>

Experimental support for GitHub's [GraphQL API](https://developer.github.com/v4/) is now available for the GitHub backend.

**Note: not currently compatible with Git Gateway.**

For many queries, GraphQL allows data to be retrieved using less individual API requests compared to a REST API. GitHub's GraphQL API still does not support all mutations necessary to completely replace their REST API, so this feature only calls the new GraphQL API where possible.

You can use the GraphQL API for the GitHub backend by setting `backend.use_graphql` to `true` in your CMS config:

```text
backend:
  name: github
  repo: owner/repo # replace this with your repo info
  use_graphql: true
```

Learn more about the benefits of GraphQL in the [GraphQL docs](https://graphql.org/).

### Open Authoring <a id="open-authoring"></a>

When using the [GitHub backend](https://www.netlifycms.org/docs/github-backend), you can use Netlify CMS to accept contributions from GitHub users without giving them access to your repository. When they make changes in the CMS, the CMS forks your repository for them behind the scenes, and all the changes are made to the fork. When the contributor is ready to submit their changes, they can set their draft as ready for review in the CMS. This triggers a pull request to your repository, which you can merge using the GitHub UI.

At the same time, any contributors who _do_ have write access to the repository can continue to use Netlify CMS normally.

More details and setup instructions can be found on [the Open Authoring docs page](https://www.netlifycms.org/docs/open-authoring).

### Folder Collections Path <a id="folder-collections-path"></a>

By default the CMS stores folder collection content under the folder specified in the collection setting.

For example configuring `folder: posts` for a collection will save the content under `posts/post-title.md`.

You can now specify an additional `path` template \(similar to the `slug` template\) to control the content destination.

This allows saving content in subfolders, e.g. configuring `path: '{{year}}/{{slug}}'` will save the content under `posts/2019/post-title.md`.

### Folder Collections Media and Public Folder <a id="folder-collections-media-and-public-folder"></a>

By default the CMS stores media files for all collections under a global `media_folder` directory as specified in the configuration.

When using the global `media_folder` directory any entry field that points to a media file will use the absolute path to the published file as designated by the `public_folder` configuration.

For example configuring:

```text
media_folder: static/media
public_folder: /media
```

And saving an entry with an image named `image.png` will result in the image being saved under `static/media/image.png` and relevant entry fields populated with the value of `/media/image.png`.

Some static site generators \(e.g. Gatsby\) work best when using relative image paths.

This can now be achieved using a per collection `media_folder` configuration which specifies a relative media folder for the collection.

For example, the following configuration will result in media files being saved in the same directory as the entry, and the image field being populated with the relative path to the image.

```text
media_folder: static/media
public_folder: /media
collections:
  - name: posts
    label: Posts
    label_singular: 'Post'
    folder: content/posts
    path: '{{slug}}/index'
    media_folder: ''
    public_folder: ''
    fields:
      - label: Title
        name: title
        widget: string
      - label: 'Cover Image'
        name: 'image'
        widget: 'image'
```

More specifically, saving an entry with a title of `example post` with an image named `image.png` will result in a directory structure of:

```text
content
  posts
    example-post
      index.md
      image.png
```

And for the image field being populated with a value of `image.png`.

**Note: When specifying a `path` on a folder collection, `media_folder` defaults to an empty string.**

**Available template tags:**

Supports all of the [`slug` templates](https://www.netlifycms.org/docs/configuration-options#slug) and:

* `{{dirname}}` The path to the file's parent directory, relative to the collection's `folder`.
* `{{filename}}` The file name without the extension part.
* `{{extension}}` The file extension.
* `{{media_folder}}` The global `media_folder`.
* `{{public_folder}}` The global `public_folder`.

### List Widget: Variable Types <a id="list-widget-variable-types"></a>

Before this feature, the [list widget](https://www.netlifycms.org/docs/widgets/#list) allowed a set of fields to be repeated, but every list item had the same set of fields available. With variable types, multiple named sets of fields can be defined, which opens the door to highly flexible content authoring \(even page building\) in Netlify CMS.

**Note: this feature does not yet support default previews and requires** [**registering a preview template**](https://www.netlifycms.org/docs/customization#registerpreviewtemplate) **in order to show up in the preview pane.**

To use variable types in the list widget, update your field configuration as follows:

1. Instead of defining your list fields under `fields` or `field`, define them under `types`. Similar to `fields`, `types` must be an array of field definition objects.
2. Each field definition under `types` must use the `object` widget \(this is the default value for `widget`\).

#### Additional list widget options <a id="additional-list-widget-options"></a>

* `types`: a nested list of object widgets. All widgets must be of type `object`. Every object widget may define different set of fields.
* `typeKey`: the name of the field that will be added to every item in list representing the name of the object widget that item belongs to. Ignored if `types` is not defined. Default is `type`.
* `summary`: allows customization of a collapsed list item object in a similar way to a [collection summary](https://www.netlifycms.org/docs/configuration-options/?#summary)

#### Example Configuration <a id="example-configuration"></a>

The example configuration below imagines a scenario where the editor can add two "types" of content, either a "carousel" or a "spotlight". Each type has a unique name and set of fields.

```text
- label: 'Home Section'
  name: 'sections'
  widget: 'list'
  types:
    - label: 'Carousel'
      name: 'carousel'
      widget: object
      summary: '{{fields.header}}'
      fields:
        - { label: Header, name: header, widget: string, default: 'Image Gallery' }
        - { label: Template, name: template, widget: string, default: 'carousel.html' }
        - label: Images
          name: images
          widget: list
          field: { label: Image, name: image, widget: image }
    - label: 'Spotlight'
      name: 'spotlight'
      widget: object
      fields:
        - { label: Header, name: header, widget: string, default: 'Spotlight' }
        - { label: Template, name: template, widget: string, default: 'spotlight.html' }
        - { label: Text, name: text, widget: text, default: 'Hello World' }
```

#### Example Output <a id="example-output"></a>

The output for the list widget will be an array of objects, and each object will have a `type` key with the name of the type used for the list item. The `type` key name can be customized via the `typeKey` property in the list configuration.

If the above example configuration were used to create a carousel, a spotlight, and another carousel, the output could look like this:

```text
title: Home
sections:
  - type: carousel
    header: Image Gallery
    template: carousel.html
    images:
      - images/image01.png
      - images/image02.png
      - images/image03.png
  - type: spotlight
    header: Spotlight
    template: spotlight.html
    text: Hello World
  - type: carousel
    header: Image Gallery
    template: carousel.html
    images:
      - images/image04.png
      - images/image05.png
      - images/image06.png
```

### Custom Mount Element <a id="custom-mount-element"></a>

Netlify CMS always creates its own DOM element for mounting the application, which means it always takes over the entire page, and is generally inflexible if you're trying to do something creative, like injecting it into a shared context.

You can now provide your own element for Netlify CMS to mount in by setting the target element's ID as `nc-root`. If Netlify CMS finds an element with this ID during initialization, it will mount within that element instead of creating its own.

### Manual Initialization <a id="manual-initialization"></a>

Netlify CMS can now be manually initialized, rather than automatically loading up the moment you import it. The whole point of this at the moment is to inject configuration into Netlify CMS before it loads, bypassing need for an actual Netlify CMS `config.yml`. This is important, for example, when creating tight integrations with static site generators.

Assuming you have the netlify-cms package installed to your project, manual initialization works by setting `window.CMS_MANUAL_INIT = true` **before importing the CMS**:

```text
// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true
// Usage with import from npm package
import CMS, { init } from 'netlify-cms'
// Usage with script tag
const { CMS, initCMS: init } = window
/**
 * Initialize without passing in config - equivalent to just importing
 * Netlify CMS the old way.
 */
init()
/**
 * Optionally pass in a config object. This object will be merged into
 * `config.yml` if it exists, and any portion that conflicts with
 * `config.yml` will be overwritten. Arrays will be replaced during merge,
 * not concatenated.
 *
 * For example, the code below contains an incomplete config, but using it,
 * your `config.yml` can be missing its backend property, allowing you
 * to set this property at runtime.
 */
init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
})
/**
 * Optionally pass in a complete config object and set a flag
 *  (`load_config_file: false`) to ignore the `config.yml`.
 *
 * For example, the code below contains a complete config. The
 * `config.yml` will be ignored when setting `load_config_file` to false.
 * It is not required if the `config.yml` file is missing to set
 * `load_config_file`, but will improve performance and avoid a load error.
 */
init({
  config: {
    backend: {
      name: 'git-gateway',
    },
    load_config_file: false,
    media_folder: "static/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      { label: "Blog", name: "blog", folder: "_posts/blog", create: true, fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Featured Image", name: "thumbnail", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
      ]},
    ],
  },
})
// The registry works as expected, and can be used before or after init.
CMS.registerPreviewTemplate(...);
```

### Raw CSS in `registerPreviewStyle` <a id="raw-css-in-registerpreviewstyle"></a>

`registerPreviewStyle` can now accept a CSS string, in addition to accepting a url. The feature is activated by passing in an object as the second argument, with `raw` set to a truthy value. This is critical for integrating with modern build tooling. Here's an example using webpack:

```text
/**
 * Assumes a webpack project with `sass-loader` and `css-loader` installed.
 * Takes advantage of the `toString` method in the return value of `css-loader`.
 */
import CMS from 'netlify-cms';
import styles from '!css-loader!sass-loader!../main.scss';
CMS.registerPreviewStyle(styles.toString(), { raw: true });
```

### Squash merge GitHub pull requests <a id="squash-merge-github-pull-requests"></a>

When using the [Editorial Workflow](https://www.netlifycms.org/docs/configuration-options/#publish-mode) with the `github` or GitHub-connected `git-gateway` backends, Netlify CMS creates a pull request for each unpublished entry. Every time the unpublished entry is changed and saved, a new commit is added to the pull request. When the entry is published, the pull request is merged, and all of those commits are added to your project commit history in a merge commit.

The squash merge option causes all commits to be "squashed" into a single commit when the pull request is merged, and the resulting commit is rebased onto the target branch, avoiding the merge commit altogether.

To enable this feature, you can set the following option in your Netlify CMS `config.yml`:

```text
backend:
  squash_merges: true
```

### Commit Message Templates <a id="commit-message-templates"></a>

You can customize the templates used by Netlify CMS to generate commit messages by setting the `commit_messages` option under `backend` in your Netlify CMS `config.yml`.

Template tags wrapped in curly braces will be expanded to include information about the file changed by the commit. For example, `{{path}}` will include the full path to the file changed.

Setting up your Netlify CMS `config.yml` to recreate the default values would look like this:

```text
backend:
  commit_messages:
    create: Create {{collection}} “{{slug}}”
    update: Update {{collection}} “{{slug}}”
    delete: Delete {{collection}} “{{slug}}”
    uploadMedia: Upload “{{path}}”
    deleteMedia: Delete “{{path}}”
    openAuthoring: '{{message}}'
```

Netlify CMS generates the following commit types:

| Commit type | When is it triggered? | Available template tags |
| :--- | :--- | :--- |
| `create` | A new entry is created | `slug`, `path`, `collection`, `author-login`, `author-name` |
| `update` | An existing entry is changed | `slug`, `path`, `collection`, `author-login`, `author-name` |
| `delete` | An existing entry is deleted | `slug`, `path`, `collection`, `author-login`, `author-name` |
| `uploadMedia` | A media file is uploaded | `path`, `author-login`, `author-name` |
| `deleteMedia` | A media file is deleted | `path`, `author-login`, `author-name` |
| `openAuthoring` | A commit is made via a forked repository | `message`, `author-login`, `author-name` |

Template tags produce the following output:

* `{{slug}}`: the url-safe filename of the entry changed
* `{{collection}}`: the name of the collection containing the entry changed
* `{{path}}`: the full path to the file changed
* `{{message}}`: the relevant message based on the current change \(e.g. the `create` message when an entry is created\)
* `{{author-login}}`: the login/username of the author
* `{{author-name}}`: the full name of the author \(might be empty based on the user's profile\)

### Image widget file size limit <a id="image-widget-file-size-limit"></a>

You can set a limit to as what the maximum file size of a file is that users can upload directly into a image field.

Example config:

```text
- label: 'Featured Image'
  name: 'thumbnail'
  widget: 'image'
  default: '/uploads/chocolate-dogecoin.jpg'
  media_library:
    config:
      max_file_size: 512000 # in bytes, only for default media library
```

### Summary string template transformations <a id="summary-string-template-transformations"></a>

You can apply transformations on fields in a summary string template using filter notation syntax.

Example config:

```text
collections:
  - name: 'posts'
    label: 'Posts'
    folder: '_posts'
    summary: "{{title | upper}} - {{date | date('YYYY-MM-DD')}}"
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
```

The above config will transform the title field to uppercase and format the date field using `YYYY-MM-DD` format. Available transformations are `upper`, `lower` and `date('<format>')`

### Registering to CMS Events <a id="registering-to-cms-events"></a>

You can execute a function when a specific CMS event occurs.

Example usage:

```text
CMS.registerEventListener({
  name: 'prePublish',
  handler: ({ author, entry }) => console.log(JSON.stringify({ author, data: entry.get('data') })),
});
```

Supported events are `prePublish`, `postPublish`, `preUnpublish`, `postUnpublish`, `preSave` and `postSave`. The `preSave` hook can be used to modify the entry data like so:

```text
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    return entry.get('data').set('title', 'new title');
  },
});
```

### Dynamic Default Values <a id="dynamic-default-values"></a>

When linking to `/admin/#/collections/posts/new` you can pass URL parameters to pre-populate an entry.

For example given the configuration:

```text
collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    fields:
      - label: Title
        name: title
        widget: string
      - label: Object
        name: object
        widget: object
        fields:
          - label: Title
            name: title
            widget: string
      - label: body
        name: body
        widget: markdown
```

clicking the following link: `/#/collections/posts/new?title=first&object.title=second&body=%23%20content`

will open the editor for a new post with the `title` field populated with `first`, the nested `object.title` field with `second` and the markdown `body` field with `# content`.

**Note:** URL Encoding might be required for certain values \(e.g. in the previous example the value for `body` is URL encoded\).

### Nested Collections <a id="nested-collections"></a>

Allows a folder collection to show a nested structure of entries and edit the locations of the entries.

Example configuration:

```text
collections:
  - name: pages
    label: Pages
    label_singular: 'Page'
    folder: content/pages
    create: true
    # adding a nested object will show the collection folder structure
    nested:
      depth: 100 # max depth to show in the collection tree
      summary: '{{title}}' # optional summary for a tree node, defaults to the inferred title field
    fields:
      - label: Title
        name: title
        widget: string
      - label: Body
        name: body
        widget: markdown
    # adding a meta object with a path property allows editing the path of entries
    # moving an existing entry will move the entire sub tree of the entry to the new location
    meta: { path: { widget: string, label: 'Path', index_file: 'index' } }
```

Nested collections expect the following directory structure:

```text
content
└── pages
    ├── authors
    │   ├── author-1
    │   │   └── index.md
    │   └── index.md
    ├── index.md
    └── posts
        ├── hello-world
        │   └── index.md
        └── index.md
```

### Remark plugins <a id="remark-plugins"></a>

You can register plugins to customize [`remark`](https://github.com/remarkjs/remark), the library used by the richtext editor for serializing and deserializing markdown.

```text
// register a plugin
CMS.registerRemarkPlugin(plugin);

// provide global settings to all plugins, e.g. for customizing `remark-stringify`
CMS.registerRemarkPlugin({ settings: { bullet: '-' } });
```

Note that `netlify-widget-markdown` currently uses `remark@10`, so you should check a plugin's compatibility first.





## Add to Your Site

You can adapt Netlify CMS to a wide variety of projects. It works with any content written in markdown, JSON, YAML, or TOML files, stored in a repo on [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), or [Bitbucket](https://bitbucket.org/). You can also create your own custom backend.

This tutorial guides you through the steps for adding Netlify CMS to a site that's built with a common [static site generator](https://www.staticgen.com/), like Jekyll, Hugo, Hexo, or Gatsby. Alternatively, you can [start from a template](https://www.netlifycms.org/docs/start-with-a-template) or dive right into [configuration options](https://www.netlifycms.org/docs/configuration-options).

### App File Structure <a id="app-file-structure"></a>

A static `admin` folder contains all Netlify CMS files, stored at the root of your published site. Where you store this folder in the source files depends on your static site generator. Here's the static file location for a few of the most popular static site generators:

| These generators | store static files in |
| :--- | :--- |
| Jekyll, GitBook | `/` \(project root\) |
| Hugo, Gatsby, Nuxt, Gridsome, Zola, Sapper | `/static` |
| Next | `/public` |
| Hexo, Middleman, Jigsaw | `/source` |
| Spike | `/views` |
| Wyam | `/input` |
| Pelican | `/content` |
| VuePress | `/.vuepress/public` |
| Elmstatic | `/_site` |
| 11ty | `/_site` |
| preact-cli | `/src/static` |

If your generator isn't listed here, you can check its documentation, or as a shortcut, look in your project for a `css` or `images` folder. The contents of folders like that are usually processed as static files, so it's likely you can store your `admin` folder next to those. \(When you've found the location, feel free to add it to these docs by [filing a pull request](https://github.com/netlify/netlify-cms/blob/master/CONTRIBUTING.md#pull-requests)!\)

Inside the `admin` folder, you'll create two files:

```text
admin
 ├ index.html
 └ config.yml
```

The first file, `admin/index.html`, is the entry point for the Netlify CMS admin interface. This means that users navigate to `yoursite.com/admin/` to access it. On the code side, it's a basic HTML starter page that loads the Netlify CMS JavaScript file. The second file, `admin/config.yml`, is the heart of your Netlify CMS installation, and a bit more complex. The [Configuration](https://www.netlifycms.org/docs/add-to-your-site/#configuration) section covers the details.

In this example, we pull the `admin/index.html` file from a public CDN.

```text
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

In the code above the `script` is loaded from the `unpkg` CDN. Should there be any issue, `jsDelivr` can be used as an alternative source. Simply set the `src` to `https://cdn.jsdelivr.net/npm/netlify-cms@^2.0.0/dist/netlify-cms.js`

#### Installing with npm <a id="installing-with-npm"></a>

You can also use Netlify CMS as an npm module. Wherever you import Netlify CMS, it automatically runs, taking over the current page. Make sure the script that imports it only runs on your CMS page. First install the package and save it to your project:

```text
npm install netlify-cms-app --save
```

Then import it \(assuming your project has tooling for imports\):

```text
import CMS from 'netlify-cms-app'
// Initialize the CMS object
CMS.init()
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate)
```

### Configuration <a id="configuration"></a>

Configuration is different for every site, so we'll break it down into parts. Add all the code snippets in this section to your `admin/config.yml` file.

#### Backend <a id="backend"></a>

We're using [Netlify](https://www.netlify.com/) for our hosting and authentication in this tutorial, so backend configuration is fairly straightforward.

For GitHub and GitLab repositories, you can start your Netlify CMS `config.yml` file with these lines:

```text
backend:
  name: git-gateway
  branch: master # Branch to update (optional; defaults to master)
```

_\(For Bitbucket repositories, use the_ [_Bitbucket backend_](https://www.netlifycms.org/docs/bitbucket-backend) _instructions instead.\)_

The configuration above specifies your backend protocol and your publication branch. Git Gateway is an open source API that acts as a proxy between authenticated users of your site and your site repo. \(We'll get to the details of that in the [Authentication section](https://www.netlifycms.org/docs/add-to-your-site/#authentication) below.\) If you leave out the `branch` declaration, it defaults to `master`.

#### Editorial Workflow <a id="editorial-workflow"></a>

**Note:** Editorial workflow works with GitHub repositories, and support for GitLab and Bitbucket is [in beta](https://www.netlifycms.org/docs/beta-features/#gitlab-and-bitbucket-editorial-workflow-support).

By default, saving a post in the CMS interface pushes a commit directly to the publication branch specified in `backend`. However, you also have the option to enable the [Editorial Workflow](https://www.netlifycms.org/docs/configuration-options/#publish-mode), which adds an interface for drafting, reviewing, and approving posts. To do this, add the following line to your Netlify CMS `config.yml`:

```text
# This line should *not* be indented
publish_mode: editorial_workflow
```

#### Media and Public Folders <a id="media-and-public-folders"></a>

Netlify CMS allows users to upload images directly within the editor. For this to work, the CMS needs to know where to save them. If you already have an `images` folder in your project, you could use its path, possibly creating an `uploads` sub-folder, for example:

```text
# This line should *not* be indented
media_folder: "images/uploads" # Media files will be stored in the repo under images/uploads
```

If you're creating a new folder for uploaded media, you'll need to know where your static site generator expects static files. You can refer to the paths outlined above in [App File Structure](https://www.netlifycms.org/docs/add-to-your-site/#app-file-structure), and put your media folder in the same location where you put the `admin` folder.

Note that the`media_folder` file path is relative to the project root, so the example above would work for Jekyll, GitBook, or any other generator that stores static files at the project root. However, it would not work for Hugo, Hexo, Middleman or others that store static files in a subfolder. Here's an example that could work for a Hugo site:

```text
# These lines should *not* be indented
media_folder: "static/images/uploads" # Media files will be stored in the repo under static/images/uploads
public_folder: "/images/uploads" # The src attribute for uploaded media will begin with /images/uploads
```

The configuration above adds a new setting, `public_folder`. While `media_folder` specifies where uploaded files are saved in the repo, `public_folder` indicates where they are found in the published site. Image `src` attributes use this path, which is relative to the file where it's called. For this reason, we usually start the path at the site root, using the opening `/`.

_If `public_folder` is not set, Netlify CMS defaults to the same value as `media_folder`, adding an opening `/` if one is not included._

#### Collections <a id="collections"></a>

Collections define the structure for the different content types on your static site. Since every site is different, the `collections` settings differ greatly from one site to the next.

Let's say your site has a blog, with the posts stored in `_posts/blog`, and files saved in a date-title format, like `1999-12-31-lets-party.md`. Each post begins with settings in yaml-formatted front matter, like so:

```text
---
layout: blog
title: "Let's Party"
date: 1999-12-31 11:59:59 -0800
thumbnail: "/images/prince.jpg"
rating: 5
---

This is the post body, where I write about our last chance to party before the Y2K bug destroys us all.
```

Given this example, our `collections` settings would look like this in your NetlifyCMS `config.yml` file:

```text
collections:
  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog" # Used in the UI
    folder: "_posts/blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Rating (scale of 1-5)", name: "rating", widget: "number"}
      - {label: "Body", name: "body", widget: "markdown"}
```

Let's break that down:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><code>name</code>
      </th>
      <th style="text-align:left">Post type identifier, used in routes. Must be unique.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>label</code>
      </td>
      <td style="text-align:left">What the admin UI calls the post type.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>folder</code>
      </td>
      <td style="text-align:left">Where files of this type are stored, relative to the repo root.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>create</code>
      </td>
      <td style="text-align:left">Set to <code>true</code> to allow users to create new files in this collection.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>slug</code>
      </td>
      <td style="text-align:left">Template for filenames. <code>{{year}}</code>, <code>{{month}}</code>, and <code>{{day}}</code> pulls
        from the post&apos;s <code>date</code> field or save date. <code>{{slug}}</code> is
        a url-safe version of the post&apos;s <code>title</code>. Default is simply <code>{{slug}}</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>fields</code>
      </td>
      <td style="text-align:left">
        <p>Fields listed here are shown as fields in the content editor, then saved
          as front matter at the beginning of the document (except for <code>body</code>,
          which follows the front matter). Each field contains the following properties:</p>
        <ul>
          <li><code>label</code>: Field label in the editor UI.</li>
          <li><code>name</code>: Field name in the document front matter.</li>
          <li><code>widget</code>: Determines UI style and value data type (details
            below).</li>
          <li><code>default</code> (optional): Sets a default value for the field.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

As described above, the `widget` property specifies a built-in or custom UI widget for a given field. When a content editor enters a value into a widget, that value is saved in the document front matter as the value for the `name` specified for that field. A full listing of available widgets can be found in the [Widgets doc](https://www.netlifycms.org/docs/widgets).

Based on this example, you can go through the post types in your site and add the appropriate settings to your Netlify CMS `config.yml` file. Each post type should be listed as a separate node under the `collections` field. See the [Collections reference doc](https://www.netlifycms.org/docs/configuration-options/#collections) for more configuration options.

#### Filter <a id="filter"></a>

The entries for any collection can be filtered based on the value of a single field. The example collection below only shows post entries with the value `en` in the `language` field.

```text
collections:
  - name: "posts"
    label: "Post"
    folder: "_posts"
    filter:
      field: language
      value: en
    fields:
      - {label: "Language", name: "language"}
```

### Authentication <a id="authentication"></a>

Now that you have your Netlify CMS files in place and configured, all that's left is to enable authentication. We're using the [Netlify](https://www.netlify.com/) platform here because it's one of the quickest ways to get started, but you can learn about other authentication options in the [Backends](https://www.netlifycms.org/docs/backends-overview) doc.

#### Setup on Netlify <a id="setup-on-netlify"></a>

Netlify offers a built-in authentication service called Identity. In order to use it, connect your site repo with Netlify. Netlify has published a general [Step-by-Step Guide](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/) for this, along with detailed guides for many popular static site generators, including [Jekyll](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/), [Hugo](https://www.netlify.com/blog/2016/09/21/a-step-by-step-guide-victor-hugo-on-netlify/), [Hexo](https://www.netlify.com/blog/2015/10/26/a-step-by-step-guide-hexo-on-netlify/), [Middleman](https://www.netlify.com/blog/2015/10/01/a-step-by-step-guide-middleman-on-netlify/), [Gatsby](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/), and more.

#### Enable Identity and Git Gateway <a id="enable-identity-and-git-gateway"></a>

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

1. Go to **Settings &gt; Identity**, and select **Enable Identity service**.
2. Under **Registration preferences**, select **Open** or **Invite only**. In most cases, you want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
3. If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under **External providers**.
4. Scroll down to **Services &gt; Git Gateway**, and click **Enable Git Gateway**. This authenticates with your Git host and generates an API access token. In this case, we're leaving the **Roles** field blank, which means any logged in user may access the CMS. For information on changing this, check the [Netlify Identity documentation](https://www.netlify.com/docs/identity/).

#### Add the Netlify Identity Widget <a id="add-the-netlify-identity-widget"></a>

With the backend set to handle authentication, now you need a frontend interface to connect to it. The open source Netlify Identity Widget is a drop-in widget made for just this purpose. To include the widget in your site, add the following script tag in two places:

```text
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

Add this to the `<head>` of your CMS index page at `/admin/index.html`, as well as the `<head>` of your site's main index page. Depending on how your site generator is set up, this may mean you need to add it to the default template, or to a "partial" or "include" template. If you can find where the site stylesheet is linked, that's probably the right place. Alternatively, you can include the script in your site using Netlify's [Script Injection](https://www.netlify.com/docs/inject-analytics-snippets/) feature.

When a user logs in with the Netlify Identity widget, an access token directs to the site homepage. In order to complete the login and get back to the CMS, redirect the user back to the `/admin/` path. To do this, add the following script before the closing `body` tag of your site's main index page:

```text
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

Note: This example script requires modern JavaScript and does not work on IE11. For legacy browser support, use function expressions \(`function () {}`\) in place of the arrow functions \(`() => {}`\), or use a transpiler such as [Babel](https://babeljs.io/).

### Accessing the CMS <a id="accessing-the-cms"></a>

Your site CMS is now fully configured and ready for login!

If you set your registration preference to "Invite only," invite yourself \(and anyone else you choose\) as a site user. To do this, select the **Identity** tab from your site dashboard, and then select the **Invite users** button. Invited users receive an email invitation with a confirmation link. Clicking the link will take you to your site with a login prompt.

If you left your site registration open, or for return visits after confirming an email invitation, access your site's CMS at `yoursite.com/admin/`.

**Note:** No matter where you access Netlify CMS — whether running locally, in a staging environment, or in your published site — it always fetches and commits files in your hosted repository \(for example, on GitHub\), on the branch you configured in your Netlify CMS config.yml file. This means that content fetched in the admin UI matches the content in the repository, which may be different from your locally running site. It also means that content saved using the admin UI saves directly to the hosted repository, even if you're running the UI locally or in staging.

