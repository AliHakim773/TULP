import { sendRequest } from "../axios"

export const channelAPI = {
  getClassChatInfo: async (slug) => {
    const response = await sendRequest({
      route: `channel/class/${slug}`,
    })
    return response
  },
}
