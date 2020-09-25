import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Layout hideFooter>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default Contact
