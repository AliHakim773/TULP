import classAPI from "../../../core/api/class"

export const classEditLoader = async ({ params }) => {
  const res = await classAPI.getClassProfile(params.slug)
  return res
}
