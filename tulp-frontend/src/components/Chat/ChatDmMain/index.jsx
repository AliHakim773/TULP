import { useState } from "react"
import ArrowSVG from "../../../assets/svgs/Arrow"
import ChatMessage from "../ChatMessage"

const ChatDmMain = () => {
  const [inputValue, setInputValue] = useState("")
  const someUser = {
    username: "ali",
    imageUrl: "uploads/default.png",
    _id: "sdgf",
    time: "Today",
  }

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault()
    }
  }

  return (
    <div className='border chat-main flex column'>
      <div className='chat-main-body flex'>
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
        <ChatMessage text={"Hello"} user={someUser} />
      </div>
      <div className='chat-main-input'>
        <form className='flex'>
          <textarea
            placeholder={`Message general`}
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
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

export default ChatDmMain
