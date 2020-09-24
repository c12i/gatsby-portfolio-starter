const siteMetadata = {
  title: `Hello World`,
  description: `This is my basic starter!`,
  author: `Collins Muriuki`,
  // twitterUsername: ``,
  // siteUrl: ``,
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
