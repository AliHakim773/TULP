import { useEffect, useState } from "react"
import { useLoaderData, useLocation, useParams } from "react-router-dom"
import { socket } from "../../../core/socket"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../../core/redux/userSlice"
import { channelAPI } from "../../../core/api/channel"

const useChatChannel = () => {
  const [inputValue, setInputValue] = useState("")
  const userSlice = useSelector(extractUserSlice)
  const data = useLoaderData()
  const [messages, setMessages] = useState(data.channel.messages)
  const { slug, channelslug } = useParams()
  const pathname = useLocation()

  const sendMessageListener = async (res, body) => {
    try {
      console.log(body.message.senderId)
      const user = await channelAPI.getUser(body.message.senderId)
      console.log("user: ", user)
      setMessages((prev) => [
        ...prev,
        {
          _id: new Date(),
          senderId: {
            ...user.user,
          },
          content: body.message.content,
        },
      ])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getMessages = async () => {
      const res = await channelAPI.getClassChannelMessages(slug, channelslug)
      setMessages(res.channel.messages)
    }
    getMessages()

    socket.connect()
    socket.emit("channel:join-room", data.channel._id)
    if (!socket.hasListeners("channel:send-message")) {
      socket.on("channel:send-message", sendMessageListener)
    }

    return () => {
      socket.removeListener("channel:send-message", sendMessageListener)
      socket.emit("channel:leave-room", data.channel._id)
      socket.disconnect()
    }
  }, [pathname])

  const handleSendMessage = async () => {
    socket.emit(
      "channel:send-message",
      data.channel._id,
      inputValue.replace(/\n+$/, "")
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

export default useChatChannel
