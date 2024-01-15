import React from "react"
import "./styles.css"
import UserList from "../../components/UserList"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"

const ClassHomePage = () => {
  const { slug } = useParams()
  const { pathname } = useLocation()

  return (
    <div className='class-page flex w-100'>
      <aside className='flex column'>
        <UserList />
        <UserList />
      </aside>
      <div className='class-page-main w-100'>
        <div className='class-page-nav flex'>
          <Link
            className={pathname === `/class/${slug}` ? "active" : ""}
            to={``}>
            Class Stream
          </Link>
          <NavLink to={`assignments`}>Assignments</NavLink>
          <NavLink to={`schedule`}>Schedule</NavLink>
        </div>
        <section className='w-100'>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default ClassHomePage
