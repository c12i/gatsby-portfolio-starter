import React from "react"

import NavBar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, hideNav, hideFooter, hideLogo, lowerFooter }) => {
  return (
    <div>
      {!hideNav && <NavBar hideLogo={hideLogo} />}
      {children}
      {!hideFooter && <Footer lowerFooter={lowerFooter} />}
    </div>
  )
}

export default Layout
