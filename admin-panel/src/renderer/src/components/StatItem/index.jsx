import './styles.css'

const StatItem = ({ text = 'Default Text', number = 400, percentage, percentageOf }) => {
  return (
    <div className="stat-item border flex column center gap-1">
      <h3>{text}</h3>
      <div className="stat-number w-100 text-center">
        {number}{' '}
        {percentage ? (
          <span>
            {percentage.toFixed(2)}% of {percentageOf}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default StatItem
