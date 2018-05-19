import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialLinks from "../components/SocialLinks"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const Footer = ({ lowerFooter }) => {
  const data = useStaticQuery(query)
  const { title, author } = data.site.siteMetadata
  return (
    <footer className={`text-gray-700 ${lowerFooter && "mt-15"}`}>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} {author}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialLinks />
        </span>
      </div>
    </footer>
  )
}

export default Footer
