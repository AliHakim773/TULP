import { Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom"
import Button from "../../Base/Button"
import ScheduleItem from "./ScheduleItem"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"
import { useEffect, useState } from "react"
import { socket } from "../../../core/socket"

const Schedule = () => {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { slug } = useParams()
  const { role } = useSelector(extractUserSlice)
  const [url, setUrl] = useState(data.roomUrl)

  const roomCreateListner = (room) => {
    console.log(room)
    setUrl(room)
  }

  useEffect(() => {
    if (!socket.hasListeners("room:create")) {
      socket.on("room:create", roomCreateListner)
    }
    console.log("hello")
    return () => {
      socket.removeListener("room:create", roomCreateListner)
    }
  }, [])

  return (
    <>
      <Outlet />
      <div className='schedule'>
        <div className='schedule-header flex'>
          {role !== "student" && (
            <>
              <Button
                text='Add'
                onclick={() => {
                  navigate(`add`)
                }}
              />
              <Button
                text='Create'
                onclick={() => {
                  navigate(`/class/${slug}/room`)
                }}
              />
            </>
          )}
          {url && (
            <Button
              text='Join'
              onclick={() => {
                navigate(url)
              }}
            />
          )}
        </div>

        {data.schedule &&
          data.schedule.map((schedule, i) => {
            return <ScheduleItem key={i} schedule={schedule} />
          })}
      </div>
    </>
  )
}

export default Schedule
