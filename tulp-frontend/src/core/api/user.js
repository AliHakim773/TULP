import axios from "axios"
import { sendRequest } from "../axios"
import { local } from "../helpers/localstorage"

export const userApi = {
  edit: async (data) => {
    const response = await sendRequest({
      route: "user",
      method: "PATCH",
      body: data,
    })
    return response
  },
  upload: async (data) => {
    const token = local("token")

    const response = await axios.request({
      url: "user/upload",
      method: "PATCH",
      data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })

    return response.data
  },
  searchInstructors: async (data) => {
    const response = await sendRequest({
      route: "user/search",
      method: "POST",
      body: data,
    })
    return response
  },
}
