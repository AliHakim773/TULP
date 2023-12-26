const User = require("../models/user.model")

const roleChecker = async (arr, role) => {
  const rejected = []
  await Promise.all(
    arr.map(async (id) => {
      const user = await User.findById(id)
      console.log(user.role)
      if (role !== user.role) rejected.push(id)
      console.log(rejected)
    })
  )
  if (rejected.length === 0) return { result: true }
  else return { result: false, rejected }
}

module.exports = roleChecker
