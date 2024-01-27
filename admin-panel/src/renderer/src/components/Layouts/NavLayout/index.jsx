import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Users from '../../../assets/svgs/Users.jsx'
import { Class, Logout, Dashboard } from '@mui/icons-material'
import logo from '../../../assets/images/icon.png'
import './styles.css'

const NavLayout = () => {
  const navigate = useNavigate()
  return (
    <div className="page aside-page flex">
      <aside className="nav-aside flex column ">
        <div className="nav-item nav-item-logo flex align-center gap-1">
          <span className="logo-image">
            <img src={logo} alt="TULP" />
          </span>
          TULP
        </div>
        <div className="nav-item">
          <NavLink to={'/home'}>
            <span>
              <Dashboard />
            </span>{' '}
            Dashboard
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={'/users'}>
            <span>
              <Users />
            </span>{' '}
            Users
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={'/classes'}>
            <span>
              <Class />
            </span>{' '}
            Classes
          </NavLink>
        </div>
        <div className="nav-item logout">
          <a
            onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              navigate('/')
            }}
          >
            <div>
              <Logout />
            </div>{' '}
            Logout
          </a>
        </div>
      </aside>
      <Outlet />
    </div>
  )
}

export default NavLayout
