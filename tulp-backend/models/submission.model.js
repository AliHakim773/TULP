const { default: mongoose } = require("mongoose")

const SubmissionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    requiered: "Sernder ID is requiered",
  },
  files: [
    {
      type: String,
      requiered: "Submissions must not be empty",
    },
  ],
})

module.exports = SubmissionSchema
