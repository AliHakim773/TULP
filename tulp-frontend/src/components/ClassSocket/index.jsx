import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { socket } from "../../core/socket"

const ClassSocket = () => {
  const { slug } = useParams()

  useEffect(() => {
    socket.connect()
    socket.emit("room:join-room", slug, (msg) => {})

    return () => {
      socket.emit("room:leave-room", slug, (msg) => {})
      socket.disconnect()
    }
  }, [])
  return <Outlet />
}

export default ClassSocket
