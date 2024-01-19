import "./styles.css"

const ChatMessage = ({ user, text }) => {
  return (
    <div className='chat-message flex'>
      <div className='pfp-message'>
        <img src={`http://localhost:8000/${user.imageUrl}`} alt='' />
      </div>
      <div className='message-content'>
        <div className='message-header flex'>
          {user.username} <span className='message-time'>- {user.time}</span>
        </div>
        <div className='message-body'>{text}</div>
      </div>
    </div>
  )
}

export default ChatMessage
