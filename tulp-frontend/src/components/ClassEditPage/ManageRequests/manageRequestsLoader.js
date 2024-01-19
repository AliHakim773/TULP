import classAPI from "../../../core/api/class"

export const manageRequestsLoader = async ({ params }) => {
  const res = await classAPI.getClassRequests(params.slug)
  return res
}
