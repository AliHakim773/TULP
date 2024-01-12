const multer = require("multer")
const path = require("path")

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      )
    },
  }),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      req.fileValidationError = `${ext} is not supported`
      return cb(null, false, req.fileValidationError)
    }
    cb(null, true)
  },
})

module.exports = upload
