import React from "react"

const Navbar = ({ hideLogo }) => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {!hideLogo && (
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl">C</span>
            <span className="ml-3 text-2xl">M</span>
          </a>
        )}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Blog</a>
          <a className="mr-5 hover:text-gray-900">Projects</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
