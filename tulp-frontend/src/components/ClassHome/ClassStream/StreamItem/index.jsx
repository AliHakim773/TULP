import "./styles.css"
import DownloadFile from "../../../../assets/svgs/download-cloud"

const StreamItem = ({ post }) => {
  const { title, content, file, id } = post
  return (
    <div className='stream-item w-100 flex border rounded-1'>
      <div className='stream-body w-100'>
        <div className='stream-title flex'>
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
    </div>
  )
}

export default StreamItem
