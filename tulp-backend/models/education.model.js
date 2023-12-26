const { default: mongoose } = require("mongoose")

const EducationSchema = mongoose.Schema({
  degree: String,
  university: String,
  dateOfGraduation: String,
})

module.exports = EducationSchema
