# portfolio
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> V2 of my portfolio built with Gatsby, Strapi and Tailwind CSS

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

Page data such as my bio, projects and blogs are hosted by a headless content management system (CMS), [Strapi](https://strapi.io).

## Static data
Shared and modifiable data

### SiteMetadata
Information such as the site title, author and description are described [here](https://github.com/collinsmuriuki/portfolio/blob/master/gatsby-config.js)

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
  twitterUsername: ``,
  siteUrl: ``,
}
```

### routes
Describes the page routes, code can be found [here](https://github.com/collinsmuriuki/portfolio/blob/master/src/constants/routes.js)

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

### Social Icons
A component containing a combination of svg social icon and it's url. Code can be found [here](https://github.com/collinsmuriuki/portfolio/blob/master/src/constants/socials.js):

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
Here is a rundown on the schema:
```
bio:
  name - short text 
  position - short text
  company - short text
  about - long text
  photo - media

project:
  name - short text
  description - long text
  photo - media
  technologies - component(repeatable):
    name
  type - component(repeatable):
    name
  url - short text
  github - short text

blog:
  title - short text
  content - rich text
  image - media
  slug - (UID attached to title)
  category - enum:
    custom variants
  excerpt - long text
  date
```

## Usage as a starter

```sh
npx gatsby new project-name https://github.com/collinsmuriuki/portfolio
```

## Install

```sh
yarn
```

## Dev server

🚨 Make sure your strapi server is running  before running this command

```sh
gatsby develop
```

## Author

**collinsmuriuki**