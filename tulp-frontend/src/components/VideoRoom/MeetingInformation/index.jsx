import {
  useMeetingState,
  useNetwork,
  useParticipantIds,
  useRoom,
} from "@daily-co/daily-react"
import "./styles.css"

const MeetingInformation = () => {
  const room = useRoom()
  const network = useNetwork()
  const allParticipants = useParticipantIds()
  const meetingState = useMeetingState()

  return (
    <section className='meeting-information flex column border rounded-1 white-bg'>
      <h4>Meeting information</h4>
      <ul>
        {/* <li>Meeting state: {meetingState ?? "unknown"}</li> */}
        <li>Meeting ID: {room?.id ?? "unknown"}</li>
        <li>Room name: {room?.name ?? "unknown"}</li>
        <li>Network status: {network?.threshold ?? "unknown"}</li>
        {/* <li>Network topology: {network?.topology ?? "unknown"}</li> */}
        {/* <li>Participant IDs: {allParticipants.join(", ")}</li> */}
      </ul>
    </section>
  )
}

export default MeetingInformation
