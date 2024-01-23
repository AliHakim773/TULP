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
  getStudentss,
  removeClassStudent,
  getSchedule,
} = require("../controllers/class.controllers")
const instructorMiddleware = require("../middlewares/instructor.middleware")
const uploadFiles = require("../middlewares/multerFiles.middleware")
const {
  postToFeed,
  getClassFeed,
  addAssignment,
  getClassAssignments,
  getAssignment,
  submitAssignment,
} = require("../controllers/classFeed.controllers")
const router = express.Router()

router.post("/", addClass)
router.get("/in", getClassesIn)
router.post("/search", searchClass)
router.post("/request-to-join", requestToJoin)
router.get("/:slug/students", getStudentss)
router.get("/:slug", getClass)
router.delete("/:slug/students", removeClassStudent)
router.get("/:slug/get-request", getRequests)
router.post("/:slug/accept-request", acceptRequest)
router.post("/:slug/reject-request", rejectRequest)
router.post("/schedule", addSchedule)
router.get("/schedule/:slug", getSchedule)
router.get("/:slug/instructors", getClassInstructors)
router.post("/:slug/instructors", addClassInstructor)
router.delete("/:slug/instructors", removeClassInstructor)
router.get("/:slug/profile", getClassProfile)
router.patch("/:slug/profile", editClassProfile)

router.post(
  "/:slug/feed",
  instructorMiddleware,
  uploadFiles.single("file"),
  postToFeed
)
router.get("/:slug/feed", getClassFeed)
router.post("/:slug/assignment", uploadFiles.single("file"), addAssignment)
router.get("/:slug/assignment", getClassAssignments)
router.get("/assignment/:slug", getAssignment)
router.post(
  "/assignment/:assignmentId",
  uploadFiles.single("file"),
  submitAssignment
)

module.exports = router
