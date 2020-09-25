import React from "react"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

const data = [
  {
    icon: <FaGithub className="w-5 h-5"></FaGithub>,
    url: "https://www.github.com/collinsmuriuki",
  },
  {
    icon: <FaLinkedin className="w-5 h-5"></FaLinkedin>,
    url: "https://www.linkedin.com/in/collinsmuriuki",
  },
  {
    icon: <FaTwitter className="w-5 h-5"></FaTwitter>,
    url: "https://www.twitter.com/collinsmuriuki_",
  },
]

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
