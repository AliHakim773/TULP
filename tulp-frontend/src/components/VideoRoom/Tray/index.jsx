import {
  useAppMessage,
  useAudioTrack,
  useDaily,
  useLocalSessionId,
  useScreenShare,
  useVideoTrack,
} from "@daily-co/daily-react"
import "./styles.css"
import { useCallback, useState } from "react"
import MeetingInformation from "../MeetingInformation"
import VideoChat from "../VideoChat"
import {
  CameraOff,
  CameraOn,
  ChatHighlighted,
  ChatIcon,
  Info,
  Leave,
  MicrophoneOff,
  MicrophoneOn,
  Screenshare,
} from "../../../assets/Icons"

const Tray = ({ leaveCall }) => {
  const callObject = useDaily()
  const { isSharingScreen, startScreenShare, stopScreenShare } =
    useScreenShare()

  const [showMeetingInformation, setShowMeetingInformation] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [newChatMessage, setNewChatMessage] = useState(false)

  const localSessionId = useLocalSessionId()
  const localVideo = useVideoTrack(localSessionId)
  const localAudio = useAudioTrack(localSessionId)
  const mutedVideo = localVideo.isOff
  const mutedAudio = localAudio.isOff

  useAppMessage({
    onAppMessage: useCallback(() => {
      if (!showChat) {
        setNewChatMessage(true)
      }
    }, [showChat]),
  })

  const toggleVideo = useCallback(() => {
    callObject.setLocalVideo(mutedVideo)
  }, [callObject, mutedVideo])

  const toggleAudio = useCallback(() => {
    callObject.setLocalAudio(mutedAudio)
  }, [callObject, mutedAudio])

  const toggleScreenShare = () =>
    isSharingScreen ? stopScreenShare() : startScreenShare()

  const toggleMeetingInformation = () => {
    setShowMeetingInformation(!showMeetingInformation)
  }

  const toggleChat = () => {
    setShowChat(!showChat)
    if (newChatMessage) {
      setNewChatMessage(!newChatMessage)
    }
  }

  return (
    <div className='tray'>
      <VideoChat showChat={showChat} toggleChat={toggleChat} />
      <div className='tray-buttons-container'>
        <div className='controls flex'>
          <button
            className='meet-info-btn'
            onClick={toggleMeetingInformation}
            type='button'>
            {showMeetingInformation && <MeetingInformation />}
            <Info />
          </button>
          <button onClick={toggleVideo} type='button'>
            {mutedVideo ? <CameraOff /> : <CameraOn />}
          </button>
          <button onClick={toggleAudio} type='button'>
            {mutedAudio ? <MicrophoneOff /> : <MicrophoneOn />}
          </button>
          <button onClick={toggleScreenShare} type='button'>
            <Screenshare />
          </button>
        </div>
        <div className='actions'>
          <button onClick={toggleChat} type='button'>
            {newChatMessage ? <ChatHighlighted /> : <ChatIcon />}
          </button>
        </div>
        <div className='leave'>
          <button onClick={leaveCall} type='button'>
            <Leave />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tray
