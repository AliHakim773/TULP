const formatTime = (inputDateTime) => {
  const dateObj = new Date(inputDateTime)

  const fullHour = dateObj.getHours()
  const hour = fullHour >= 12 ? fullHour - 12 : fullHour
  const period = fullHour >= 12 ? "PM" : "AM"
  const minute = dateObj.getMinutes()

  const formattedDateTime = `${hour}:${minute
    .toString()
    .padStart(2, "0")} ${period}`

  return formattedDateTime
}

export default formatTime
