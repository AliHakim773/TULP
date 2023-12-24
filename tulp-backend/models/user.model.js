const { default: mongoose } = require("mongoose")

const validateBirth = (birth) => {
  return birth < Date.now()
}
const validateRole = (role) => {
  return role_enum.includes(role)
}

const role_enum = ["admin", "instructor", "student"]

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username must be unique"],
    minlength: [
      3,
      "Username length must be more than 3, current length: {VALUE}",
    ],
    maxlength: [
      40,
      "Username length must be less than 40, current length: {VALUE}",
    ],
    trim: true,
  },
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Email address is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [
      6,
      "Password length must be more than 6, current length: {VALUE}",
    ],
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: [
      2,
      "First Name length must be more than 2, current length: {VALUE}",
    ],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: [
      2,
      "Last Name length must be more than 2, current length: {VALUE}",
    ],
    trim: true,
  },
  birth: {
    type: Date,
    validate: [validateBirth, "You haven't been born yet"],
  },
  role: {
    type: String,
    enum: role_enum,
    validate: [validateRole, "{VALUE} role doesnt exist"],
    default: "student",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  aboutMe: {
    type: String,
    maxlength: [400, "About me can't be more than 400 chars"],
    trim: true,
  },
  // education: [],
  // socialMediaLinks: [],
  // classes: [],
  // enrolledClasses: [],
})

const User = mongoose.model("User", UserSchema)

module.exports = User
