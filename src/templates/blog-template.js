import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ReactMarkdown from "react-markdown"
import { Disqus } from "gatsby-plugin-disqus"

import "../css/blog-template.css"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import SmallHero from "../components/SmallHero"

const BlogTemplate = ({ data: { blog, bio } }) => {
  const {
    strapiId,
    title,
    category,
    date,
    excerpt,
    content,
    image: {
      childImageSharp: { fluid: blogImg },
    },
  } = blog

  let disqusConfig = {
    identifier: strapiId,
    title,
  }

  const {
    name,
    photo: {
      childImageSharp: { fluid: author },
    },
  } = bio
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <section className="container w-full md:max-w-3xl mx-auto md:pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <SmallHero img={blogImg} />
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            {date}
          </p>
          <article className="py-6 blog-template">
            <ReactMarkdown source={content} />
          </article>
        </div>

        <div className="text-base md:text-sm text-gray-500 px-4 py-6">
          Category:
          <span
            href="#"
            className="text-base md:text-sm text-indigo-500 no-underline"
          >
            {category}
          </span>
        </div>
        <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

        <div className="flex w-full items-center text-sm px-4 py-12">
          <Img
            className="w-10 h-10 rounded-full mr-4"
            fluid={author}
            alt="Avatar of Author"
          />
          <div className="flex-1 px-2">
            <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
              {name}
            </p>
          </div>
          <div className="justify-end">
            <AniLink
              swipe
              direction="right"
              to="/blog"
              className="bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-300 font-bold py-2 px-4 rounded-full"
            >
              Read More
            </AniLink>
          </div>
        </div>
        <Disqus
          className="flex w-full items-center text-sm px-4 py-12"
          config={disqusConfig}
        />
      </section>
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
            src
          }
        }
      }
    }
  }
`

export default BlogTemplate
