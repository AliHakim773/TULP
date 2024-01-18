import { Link, useParams } from "react-router-dom"
import "./styles.css"

const AssignmentItem = ({ assignment }) => {
  return (
    <Link
      to={assignment.slug}
      className='stream-item assignment-item w-100 flex column border rounded-1'>
      <div className='stream-header flex '>
        <div className='stream-title'>{assignment.title}</div>
        <div className='stream-due grey-2-txt'>Due: {assignment.dueDate}</div>
      </div>
      <div className='stream-content'>{assignment.content}</div>
    </Link>
  )
}

export default AssignmentItem
