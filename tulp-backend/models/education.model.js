const { default: mongoose } = require("mongoose")

const EducationSchema = new mongoose.Schema({
  degree: String,
  university: String,
  dateOfGraduation: String,
})

module.exports = EducationSchema
