import { NavLink, useNavigate, useParams } from "react-router-dom"
import SettingsDots from "../../Base/SettingsDots"

const ChatAsideLeft = ({ channels }) => {
  const navigate = useNavigate()
  const { slug } = useParams()

  return (
    <div className='border chat-aside chat-aside-left flex column'>
      <div
        className='chat-aside-nav chat-aside-item'
        onClick={() => navigate(`/class/${slug}/stream`)}>
        Back To Class
      </div>
      <div className='chat-aside-header chat-aside-item'>
        Channels: <SettingsDots className='chat-aside-settings' />
      </div>
      {channels.map((channel) => {
        return (
          <NavLink
            key={channel._id}
            to={`channel/${channel.name}`}
            className='chat-aside-item channel-name'>
            {channel.name}
          </NavLink>
        )
      })}
    </div>
  )
}

export default ChatAsideLeft
