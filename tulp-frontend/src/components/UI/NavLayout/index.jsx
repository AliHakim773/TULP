import { Outlet } from "react-router-dom"
import "./styles.css"
import NavBar from "../NavBar"

const NavLayout = () => {
  return (
    <div className='page'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default NavLayout
