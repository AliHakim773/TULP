import { Link, useParams } from "react-router-dom"
import "./styles.css"

const AssignmentItem = () => {
  const { slug } = useParams()
  return (
    <Link
      to={`/class/${slug}/assignments/asd`}
      className='stream-item assignment-item w-100 flex column border rounded-1'>
      <div className='stream-header flex '>
        <div className='stream-title'>Title</div>
        <div className='stream-due grey-2-txt'>Due: jan 11 7:00 P.M.</div>
      </div>
      <div className='stream-content'>Some Details</div>
    </Link>
  )
}

export default AssignmentItem
