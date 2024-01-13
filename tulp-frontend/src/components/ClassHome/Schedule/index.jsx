import { Outlet, useNavigate } from "react-router-dom"
import Button from "../../Base/Button"
import ScheduleItem from "../ScheduleItem"
import "./styles.css"

const Schedule = () => {
  const navigate = useNavigate()

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
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
      </div>
    </>
  )
}

export default Schedule
