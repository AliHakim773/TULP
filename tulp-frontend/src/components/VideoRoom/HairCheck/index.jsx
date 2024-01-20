import { DailyVideo } from "@daily-co/daily-react"
import UserMediaError from "../UserMediaError"
import useHairCheckLogic from "./useHairCheckLogic"
import NavBar from "../../UI/NavBar"

const HairCheck = ({ joinCall, cancelCall }) => {
  const {
    updateCamera,
    updateSpeakers,
    updateMicrophone,
    handleJoin,
    handleChange,
    username,
    localSessionId,
    getUserMediaError,
    speakers,
    cameras,
    microphones,
    currentSpeaker,
    currentMic,
    currentCam,
  } = useHairCheckLogic(joinCall)
  return getUserMediaError ? (
    <UserMediaError />
  ) : (
    <div className='page'>
      <NavBar />
      <form className='hair-check flex' onSubmit={handleJoin}>
        <div className='camera-preview-section'>
          {localSessionId && (
            <DailyVideo
              className='camera-preview'
              sessionId={localSessionId}
              mirror
            />
          )}
        </div>
        <div className='setup-settings flex center column'>
          {/* Username */}
          <div>
            <label htmlFor='username'>Your name:</label>
            <input
              name='username'
              type='text'
              placeholder='Enter username'
              onChange={handleChange}
              value={username || " "}
            />
          </div>

          {/* Microphone select */}
          <div>
            <label htmlFor='micOptions'>Microphone:</label>
            <select
              name='micOptions'
              id='micSelect'
              onChange={updateMicrophone}
              value={currentMic?.device?.deviceId}>
              {microphones.map((mic) => (
                <option
                  key={`mic-${mic.device.deviceId}`}
                  value={mic.device.deviceId}>
                  {mic.device.label}
                </option>
              ))}
            </select>
          </div>

          {/* Speakers select */}
          <div>
            <label htmlFor='speakersOptions'>Speakers:</label>
            <select
              name='speakersOptions'
              id='speakersSelect'
              onChange={updateSpeakers}
              value={currentSpeaker?.device?.deviceId}>
              {speakers.map((speaker) => (
                <option
                  key={`speaker-${speaker.device.deviceId}`}
                  value={speaker.device.deviceId}>
                  {speaker.device.label}
                </option>
              ))}
            </select>
          </div>

          {/* Camera select */}
          <div>
            <label htmlFor='cameraOptions'>Camera:</label>
            <select
              name='cameraOptions'
              id='cameraSelect'
              onChange={updateCamera}
              value={currentCam?.device?.deviceId}>
              {cameras.map((camera) => (
                <option
                  key={`cam-${camera.device.deviceId}`}
                  value={camera.device.deviceId}>
                  {camera.device.label}
                </option>
              ))}
            </select>
          </div>
          <div className='action-btns '>
            <button onClick={handleJoin} type='submit'>
              Join call
            </button>
            <button onClick={cancelCall} className='cancel-call' type='button'>
              Back to start
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HairCheck
