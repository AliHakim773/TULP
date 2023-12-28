const express = require("express")
const { addAssignment } = require("../controllers/assignment.controller")
const router = express.Router()

router.post("/:classId", addAssignment)

module.exports = router
