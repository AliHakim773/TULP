import { channelAPI } from "../../../core/api/channel"

export const chatChannelMainLoader = async ({ params }) => {
  const res = await channelAPI.getClassChannelMessages(
    params.slug,
    params.channelslug
  )
  return res
}
