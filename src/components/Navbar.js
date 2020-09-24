import React from "react"
import { Link, useStaticQuery } from "gatsby"

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
    <header className="text-gray-700 font-mono">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {!hideLogo && (
          <Link
            to="/"
            className="flex font-medium items-center text-indigo-900 mb-4 md:mb-0 hover:text-gray-900"
          >
            <div className="text-indigo">
              <span className="text-2xl">{title}</span>
            </div>
          </Link>
        )}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {routes.map(({ path, name }, idx) => (
            <Link key={idx} to={path} className="mr-5 hover:text-indigo-900">
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
