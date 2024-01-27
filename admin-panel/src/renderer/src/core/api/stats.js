import { sendRequest } from '../axios'

const statsAPI = {
  getUsersCount: async () => {
    const res = sendRequest({
      route: 'admin/user/count'
    })
    return res
  }
}

export default statsAPI
