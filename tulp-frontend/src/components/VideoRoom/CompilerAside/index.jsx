import "./styles.css"
import {
  useLocalSessionId,
  useParticipantProperty,
} from "@daily-co/daily-react"

const CompilerAside = ({ showCode, toggleCode, setShowCompiler }) => {
  const localSessionId = useLocalSessionId()
  const username = useParticipantProperty(localSessionId, "user_name")

  return showCode ? (
    <aside className='video-chat flex column shadow'>
      <button onClick={toggleCode} className='close-chat' type='button'>
        Close
      </button>
      <ul className='video-chat-messages '></ul>
    </aside>
  ) : null
}

export default CompilerAside
