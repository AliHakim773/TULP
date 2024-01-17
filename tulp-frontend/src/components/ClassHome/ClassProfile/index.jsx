import { useLoaderData } from "react-router-dom"
import UserList from "../../UserList"
import "./styles.css"
import Button from "../../Base/Button"
import classAPI from "../../../core/api/class"
import toast from "react-hot-toast"

const ClassProfile = () => {
  const data = useLoaderData()
  const handleRequest = async () => {
    try {
      await classAPI.requestToJoin({ classId: data._id })
      toast.success("Request sent!")
    } catch (e) {
      toast.error(e.message)
    }
  }
  return (
    <div className='class-page flex w-100'>
      <aside className='flex column'>
        <UserList title='Owner' users={[data.owner]} />
        <UserList title='Instructors' users={data.instructors} />
        <UserList title='Studnets' users={data.students} />
      </aside>
      <div className='class-page-main w-100'>
        <section className='w-100 flex column center'>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <Button text='Join Us' onclick={handleRequest} />
        </section>
      </div>
    </div>
  )
}

export default ClassProfile
