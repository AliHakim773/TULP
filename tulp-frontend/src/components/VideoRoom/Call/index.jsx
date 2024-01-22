import { useCallback, useState } from "react"
import "./styles.css"
import {
  useDailyEvent,
  useLocalSessionId,
  useParticipantIds,
  useScreenShare,
} from "@daily-co/daily-react"
import UserMediaError from "../UserMediaError"
import Tile from "../Tile"

const Call = () => {
  const [getUserMediaError, setGetUserMediaError] = useState(false)

  useDailyEvent(
    "camera-error",
    useCallback(() => {
      setGetUserMediaError(true)
    }, [])
  )

  const { screens } = useScreenShare()
  const remoteParticipantIds = useParticipantIds({ filter: "remote" })

  const localSessionId = useLocalSessionId()
  const isAlone = remoteParticipantIds.length < 1 && screens.length < 1
  const [Primary, setPrimary] = useState(localSessionId)

  const isSharingScreen = (id) => {
    const sc = screens.map((s) => {
      return s.session_id
    })
    return sc.includes(id)
  }

  const tiles = [
    ...screens.map((s) => {
      return {
        id: s.session_id,
        css: Primary === s.session_id ? "primary-item" : "",
        isScreenShare: true,
      }
    }),
    ...remoteParticipantIds.map((id) => {
      return {
        id: id,
        css: Primary === id && !isSharingScreen(id) ? "primary-item" : "",
        isScreenShare: false,
      }
    }),
  ]

  const handleOnClick = (userid) => {
    setPrimary(userid)
  }

  const renderCallScreen = () => (
    <div
      className={`call-section ${
        screens.length > 0 ? "is-screenshare" : "call"
      }`}>
      {remoteParticipantIds.length > 0 || screens.length > 0 ? (
        <>
          {tiles.slice(0, 3).map((tile, i) => (
            <Tile
              onClick={() => handleOnClick(tile.id)}
              className={tile.css}
              key={i}
              id={tile.id}
              isScreenShare={tile.isScreenShare}
            />
          ))}
        </>
      ) : (
        <div className='call-info-box'>
          <h3>Waiting for others</h3>
          <p>Invite someone by sharing this link:</p>
          <span className='room-url'>{window.location.href}</span>
        </div>
      )}
      {localSessionId && (
        <Tile
          onClick={() => {
            handleOnClick(localSessionId)
          }}
          className={
            Primary === localSessionId && !isSharingScreen(localSessionId)
              ? "primary-item"
              : ""
          }
          id={localSessionId}
          isLocal
          isAlone={isAlone}
        />
      )}
    </div>
  )

  return getUserMediaError ? <UserMediaError /> : renderCallScreen()
}

export default Call
