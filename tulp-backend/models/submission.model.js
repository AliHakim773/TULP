const { default: mongoose } = require("mongoose")

const SubmissionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    requiered: "Sernder ID is requiered",
  },
  file: String,
})

module.exports = SubmissionSchema
