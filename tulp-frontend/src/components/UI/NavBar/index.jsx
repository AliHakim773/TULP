import React from "react"
import Logo from "../../../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"
import "./styles.css"
import useNavBarLogic from "./useNavBarLogic"
import { clearUser } from "../../../core/redux/userSlice"

const NavBar = () => {
  const navigate = useNavigate()
  const { user, isLoggedIn, dispatch } = useNavBarLogic()

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
            </>
          ) : (
            <>
              <li className='h-100'>
                <p
                  onClick={() => {
                    localStorage.removeItem("token")
                    dispatch(clearUser())
                    navigate("/")
                  }}
                  className='nav-link h-100 flex center blue-3-txt semi-bold'>
                  Logout
                </p>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
