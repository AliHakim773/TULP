const Class = require("../models/class.model")

const isUserInClass = async (userId, classId) => {
  try {
    const classObject = await Class.findById(classId)
    if (classObject.owner.equals(userId)) {
      return [true, "owner"]
    }
    if (classObject.students.some((objId) => objId.equals(userId))) {
      return [true, "student"]
    }
    if (classObject.instructors.some((objId) => objId.equals(userId))) {
      return [true, "instructor"]
    }
    return [false, "not in class"]
  } catch (e) {
    return [false, e]
  }
}

module.exports = isUserInClass
