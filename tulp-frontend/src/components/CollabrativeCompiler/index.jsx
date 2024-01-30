import { Editor } from "@monaco-editor/react"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import "./styles.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice"
import { socket } from "../../core/socket"
import { roomAPI } from "../../core/api/room"

const CollabrativeCompiler = ({ isdisabled = false }) => {
  const { slug } = useParams()
  const [output, setOutput] = useState("// Output here")
  const [error, setError] = useState(false)

  const [lang, setLang] = useState("python")
  const handleLangChange = (e) => {
    setLang(e.target.value)
  }

  const [input, setInput] = useState("")
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const [value, setValue] = useState("")
  const editorRef = useRef(null)

  const handleOnChange = (text, event) => {
    setValue(text)
    socket.emit("room:compiler-change", slug, text)
  }

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
  }

  useEffect(() => {
    socket.on("room:compiler-change", (text) => {
      setValue(text)
    })
    socket.on("room:get-output", (outValue) => {
      setOutput(outValue)
    })
  }, [])

  const handleOnCompaileClick = async () => {
    try {
      const response = await roomAPI.compile({ lang, content: value })
      setError(false)
      setOutput(response.output.stdout)
      socket.emit("room:get-output", slug, response.output.stdout)
      if (
        response.output.stdout === null ||
        response.output.stdout === undefined ||
        response.output.stdout === ""
      ) {
        setOutput(response.output.stderr)
        setError(true)
        socket.emit("room:get-output", slug, response.output.stderr)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='compiler'>
      <div className='editor'>
        <Editor
          theme='vs-dark'
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            tabSize: 2,
            readOnly: isdisabled,
          }}
          value={value}
          onChange={handleOnChange}
        />
      </div>
      <div className='editor-actions'>
        <pre className={`output ${error ? "output-error" : ""}`}>{output}</pre>
        <button onClick={handleOnCompaileClick}>Compile</button>
        <div className='choose-lang'>
          <label htmlFor='lang'>Choose Language:</label>
          <select onChange={handleLangChange} name='lang' id='lang'>
            <option defaultValue={true} value='python'>
              Python
            </option>
            <option value='javascript'>Javascript</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default CollabrativeCompiler
