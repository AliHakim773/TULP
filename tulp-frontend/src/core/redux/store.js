import { configureStore } from "@reduxjs/toolkit"
import userSlice, { user } from "./userSlice"
import { createLogger } from "redux-logger"

const logger = createLogger()

export const store = configureStore({
  reducer: {
    [user]: userSlice,
  },
  middleware: (getDefaultMiddleware) => [logger],
})
