import axios from "axios"
import { local } from "../helpers/localstorage"
import GLOBAL from "../Global"

axios.defaults.baseURL = GLOBAL.BASE_URL

export const sendRequest = async ({ route, method = "GET", body }) => {
  const token = local("token")

  const authorizationHeader = token

  const response = await axios.request({
    url: route,
    method,
    data: body,
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
  })

  return response.data
}
