require("dotenv").config()

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

const plugins = [
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js")],
    },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000,
      contentTypes: [`blogs`, `projects`],
      singleTypes: [`bio`],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS,
    },
  },
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: process.env.DISQUS,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: "https://www.muriuki.dev",
      sitemap: "https://www.muriuki.dev/sitemap.xml",
      policy: [{ userAgent: "*", allow: "/" }],
    },
  },
]

module.exports = {
  siteMetadata,
  plugins,
}
