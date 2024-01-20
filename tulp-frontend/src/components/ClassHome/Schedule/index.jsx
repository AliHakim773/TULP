import { Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom"
import Button from "../../Base/Button"
import ScheduleItem from "./ScheduleItem"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"

const Schedule = () => {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { slug } = useParams()
  const { role } = useSelector(extractUserSlice)

  return (
    <>
      <Outlet />
      <div className='schedule'>
        <div className='schedule-header flex'>
          {role !== "student" && (
            <Button
              text='Add'
              onclick={() => {
                navigate(`add`)
              }}
            />
          )}
          <Button
            text='Join'
            onclick={() => {
              navigate(`/class/${slug}/room`)
            }}
          />
        </div>

        {data &&
          data.map((schedule, i) => {
            return <ScheduleItem key={i} schedule={schedule} />
          })}
      </div>
    </>
  )
}

export default Schedule
