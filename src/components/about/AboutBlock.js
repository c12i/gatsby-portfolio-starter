import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SmallHero from "../SmallHero"
import AboutInfo from "./AboutInfo"
import AboutBio from "./AboutBio"

const query = graphql`
  {
    strapiBio {
      name
      working
      position
      company
      about
      photo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      coverPhoto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const AboutBlock = ({ hideHero }) => {
  const data = useStaticQuery(query)
  const {
    about,
    photo: {
      childImageSharp: { fluid: photo },
    },
    coverPhoto: {
      childImageSharp: { fluid: cover },
    },
    ...other
  } = data.strapiBio
  return (
    <section className="text-gray-700">
      <div className="container py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          {!hideHero && <SmallHero img={cover} />}
          <div className="flex flex-col sm:flex-row mt-10">
            <AboutInfo photo={photo} {...other} />
            <AboutBio bio={about} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBlock
