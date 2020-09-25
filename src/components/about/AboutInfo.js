import React from "react"
import Img from "gatsby-image"

const InfoCard = ({ name, title, company, photo, working }) => {
  return (
    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
      <Img
        fluid={photo}
        alt="Profile pic"
        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
      />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          {name}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        {working && (
          <p className="text-base px-2 text-gray-600">
            {title} at {company}
          </p>
        )}
      </div>
    </div>
  )
}

export default InfoCard
