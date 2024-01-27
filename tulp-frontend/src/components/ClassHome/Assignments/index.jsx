import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import Button from "../../Base/Button"
import AssignmentItem from "./AssignmentItem"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"
import EmptyItem from "../EmptyItem"

const Assignments = () => {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { role } = useSelector(extractUserSlice)

  return (
    <>
      <Outlet />
      <div className='class-assignment flex column w-100'>
        {role !== "student" && (
          <div className='class-assignment-header'>
            <Button text='Post' onclick={() => navigate("add")} />
          </div>
        )}

        <div className='assignment-main flex column w-100'>
          {data.assignment.length === 0 ? (
            <EmptyItem />
          ) : (
            <>
              {data.assignments.toReversed().map((assignment) => {
                return (
                  <AssignmentItem
                    key={assignment._id}
                    assignment={assignment}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Assignments
