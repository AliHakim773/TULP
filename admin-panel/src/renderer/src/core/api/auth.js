import { sendRequest } from '../axios'

const authAPI = {
  login: async (data) => {
    const res = sendRequest({
      route: 'admin/auth/login',
      method: 'POST',
      body: data
    })
    return res
  }
}

export default authAPI
