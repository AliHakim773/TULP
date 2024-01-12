import "./styles.css"
import file from "../../../assets/svgs/file.svg"

const StreamItem = () => {
  return (
    <div className='stream-item w-100 flex border rounded-1'>
      <div className='stream-body'>
        <div className='stream-title'>Post 1</div>
        <div className='stream-content'>
          Hello This is a Post Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officia tempora, voluptas tempore aliquam
          praesentium consequuntur asperiores omnis magnam ab iste minus
          adipisci ea nesciunt nobis aut dolor? Nulla, libero officia!
        </div>
      </div>
      <div className='stream-files'>
        <div className='file-img'>
          <img src={file} alt='file' />
        </div>
        <a
          target='_blank'
          href={`http://localhost:8000/uploads/files/Ali_Hakim_CV_v0.docx`}
          className='download-btn'>
          Download
        </a>
      </div>
    </div>
  )
}

export default StreamItem
