const express = require("express")
const {
  addClass,
  searchClass,
  getClassesIn,
} = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)
router.get("/in", getClassesIn)
router.post("/search", searchClass)

module.exports = router
