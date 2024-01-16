import classAPI from "../../../core/api/class"

export const manageInstructorsLoader = async ({ params }) => {
  const res = await classAPI.getClassInstructors(params.slug)
  return res
}
