const studnetMiddleware = async (req, res, next) => {
  if (req.user.role === "studnet") next()
  else return res.status(401).send({ message: "Unauthorized" })
}

module.exports = studnetMiddleware
