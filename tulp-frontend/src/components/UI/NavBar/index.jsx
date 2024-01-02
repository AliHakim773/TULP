import React from "react"
import Logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom"
import "./styles.css"

const NavBar = () => {
  return (
    <nav className='home-nav flex center border-bottom'>
      <div className='home-nav-wrapper flex'>
        <div className='home-logo h-100'>
          <Link to={"/"} className='h-100'>
            <img src={Logo} alt='TULP Logo' />
          </Link>
        </div>
        <ul className='nav-links flex h-100'>
          <li className='h-100'>
            <Link
              to={"/register"}
              className='nav-link h-100 flex center blue-3-txt semi-bold'>
              Register
            </Link>
          </li>
          <li className='h-100'>
            <Link
              to={"/login"}
              className='nav-link h-100 flex center blue-3-txt semi-bold'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
