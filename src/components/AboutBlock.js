import React from "react"

import SmallHero from "./SmallHero"
import AboutInfo from "./AboutInfo"
import AboutBio from "./AboutBio"

const dummyText = `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi
umami everyday carry hexagon locavore direct trade art party. Locavore
small batch listicle gastropub farm-to-table lumbersexual salvia
messenger bag. Coloring book flannel truffaut craft beer drinking
vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland
90's scenester vexillologist forage post-ironic asymmetrical, chartreuse
disrupt butcher paleo intelligentsia pabst before they sold out four
loko. 3 wolf moon brooklyn.`

const AboutBlock = ({ hideHero }) => {
  return (
    <section className="text-gray-700">
      <div className="container py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          {!hideHero && <SmallHero img="https://dummyimage.com/1200x500" />}
          <div className="flex flex-col sm:flex-row mt-10">
            <AboutInfo
              name="Collins Muriuki"
              title="Software Engineer"
              company="TIBU"
            />
            <AboutBio bio={dummyText} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBlock
