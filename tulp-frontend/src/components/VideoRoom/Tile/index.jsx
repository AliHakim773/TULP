import { DailyVideo, useVideoTrack } from "@daily-co/daily-react"
import "./styles.css"
import Username from "../Username"

const Tile = ({ id, isScreenShare, isLocal, isAlone, className, onClick }) => {
  const videoState = useVideoTrack(id)

  let containerCssClasses = isScreenShare ? "tile-screenshare" : "tile-video"

  if (isLocal) {
    containerCssClasses += " self-view"
    if (isAlone) {
      containerCssClasses += " alone"
    }
  }

  if (videoState.isOff) {
    containerCssClasses += " no-video"
  }

  return (
    <div
      onClick={onClick}
      className={`video-item ${containerCssClasses} ${className}`}>
      <DailyVideo
        className={className}
        sessionId={id}
        type={isScreenShare ? "screenVideo" : "video"}
      />
      {!isScreenShare && <Username id={id} isLocal={isLocal} />}
    </div>
  )
}

export default Tile
