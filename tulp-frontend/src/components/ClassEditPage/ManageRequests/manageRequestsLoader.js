import classAPI from "../../../core/api/class"

export const manageRequestsLoader = async ({ params }) => {
  const res = await classAPI.requestToJoin(params.slug)
  return res
}
