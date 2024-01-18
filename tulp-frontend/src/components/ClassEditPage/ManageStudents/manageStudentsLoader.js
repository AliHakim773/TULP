import classAPI from "../../../core/api/class"

export const manageStudentsLoader = async ({ params }) => {
  const res = await classAPI.getStudents(params.slug)
  return res
}
