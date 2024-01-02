import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  img_url: "",
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { id, username, firstName, lastName, email, role_id, img_url } =
        action.payload
      return {
        id,
        username,
        firstName,
        lastName,
        email,
        role_id,
        img_url,
      }
    },
    clearUser(state, action) {
      return {
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        role_id: "",
        img_url: "",
      }
    },
  },
})

export default userSlice.reducer
export const { setUser, clearUser } = userSlice.actions
export const user = userSlice.name
export const extractUserSlice = (global) => {
  return global[user]
}
