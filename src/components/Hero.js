import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        title
        description
        feature {
          siteName
          url
        }
      }
    }

    file(relativePath: { eq: "DoogieDoodle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query);
  const {
    author,
    description,
    feature: { siteName, url },
  } = data.site.siteMetadata
  const { fluid } = data.file.childImageSharp
  const handleClick = () => {
    window.open(url)
  }
  return (
    <section className="text-gray-700 lg:mt-10">
      <div className="container mx-auto flex px-5 md:py-24 py-8 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:ml-16 ml-0">
          <Img
            className="object-cover object-center rounded lg:ml-12"
            alt="hero"
            fluid={fluid}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="lg:text-5xl mb-4 text-3xl font-medium">
            {author}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {siteName}
            </button>
            <AniLink
              swipe
              direction="up"
              to="/contact"
              className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Contact
            </AniLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
