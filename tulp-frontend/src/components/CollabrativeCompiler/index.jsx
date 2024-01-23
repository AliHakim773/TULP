import { Editor } from "@monaco-editor/react"
import "./styles.css"
import { useEffect, useRef, useState } from "react"
import { Doc } from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"
import axios from "axios"
import "./styles.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/userSlice"
import { socket } from "../../core/socket"

const CollabrativeCompiler = ({ isdisabled = false }) => {
  const { slug } = useParams()
  const { role } = useSelector(extractUserSlice)
  const [output, setOutput] = useState("// Output here")

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
      const response = await axios.request({
        url: "http://localhost:8000/compile",
        method: "POST",
        data: { lang, content: value },
        headers: {
          "Content-Type": "application/json",
        },
      })
      setOutput(response.data.output.stdout)
      socket.emit("room:get-output", slug, response.data.output.stdout)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <dev className='compiler'>
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
        <pre className='output'>{output}</pre>
        <input onChange={handleInputChange} type='text' />
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
    </dev>
  )
}

export default CollabrativeCompiler
