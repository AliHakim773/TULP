const User = require("../models/user.model")

const populateUsersArray = async (arr) => {
  const users = []
  await Promise.all(
    arr.map(async (id) => {
      const user = await User.findById(id)
      users.push(user.username)
    })
  )
  return users
}

module.exports = populateUsersArray
