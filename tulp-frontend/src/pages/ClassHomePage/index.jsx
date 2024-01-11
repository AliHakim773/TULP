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
      <div className='class-page-main'>
        <div className='class-page-nav flex'>
          <Link
            className={pathname === `/class/${slug}` && "active"}
            to={`/class/${slug}`}>
            Class Stream
          </Link>
          <NavLink to={`/class/${slug}/assignments`}>Assignments</NavLink>
        </div>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default ClassHomePage
