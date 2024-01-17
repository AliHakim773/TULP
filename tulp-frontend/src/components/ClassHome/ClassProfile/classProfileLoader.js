import classAPI from "../../../core/api/class"

export const classProfileLoader = async ({ params }) => {
  const res = await classAPI.get(params.slug)

  return { ...res.class }
}
