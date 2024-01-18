import { useState } from "react"
import TrashSVG from "../../../assets/svgs/Trash.jsx"
import "./styles.css"
import Button from "../../Base/Button"
import CheckSVG from "../../../assets/svgs/Check.jsx"

const Table = ({ className = "", users, handleRemove, handleAccept }) => {
  const [confirmation, setConfirmation] = useState(false)
  const [id, setId] = useState("")
  const [func, setFunc] = useState(undefined)

  const confirmAction = (id, func) => {
    setId(id)
    setConfirmation(true)
    setFunc(() => {
      return func === "accept"
        ? handleAccept
        : func === "remove"
        ? handleRemove
        : () => {}
    })
  }
  const handleConfirmation = async () => {
    console.log(typeof func)
    await func(id)
    setConfirmation(false)
  }

  return (
    <div className={`table ${className}`}>
      <div
        id='table-confirmation'
        onClick={(e) => {
          if (e.target.id === "table-confirmation") setConfirmation(false)
        }}
        className={`table-confirmation flex column center rounded-2 white-bg shadow ${
          confirmation ? "active" : ""
        }`}>
        Are You sure
        <div className='flex'>
          <Button
            text='Yes'
            color='blue'
            onclick={() => {
              handleConfirmation()
            }}
          />
          <Button
            text='No'
            color='danger'
            onclick={() => {
              setConfirmation(false)
            }}
          />
        </div>
      </div>
      <div className='table-row-head'>
        <div className='table-cell table-cell-head'>#</div>
        <div className='table-cell table-cell-head'>Username</div>
        <div className='table-cell table-cell-head'>Full Name</div>
        <div className='table-cell table-cell-head'>Email</div>
        <div className='table-cell table-cell-head'>Action</div>
      </div>
      {users?.map((user, i) => {
        return (
          <div className='table-row' key={user._id}>
            <div className='table-cell'>{i}</div>
            <div className='table-cell'>{user.username}</div>
            <div className='table-cell'>
              {user.firstName} {user.lastName}
            </div>
            <div className='table-cell'>{user.email}</div>

            <div className='table-cell table-cell-btns flex center'>
              {typeof handleAccept === "function" && (
                <div
                  className='table-icon-btn table-icon-btn-accept'
                  onClick={() => confirmAction(user._id, "accept")}>
                  <CheckSVG />
                </div>
              )}
              {typeof handleRemove === "function" && (
                <div
                  className='table-icon-btn table-icon-btn-remove'
                  onClick={() => confirmAction(user._id, "remove")}>
                  <TrashSVG />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Table
