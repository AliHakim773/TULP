import { Outlet, useNavigate } from "react-router-dom"
import "./styles.css"

const ModalForm = () => {
  const navigate = useNavigate()
  return (
    <div
      id='modal'
      className='modal-form flex center'
      onClick={(e) => {
        if (e.target.id === "modal") {
          navigate(-1)
        }
      }}>
      <Outlet />
    </div>
  )
}

export default ModalForm
