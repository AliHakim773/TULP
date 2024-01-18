import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import "./styles.css"

const ClassEditPage = () => {
  const { pathname } = useLocation()
  const { slug } = useParams()

  return (
    <div className='class-edit-page flex'>
      <aside className='class-edit-nav flex column'>
        <NavLink to={"edit"}>Edit Class Profile</NavLink>
        <NavLink to={"instructors"}>Manage Instructors</NavLink>
        <NavLink to={"students"}>Manage Students</NavLink>
        <NavLink to={"requests"}>Manage Requests</NavLink>
        <Link to={`/class/${slug}/stream`}>Back to Class Page</Link>
      </aside>
      <div className='w-100'>
        <Outlet />
      </div>
    </div>
  )
}

export default ClassEditPage
