import { Outlet, useLoaderData } from "react-router-dom"
import ChatAsideLeft from "./ChatAsideLeft"
import ChatAsideRight from "./ChatAsideRight"
import "./styles.css"

const Chat = () => {
  const data = useLoaderData()
  return (
    <div className='chat-page flex'>
      <ChatAsideLeft channels={data.channels} />
      <Outlet />
      <ChatAsideRight people={data.users} />
    </div>
  )
}

export default Chat
