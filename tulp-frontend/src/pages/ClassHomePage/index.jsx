import React from "react"
import "./styles.css"
import UserList from "../../components/UserList"
import { NavLink, Outlet, useParams } from "react-router-dom"

const ClassHomePage = () => {
  const { slug } = useParams()

  return (
    <div className='class-page flex w-100'>
      <aside className='flex column'>
        <UserList />
        <UserList />
      </aside>
      <div className='class-page-main'>
        <div className='class-page-nav flex column'>
          <NavLink to={`/class/${slug}`}>Class Stream</NavLink>
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
