const express = require("express")
const {
  addClass,
  searchClass,
  getClassesIn,
  addSchedule,
  getClassInstructors,
  getClassProfile,
} = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)
router.get("/in", getClassesIn)
router.post("/search", searchClass)
router.post("/schedule", addSchedule)
router.get("/:slug/instructors", getClassInstructors)
router.get("/:slug/profile", getClassProfile)

module.exports = router
