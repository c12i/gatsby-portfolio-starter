import React from "react"
import { useStaticQuery } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(query)
  const { author, description } = data.site.siteMetadata
  return (
    <Layout lowerFooter>
      <SEO title={author} description={description} />
      <Hero />
    </Layout>
  )
}
