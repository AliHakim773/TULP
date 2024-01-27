import { useLoaderData } from "react-router-dom"
import DownloadCloud from "../../../../assets/svgs/download-cloud"
import "./styles.css"
import { useState } from "react"
import toast from "react-hot-toast"
import classAPI from "../../../../core/api/class"
import { extractUserSlice } from "../../../../core/redux/userSlice"
import { useSelector } from "react-redux"

const AssignmentView = () => {
  const data = useLoaderData()
  const [file, setFile] = useState()
  const { role } = useSelector(extractUserSlice)

  const handleOnChange = (e) => {
    setFile(e.target.files[0])
  }
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("file", file)
    try {
      await classAPI.submitAssignment(data._id, formData)
      toast.success("Assignment Submited")
    } catch (e) {
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <div className='assignment-view w-100 flex border rounded-1'>
        <div className='assignment-body'>
          <div className='title flex'>
            {data.title}
            {data.file === "" ? (
              ""
            ) : (
              <a
                target='_blank'
                href={`${import.meta.env.VITE_BASE_URL}${data.file}`}
                className='download-btn'>
                <DownloadCloud />
              </a>
            )}
          </div>
          <p>{data.content}</p>
        </div>
        <form className='assignment-upload flex column'>
          <div className='stream-due grey-2-txt'>Due: {data.dueDate}</div>
          {role === "student" && (
            <>
              <div className='upload-assignment rounded-1 blue-2-bg'>
                Upload File
                <input
                  type='file'
                  id='uplaod-assigment'
                  onChange={handleOnChange}
                />
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
            </>
          )}
        </form>
      </div>
      <div className='submissions flex'>
        {role !== "student" &&
          data.submissions.map((submission) => {
            if (submission.sender === null || submission.sender === undefined)
              return
            return (
              <div
                key={submission._id}
                className='assignment-submit border rounded-1 flex'>
                <div className='pfp-img'>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${
                      submission.sender.imageUrl
                    }`}
                    alt={submission.sender.username}
                  />
                </div>
                <div className='username-assignment'>
                  {submission.sender.username}
                </div>
                <a
                  href={`${import.meta.env.VITE_BASE_URL}${submission.file}`}
                  className='download-submission'>
                  <DownloadCloud />
                </a>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default AssignmentView
