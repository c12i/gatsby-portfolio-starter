# portfolio
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> v2 of my portfolio built with [Gatsby](https://gatsbyjs.org/), [Strapi](https://strapi.io) and [Tailwind CSS](https://tailwindcss.com/). Contact form emailing is handled by [FormSpree](https://formspree.io/), you will need to add your receiving email in the siteMetadata.

## Whats Inside

Project bootstrapped from my [custom starter](https://github.com/collinsmuriuki/my-gatsby-starter) and has the following Gatsby plugins installed:
* gatsby-plugin-sass
* gatsby-plugin-styled-components
* gatsby-transformer-sharp
* gatsby-plugin-sharp
* gatsby-plugin-transition-link (gsap + AniLink)
* gatsby-source-filesystem
* gatsby-image
* gatsby-background-image
* gatsby-plugin-react-helmet
* gatsby-plugin-robots-txt
* gatsby-plugin-sitemap
* gatsby-source-strapi
* gatsby-plugin-google-analytics
* gatsby-plugin-disqus

Page data such as my bio, projects and blogs are hosted by a headless content management system (CMS), [Strapi](https://strapi.io).

## Static data
Shared and modifiable data

#### SiteMetadata
Information such as the site title, author and description is described [here](https://github.com/collinsmuriuki/portfolio/blob/master/gatsby-config.js)

```js
const siteMetadata = {
  title: `C M`,
  description: `Welcome to my cozy little space on the world wide web!`,
  author: `Collins Muriuki`,
  feature: {
    siteName: `GitHub`,
    url: `https://github.com/collinsmuriuki`,
  },
  quote: {
    author: `J.R.R. Tolkien`,
    content: `Not all those who wander are lost.`,
    source: `The Fellowship of the Ring`,
  },
  contactInfo: `I will typically respond within 24-48 hours`,
  email: `murerwacollins@gmail.com`,
  twitter: `collinsmuriuki_`,
  siteUrl: `https://muriuki.dev`,
  image: `/DoogieDoodle.png`,
  projectsInfo: `A variety pf projects I have worked on. They vary from command-line
  tools, libraries to web apps.`,
}
```

#### routes
Describes the page routes corresponding to the components in `src/pages`, code can be found [here](https://github.com/collinsmuriuki/portfolio/blob/master/src/constants/routes.js)

```js
export default [
  {
    path: "about",
    name: "About",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "projects",
    name: "Projects",
  },
  {
    path: "contact",
    name: "Contact",
  },
]
```

#### social icons
An array of objects containing the social icon and it's url. Adding a social link is as easy as adding an new object to the array containing your `url` and importing the social icon from `react-icons/fa` like in the example below. Code can be found [here](https://github.com/collinsmuriuki/portfolio/blob/master/src/constants/socials.js):

```js
// ...
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

const data = [
  {
    icon: <FaGithub className="w-5 h-5"></FaGithub>,
    url: "https://www.github.com/collinsmuriuki",
  },
  {
    icon: <FaLinkedin className="w-5 h-5"></FaLinkedin>,
    url: "https://www.linkedin.com/in/collinsmuriuki",
  },
  {
    icon: <FaTwitter className="w-5 h-5"></FaTwitter>,
    url: "https://www.twitter.com/collinsmuriuki_",
  },
]
// ...
```

## Strapi
Create a Strapi project, create a super user and add content-types (bio - singleType, blog & project ~ Strapi will automatically pluralize multipleTypes). Info on getting started with strapi can be found [here](https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project).
Here is a rundown on the schema in pseudo-code:
```
bio(singleType):
  name - short text 
  position - short text
  company - short text
  about - long text
  photo - media
  working - boolean
  coverPhoto - media

project(collectionType):
  name - short text
  description - long text
  photo - media
  technologies - component(repeatable):
    name
  type - enum(...)
  url - short text
  github - short text

blog(collectionType):
  title - short text
  content - rich text
  image - media
  slug - (UID attached to title)
  category - enum(...)
  excerpt - long text
  date - datetime
```

Once you setup and deploy strapi, simply add your url in `gatsby-config.js` on the plugins object like so:

```js
// ... plugins
{
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://your-api-url.com`,
      queryLimit: 1000,
      contentTypes: [`blogs`, `projects`],
      singleTypes: [`bio`],
    },
 },
//...
```
You can optionally choose to store your API url in a `.env` file as `STRAPI_URL="https://your-api-url.com"`.
If you are developing your strapi project locally, set the apiUrl as `http://localhost:1337`.

## Usage as a starter

If you set your strapi `apiUrl` as `http://localhost:1337`, make sure that server is running first.

```sh
npx gatsby new project-name https://github.com/collinsmuriuki/portfolio
```

## Install

```sh
yarn install
```

## Dev server

```sh
gatsby develop
```

## Collaboration
Pull requests welcome

## Author

**collinsmuriuki**