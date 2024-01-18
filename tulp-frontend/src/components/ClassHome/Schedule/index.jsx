import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import Button from "../../Base/Button"
import ScheduleItem from "./ScheduleItem"
import "./styles.css"

const Schedule = () => {
  const navigate = useNavigate()
  const data = useLoaderData()

  return (
    <>
      <Outlet />
      <div className='schedule'>
        <div className='schedule-header flex'>
          <Button
            text='Add'
            onclick={() => {
              navigate(`add`)
            }}
          />
          <Button text='Enter' />
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
