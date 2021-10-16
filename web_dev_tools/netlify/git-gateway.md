# Git Gateway

## Git Gateway

[Git Gateway](https://github.com/netlify/git-gateway) is a Netlify open source project that allows you to add editors to your site CMS without giving them direct write access to your GitHub or GitLab repository. \(For Bitbucket repositories, use the [Bitbucket backend](https://www.netlifycms.org/docs/bitbucket-backend/) instead.\)

### Git Gateway with Netlify <a id="git-gateway-with-netlify"></a>

The [Netlify Identity](https://www.netlify.com/docs/identity/) service can handle the authentication and provides a simple interface for user management. The Netlify CMS [featured templates](https://www.netlifycms.org/docs/start-with-a-template) are working examples of this backend.

To use it in your own project stored on GitHub or GitLab, follow these steps:

1. Head over to the [Netlify Identity docs](https://www.netlify.com/docs/identity) and follow the steps to get started.
2. Add the following lines to your Netlify CMS `config.yml` file:

```text
backend:
  name: git-gateway
```

### Reconnect after Changing Repository Permissions <a id="reconnect-after-changing-repository-permissions"></a>

If you change ownership on your repository, or convert a repository from public to private, you may need to reconnect Git Gateway with proper permissions. Find further instructions in the [Netlify Git Gateway docs](https://www.netlify.com/docs/git-gateway/#reconnect-after-changing-repository-permissions).

### Git Gateway without Netlify <a id="git-gateway-without-netlify"></a>

You can use [Git Gateway](https://github.com/netlify/git-gateway) without Netlify by setting up your own Git Gateway server and connecting it with your own instance of [GoTrue](https://www.gotrueapi.org/) \(the open source microservice that powers Netlify Identity\), or with any other identity service that can issue JSON Web Tokens \(JWT\).

To configure in Netlify CMS, use the same `backend` settings in your Netlify CMS `config.yml` file as described in Step 2 of the [Git Gateway with Netlify Identity](https://www.netlifycms.org/docs/git-gateway-backend/#git-gateway-with-netlify-identity) instructions above.

## GitHub

For repositories stored on GitHub, the `github` backend allows CMS users to log in directly with their GitHub account. Note that all users must have push access to your content repository for this to work.

Because Github [requires a server](https://github.com/netlify/netlify-cms/issues/663#issuecomment-335023723) for authentication, Netlify facilitates basic GitHub authentication.

To enable basic GitHub authentication:

1. Follow the authentication provider setup steps in the [Netlify docs](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider).
2. Add the following lines to your Netlify CMS `config.yml` file:

```text
backend:
  name: github
  repo: owner-name/repo-name # Path to your GitHub repository
  # optional, defaults to master
  # branch: main
```

### Specifying a status for deploy previews <a id="specifying-a-status-for-deploy-previews"></a>

The GitHub backend supports [deploy preview links](https://www.netlifycms.org/docs/deploy-preview-links). Netlify CMS checks the `context` of a commit's [statuses](https://help.github.com/articles/about-status-checks/) and infers one that seems to represent a deploy preview. If you need to customize this behavior, you can specify which context to look for using `preview_context`:

```text
backend:
  name: github
  repo: my/repo
  preview_context: my-provider/deployment
```

The above configuration would look for the status who's `"context"` is `"my-provider/deployment"`.

## Configuration Options

### Configuration File <a id="configuration-file"></a>

All configuration options for Netlify CMS are specified in a `config.yml` file, in the folder where you access the editor UI \(usually in the `/admin` folder\).

Alternatively, you can specify a custom config file using a link tag:

```text
<!-- Note the "type" and "rel" attribute values, which are required. -->
<link href="path/to/config.yml" type="text/yaml" rel="cms-config-url">
```

To see working configuration examples, you can [start from a template](https://www.netlifycms.org/docs/start-with-a-template) or check out the [CMS demo site](https://cms-demo.netlify.com/). \(No login required: click the login button and the CMS will open.\) You can refer to the demo [configuration code](https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml) to see how each option was configured.

You can find details about all configuration options below. Note that [YAML syntax](https://en.wikipedia.org/wiki/YAML#Basic_components) allows lists and objects to be written in block or inline style, and the code samples below include a mix of both.

### Backend <a id="backend"></a>

_This setting is required._

The `backend` option specifies how to access the content for your site, including authentication. Full details and code samples can be found in [Backends](https://www.netlifycms.org/docs/backends-overview).

**Note**: no matter where you access Netlify CMS — whether running locally, in a staging environment, or in your published site — it will always fetch and commit files in your hosted repository \(for example, on GitHub\), on the branch you configured in your Netlify CMS config.yml file. This means that content fetched in the admin UI will match the content in the repository, which may be different from your locally running site. It also means that content saved using the admin UI will save directly to the hosted repository, even if you're running the UI locally or in staging.

### Publish Mode <a id="publish-mode"></a>

By default, all entries created or edited in the Netlify CMS are committed directly into the main repository branch.

The `publish_mode` option allows you to enable "Editorial Workflow" mode for more control over the content publishing phases. All unpublished entries will be arranged in a board according to their status, and they can be further reviewed and edited before going live.

**Note:** Editorial workflow works with GitHub repositories, and support for GitLab and Bitbucket is [in beta](https://www.netlifycms.org/docs/beta-features/#gitlab-and-bitbucket-editorial-workflow-support).

You can enable the Editorial Workflow with the following line in your Netlify CMS `config.yml` file:

```text
# /admin/config.yml
publish_mode: editorial_workflow
```

From a technical perspective, the workflow translates editor UI actions into common Git commands:

| Actions in Netlify UI     | Perform these Git actions                                                                                           |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Save draft                | Commits to a new branch \(named according to the pattern `cms/collectionName/entrySlug`\), and opens a pull request |
| Edit draft                | Pushes another commit to the draft branch/pull request                                                              |
| Approve and publish draft | Merges pull request and deletes branch                                                                              |

### Media and Public Folders <a id="media-and-public-folders"></a>

Netlify CMS users can upload files to your repository using the Media Gallery. The following settings specify where these files are saved, and where they can be accessed on your built site.

#### Media Folder <a id="media-folder"></a>

_This setting is required._

The `media_folder` option specifies the folder path where uploaded files should be saved, relative to the base of the repo.

```text
media_folder: "static/images/uploads"
```

#### Public Folder <a id="public-folder"></a>

The `public_folder` option specifies the folder path where the files uploaded by the media library will be accessed, relative to the base of the built site. For fields controlled by \[file\] or \[image\] widgets, the value of the field is generated by prepending this path to the filename of the selected file. Defaults to the value of `media_folder`, with an opening `/` if one is not already included.

```text
public_folder: "/images/uploads"
```

Based on the settings above, if a user used an image widget field called `avatar` to upload and select an image called `philosoraptor.png`, the image would be saved to the repository at `/static/images/uploads/philosoraptor.png`, and the `avatar` field for the file would be set to `/images/uploads/philosoraptor.png`.

This setting can be set to an absolute URL e.g. `https://netlify.com/media` should you wish, however in general this is not advisable as content should have relative paths to other content.

### Media Library <a id="media-library"></a>

Media library integrations are configured via the `media_library` property, and its value should be an object with at least a `name` property. A `config` property can also be used for options that should be passed to the library in use.

**Example:**

```text
media_library:
  name: uploadcare
  config:
    publicKey: demopublickey
```

### Site URL <a id="site-url"></a>

The `site_url` setting should provide a URL to your published site. May be used by the CMS for various functionality. Used together with a collection's `preview_path` to create links to live content.

**Example:**

```text
site_url: https://your-site.com
```

### Display URL <a id="display-url"></a>

When the `display_url` setting is specified, the CMS UI will include a link in the fixed area at the top of the page, allowing content authors to easily return to your main site. The text of the link consists of the URL without the protocol portion \(e.g., `your-site.com`\).

Defaults to `site_url`.

**Example:**

```text
display_url: https://your-site.com
```

### Custom Logo <a id="custom-logo"></a>

When the `logo_url` setting is specified, the CMS UI will change the logo displayed at the top of the login page, allowing you to brand the CMS with your own logo. `logo_url` is assumed to be a URL to an image file.

**Example:**

```text
logo_url: https://your-site.com/images/logo.svg
```

### Locale <a id="locale"></a>

The CMS locale.

Defaults to `en`.

Other languages than English must be registered manually.

**Example**

In your `config.yml`:

```text
locale: 'de'
```

And in your custom JavaScript code:

```text
import CMS from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';

CMS.registerLocale('de', de);
```

When a translation for the selected locale is missing the English one will be used.

> When importing `netlify-cms` all locales are registered by default \(so you only need to update your `config.yml`\).

### Show Preview Links <a id="show-preview-links"></a>

[Deploy preview links](https://www.netlifycms.org/docs/deploy-preview-links) can be disabled by setting `show_preview_links` to `false`.

**Example:**

```text
show_preview_links: false
```

### Search <a id="search"></a>

The search functionally requires loading all collection\(s\) entries, which can exhaust rate limits on large repositories. It can be disabled by setting the top level `search` property to `false`.

Defaults to `true`

**Example:**

```text
search: false
```

### Slug Type <a id="slug-type"></a>

The `slug` option allows you to change how filenames for entries are created and sanitized. It also applies to filenames of media inserted via the default media library.  
For modifying the actual data in a slug, see the per-collection option below.

`slug` accepts multiple options:

- `encoding`
  - `unicode` \(default\): Sanitize filenames \(slugs\) according to [RFC3987](https://tools.ietf.org/html/rfc3987) and the [WHATWG URL spec](https://url.spec.whatwg.org/). This spec allows non-ASCII \(or non-Latin\) characters to exist in URLs.
  - `ascii`: Sanitize filenames \(slugs\) according to [RFC3986](https://tools.ietf.org/html/rfc3986). The only allowed characters are \(0-9, a-z, A-Z, `_`, `-`, `~`\).
- `clean_accents`: Set to `true` to remove diacritics from slug characters before sanitizing. This is often helpful when using `ascii` encoding.
- `sanitize_replacement`: The replacement string used to substitute unsafe characters, defaults to `-`.

**Example**

```text
slug:
  encoding: "ascii"
  clean_accents: true
  sanitize_replacement: "_"
```

### Collections <a id="collections"></a>

_This setting is required._

The `collections` setting is the heart of your Netlify CMS configuration, as it determines how content types and editor fields in the UI generate files and content in your repository. Each collection you configure displays in the left sidebar of the Content page of the editor UI, in the order they are entered into your Netlify CMS `config.yml` file.

`collections` accepts a list of collection objects, each with the following options:

- `name` \(required\): unique identifier for the collection, used as the key when referenced in other contexts \(like the [relation widget](https://www.netlifycms.org/docs/widgets/#relation)\)
- `identifier_field`: see detailed description below
- `label`: label for the collection in the editor UI; defaults to the value of `name`
- `label_singular`: singular label for certain elements in the editor; defaults to the value of `label`
- `description`: optional text, displayed below the label when viewing a collection
- `files` or `folder` \(requires one of these\): specifies the collection type and location; details in [Collection Types](https://www.netlifycms.org/docs/collection-types)
- `filter`: optional filter for `folder` collections; details in [Collection Types](https://www.netlifycms.org/docs/collection-types)
- `create`: for `folder` collections only; `true` allows users to create new items in the collection; defaults to `false`
- `publish`: for `publish_mode: editorial_workflow` only; `false` hides UI publishing controls for a collection; defaults to `true`
- `hide`: `true` hides a collection in the CMS UI; defaults to `false`. Useful when using the relation widget to hide referenced collections.
- `delete`: `false` prevents users from deleting items in a collection; defaults to `true`
- `extension`: see detailed description below
- `format`: see detailed description below
- `frontmatter_delimiter`: see detailed description under `format`
- `slug`: see detailed description below
- `preview_path`: see detailed description below
- `preview_path_date_field`: see detailed description below
- `fields` \(required\): see detailed description below
- `editor`: see detailed description below
- `summary`: see detailed description below
- `sortable_fields`: see detailed description below
- `view_filters`: see detailed description below
- `view_groups`: see detailed description below

The last few options require more detailed information.

#### `identifier_field` <a id="identifier_field"></a>

Netlify CMS expects every entry to provide a field named `"title"` that serves as an identifier for the entry. The identifier field serves as an entry's title when viewing a list of entries, and is used in [slug](https://www.netlifycms.org/docs/configuration-options/#slug) creation. If you would like to use a field other than `"title"` as the identifier, you can set `identifier_field` to the name of the other field.

**Example**

```text
collections:
  - name: posts
    identifier_field: name
```

#### `extension` and `format` <a id="extension-and-format"></a>

These settings determine how collection files are parsed and saved. Both are optional—Netlify CMS will attempt to infer your settings based on existing items in the collection. If your collection is empty, or you'd like more control, you can set these fields explicitly.

`extension` determines the file extension searched for when finding existing entries in a folder collection and it determines the file extension used to save new collection items. It accepts the following values: `yml`, `yaml`, `toml`, `json`, `md`, `markdown`, `html`.

You may also specify a custom `extension` not included in the list above, as long as the collection files can be parsed and saved in one of the supported formats below.

`format` determines how collection files are parsed and saved. It will be inferred if the `extension` field or existing collection file extensions match one of the supported extensions above. It accepts the following values:

- `yml` or `yaml`: parses and saves files as YAML-formatted data files; saves with `yml` extension by default
- `toml`: parses and saves files as TOML-formatted data files; saves with `toml` extension by default
- `json`: parses and saves files as JSON-formatted data files; saves with `json` extension by default
- `frontmatter`: parses files and saves files with data frontmatter followed by an unparsed body text \(edited using a `body` field\); saves with `md` extension by default; default for collections that can't be inferred. Collections with `frontmatter` format \(either inferred or explicitly set\) can parse files with frontmatter in YAML, TOML, or JSON format. However, they will be saved with YAML frontmatter.
- `yaml-frontmatter`: same as the `frontmatter` format above, except frontmatter will be both parsed and saved only as YAML, followed by unparsed body text. The default delimiter for this option is `---`.
- `toml-frontmatter`: same as the `frontmatter` format above, except frontmatter will be both parsed and saved only as TOML, followed by unparsed body text. The default delimiter for this option is `+++`.
- `json-frontmatter`: same as the `frontmatter` format above, except frontmatter will be both parsed and saved as JSON, followed by unparsed body text. The default delimiter for this option is `{` `}`.

#### `frontmatter_delimiter` <a id="frontmatter_delimiter"></a>

If you have an explicit frontmatter format declared, this option allows you to specify a custom delimiter like `~~~`. If you need different beginning and ending delimiters, you can use an array like `["(", ")"]`.

#### `slug` <a id="slug"></a>

For folder collections where users can create new items, the `slug` option specifies a template for generating new filenames based on a file's creation date and `title` field. \(This means that all collections with `create: true` must have a `title` field \(a different field can be used via [`identifier_field`](https://www.netlifycms.org/docs/configuration-options/#identifier_field)\).

The slug template can also reference a field value by name, eg. `{{title}}`. If a field name conflicts with a built in template tag name - for example, if you have a field named `slug`, and would like to reference that field via `{{slug}}`, you can do so by adding the explicit `fields.` prefix, eg. `{{fields.slug}}`.

**Available template tags:**

- Any field can be referenced by wrapping the field name in double curly braces, eg. `{{author}}`
- `{{slug}}`: a url-safe version of the `title` field \(or identifier field\) for the file
- `{{year}}`: 4-digit year of the file creation date
- `{{month}}`: 2-digit month of the file creation date
- `{{day}}`: 2-digit day of the month of the file creation date
- `{{hour}}`: 2-digit hour of the file creation date
- `{{minute}}`: 2-digit minute of the file creation date
- `{{second}}`: 2-digit second of the file creation date

**Example:**

```text
slug: "{{year}}-{{month}}-{{day}}_{{slug}}"
```

**Example using field names:**

```text
slug: "{{year}}-{{month}}-{{day}}_{{title}}_{{some_other_field}}"
```

**Example using field name that conflicts with a template tag:**

```text
slug: "{{year}}-{{month}}-{{day}}_{{fields.slug}}"
```

#### `preview_path` <a id="preview_path"></a>

A string representing the path where content in this collection can be found on the live site. This allows deploy preview links to direct to lead to a specific piece of content rather than the site root of a deploy preview.

**Available template tags:**

Template tags are the same as those for [slug](https://www.netlifycms.org/docs/configuration-options/#slug), with the following exceptions:

- `{{slug}}` is the entire slug for the current entry \(not just the url-safe identifier, as is the case with [`slug` configuration](https://www.netlifycms.org/docs/configuration-options/#slug)\)
- The date based template tags, such as `{{year}}` and `{{month}}`, are pulled from a date field in your entry, and may require additional configuration - see [`preview_path_date_field`](https://www.netlifycms.org/docs/configuration-options/#preview_path_date_field) for details. If a date template tag is used and no date can be found, `preview_path` will be ignored.
- `{{dirname}}` The path to the file's parent directory, relative to the collection's `folder`.
- `{{filename}}` The file name without the extension part.
- `{{extension}}` The file extension.

**Examples:**

```text
collections:
  - name: posts
    preview_path: "blog/{{year}}/{{month}}/{{slug}}"
```

```text
collections:
  - name: posts
    preview_path: "blog/{{year}}/{{month}}/{{filename}}.{{extension}}"
```

#### `preview_path_date_field` <a id="preview_path_date_field"></a>

The name of a date field for parsing date-based template tags from `preview_path`. If this field is not provided and `preview_path` contains date-based template tags \(eg. `{{year}}`\), Netlify CMS will attempt to infer a usable date field by checking for common date field names, such as `date`. If you find that you need to specify a date field, you can use `preview_path_date_field` to tell Netlify CMS which field to use for preview path template tags.

**Example:**

```text
collections:
  - name: posts
    preview_path_date_field: "updated_on"
```

#### `fields` <a id="fields"></a>

The `fields` option maps editor UI widgets to field-value pairs in the saved file. The order of the fields in your Netlify CMS `config.yml` file determines their order in the editor UI and in the saved file.

`fields` accepts a list of collection objects, each with the following options:

- `name` \(required\): unique identifier for the field, used as the key when referenced in other contexts \(like the [relation widget](https://www.netlifycms.org/docs/widgets/#relation)\)
- `label`: label for the field in the editor UI; defaults to the value of `name`
- `widget`: defines editor UI and inputs and file field data types; details in [Widgets](https://www.netlifycms.org/docs/widgets)
- `default`: specify a default value for a field; available for most widget types \(see [Widgets](https://www.netlifycms.org/docs/widgets) for details on each widget type\). Please note that field default value only works for folder collection type.
- `required`: specify as `false` to make a field optional; defaults to `true`
- `pattern`: add field validation by specifying a list with a regex pattern and an error message; more extensive validation can be achieved with [custom widgets](https://www.netlifycms.org/docs/custom-widgets/#advanced-field-validation)
- `comment`: optional comment to add before the field \(only supported for `yaml`\)

In files with frontmatter, one field should be named `body`. This special field represents the section of the document \(usually markdown\) that comes after the frontmatter.

**Example:**

```text
fields:
  - label: "Title"
    name: "title"
    widget: "string"
    pattern: ['.{20,}', "Must have at least 20 characters"]
  - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
  - {label: "Featured Image", name: "thumbnail", widget: "image", required: false}
  - {label: "Body", name: "body", widget: "markdown"}
    comment: 'This is a multiline\ncomment'
```

#### `editor` <a id="editor"></a>

This setting changes options for the editor view of a collection or a file inside a files collection. It has one option so far:

- `preview`: set to `false` to disable the preview pane for this collection or file; defaults to `true`

**Example:**

```text
  editor:
     preview: false
```

**Note**: Setting this as a top level configuration will set the default for all collections

#### `summary` <a id="summary"></a>

This setting allows the customization of the collection list view. Similar to the `slug` field, a string with templates can be used to include values of different fields, e.g. `{{title}}`. This option over-rides the default of `title` field and `identifier_field`.

**Available template tags:**

Template tags are the same as those for [slug](https://www.netlifycms.org/docs/configuration-options/#slug), with the following additions:

- `{{dirname}}` The path to the file's parent directory, relative to the collection's `folder`.
- `{{filename}}` The file name without the extension part.
- `{{extension}}` The file extension.
- `{{commit_date}}` The file commit date on supported backends \(git based backends\).
- `{{commit_author}}` The file author date on supported backends \(git based backends\).

**Example**

```text
    summary: "Version: {{version}} - {{title}}"
```

#### `sortable_fields` <a id="sortable_fields"></a>

An optional list of sort fields to show in the UI.

Defaults to inferring `title`, `date`, `author` and `description` fields and will also show `Update On` sort field in git based backends.

When `author` field can't be inferred commit author will be used.

**Example**

```text
    # use dot notation for nested fields
    sortable_fields: ['commit_date', 'title', 'commit_author', 'language.en']
```

#### `view_filters` <a id="view_filters"></a>

An optional list of predefined view filters to show in the UI.

Defaults to an empty list.

**Example**

```text
    view_filters:
      - label: "Alice's and Bob's Posts"
        field: author
        pattern: 'Alice|Bob'
      - label: 'Posts published in 2020'
        field: date
        pattern: '2020'
      - label: Drafts
        field: draft
        pattern: true
```

#### `view_groups` <a id="view_groups"></a>

An optional list of predefined view groups to show in the UI.

Defaults to an empty list.

**Example**

```text
    view_groups:
      - label: Year
        field: date
        # groups items based on the value matched by the pattern
        pattern: \d{4}
      - label: Drafts
        field: draft
```
