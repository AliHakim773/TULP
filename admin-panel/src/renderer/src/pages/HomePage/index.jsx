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

  const [studentAVG, setStudentAVG] = useState(0)
  const [studentAVGLoading, setStudentAVGLoading] = useState(true)

  const [instructorCount, setInstructorCount] = useState(0)
  const [instructorCountLoading, setInstructorCountLoading] = useState(true)

  const [instructorAVG, setInstructorAVG] = useState(0)
  const [instructorAVGLoading, setInstructorAVGLoading] = useState(true)

  const [classCount, setClassCount] = useState(0)
  const [classCountLoading, setClassCountLoading] = useState(true)

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

    const getClassesCount = async () => {
      try {
        const res = await statsAPI.getClassesCount()
        setClassCount(res.numberOfClasses)
        setClassCountLoading(false)
      } catch {}
    }
    getClassesCount()

    const getStudentsAVG = async () => {
      try {
        const res = await statsAPI.getStudentsPerClassAVG()
        console.log(res)
        setStudentAVG(res.averageNumberOfStudents)
        setStudentAVGLoading(false)
      } catch {}
    }
    getStudentsAVG()

    const getInstructorsAVG = async () => {
      try {
        const res = await statsAPI.getInstructorsPerClassAVG()
        console.log(res)
        setInstructorAVG(res.averageNumberOfInstructors)
        setInstructorAVGLoading(false)
      } catch {}
    }
    getInstructorsAVG()
  }, [])
  return (
    <div className="container">
      <UserProfile user={JSON.parse(user)} />
      <div className="stat-container p-2 flex gap-3">
        {userCountLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem text="Users Count" className="flex-1" number={userCount} />
        )}
        {studentCountLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem
            text="Students Count"
            number={studentCount}
            percentage={(studentCount / userCount) * 100}
            percentageOf={'users'}
            className="flex-2"
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
            className="flex-2"
          />
        )}
      </div>
      <div className="stat-container p-2 flex gap-3">
        {classCountLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem text="Classes Count" className="flex-1" number={classCount} />
        )}
        {studentAVGLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem text="Average Student Per Class" number={studentAVG} className="flex-2" />
        )}
        {instructorAVGLoading ? (
          <StatItem text="Loading" number={0} />
        ) : (
          <StatItem text="Average Instructor Per Class" number={instructorAVG} className="flex-2" />
        )}
      </div>
    </div>
  )
}

export default HomePage
