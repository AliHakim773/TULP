import { Outlet } from "react-router-dom"
import "./styles.css"
import NavBarClass from "../NavBarClass"

const NavLayout = () => {
  return (
    <div className='page'>
      <NavBarClass />
      <Outlet />
    </div>
  )
}

export default NavLayout
