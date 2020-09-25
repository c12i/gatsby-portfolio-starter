import React from "react"
import { FaGithub, FaGlobe } from "react-icons/fa";
// import Img from "gatsby-image"

const ProjectListItem = ({
  type,
  title,
  description,
  photo,
  technologies,
  github,
  url,
}) => {
  const handleClick = url => {
    window.open(url)
  }
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        {/* <Img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fluid={photo.childImageSharp.fluid}
        /> */}
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {type.types.toUpperCase()}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}{" "}
            {technologies.map(({ id, name }) => (
              <span key={id} className="border-b text-gray-500 px-3 text-sm">
                {name}
              </span>
            ))}
          </h1>
          <p className="leading-relaxed">{description}</p>
          <div className="text-gray flex">
            <FaGithub
              onClick={() => handleClick(github)}
              className="m-2 cursor-pointer cursor-pointer hover:text-indigo-500"
            />
            <FaGlobe
              onClick={() => handleClick(url)}
              className="m-2 cursor-pointer hover:text-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListItem
