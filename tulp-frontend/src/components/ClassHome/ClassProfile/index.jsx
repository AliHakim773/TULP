import { useLoaderData } from "react-router-dom"
import UserList from "../../UserList"
import "./styles.css"
import Button from "../../Base/Button"

const ClassProfile = () => {
  const data = useLoaderData()
  console.log(data)
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
          <Button text='Join Us' />
        </section>
      </div>
    </div>
  )
}

export default ClassProfile
