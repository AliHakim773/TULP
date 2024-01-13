import "./styles.css"

const AssignmentItem = () => {
  return (
    <div className='stream-item assignment-item w-100 flex column border rounded-1'>
      <div className='stream-header flex '>
        <div className='stream-title'>Title</div>
        <div className='stream-due grey-2-txt'>Due: jan 11 7:00 P.M.</div>
      </div>
      <div className='stream-content'>Some Details</div>
    </div>
  )
}

export default AssignmentItem
