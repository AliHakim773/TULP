const { default: mongoose } = require("mongoose")

const SocialMediaSchema = mongoose.Schema({
  github: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  linkedin: {
    type: String,
    trim: true,
  },
})

module.exports= SocialMediaSchema