import React from "react"

import { data } from "../constants/socials";

const SocialLinks = () => {
  const handleClick = url => {
    window.open(url)
  }
  return data.map(({ icon, url }, idx) => (
    <div
      className="ml-3 text-gray-500 cursor-pointer hover:text-indigo-500"
      key={idx}
      onClick={() => handleClick(url)}
    >
      {icon}
    </div>
  ))
}

export default SocialLinks
