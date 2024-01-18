const saparateDates = (objects) => {
  const today = new Date()
  const todayDateString = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`

  const filteredObjects = objects.filter((obj) => {
    const endTimeDate = new Date(obj.endTime)
    return endTimeDate > today
  })

  const result = filteredObjects.reduce((acc, obj) => {
    const startDate = new Date(obj.startTime).toISOString().split("T")[0]
    const key = startDate === todayDateString ? "today" : startDate

    const existingGroup = acc.find((group) => group.date === key)

    if (existingGroup) {
      existingGroup.schedules.push(obj)
    } else {
      acc.push({ date: key, schedules: [obj] })
    }

    return acc
  }, [])

  // Sort the result by start date
  result.sort((a, b) => {
    if (a.date === "today") return -1
    if (b.date === "today") return 1
    return new Date(a.date) - new Date(b.date)
  })

  return result
}

export default saparateDates
