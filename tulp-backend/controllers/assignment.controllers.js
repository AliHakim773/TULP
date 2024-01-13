const Assignment = require("../models/assignment.model")
const AssignmentSchema = require("../models/assignment.model")
const Class = require("../models/class.model")

const addAssignment = async (req, res) => {
  const { id } = req.user
  const { classId } = req.params
  const { title, content, dueDate } = req.body
  try {
    const classObjectvalidate = await Class.findById(classId).populate(
      "assignments"
    )

    const assignments = classObjectvalidate.assignments

    if (assignments.some((assignment) => assignment.title === title))
      return res.status(400).send({ error: "cant have duplicate titles" })

    const assignment = await Assignment.create({
      title,
      content,
      dueDate,
      sender: id,
    })
    const classObject = await Class.findById(classId)
    classObject.assignments.push(assignment._id)
    await classObject.save()

    return res.status(201).send({ assignment })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

module.exports = {
  addAssignment,
}
