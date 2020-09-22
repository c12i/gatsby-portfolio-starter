import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const getMetadata = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getMetadata)
  const { siteTitle, siteDescription, author } = siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="author" content={author} />
    </Helmet>
  )
}

export default SEO
