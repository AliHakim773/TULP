import ArrowSVG from "../../../assets/svgs/Arrow"
import ChatMessage from "../ChatMessage"
import useChatChannel from "./useChatChannel"

const ChatChannelMain = () => {
  const {
    handleSendMessage,
    handleKeyDown,
    handleOnInputChange,
    inputValue,
    messages,
    disabled,
  } = useChatChannel()

  return (
    <div className='border chat-main flex column'>
      <div className='chat-main-body flex'>
        {messages.toReversed().map((m) => {
          return <ChatMessage key={m._id} text={m.content} user={m.senderId} />
        })}
      </div>
      <div className='chat-main-input'>
        <form className='flex'>
          <textarea
            disabled={disabled}
            placeholder={
              disabled ? "This is a Read Only Channel" : `Message general`
            }
            type='text'
            value={inputValue}
            onChange={handleOnInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            type='submit'
            disabled={disabled}
            onClick={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}>
            <ArrowSVG className='send-arrow' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatChannelMain
