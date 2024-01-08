import { sendRequest } from "../axios"

export const postAPI = {
  get: async () => {
    const response = await sendRequest({
      route: "post",
      method: "GET",
    })
    return response
  },
  post: async (data) => {
    const response = await sendRequest({
      route: "post",
      method: "POST",
      body: data,
    })
    return response
  },
  like: async (data) => {
    const response = await sendRequest({
      route: "post/like",
      method: "POST",
      body: data,
    })
    return response
  },
}
