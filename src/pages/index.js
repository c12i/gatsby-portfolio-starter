import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

export default () => (
  <Layout hideLogo>
    <SEO title="Home" description="Hello World!" />
    <Hero />
  </Layout>
)
