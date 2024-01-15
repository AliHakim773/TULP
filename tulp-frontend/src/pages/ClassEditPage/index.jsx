import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import "./styles.css"

const ClassEditPage = () => {
  const { pathname } = useLocation()
  const { slug } = useParams()

  return (
    <div className='class-edit-page flex'>
      <aside className='class-edit-nav flex column'>
        <Link
          to={""}
          className={pathname === `/class/${slug}/edit` ? "active" : ""}>
          Edit Class Profile
        </Link>
        <NavLink to={"instructors"}>Manage Instructors</NavLink>
        <NavLink to={"students"}>Manage Students</NavLink>
        <NavLink to={"requests"}>Manage Requests</NavLink>
        <Link to={`/class/${slug}`}>Back to Class</Link>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default ClassEditPage
