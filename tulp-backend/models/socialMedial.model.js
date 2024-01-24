const { default: mongoose } = require("mongoose")

const SocialMediaSchema = mongoose.Schema({
  github: {
    type: String,
    default: "",
  },
  twitter: {
    type: String,
    default: "",
  },
  instagram: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
})

module.exports = SocialMediaSchema
