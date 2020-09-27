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

const SEO = ({ title, description, pageImg }) => {
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
      <meta
        name="image"
        content={!pageImg ? `${siteUrl}${image}` : `${siteUrl}${pageImg}`}
      />

      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta
        property="og:image"
        content={!pageImg ? `${siteUrl}${image}` : `${siteUrl}${pageImg}`}
      />
      <meta property="og:image:width" content="400" />
      <meta property="og:url:height" content="300" />

      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta
        name="twitter:description"
        content={description || siteDescription}
      />
      <meta
        name="twitter:image"
        content={!pageImg ? `${siteUrl}${image}` : `${siteUrl}${pageImg}`}
      />
    </Helmet>
  )
}

export default SEO
