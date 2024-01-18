import { useLoaderData, useParams } from "react-router-dom"
import "./styles.css"
import Table from "../../UI/Table"
import classAPI from "../../../core/api/class"

const ManageRequests = () => {
  const data = useLoaderData()
  const { slug } = useParams()
  const accept = async (id) => {
    await classAPI.acceptRequest(slug, { _id: id })
  }
  const reject = async (id) => {
    await classAPI.rejectRequest(slug, { _id: id })
  }

  return (
    <div className='instructors-table'>
      <Table
        users={data.requests}
        handleAccept={accept}
        handleRemove={reject}
      />
    </div>
  )
}

export default ManageRequests
