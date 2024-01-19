import { NavLink, useNavigate } from "react-router-dom"
import SettingsDots from "../../Base/SettingsDots"

const ChatAsideLeft = ({ channels }) => {
  const navigate = useNavigate()

  return (
    <div className='border chat-aside chat-aside-left flex column'>
      <div
        className='chat-aside-nav chat-aside-item'
        onClick={() => navigate("/class/test-after/stream")}>
        Back To Class
      </div>
      <div className='chat-aside-header chat-aside-item'>
        Channel <SettingsDots className='chat-aside-settings' />
      </div>
      {channels.map((channel) => {
        return (
          <NavLink
            key={channel._id}
            to={channel.name}
            className='chat-aside-item'>
            {channel.name}
          </NavLink>
        )
      })}
    </div>
  )
}

export default ChatAsideLeft
