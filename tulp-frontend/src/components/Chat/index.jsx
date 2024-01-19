import { Outlet } from "react-router-dom"
import ChatAsideLeft from "./ChatAsideLeft"
import ChatAsideRight from "./ChatAsideRight"
import "./styles.css"

const Chat = () => {
  return (
    <div className='chat-page flex'>
      <ChatAsideLeft />
      <Outlet />
      <ChatAsideRight />
    </div>
  )
}

export default Chat
