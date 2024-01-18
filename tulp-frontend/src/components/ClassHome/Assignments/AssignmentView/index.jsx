import { useParams } from "react-router-dom"
import file from "../../../../assets/svgs/file.svg"
import "./styles.css"

const AssignmentView = () => {
  const { titleSlug } = useParams()
  return (
    <div className='assignment-view w-100 flex border rounded-1'>
      <div className='assignment-body'>
        <div className='title'>asd</div>
        <p>Some content Here</p>
        <div className='assignment-file flex column center'>
          <div className='file-img'>
            <img src={file} alt='file' />
          </div>
          <a
            target='_blank'
            href={`http://localhost:8000/`}
            className='download-btn'>
            Download
          </a>
        </div>
      </div>
      <div className='assignment-upload flex column'>
        <div className='stream-due grey-2-txt'>Due: jan 11 7:00 P.M.</div>
        <a className='download-btn'>Upload File</a>
        <span>Submited</span>
      </div>
    </div>
  )
}

export default AssignmentView
