import React from "react"

import BlogListItem from "./BlogListItem"

const data = []

for (let i = 0; i < 3; i++) {
  data.push({
    title: "Bitters hashtag waistcoat fashion axe chia unicorn",
    category: "CATEGORY",
    excerpt: `Glossier echo park pug, church-key sartorial biodiesel vexillologist
    pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
    selfies, poke vaporware kombucha lumbersexual pork belly polaroid
    hoodie portland craft beer.`,
    date: "12 Jun 2019",
  })
}

const BlogList = () => {
  return (
    <section className="text-gray-700 overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8">
          {data.map((blog, idx) => (
            <BlogListItem {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
