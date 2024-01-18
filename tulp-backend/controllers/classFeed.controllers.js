const formatDateTime = require("../helpers/formatDateTime")
const Assignment = require("../models/assignment.model")
const Class = require("../models/class.model")

const postToFeed = async (req, res) => {
  const { slug } = req.params
  const filePath = req.file.path
  const { title, content } = req.body

  try {
    const classObject = await Class.findOne({ slug })

    const post = {
      title,
      content,
      file: filePath,
    }

    classObject.classFeed.push(post)
    await classObject.save()

    return res.status(200).send({ class: classObject })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const getClassFeed = async (req, res) => {
  const { slug } = req.params
  try {
    const classObject = await Class.findOne({ slug })
    return res.status(200).send({ feed: classObject.classFeed })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const addAssignment = async (req, res) => {
  const { slug } = req.params
  let filePath = ""
  if (req.file) {
    filePath = req.file.path
  }
  const { title, content } = req.body
  const formatedDueDate = req.body.dueDate
    ? formatDateTime(req.body.dueDate)
    : "---"
  try {
    console.log("yo")
    const classObject = await Class.findOne({ slug }).populate("assignments")

    if (classObject.assignments.some((ass) => ass.title === title)) {
      return res.status(400).send({ message: "title already exist" })
    }

    const assignment = await Assignment.create({
      title,
      content,
      dueDate: formatedDueDate,
      file: filePath,
    })

    classObject.assignments.push(assignment)
    await classObject.save()

    return res.status(200).send({ class: classObject })
  } catch (error) {
    return res.status(500).send({ message: error })
  }
}

const getClassAssignments = async (req, res) => {
  const { slug } = req.params
  try {
    const classObject = await Class.findOne({ slug }).populate({
      path: "assignments",
      populate: {
        path: "submissions.sender",
        model: "User",
        select: "username imageUrl _id",
      },
    })
    return res.status(200).send({ assignments: classObject.assignments })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const getAssignment = async (req, res) => {
  const { slug } = req.params
  try {
    const assignment = await Assignment.findOne({ slug }).populate({
      path: "submissions",
      populate: {
        path: "sender",
        model: "User",
        select: "username _id imageUrl",
      },
    })
    return res.status(200).send({ assignment: assignment })
  } catch (error) {
    res.status(500).send({ error })
  }
}

const submitAssignment = async (req, res) => {
  const { _id } = req.user
  const { assignmentId } = req.params
  if (!req.file) {
    return res.status(400).send({ message: "You need to upload a file" })
  }
  const filePath = req.file.path
  // TODO: Check Student if in class
  try {
    const assignment = await Assignment.findById(assignmentId)

    await Assignment.updateOne(
      { _id: assignmentId },
      { $pull: { submissions: { sender: _id } } }
    )

    const submission = await assignment.submissions.create({
      sender: _id,
      file: filePath,
    })

    assignment.submissions.push(submission)

    await assignment.save()

    res.status(200).send({ submissions: assignment.submissions })
  } catch (error) {
    res.status(500).send({ message: error })
  }
}

module.exports = {
  postToFeed,
  getClassFeed,
  addAssignment,
  getClassAssignments,
  getAssignment,
  submitAssignment,
}
