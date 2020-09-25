import React from "react"
import { FaArrowRight } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogListItem = ({ title, category, date, excerpt }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-no-wrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="tracking-widest font-medium title-font text-gray-900">
          {category.toUpperCase()}
        </span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{excerpt}</p>
        <AniLink
          to="/"
          swipe
          direction="left"
          className="text-indigo-500 cursor-pointer hover:text-gray-900 inline-flex items-center mt-4"
        >
          Read More
          <FaArrowRight className="w-4 h-4 ml-2" />
        </AniLink>
      </div>
    </div>
  )
}

export default BlogListItem
