const express = require("express")
const {
  addClass,
  searchClass,
  getClassesIn,
  addSchedule,
  getClassInstructors,
  addClassInstructor,
  removeClassInstructor,
  getClassProfile,
  editClassProfile,
  getClass,
  requestToJoin,
  getRequests,
  acceptRequest,
  rejectRequest,
} = require("../controllers/class.controllers")
const router = express.Router()

router.post("/", addClass)
router.get("/:slug", getClass)
router.get("/in", getClassesIn)
router.post("/search", searchClass)
router.post("/request-to-join", requestToJoin)
router.get("/:slug/get-request", getRequests)
router.post("/:slug/accept-request", acceptRequest)
router.post("/:slug/reject-request", rejectRequest)
router.post("/schedule", addSchedule)
router.get("/:slug/instructors", getClassInstructors)
router.post("/:slug/instructors", addClassInstructor)
router.delete("/:slug/instructors", removeClassInstructor)
router.get("/:slug/profile", getClassProfile)
router.patch("/:slug/profile", editClassProfile)

module.exports = router
