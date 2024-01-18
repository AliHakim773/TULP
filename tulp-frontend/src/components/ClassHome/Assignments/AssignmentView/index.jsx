import { useLoaderData } from "react-router-dom"
import DownloadFile from "../../../../assets/svgs/DownloadFile"
import "./styles.css"
import { useState } from "react"
import toast from "react-hot-toast"
import classAPI from "../../../../core/api/class"

const AssignmentView = () => {
  const data = useLoaderData()
  const [file, setFile] = useState()

  const handleOnChange = (e) => {
    setFile(e.target.files[0])
  }
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("file", file)
    try {
      const res = await classAPI.submitAssignment(data._id, formData)
      toast.success("Assignment Submited")
    } catch (e) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className='assignment-view w-100 flex border rounded-1'>
      <div className='assignment-body'>
        <div className='title'>
          {data.title}
          {data.file === "" ? (
            ""
          ) : (
            <a
              target='_blank'
              href={`http://localhost:8000/${data.file}`}
              className='download-btn'>
              <DownloadFile />
            </a>
          )}
        </div>
        <p>{data.content}</p>
      </div>
      <form className='assignment-upload flex column'>
        <div className='stream-due grey-2-txt'>Due: {data.dueDate}</div>
        <div className='upload-assignment rounded-1 blue-2-bg'>
          Upload File
          <input type='file' id='uplaod-assigment' onChange={handleOnChange} />
        </div>
        <button
          type='submit'
          className='upload-assignment assignmrnt-submit-btn'
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AssignmentView
