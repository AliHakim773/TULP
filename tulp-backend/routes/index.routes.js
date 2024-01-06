const authMiddleware = require("../middlewares/auth.middleware")
const instructorMiddleware = require("../middlewares/instructor.middleware")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")
const classRoutes = require("./class.routes")
const channelRoutes = require("./channel.routes")
const assignmentRoutes = require("./assignment.routes")
const postRoutes = require("./post.routes")

const siteRoutes = async (app) => {
  //auth routes
  app.use("/auth", authRoutes)
  //user routes
  app.use("/user", authMiddleware, userRoutes)
  //class routes
  app.use("/class", authMiddleware, classRoutes)
  //channel routes
  app.use("/channel", authMiddleware, instructorMiddleware, channelRoutes)
  //assignment routes
  app.use("/assignment", authMiddleware, instructorMiddleware, assignmentRoutes)
  //post routes
  app.use("/post", authMiddleware, postRoutes)
}

module.exports = siteRoutes
