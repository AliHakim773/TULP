import classAPI from "../../../../core/api/class"

export const streamLoader = async ({ params }) => {
  const res = await classAPI.getClassFeed(params.slug)

  return res
}
