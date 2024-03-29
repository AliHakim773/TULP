import InstructorItem from "../CreateClassForm/InstructorItem"
import "./styles.css"
import useInstrucorSearch from "./useInstrucorSearch"

const SearchInstructor = ({ handleOnAccept, label = true }) => {
  const { handleInstructorSearch, setResult, result, instructorRef } =
    useInstrucorSearch()

  return (
    <div className='instructor-search-input instructor-input flex column'>
      {label && <label htmlFor='class-description'>Add Instructors</label>}

      <input
        type='text'
        className='instructor-search-input-field'
        placeholder='Enter Instructors name'
        onChange={handleInstructorSearch}
        ref={instructorRef}
      />
      <div className='instructor-search flex column'>
        {result.map((instructor) => (
          <InstructorItem
            key={instructor._id}
            instructor={instructor}
            onAccept={() => {
              setResult([])
              instructorRef.current.value = ""
              handleOnAccept(instructor)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchInstructor
