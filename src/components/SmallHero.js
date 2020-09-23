import React from "react"

const AboutHero = ({ img }) => {
  return (
    <div className="rounded-lg h-64 overflow-hidden">
      <img
        alt="content"
        className="object-cover object-center h-full w-full"
        src={img}
      />
    </div>
  )
}

export default AboutHero
