import { io } from "socket.io-client"
import { local } from "../helpers/localstorage"

export const socket = io("http://localhost:8000", {
  query: { token: local("token") || "none" },
})

socket.on("connect", () => {
  console.log(socket.id)
})
