import UserMediaError from "../UserMediaError"
import useHairCheckLogic from "./useHairCheckLogic"

const HairCheck = ({ joinCall, cancelCall }) => {
  const {
    updateCamera,
    updateSpeakers,
    updateMicrophone,
    handleJoin,
    handleChange,
    getUserMediaError,
    speakers,
    cameras,
    microphones,
    currentSpeaker,
    currentMic,
    currentCam,
  } = useHairCheckLogic(joinCall)
  return getUserMediaError ? <UserMediaError /> : <form></form>
}

export default HairCheck
