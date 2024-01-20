import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"
import { useLoaderData, useLocation, useParams } from "react-router-dom"
import { channelAPI } from "../../../core/api/channel"
import { socket } from "../../../core/socket"

const useChatDM = () => {
  const data = useLoaderData()
  const pathname = useLocation()
  const userSlice = useSelector(extractUserSlice)
  const { slug, username } = useParams()

  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState(data.dms ? data.dms.messages : [])

  const sendMessageListener = async (body) => {
    try {
      setMessages((prev) => [
        ...prev,
        {
          _id: new Date(),
          senderId: {
            ...data.user,
          },
          content: body,
        },
      ])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await channelAPI.getDMs(slug, username)
        setMessages(res.dms?.messages)
      } catch (e) {
        console.log(e)
      }
    }
    getMessages()

    socket.connect()
    socket.emit("dm:join-room", data.classId, data.user._id, (mes) => {
      console.log(mes)
    })
    if (!socket.hasListeners("dm:send-message")) {
      socket.on("dm:send-message", sendMessageListener)
    }

    return () => {
      socket.removeListener("dm:send-message", sendMessageListener)
      socket.emit("dm:leave-room", data.classId, data.user._id, (msg) => {
        console.log(msg)
      })
      socket.disconnect()
    }
  }, [pathname])

  const handleSendMessage = async () => {
    socket.emit(
      "dm:send-message",
      data.dms?._id,
      data.user._id,
      inputValue.replace(/\n+$/, ""),
      (msg) => {
        console.log(msg)
      }
    )
    setMessages((prev) => [
      ...prev,
      {
        _id: new Date(),
        senderId: {
          username: userSlice.username,
          imageUrl: userSlice.imageUrl,
        },
        content: inputValue.replace(/\n+$/, ""),
      },
    ])
    setInputValue("")
  }

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleOnInputChange = (e) => setInputValue(e.target.value)

  return {
    handleSendMessage,
    handleOnInputChange,
    handleKeyDown,
    inputValue,
    messages,
  }
}

export default useChatDM
