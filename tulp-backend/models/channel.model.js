const { default: mongoose } = require("mongoose")
const MessageSchema = require("./message.model")

const validatePermission = (permission) => {
  return permission_enum.includes(permission)
}

const permission_enum = ["instructor", "student"]

const ChannelSchema = mongoose.Schema({
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "Class",
    required: "Class id is required",
  },
  name: {
    type: String,
    minlength: [3, "Name length must be more than 3"],
    maxlength: [40, "Name length must be less than 40"],
  },
  permission: {
    type: String,
    enum: permission_enum,
    validate: [validatePermission, "{VALUE} permission doesnt exist"],
    default: "student",
  },
  messages: [MessageSchema],
})

const Channel = mongoose.model("Channel", ChannelSchema)

module.exports = Channel