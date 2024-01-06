import React from "react"
import Logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom"
import "./styles.css"
import useNavBarLogic from "./useNavBarLogic"
import PfpDropDown from "./PfpDropDown"
import Button from "../../Base/Button"

const NavBar = () => {
  const { user, isLoggedIn, isHidden, handleOnClickProfile } = useNavBarLogic()

  return (
    <nav className='home-nav flex center border-bottom'>
      <div className='home-nav-wrapper flex'>
        <div className='home-logo h-100'>
          <Link to={"/"} className='h-100'>
            <img src={Logo} alt='TULP Logo' />
          </Link>
        </div>
        <ul className='nav-links flex h-100'>
          {!isLoggedIn ? (
            <>
              <li className='h-100 flex center'>
                <Link to={"/register"}>
                  <Button text='Register' />
                </Link>
              </li>
              <li className='h-100 flex center'>
                <Link to={"/login"}>
                  <Button text='Login' color='orange' />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='h-100'>
                <Link
                  to={"/"}
                  className='nav-link h-100 flex center blue-3-txt semi-bold'>
                  My Classes
                </Link>
              </li>
              <li className='h-100 flex center'>
                <div className='pfp-img' onClick={handleOnClickProfile}>
                  <img
                    src={`http://localhost:8000/${user.imageUrl}`}
                    alt={user.username}
                  />
                  <PfpDropDown isHidden={isHidden} user={user.username} />
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
