import { channelAPI } from "../../core/api/channel"

export const chatLoader = async ({ params }) => {
  const res = await channelAPI.getClassChatInfo(params.slug)
  return res
}
