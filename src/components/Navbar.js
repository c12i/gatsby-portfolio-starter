import React from "react"
import { Link } from "gatsby";

const Navbar = ({ hideLogo }) => {
  return (
    <header className="text-gray-700 font-mono">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {!hideLogo && (
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:text-indigo-900"
          >
            <div className="text-indigo">
              <span className="text-2xl">C M</span>
            </div>
          </Link>
        )}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/about" className="mr-5 hover:text-indigo-900">
            About
          </Link>
          <Link to="/blog" className="mr-5 hover:text-indigo-900">
            Blog
          </Link>
          <Link to="projects" className="mr-5 hover:text-indigo-900">
            Projects
          </Link>
          <Link to="contact" className="mr-5 hover:text-indigo-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
