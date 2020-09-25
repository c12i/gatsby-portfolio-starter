import React from "react"
import { FaQuoteRight } from "react-icons";

import Layout from "../components/Layout"

const Four04 = () => {
  return (
    <Layout hideNav hideFooter>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <FaQuoteRight className="inline-block w-8 h-8 text-gray-400 mb-8" />
            <p class="leading-relaxed text-lg">
              Not all those who wander are lost.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
              J.R.R. Tolkien
            </h2>
            <p class="text-gray-500">The Fellowship of the Ring</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Four04
