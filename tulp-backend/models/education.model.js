const { default: mongoose } = require("mongoose")

const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
    default: "",
  },
  university: {
    type: String,
    default: "",
  },
  dateOfGraduation: {
    type: String,
    default: "",
  },
})

module.exports = EducationSchema
