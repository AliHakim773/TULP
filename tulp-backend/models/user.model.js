const { default: mongoose } = require("mongoose")
const bcrypt = require("bcrypt")
const dateFormater = require("../helpers/dateFormater")
const EducationSchema = require("./education.model")

const validateBirth = (birth) => {
  return birth <= dateFormater(Date.now())
}
const validateRole = (role) => {
  return role_enum.includes(role)
}

const role_enum = ["admin", "instructor", "student"]

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: {
      index: true,
      message: "username must be unique.", // Customize the unique constraint error message
    },
    minlength: [3, "Username length must be more than 3"],
    maxlength: [40, "Username length must be less than 40"],
    trim: true,
  },
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Email address is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address, {VALUE} is not a valid email",
    ],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password length must be more than 6"],
    trim: true,
  },
  firstName: {
    type: String,
    required: "First name is required",
    minlength: [2, "First Name length must be more than 2"],
    trim: true,
  },
  lastName: {
    type: String,
    required: "Last name is required",
    minlength: [2, "Last Name length must be more than 2"],
    trim: true,
  },
  birth: {
    type: String,
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
    default: "uploads/default.png",
  },
  aboutMe: {
    type: String,
    maxlength: [400, "About me can't be more than 400 chars"],
    trim: true,
  },
  education: [EducationSchema],
  socialMediaLinks: {
    type: Map,
    of: String,
  },
  classes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Class",
    },
  ],
  enrolledClasses: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Class",
    },
  ],
})

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)
      next()
    } catch (error) {
      console.log("Error in Hasing Password")
      next(error)
    }
  }
})

const User = mongoose.model("User", UserSchema)

module.exports = User
