const authMiddleware = require("../middlewares/auth.middleware")
const instructorMiddleware = require("../middlewares/instructor.middleware")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")
const classRoutes = require("./class.routes")
const channelRoutes = require("./channel.routes")
const postRoutes = require("./post.routes")
const messagesRoutes = require("./messages.routes")
const compileRoutes = require("./compile.routes")
const adminRoutes = require("./admin.routes")

const siteRoutes = async (app) => {
  //healty route
  app.get("/health", (req, res) => res.status(200).send(true))
  //auth routes
  app.use("/auth", authRoutes)
  //user routes
  app.use("/user", authMiddleware, userRoutes)
  //class routes
  app.use("/class", authMiddleware, classRoutes)
  //channel routes
  app.use("/channel", authMiddleware, channelRoutes)
  //post routes
  app.use("/post", authMiddleware, postRoutes)
  //messages routes
  app.use("/messages", authMiddleware, messagesRoutes)
  //compile routes
  app.use("/compile", compileRoutes)
  //admin routes
  //auth routes
  app.use("/admin", adminRoutes)
  //admin routes
}

module.exports = siteRoutes
