const authMiddleware = require("../middlewares/auth.middleware")
const authRoutes = require("./auth.routes")
const userRoutes = require("./user.routes")

const siteRoutes = async (app) => {
  //auth routes
  app.use("/auth", authRoutes)
  //user routes
  app.use("/user", authMiddleware, userRoutes)
}

module.exports = siteRoutes
