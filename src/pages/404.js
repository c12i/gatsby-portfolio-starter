import React from "react"
import { Link, useStaticQuery } from "gatsby";
import { FaQuoteRight } from "react-icons/fa"

import Layout from "../components/Layout"

const query = graphql`
  {
    site {
      siteMetadata {
        quote {
          author
          content
          source
        }
      }
    }
  }
`

const Four04 = () => {
  const data = useStaticQuery(query);
  const { author, content, source } = data.site.siteMetadata.quote
  return (
    <Layout hideNav hideFooter>
      <Link to="/" className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <FaQuoteRight className="inline-block w-8 h-8 text-gray-400 mb-8" />
            <p className="leading-relaxed text-lg">{content}</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              {author}
            </h2>
            <p className="text-gray-500 py-5">{source}</p>
          </div>
        </div>
      </Link>
    </Layout>
  )
}

export default Four04
