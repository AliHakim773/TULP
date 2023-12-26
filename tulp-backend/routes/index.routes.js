const authMiddleware = require("../middlewares/auth.middleware")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")
const classRoutes = require("./class.routes")

const siteRoutes = async (app) => {
  //auth routes
  app.use("/auth", authRoutes)
  //user routes
  app.use("/user", authMiddleware, userRoutes)
  //class routes
  app.use("/class", authMiddleware, classRoutes)
}

module.exports = siteRoutes
