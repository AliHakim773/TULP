const express = require("express")
const { addAssignment } = require("../controllers/assignment.controllers")
const router = express.Router()

router.post("/:classId", addAssignment)

module.exports = router
