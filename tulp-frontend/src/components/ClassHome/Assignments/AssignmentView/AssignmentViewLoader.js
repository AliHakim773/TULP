import classAPI from "../../../../core/api/class"

export const assignmentViewLoader = async ({ params }) => {
  const res = await classAPI.getAssignment(params.titleSlug)
  return res.assignment
}
