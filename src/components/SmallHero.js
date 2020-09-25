import React from "react"
import Img from "gatsby-image"

const AboutHero = ({ img }) => {
  return (
    <div className="rounded-lg h-64 overflow-hidden">
      <Img
        alt="small hero"
        className="object-cover object-center h-full w-full"
        fluid={img}
      />
    </div>
  )
}

export default AboutHero
