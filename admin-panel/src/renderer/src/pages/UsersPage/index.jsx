import './styles.css'
import UserTable from '../../components/Table'
import { useLoaderData } from 'react-router-dom'

const UsersPage = () => {
  const data = useLoaderData()

  function createData(id, username, email, role, firstName, lastName) {
    return {
      id,
      username,
      email,
      role,
      firstName,
      lastName
    }
  }

  const headCells = [
    {
      id: 'usename',
      numeric: false,
      disablePadding: true,
      label: 'Username'
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email'
    },
    {
      id: 'role',
      numeric: true,
      disablePadding: false,
      label: 'Role'
    },
    {
      id: 'firstName',
      numeric: true,
      disablePadding: false,
      label: 'First Name'
    },
    {
      id: 'lastName',
      numeric: true,
      disablePadding: false,
      label: 'Last Name'
    }
  ]

  const rows = data.users.map((user) =>
    createData(user._id, user.username, user.email, user.role, user.firstName, user.lastName)
  )
  return (
    <div className="users-page">
      <UserTable rows={rows} headCells={headCells} />
    </div>
  )
}

export default UsersPage
