import { useLoaderData } from 'react-router-dom'
import ClassTable from '../../components/Table/classTable'
import './styles.css'

const ClassesPage = () => {
  const data = useLoaderData()

  function createData(id, name, description, owner) {
    return {
      id,
      name,
      description,
      owner
    }
  }

  const rows = data.classes.map((classObject) =>
    createData(
      classObject._id,
      classObject.name,
      classObject.description,
      classObject.owner.username
    )
  )
  return (
    <div className="users-page">
      <ClassTable rows={rows} />
    </div>
  )
}

export default ClassesPage
