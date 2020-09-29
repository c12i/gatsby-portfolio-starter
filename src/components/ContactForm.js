import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialLinks from "../components/SocialLinks"

const query = graphql`
  {
    site {
      siteMetadata {
        contactInfo
        email
      }
    }
  }
`

const ContactForm = () => {
  const data = useStaticQuery(query)
  const { contactInfo, email } = data.site.siteMetadata
  return (
    <section className="text-gray-700 relative">
      <form
        action={`https://formspree.io/${email}`}
        method="POST"
        className="container px-5 md:py-20 py-4 mx-auto"
      >
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {contactInfo || "Let's talk"}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
                name="_replyto"
                required
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <SocialLinks />
              </span>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
