import Button from "../../Base/Button"
import AssignmentItem from "./AssignmentItem"
import "./styles.css"

const Assignments = () => {
  return (
    <div className='class-assignment flex column w-100'>
      <div className='class-assignment-header'>
        <Button text='Post' />
      </div>
      <div className='assignment-main flex column w-100'>
        {/* {test_post.map((post) => { */}
        <AssignmentItem />
        {/*  })} */}
      </div>
    </div>
  )
}

export default Assignments
