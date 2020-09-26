import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import routes from "../constants/routes"

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Navbar = ({ hideLogo }) => {
  const data = useStaticQuery(query)
  const { title } = data.site.siteMetadata
  return (
    <header className="text-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {!hideLogo && (
          <AniLink
            swipe
            direction="right"
            to="/"
            className="flex font-medium items-center text-indigo-900 mb-4 md:mb-0 hover:text-gray-900 font-bold"
          >
            <div className="text-indigo">
              <span className="text-2xl tracking-widest">{title}</span>
            </div>
          </AniLink>
        )}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {routes.map(({ path, name }, idx) => (
            <AniLink
              key={idx}
              to={path}
              className="mx-3 hover:text-indigo-900"
              swipe
              direction="left"
            >
              {name}
            </AniLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
