import { sendRequest } from "../axios"

export const channelAPI = {
  getClassChatInfo: async (slug) => {
    const response = await sendRequest({
      route: `channel/class/${slug}`,
    })
    return response
  },
  getClassChannelMessages: async (slug, channelslug) => {
    const response = await sendRequest({
      route: `messages/${slug}/${channelslug}`,
    })
    return response
  },
  getUser: async (id) => {
    const response = await sendRequest({
      route: `messages/${id}`,
    })
    return response
  },
}
