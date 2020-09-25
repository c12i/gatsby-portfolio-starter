import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import AboutBlock from "../components/about/AboutBlock"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutBlock hideHero />
    </Layout>
  )
}

export default About
