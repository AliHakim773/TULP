import React, { useEffect } from "react"
import "./styles.css"
import UserList from "../../components/UserList"
import {
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
  Navigate,
} from "react-router-dom"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice"

const ClassHomePage = () => {
  const data = useLoaderData()
  const { slug } = useParams()
  const { _id } = useSelector(extractUserSlice)

  const isInstructor = data.res.class.instructors.some((instructor) => {
    return instructor._id === _id
  })
  const isStudnet = data.res.class.students.some((student) => {
    return student._id === _id
  })
  if (data.res.class.owner._id !== _id && !isInstructor && !isStudnet) {
    return <Navigate to={`/class-profile/${slug}`} />
  }

  return (
    <div className='class-page flex w-100'>
      <aside className='flex column'>
        <UserList title='Owner' users={[data.res.class.owner]} />
        <UserList title='Instructors' users={data.res.class.instructors} />
        <UserList title='Studnets' users={data.res.class.students} />
      </aside>
      <div className='class-page-main w-100'>
        <div className='class-page-nav flex'>
          <NavLink to={`stream`}>Class Stream</NavLink>
          <NavLink to={`assignments`}>Assignments</NavLink>
          <NavLink to={`schedule`}>Schedule</NavLink>
          <NavLink to={`chat`}>Chat</NavLink>
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
