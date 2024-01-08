require("dotenv").config()
const path = require("path")
const express = require("express")
const cors = require("cors")
const connectToMongoDB = require("./configs/db.config")
const siteRoutes = require("./routes/index.routes")
const onConnection = require("./sockets")
const { Server } = require("socket.io")
const { instrument } = require("@socket.io/admin-ui")

const app = express()
app.use(express.static("./node_modules/@socket.io/admin-ui/ui/dist"))

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

siteRoutes(app)

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  console.log("Server listining on PORT: ", port)

  connectToMongoDB()
})

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
})
io.on("connection", onConnection)

instrument(io, {
  auth: false,
  mode: "development",
})

module.exports = { io }
