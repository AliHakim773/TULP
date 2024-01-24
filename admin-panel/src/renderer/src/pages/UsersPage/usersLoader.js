import authAPI from '../../core/api/auth'

export const userLoader = async () => {
  const res = await authAPI.getUsers()
  return res
}
