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
        siteUrl
        image
        twitter
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getMetadata)
  const {
    siteTitle,
    siteDescription,
    author,
    siteUrl,
    image,
    twitter,
  } = siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="author" content={author} />
      <meta name="image" content={image} />

      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:url:height" content="300" />

      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}/${image}`} />
    </Helmet>
  )
}

export default SEO
