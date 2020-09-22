import React from "react"

import NavBar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, hideNav, hideFooter, hideLogo }) => {
  return (
    <div>
      {!hideNav && <NavBar hideLogo={hideLogo} />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
