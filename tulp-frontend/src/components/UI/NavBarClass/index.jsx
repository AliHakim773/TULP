import { Link, Navigate } from "react-router-dom"
import PfpDropDown from "../../PfpDropDown"
import "./styles.css"
import Logo from "../../../assets/images/logo.png"
import useNavBarLogic from "../NavBar/useNavBarLogic"

const NavBarClass = () => {
  const { isLoggedIn } = useNavBarLogic()

  if (!isLoggedIn) return <Navigate to={"/login"} replace={true} />
  return (
    <nav className='class-nav flex center border-bottom'>
      <div className='class-nav-wrapper flex'>
        <div className='class-logo h-100'>
          <Link to={"/"} className='h-100'>
            <img src={Logo} alt='TULP Logo' />
          </Link>
        </div>
        <ul className='nav-links flex h-100'>
          <li className='h-100 flex center'>
            <PfpDropDown />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBarClass
