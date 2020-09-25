import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import BlogList from "../components/blog/BlogList"

const Blogs = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogList />
    </Layout>
  )
}

export default Blogs
