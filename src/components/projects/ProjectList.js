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

    site {
      siteMetadata {
        projectsInfo
      }
    }
  }
`

const ProjectList = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { edges },
    site: {
      siteMetadata: { projectsInfo },
    },
  } = data
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {projectsInfo}
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
