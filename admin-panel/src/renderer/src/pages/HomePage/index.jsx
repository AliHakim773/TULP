import UserProfile from '../../components/UserProfile'
import { local } from '../../core/helpers/localStorage'
import './styles.css'

const HomePage = () => {
  const user = local('user')
  return (
    <div className="container">
      <UserProfile user={JSON.parse(user)} />
    </div>
  )
}

export default HomePage
