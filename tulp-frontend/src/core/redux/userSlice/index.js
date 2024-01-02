import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  _id: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  imageUrl: "",
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { _id, username, firstName, lastName, email, role, imageUrl } =
        action.payload
      return {
        _id,
        username,
        firstName,
        lastName,
        email,
        role,
        imageUrl,
      }
    },
    clearUser(state, action) {
      return {
        _id: "",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        imageUrl: "",
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
