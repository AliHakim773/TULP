const sendRequest = require("../helpers/axios")

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

module.exports = { compileCode }
