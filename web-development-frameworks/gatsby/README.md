# GATSBY

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







## Making Your Site Accessible

### TABLE OF CONTENTS

* [What is web accessibility?](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#what-is-web-accessibility)
* [Gatsby makes accessibility easier](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#gatsby-makes-accessibility-easier)
  * [Accessible routing](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#accessible-routing)
  * [Gatsby builds HTML pages by default](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#gatsby-builds-html-pages-by-default)
  * [Linting with eslint-plugin-jsx-a11y](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#linting-with-eslint-plugin-jsx-a11y)
* [Tips for improving web accessibility](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#tips-for-improving-web-accessibility)
* [Accessibility resources](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#accessibility-resources)

### EXAMPLES

* [ Using react-skip-nav](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-reach-skip-nav)

The Gatsby team is passionate about helping you create websites that work for everyone, with helpful defaults that bake in web accessibility as well as performance optimizations. By making your website accessible to people with disabilities, you can make more inclusive sites that reach and remove barriers for more people on the Internet.

### What is web accessibility? <a id="what-is-web-accessibility"></a>

[Web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/#what) means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. But not only people with permanent disabilities benefit from it. Accessibility also benefits people with temporary disabilities. For example, imagine being in an environment where you cannot listen to audio or you can’t use a computer because of a broken arm.

Back in the early days of the Web, Tim Berners-Lee, inventor of the World Wide Web, [said](https://www.w3.org/Press/IPO-announce):

> “The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”

The web of today is an important resource in many aspects of life such as health care, education, or commerce. Accessibility is an important consideration when building for the web.

Accessibility supports [social inclusion for everyone](https://www.w3.org/standards/webdesign/accessibility#case), and has a strong [business case](https://www.w3.org/WAI/business-case/).

### Gatsby makes accessibility easier <a id="gatsby-makes-accessibility-easier"></a>

While ultimately it’s up to you to develop your site with accessibility in mind, Gatsby aims to provide as much out-of-the-box support as possible.

#### Accessible routing <a id="accessible-routing"></a>

One of the most common features of every site is navigation. People should be able to navigate across your pages and content in an intuitive and accessible way.

That’s why every Gatsby site aims to have an accessible navigation experience by default. Thanks to [@reach/router](https://reach.tech/router), a routing library for React, Gatsby handles page announcements for screen readers on page change. We’re actively making improvements to this experience, and we [welcome your feedback](https://www.gatsbyjs.com/accessibility-statement/).

Since the [second major release](https://www.gatsbyjs.com/blog/2018-09-17-gatsby-v2/), your Gatsby sites use `@reach/router` under the hood. While additional accessibility testing is always a good idea, the [Gatsby Link Component](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/) wraps [@reach/router’s Link component](https://reach.tech/router/api/Link) to improve accessibility without you having to think about it. `@reach/router` also supports [scroll restoration](https://www.gatsbyjs.com/docs/how-to/routing/scroll-restoration).

#### Gatsby builds HTML pages by default <a id="gatsby-builds-html-pages-by-default"></a>

For websites, rendering [static HTML](https://www.gatsbyjs.com/docs/glossary#static) pages means that JavaScript isn’t required to access and navigate through content. Gatsby [compiles](https://www.gatsbyjs.com/docs/glossary#compiler) HTML pages by default from React components using [Node.js](https://www.gatsbyjs.com/docs/glossary#nodejs), meaning you don’t have to worry about setting up server-rendering yourself to support [progressive enhancement](https://www.gatsbyjs.com/docs/glossary#progressive-enhancement). With Gatsby’s static support out of the box, you can build dynamic sites that still enable user access without requiring [client-side](https://www.gatsbyjs.com/docs/glossary#client-side) scripting.

#### Linting with eslint-plugin-jsx-a11y <a id="linting-with-eslint-plugin-jsx-a11y"></a>

Gatsby ships with the `eslint-plugin-jsx-a11y` package and warnings for all of its rules enabled by default. [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) is an accessibility [linting](https://www.gatsbyjs.com/docs/glossary#linting) tool for your code, helping you develop more inclusive Gatsby projects by reducing the time to find accessibility errors. This plugin encourages you to include alternative text for image tags, validates [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) props, and eliminates redundant role properties, among other things.

For more on supported rules, check out the docs for [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y). You can customize those rules in your [`.eslintrc`](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/#configuring-eslint)..eslintrc

```text
Copy.eslintrc: copy code to clipboard{  "extends": ["react-app", "plugin:jsx-a11y/recommended"],  "plugins": ["jsx-a11y"],  "rules": {    "jsx-a11y/rule-name": "warn"  }}
```

Note: Including a local `.eslintrc` file will [override](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/#configuring-eslint) all of Gatsby’s default linting and disable the built-in `eslint-loader`, meaning your tweaked rules won’t make it to your browser’s developer console or your terminal window but will still be displayed if you have ESLint plugins enabled in your IDE. If you would like to change this behavior and make sure the `eslint-loader` pulls in your customizations, you’ll need to enable the loader yourself. One way to do this is by using the Community plugin [`gatsby-plugin-eslint`](https://www.gatsbyjs.com/plugins/gatsby-plugin-eslint/). Additionally, if you would still like to take advantage of some subset of the default [ESLint config Gatsby ships with](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/eslint-config.ts), you’ll need to copy them manually to your local `.eslintrc` file.

This is a start to testing for accessibility: [further recommendations](https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#how-to-improve-accessibility) can be found below.

### Tips for improving web accessibility <a id="tips-for-improving-web-accessibility"></a>

Accessibility by default is a win for everyone. Here’s a starting point for accessibility testing when making a Gatsby site or theme:

* [Use your keyboard](https://webaim.org/techniques/keyboard/) to tab through the pages. Can you reach and operate every interactive control \(links, buttons, form inputs, etc.\) and see a focus indicator on the screen?
* Use [Lighthouse](https://developers.google.com/web/tools/lighthouse/), [axe](https://www.deque.com/axe/) or [Accessibility Insights](https://accessibilityinsights.io/) to find and fix common accessibility issues in development
* Test for [adequate color contrast](https://dequeuniversity.com/tips/color-contrast) with the [accessibility color picker in Chrome Developer Tools](https://developers.google.com/web/updates/2018/01/devtools#contrast)
* Create inclusive and [accessible forms](https://www.gatsbyjs.com/docs/building-a-contact-form#creating-an-accessible-form)
* Employ accessible [headings, landmarks, and semantic structure](https://webaim.org/techniques/semanticstructure/)
* Include [image, video, and audio text alternatives](https://a11y-style-guide.com/style-guide/section-media.html)
* Test for [screen magnification and zoom](https://axesslab.com/make-site-accessible-screen-magnifiers/)
* Ensure accessibility of [interactive menus, modals, and custom widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
* Create safe [animations and motion](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
* Write [Cypress accessibility tests](https://www.gatsbyjs.com/docs/how-to/testing/end-to-end-testing/#writing-tests) for your site or application

### Accessibility resources <a id="accessibility-resources"></a>

* [React accessibility](https://reactjs.org/docs/accessibility.html)
* [Gatsby’s commitment to accessibility](https://www.gatsbyjs.com/blog/2019-04-18-gatsby-commitment-to-accessibility/)
* [How to do an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review) from Google Web Fundamentals
* [A11y Project’s Quick Tests](https://a11yproject.com/#Quick-tests)
* [The importance of manual accessibility testing](https://www.smashingmagazine.com/2018/09/importance-manual-accessibility-testing/) from Smashing Magazine
* [Writing Automated Tests for Accessibility](https://www.24a11y.com/2017/writing-automated-tests-accessibility/)
* [Free web accessibility course](https://www.udacity.com/course/web-accessibility--ud891) by Google and Udacity
* [WebAIM introduction](https://webaim.org/intro/) to web accessibility
* [Deque University](https://dequeuniversity.com/), with free online accessibility training for people with disabilities
* [Web.dev accessibility docs](https://web.dev/accessible)
* [All Gatsby accessibility blog posts](https://www.gatsbyjs.com/blog/tags/accessibility/)

