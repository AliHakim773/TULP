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

  const [studentCount, setStudentCount] = useState(0)
  const [studentCountLoading, setStudentCountLoading] = useState(true)

  const [instructorCount, setInstructorCount] = useState(0)
  const [instructorCountLoading, setInstructorCountLoading] = useState(true)

  useEffect(() => {
    const getUserCount = async () => {
      try {
        const res = await statsAPI.getUsersCount()
        setUserCount(res.numberOfUsers - 1)
        setUserCountLoading(false)
      } catch {}
    }
    getUserCount()

    const getStudentCount = async () => {
      try {
        const res = await statsAPI.getStudentsCount()
        setStudentCount(res.numberOfStudents)
        setStudentCountLoading(false)
      } catch {}
    }
    getStudentCount()

    const getInstructorCount = async () => {
      try {
        const res = await statsAPI.getInstructorsCount()
        setInstructorCount(res.numberOfInstructors)
        setInstructorCountLoading(false)
      } catch {}
    }
    getInstructorCount()
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
        {studentCountLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem
            text="Students Count"
            number={studentCount}
            percentage={(studentCount / userCount) * 100}
            percentageOf={'users'}
          />
        )}
        {instructorCountLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem
            text="Instructor Count"
            number={instructorCount}
            percentage={(instructorCount / userCount) * 100}
            percentageOf={'users'}
          />
        )}
      </div>
    </div>
  )
}

export default HomePage
