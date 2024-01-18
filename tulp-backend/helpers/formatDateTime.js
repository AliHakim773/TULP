const formatDateTime = (inputDateTime) => {
  const dateObj = new Date(inputDateTime)

  const month = dateObj.toLocaleString("default", { month: "short" })
  const day = dateObj.getDate()
  const fullHour = dateObj.getHours()
  const hour = fullHour >= 12 ? fullHour - 12 : fullHour
  const period = fullHour >= 12 ? "PM" : "AM"
  const minute = dateObj.getMinutes()

  const formattedDateTime = `${month} ${day} ${hour}:${minute
    .toString()
    .padStart(2, "0")} ${period}`

  return formattedDateTime
}

module.exports = formatDateTime
