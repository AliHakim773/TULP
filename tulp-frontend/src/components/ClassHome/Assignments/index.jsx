import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import Button from "../../Base/Button"
import AssignmentItem from "./AssignmentItem"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"

const Assignments = () => {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { role } = useSelector(extractUserSlice)

  return (
    <>
      <Outlet />
      <div className='class-assignment flex column w-100'>
        {role !== "studnet" && (
          <div className='class-assignment-header'>
            <Button text='Post' onclick={() => navigate("add")} />
          </div>
        )}

        <div className='assignment-main flex column w-100'>
          {data.assignments.map((assignment) => {
            return (
              <AssignmentItem key={assignment._id} assignment={assignment} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Assignments
