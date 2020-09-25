import React from "react"

import ProjectListItem from "./ProjectListItem"

const data = []

for (let i = 0; i < 6; i++) {
  data.push({
    title: "The Catalyzer",
    type: "CLI",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat.",
    photo: "https://dummyimage.com/601x360",
  })
}

const ProjectList = () => {
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
          {data.map((project, idx) => (
            <ProjectListItem key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectList
