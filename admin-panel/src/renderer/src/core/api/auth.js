import { sendRequest } from '../axios'

const authAPI = {
  login: async (data) => {
    const res = sendRequest({
      route: 'admin/auth/login',
      method: 'POST',
      body: data
    })
    return res
  },
  getUsers: async () => {
    const res = sendRequest({
      route: 'admin/user'
    })
    return res
  }
}

export default authAPI
