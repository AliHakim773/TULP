const AssignmentSchema = require("../models/assignment.model")
const Class = require("../models/class.model")

const addAssignment = async (req, res) => {
  const { id } = req.user
  const { classId } = req.params
  const { title, content, dueDate } = req.body
  try {
    const assignment = new AssignmentSchema({
      title,
      content,
      dueDate,
      sender: id,
    })

    const classObject = await Class.findById(classId)
    classObject.assignments.push(assignment)
    await classObject.save()

    res.status(201).send(assignment)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  addAssignment,
}
