const express = require("express")
const {
  addClass,
  searchClass,
  getClassesIn,
  addSchedule,
} = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)
router.get("/in", getClassesIn)
router.post("/search", searchClass)
router.post("/schedule", addSchedule)

module.exports = router
