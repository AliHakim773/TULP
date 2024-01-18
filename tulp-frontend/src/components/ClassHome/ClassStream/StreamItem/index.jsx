import "./styles.css"
import file from "../../../../assets/svgs/file.svg"

const StreamItem = ({ post }) => {
  const { title, content, fileLink, id } = post
  return (
    <div className='stream-item w-100 flex border rounded-1'>
      <div className='stream-body'>
        <div className='stream-title'>{title}</div>
        <div className='stream-content'>{content}</div>
      </div>
      <div className='stream-files'>
        <div className='file-img'>
          <img src={file} alt='file' />
        </div>
        <a
          target='_blank'
          href={`http://localhost:8000/${fileLink}`}
          className='download-btn'>
          Download
        </a>
      </div>
    </div>
  )
}

export default StreamItem
