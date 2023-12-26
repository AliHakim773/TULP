const Class = require("../models/class.model")
const roleChecker = require("../helpers/roleChecker")
const populateUsersArray = require("../helpers/populateUsersArray")

const addClass = async (req, res) => {
  const id = req.user._id
  const { name, description, isPrivate, instructors } = req.body

  if (!name) return res.status(400).send({ message: "Class name is required" })

  const image = req.file
  const logoUrl = image ? image.path : ""

  try {
    if (instructors?.length !== 0) {
      const instructorsCheck = await roleChecker(instructors, "instructor")
      if (!instructorsCheck.result) {
        const users = await populateUsersArray(instructorsCheck.rejected)
        return res.status(400).send({
          message: "some users dont have instructor role",
          users,
        })
      }
    }

    const classObject = await Class.create({
      owner: id,
      name,
      description,
      isPrivate: isPrivate,
      logoUrl,
      instructors: instructors?.map((id) => id),
    })
    res
      .status(200)
      .send({ class: classObject, message: "Class created successfully" })
  } catch (e) {
    res.status(500).send({ message: `something wen't wrong: ${e}` })
  }
}

module.exports = {
  addClass,
}
