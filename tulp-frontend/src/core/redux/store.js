import { configureStore } from "@reduxjs/toolkit"
import userSlice, { user } from "./userSlice/userSlice"

export const store = configureStore({
  reducer: {
    [user]: userSlice,
  },
})
