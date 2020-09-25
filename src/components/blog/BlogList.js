import React from "react"
import { useStaticQuery } from "gatsby"

import BlogListItem from "./BlogListItem"

const query = graphql`
  {
    allStrapiBlogs(sort: { fields: created_at, order: DESC }) {
      edges {
        node {
          title
          category
          slug
          excerpt
          date:created_at(fromNow: true)
        }
      }
    }
  }
`

const BlogList = () => {
  const data = useStaticQuery(query)
  const { edges } = data.allStrapiBlogs
  
  return (
    <section className="text-gray-700 overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8">
          {edges.map(({ node }, idx) => (
            <BlogListItem key={idx} {...node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
