import React from "react"

const AboutMeData = ({ bio }) => {
  return (
    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
      <p className="leading-relaxed text-lg mb-4">{bio}</p>
    </div>
  )
}

export default AboutMeData
