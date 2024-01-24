import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'

const NavLayout = () => {
  return (
    <div className="page aside-page flex">
      <aside className="nav-aside flex column ">
        <div className="nav-item">
          <NavLink to={'/home'}>Home</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={'/users'}>Users</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={'/classes'}>Classes</NavLink>
        </div>
      </aside>
      <Outlet />
    </div>
  )
}

export default NavLayout
