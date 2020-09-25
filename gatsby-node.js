const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allStrapiBlogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allStrapiBlogs.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `blog/${slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: { slug },
    })
  })
}
