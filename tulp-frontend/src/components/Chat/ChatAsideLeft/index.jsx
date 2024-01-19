import { useNavigate } from "react-router-dom"
import SettingsDots from "../../Base/SettingsDots"

const ChatAsideLeft = () => {
  const navigate = useNavigate()
  return (
    <div className='border chat-aside chat-aside-left'>
      <div
        className='chat-aside-nav chat-aside-item'
        onClick={() => navigate("/class/test-after/stream")}>
        Back To Class
      </div>
      <div className='chat-aside-header chat-aside-item'>
        Channel <SettingsDots className='chat-aside-settings' />
      </div>
      <div className='chat-aside-item' onClick={() => navigate("general")}>
        Some Channel
      </div>
      <div className='chat-aside-item' onClick={() => navigate("lol")}>
        Some Channel
      </div>
      <div className='chat-aside-item'>Some Channel</div>
    </div>
  )
}

export default ChatAsideLeft
