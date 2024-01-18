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

module.exports = { postToFeed, getClassFeed }
