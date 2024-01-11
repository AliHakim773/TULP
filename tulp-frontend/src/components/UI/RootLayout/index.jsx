import React from "react"
import NavBar from "../NavBar"
import "./styles.css"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className='page'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
