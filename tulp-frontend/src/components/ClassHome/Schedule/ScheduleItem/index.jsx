import formatTime from "../../../../core/helpers/formatTime"
import "./styles.css"

const ScheduleItem = ({ schedule }) => {
  return (
    <div className='schedule-table border rounded-1 flex column'>
      <div className='schedule-row flex'>
        <div className='schedule-cell'>
          {schedule.date !== "today" ? (
            <span className='schedule-date'>Date: </span>
          ) : null}
          {schedule.date}
        </div>
        <div className='schedule-cell'>From</div>
        <div className='schedule-cell'>To</div>
        <div className='schedule-cell'>Description</div>
      </div>
      {schedule.schedules.map((s) => {
        return (
          <div className='schedule-row flex'>
            <div className='schedule-cell'>{s.title}</div>
            <div className='schedule-cell'>{formatTime(s.startTime)}</div>
            <div className='schedule-cell'>{formatTime(s.endTime)}</div>
            <div className='schedule-cell'>{s.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ScheduleItem
