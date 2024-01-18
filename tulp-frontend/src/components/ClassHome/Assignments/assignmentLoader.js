import classAPI from "../../../core/api/class"

export const assignmentLoader = async ({ params }) => {
  const res = await classAPI.getClassAssignments(params.slug)
  return res
}
