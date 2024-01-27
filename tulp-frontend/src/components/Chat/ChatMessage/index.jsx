import "./styles.css"

const ChatMessage = ({ user, text }) => {
  if (user === null || user === undefined) return
  return (
    <div className='chat-message flex'>
      <div className='pfp-message'>
        <img src={`${import.meta.env.VITE_BASE_URL}${user.imageUrl}`} alt='' />
      </div>
      <div className='message-content'>
        <div className='message-header flex'>
          {user.username} <span className='message-time'>- {user.time}</span>
        </div>
        <pre className='message-body'>{text}</pre>
      </div>
    </div>
  )
}

export default ChatMessage
