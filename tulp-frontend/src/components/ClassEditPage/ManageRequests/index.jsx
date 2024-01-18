import { useLoaderData, useParams } from "react-router-dom"
import "./styles.css"
import Table from "../../UI/Table"
import classAPI from "../../../core/api/class"
import { useState } from "react"
import toast from "react-hot-toast"

const ManageRequests = () => {
  const data = useLoaderData()
  const { slug } = useParams()
  const [requests, setRequests] = useState(data.requests)

  const accept = async (id, users) => {
    try {
      await classAPI.acceptRequest(slug, { _id: id })
      const req = users.filter((user) => user._id !== id)
      setRequests(req)
      toast.success(res.message)
    } catch (e) {
      toast.error("There was ana error")
    }
  }
  const reject = async (id, users) => {
    try {
      await classAPI.rejectRequest(slug, { _id: id })
      const req = users.filter((user) => user._id !== id)
      setRequests(req)
      toast.success(res.message)
    } catch (e) {
      toast.error("There was ana error")
    }
  }

  return (
    <div className='instructors-table'>
      <Table users={requests} handleAccept={accept} handleRemove={reject} />
    </div>
  )
}

export default ManageRequests
