import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectListItem from "./ProjectListItem"

const query = graphql`
  {
    allStrapiProjects {
      edges {
        node {
          name
          description
          github
          url
          type {
            id
            types
          }
          technologies {
            id
            name
          }
          photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        }
      }
    }
  }
`

const test = []

for (let i = 0; i < 6; i++) {
  test.push({
    title: "The Catalyzer",
    type: "CLI",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat.",
    photo: "https://dummyimage.com/601x360",
  })
}

const ProjectList = () => {
  const data = useStaticQuery(query)
  const { edges } = data.allStrapiProjects
  return (
    <section className="text-gray-700 font-mono">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A variety pf projects I have worked on. They vary from command-line
            tools, libraries to web apps.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {edges.map(({ node }, idx) => (
            <ProjectListItem key={idx} {...node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectList
