import axios from 'axios'
import { local } from '../helpers/localStorage'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const sendRequest = async ({ route, method = 'GET', body }) => {
  const token = local('token')

  const authorizationHeader = token

  console.log(import.meta.env.VITE_BASE_URL)
  const response = await axios.request({
    url: route,
    method,
    data: body,
    headers: {
      Authorization: authorizationHeader,
      'Content-Type': 'application/json'
    }
  })

  return response.data
}
