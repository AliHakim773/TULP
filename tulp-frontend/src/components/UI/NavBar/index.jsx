import React from "react"
import Logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom"
import "./styles.css"
import useNavBarLogic from "./useNavBarLogic"
import PfpDropDown from "../../PfpDropDown"
import Button from "../../Base/Button"

const NavBar = () => {
  const { isLoggedIn, navLinks } = useNavBarLogic()

  return (
    <nav className='home-nav flex center border-bottom'>
      <div className='home-nav-wrapper flex'>
        <div className='home-logo h-100'>
          <Link to={"/"} className='h-100'>
            <img src={Logo} alt='TULP Logo' />
          </Link>
        </div>
        <ul className='nav-links flex h-100'>
          {navLinks.map((link) => (
            <li key={link.to} className='h-100 flex center'>
              <Link to={link.to}>
                <Button text={link.text} color={link.color} />
              </Link>
            </li>
          ))}

          {isLoggedIn && (
            <li className='h-100 flex center'>
              <PfpDropDown />
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
