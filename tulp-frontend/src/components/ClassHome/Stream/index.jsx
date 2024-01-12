import Button from "../../Base/Button"
import StreamItem from "../StreamItem"
import "./styles.css"

const Stream = () => {
  return (
    <div className='class-stream flex column w-100'>
      <div className='class-stream-header'>
        <Button text='Post' />
      </div>
      <div className='stream-main w-100'>
        <StreamItem />
      </div>
    </div>
  )
}

export default Stream
