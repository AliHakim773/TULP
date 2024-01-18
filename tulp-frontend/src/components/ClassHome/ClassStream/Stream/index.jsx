import Button from "../../../Base/Button"
import StreamItem from "../StreamItem"
import "./styles.css"

const test_post = [
  {
    title: "Post 1",
    content:
      "Hello This is a Post Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora, voluptas tempore aliquam praesentium consequuntur asperiores omnis magnam ab iste minus adipisci ea nesciunt nobis aut dolor? Nulla, libero officia!",
    fileLink: "uploads/files/Ali_Hakim_CV_v0.docx",
    id: "sfgdsfdgsdabgg",
  },
  {
    title: "Post 2",
    content:
      "Hello This is another Post Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora, voluptas tempore aliquam praesentium consequuntur asperiores omnis magnam ab iste minus adipisci ea nesciunt nobis aut dolor? Nulla, libero officia!",
    fileLink: "uploads/files/Ali_Hakim_CV.pdf",
    id: "sfgdsfdgsdasddabgg",
  },
]

const Stream = () => {
  return (
    <div className='class-stream flex column w-100'>
      <div className='class-stream-header'>
        <Button text='Post' />
      </div>
      <div className='stream-main flex column w-100'>
        {test_post.map((post) => {
          return <StreamItem key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default Stream
