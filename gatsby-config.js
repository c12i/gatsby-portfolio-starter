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
  image: `/DoogieDoodle.png`
}

const plugins = [
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
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-postcss`,
  // `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  // {
  //   resolve: "gatsby-plugin-robots-txt",
  //   options: {
  //     host: "https://www.example.com",
  //     sitemap: "https://www.example.com/sitemap.xml",
  //     policy: [{ userAgent: "*", allow: "/" }],
  //   },
  // },
]

module.exports = {
  siteMetadata,
  plugins,
}
