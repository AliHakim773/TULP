import ArrowSVG from "../../../assets/svgs/Arrow"
import ChatMessage from "../ChatMessage"

const ChatMain = () => {
  const someUser = {
    username: "ali",
    imageUrl: "uploads/default.png",
    _id: "sdgf",
    time: "Today",
  }
  return (
    <div className='border chat-main flex column'>
      <div className='chat-main-body flex'>
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
      </div>
      <div className='chat-main-input'>
        <form className='flex'>
          <input placeholder={`Talk To me`} type='text' />
          <button
            type='submit'
            onClick={(e) => {
              e.preventDefault()
            }}>
            <ArrowSVG className='send-arrow' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatMain
