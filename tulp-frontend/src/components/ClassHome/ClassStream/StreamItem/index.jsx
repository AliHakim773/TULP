import "./styles.css"
import DownloadFile from "../../../../assets/svgs/DownloadFile"

const StreamItem = ({ post }) => {
  const { title, content, file, id } = post
  return (
    <div className='stream-item w-100 flex border rounded-1'>
      <div className='stream-body'>
        <div className='stream-title'>
          {title}
          {file === "" ? (
            ""
          ) : (
            <a
              target='_blank'
              href={`${import.meta.env.VITE_BASE_URL}${file}`}
              className='download-btn'>
              <DownloadFile />
            </a>
          )}
        </div>
        <div className='stream-content'>{content}</div>
      </div>
      <div className='stream-files'></div>
    </div>
  )
}

export default StreamItem
