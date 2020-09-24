import React from "react"

import DoogieDoodle from "../images/DoogieDoodle.png"

const Hero = () => {
  return (
    <section className="text-gray-700 font-mono">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded lg:ml-12"
            alt="hero"
            src={DoogieDoodle}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Collins Muriuki
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my cozy little space on the world wide web!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Github
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
