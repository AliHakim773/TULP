const express = require("express")
const {
  addClass,
  searchClass,
  getClassesIn,
  addSchedule,
  getClassInstructors,
  addClassInstructor,
  getClassProfile,
  editClassProfile,
} = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)
router.get("/in", getClassesIn)
router.post("/search", searchClass)
router.post("/schedule", addSchedule)
router.get("/:slug/instructors", getClassInstructors)
router.post("/:slug/instructors", addClassInstructor)
router.get("/:slug/profile", getClassProfile)
router.patch("/:slug/profile", editClassProfile)

module.exports = router
