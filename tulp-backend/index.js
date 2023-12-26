require("dotenv").config()
const path = require("path")
const express = require("express")
const cors = require("cors")
const connectToMongoDB = require("./configs/db.config")
const siteRoutes = require("./routes/index.routes")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

siteRoutes(app)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server listining on PORT: ", port)

  connectToMongoDB()
})
