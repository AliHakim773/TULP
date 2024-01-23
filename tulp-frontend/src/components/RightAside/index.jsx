import { useEffect, useState } from "react"
import "./styles.css"
import { userApi } from "../../core/api/user"
import { useNavigate } from "react-router-dom"

const RightAside = () => {
  const [classes, setClasses] = useState([])
  const navigate = useNavigate()

  const handleClassClick = (slug) => {
    navigate(`/class/${slug}/stream`)
  }
  useEffect(() => {
    const getClasses = async () => {
      try {
        const res = await userApi.getClasses()
        setClasses(res.classes)
      } catch (e) {}
    }
    getClasses()
  }, [])
  return (
    <div>
      <div className='user-classes w-100 shadow rounded-2'>
        <h4>Classes</h4>
        {classes.length === 0 ? (
          <div className='empty'>You are not in any class</div>
        ) : (
          <>
            {classes.slice(0, 4).map((c) => {
              return (
                <div
                  key={c._id}
                  onClick={() => {
                    handleClassClick(c.slug)
                  }}
                  className='user-class-item shadow rounded-1'>
                  {c.name}
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default RightAside
