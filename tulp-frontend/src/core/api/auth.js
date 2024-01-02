import { sendRequest } from "../axios"

export const authAPI = {
  login: async (data) => {
    const response = await sendRequest({
      route: "auth/login",
      method: "POST",
      body: data,
    })
    return response
  },
  register: async (data) => {
    const response = await sendRequest({
      route: "auth/register",
      method: "POST",
      body: data,
    })
    return response
  },
  refresh: async () => {
    const response = await sendRequest({
      route: "auth",
      method: "GET",
    })
    return response
  },
}
