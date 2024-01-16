import React, { useEffect } from "react"
import "./styles.css"
import UserList from "../../components/UserList"
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom"

const ClassHomePage = () => {
  const { slug } = useParams()
  const { pathname } = useLocation()
  const data = useLoaderData()

  return (
    <div className='class-page flex w-100'>
      <aside className='flex column'>
        <UserList title='Instructors' users={data.res.class.instructors} />
        <UserList title='Studnets' users={data.res.class.students} />
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
          <NavLink to={`settings/edit`}>Settings</NavLink>
        </div>
        <section className='w-100'>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default ClassHomePage
