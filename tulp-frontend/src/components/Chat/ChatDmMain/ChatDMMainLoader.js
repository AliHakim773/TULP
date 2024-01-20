import { channelAPI } from "../../../core/api/channel"

export const chatDMMainLoader = async ({ params }) => {
  const res = await channelAPI.getDMs(params.slug, params.username)
  return res
}
