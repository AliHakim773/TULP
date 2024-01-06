import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  _id: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  imageUrl: "",
  aboutMe: "",
  birth: "",
  socialMediaLinks: {
    github: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  },
  education: {
    degree: "",
    university: "",
    dateOfGraduation: "",
  },
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const {
        _id,
        username,
        firstName,
        lastName,
        email,
        role,
        imageUrl,
        aboutMe,
        socialMediaLinks,
        education,
        birth,
      } = action.payload
      return {
        _id,
        username,
        firstName,
        lastName,
        email,
        role,
        imageUrl,
        aboutMe,
        socialMediaLinks: { ...state.socialMediaLinks, ...socialMediaLinks },
        education: { ...state.education, ...education },
        birth,
      }
    },
    clearUser(state, action) {
      return initialState
    },
    changeImage(state, action) {
      const { imageUrl } = action.payload
      return {
        ...state,
        imageUrl,
      }
    },
  },
})

export default userSlice.reducer
export const { setUser, clearUser, changeImage } = userSlice.actions
export const user = userSlice.name
export const extractUserSlice = (global) => {
  return global[user]
}
