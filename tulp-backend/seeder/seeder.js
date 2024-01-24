const { default: mongoose } = require("mongoose")
const User = require("../models/user.model")

const seedDB = async () => {
  // mongoose connecttion
  mongoose
    .connect(process.env.MONGODB_URL)
    .catch((err) => {
      console.log(err.stack)
      process.exit(1)
    })
    .then(() => {
      console.log("connected to db in development environment")
    })

  // seed admin
  const existingAdmin = await User.findOne({ role: "admin" })
  if (!existingAdmin) {
    await User.create({
      username: "admin",
      password: "password",
      email: "alihakime7732@gmail.com",
      firstName: "Ali",
      lastName: "Hakim",
      role: "admin",
    })
    console.log("Admin user seeded successfully.")
  } else {
    console.log("Admin user already exists.")
  }

  // mongoose disconnect
  mongoose.connection.close()
}

module.exports = seedDB
