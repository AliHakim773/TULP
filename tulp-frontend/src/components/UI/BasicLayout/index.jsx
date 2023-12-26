import React from "react"
import NavBar from "../NavBar"
import "./styles.css"
import Footer from "../Footer"

const BasicLayout = ({ children }) => {
  return (
    <div className='page'>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default BasicLayout
