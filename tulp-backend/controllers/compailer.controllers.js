const sendRequest = require("../helpers/axios")
const Class = require("../models/class.model")

const compileCode = async (req, res) => {
  const { content, lang } = req.body

  try {
    if (lang === "python") {
      const output = await sendRequest({
        route: "python",
        method: "POST",
        body: {
          files: [
            {
              name: "main.py",
              content,
            },
          ],
        },
      })
      return res.send({ output: output })
    } else if (lang === "javascript") {
      const output = await sendRequest({
        route: "javascript",
        method: "POST",
        body: {
          files: [
            {
              name: "main.js",
              content,
            },
          ],
        },
      })
      return res.send({ output: output })
    }
  } catch (e) {
    return res.send(e)
  }

  return res.send("error")
}

const createRoom = async (req, res) => {
  const { slug, url } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    classObject.room = url
    await classObject.save()

    res.status(200).send({ url })
  } catch (error) {
    res.status(500).send({ error })
  }
}
const deleteRoom = async (req, res) => {
  const { slug } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    classObject.room = ""
    await classObject.save()

    res.status(200).send({ message: "Room removed" })
  } catch (error) {
    res.status(500).send({ error })
  }
}
const addParticipant = async (req, res) => {
  const { slug, username } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    classObject.participants.push(username)
    await classObject.save()

    res.status(200).send({ participants: classObject.participants })
  } catch (error) {
    res.status(500).send({ error })
  }
}
const removeParticipant = async (req, res) => {
  const { slug, username } = req.body
  try {
    const classObject = await Class.findOne({ slug })
    classObject.participants = classObject.participants.filter(
      (name) => name !== username
    )

    await classObject.save()

    res.status(200).send({ participants: classObject.participants })
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = {
  compileCode,
  createRoom,
  deleteRoom,
  addParticipant,
  removeParticipant,
}
