import { useEffect, useState } from 'react'
import StatItem from '../../components/StatItem'
import UserProfile from '../../components/UserProfile'
import { local } from '../../core/helpers/localStorage'
import './styles.css'
import statsAPI from '../../core/api/stats'

const HomePage = () => {
  const user = local('user')

  const [userCount, setUserCount] = useState(0)
  const [userCountLoading, setUserCountLoading] = useState(true)

  useEffect(() => {
    const getUserCount = async () => {
      try {
        const res = await statsAPI.getUsersCount()
        setUserCount(res.numberOfUsers)
        setUserCountLoading(false)
      } catch {}
    }
    getUserCount()
  })
  return (
    <div className="container">
      <UserProfile user={JSON.parse(user)} />
      <div className="stat-container p-2 flex wrap gap-3">
        {userCountLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem text="Users Count" number={userCount} />
        )}
      </div>
    </div>
  )
}

export default HomePage
