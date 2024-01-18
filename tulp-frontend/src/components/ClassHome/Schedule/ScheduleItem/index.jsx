import "./styles.css"

const ScheduleItem = () => {
  return (
    <div className='schedule-table border rounded-1 flex column'>
      <div className='schedule-row flex'>
        <div className='schedule-cell'>Today</div>
        <div className='schedule-cell'>From</div>
        <div className='schedule-cell'>To</div>
        <div className='schedule-cell'>Description</div>
      </div>
      <div className='schedule-row flex'>
        <div className='schedule-cell'>Some Class</div>
        <div className='schedule-cell'>10:30 P.M.</div>
        <div className='schedule-cell'>12:00 A.M.</div>
        <div className='schedule-cell'>Night Club</div>
      </div>
      <div className='schedule-row flex'>
        <div className='schedule-cell'>Some Class</div>
        <div className='schedule-cell'>10:30 P.M.</div>
        <div className='schedule-cell'>12:00 A.M.</div>
        <div className='schedule-cell'>Night Club</div>
      </div>
    </div>
  )
}

export default ScheduleItem
