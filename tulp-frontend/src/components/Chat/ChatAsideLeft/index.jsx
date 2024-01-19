import SettingsDots from "../../Base/SettingsDots"

const ChatAsideLeft = () => {
  return (
    <div className='border chat-aside chat-aside-left'>
      <div className='chat-aside-nav chat-aside-item'>Back To Class</div>
      <div className='chat-aside-header chat-aside-item'>
        Channel <SettingsDots className='chat-aside-settings' />
      </div>
      <div className='chat-aside-item'>Some Channel</div>
      <div className='chat-aside-item'>Some Channel</div>
      <div className='chat-aside-item'>Some Channel</div>
    </div>
  )
}

export default ChatAsideLeft
