import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import Button from "../../../Base/Button"
import StreamItem from "../StreamItem"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../../core/redux/userSlice"

const Stream = () => {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { role } = useSelector(extractUserSlice)

  return (
    <>
      <Outlet />
      <div className='class-stream flex column w-100'>
        {role !== "student" && (
          <div className='class-stream-header'>
            <Button text='Post' onclick={() => navigate("add")} />
          </div>
        )}

        <div className='stream-main flex column w-100'>
          {data.feed.map((post) => {
            return <StreamItem key={post._id} post={post} />
          })}
        </div>
      </div>
    </>
  )
}

export default Stream
