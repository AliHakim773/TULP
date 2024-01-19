import ArrowSVG from "../../../assets/svgs/Arrow"

const ChatMain = () => {
  return (
    <div className='border chat-main flex column'>
      <div className='chat-main-body flex'>
        <div className='text'>Hello</div>
        <div className='text'>Hello</div>
        <div className='text'>Hello</div>
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
