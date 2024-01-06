const jwt = require("jsonwebtoken")
const fs = require("fs").promises
const User = require("../models/user.model")

const editUser = async (req, res) => {
  const id = req.user._id
  const {
    username,
    password,
    email,
    firstName,
    lastName,
    birth,
    aboutMe,
    education,
    socialMediaLinks,
  } = req.body
  try {
    const prevUser = await User.findById(id)
    const degree = education.degree || prevUser.education.degree
    const university = education.university || prevUser.education.university
    const dateOfGraduation =
      education.dateOfGraduation || prevUser.education.dateOfGraduation

    const newEducation = {
      degree,
      university,
      dateOfGraduation,
    }

    const github = socialMediaLinks.github || prevUser.socialMediaLinks?.github
    const twitter =
      socialMediaLinks.twitter || prevUser.socialMediaLinks?.twitter
    const linkedin =
      socialMediaLinks.linkedin || prevUser.socialMediaLinks?.linkedin
    const facebook =
      socialMediaLinks.facebook || prevUser.socialMediaLinks?.facebook
    const instagram =
      socialMediaLinks.instagram || prevUser.socialMediaLinks?.instagram

    const newLinks = {
      github,
      twitter,
      linkedin,
      facebook,
      instagram,
    }

    const newUsername = username || prevUser.username
    const newPassword = password || prevUser.password
    const newEmail = email || prevUser.email
    const newFirstName = firstName || prevUser.firstName
    const newLastName = lastName || prevUser.lastName
    const newBirth = birth || prevUser.birth
    const newAboutMe = aboutMe || prevUser.aboutMe

    const user = await User.findByIdAndUpdate(
      id,
      {
        username: newUsername,
        password: newPassword,
        email: newEmail,
        firstName: newFirstName,
        lastName: newLastName,
        birth: newBirth,
        aboutMe: newAboutMe,
        education: newEducation,
        socialMediaLinks: newLinks,
      },
      { new: true }
    )

    const { password: hashedPassword, ...userDetails } = user.toJSON()
    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30 days" }
    )

    res.status(200).send({ user: userDetails, token })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id })
    const { password: hashedPassword, ...userDetails } = user.toJSON()

    res.status(200).send({ user: userDetails })
  } catch (e) {
    res.status(500).send({ message: "Something went wrong: " + e })
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    const { password: hashedPassword, ...userDetails } = user.toJSON()

    res.status(200).send({ user: userDetails })
  } catch (e) {
    res.status(500).send({ message: "Something went wrong: " + e })
  }
}

const uploadImage = async (req, res) => {
  const id = req.user._id

  try {
    const user = await User.findById(id)

    let oldImageUrl = user.imageUrl
    let imageUrl = user.imageUrl
    let removeImage = false
    if (req.file) {
      imageUrl = req.file.path
      removeImage = true
    } else if (req.body.removeImage) {
      imageUrl = "uploads/default.png"
      removeImage = true
    }
    if (removeImage) {
      if (oldImageUrl !== "uploads/default.png") {
        fs.unlink(oldImageUrl, (err) => {
          if (err) res.status(404).send({ error: e })
        })
      }
    }

    user.imageUrl = imageUrl
    await user.save()

    res.status(200).send({ imageUrl })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = { editUser, getCurrentUser, getUserById, uploadImage }
