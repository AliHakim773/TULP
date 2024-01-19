const instructorMiddleware = async (req, res, next) => {
  if (req.user && req.user.role === "instructor") next()
  else return res.status(401).send({ message: "Unauthorized" })
}

module.exports = instructorMiddleware
