import React from "react"

const InfoCard = ({ name, title, company }) => {
  return (
    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          {name}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        <p className="text-base px-2 text-gray-600">
          {title} at {company}
        </p>
      </div>
    </div>
  )
}

export default InfoCard
