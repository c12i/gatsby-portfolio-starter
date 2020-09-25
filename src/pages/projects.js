import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ProjectList from "../components/projects/ProjectList"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectList />
    </Layout>
  )
}

export default Projects
