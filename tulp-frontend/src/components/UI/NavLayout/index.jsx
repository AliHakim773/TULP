import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import "./styles.css"

const NavLayout = () => {
  return (
    <div className='page'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default NavLayout
