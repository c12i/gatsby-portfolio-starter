import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import SingleBlog from "../components/blog/SingleBlog"

const BlogTemplate = ({ data: { blog, bio } }) => {
  const {
    title,
    excerpt,
    image: {
      childImageSharp: { fluid: blogImg },
    },
    ...other
  } = blog

  const {
    name,
    photo: {
      childImageSharp: { fluid: author },
    },
  } = bio
  return (
    <Layout>
      <SEO title={title} description={excerpt} pageImg={blogImg.src} />
      <SingleBlog
        title={title}
        blogImg={blogImg}
        name={name}
        author={author}
        {...other}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      strapiId
      title
      category
      date(formatString: "MMMM Do, YYYY")
      content
      excerpt
      image {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }

    bio: strapiBio {
      name
      photo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default BlogTemplate
