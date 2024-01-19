import "./styles.css"

const SettingsDots = ({ className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`settings-dots flex column center ${className}`}>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  )
}

export default SettingsDots
