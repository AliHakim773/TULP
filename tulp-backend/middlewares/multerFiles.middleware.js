const multer = require("multer")
const path = require("path")

const uploadFiles = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/files")
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      )
    },
  }),
})

module.exports = uploadFiles
