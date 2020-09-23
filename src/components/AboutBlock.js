import React from "react"

import AboutHero from "../components/AboutHero"
import InfoCard from "../components/InfoCard"
import AboutMeData from "../components/AboutMeData"

const AboutBlock = ({ hideHero }) => {
  return (
    <section className="text-gray-700 font-mono">
      <div className="container py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          {!hideHero && <AboutHero />}
          <div className="flex flex-col sm:flex-row mt-10">
            <InfoCard />
            <AboutMeData />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBlock
