import { useParams } from "react-router-dom"
import classAPI from "../../../core/api/class"
import Button from "../../Base/Button"
import InputField from "../../Base/InputField"
import "./styles.css"
import useClassEdit from "./useClassEdit"

const ClassEdit = () => {
  const { values, handleSubmit, handleOnChange } = useClassEdit()
  return (
    <div className='class-edit-main'>
      <form className='flex column'>
        <InputField
          value={values.name}
          handleOnChange={handleOnChange}
          text='Class Name'
          id={"name"}
          placeholder='Class Name'
        />
        <div className='class-create-input flex column'>
          <label htmlFor='description'>Class Description</label>
          <textarea
            id='description'
            className='class-create-input-textarea'
            placeholder='Enter Class Description'
            value={values.description}
            onChange={handleOnChange}
          />
        </div>
        <div className='btn'>
          <Button text='Save' type='submit' onclick={handleSubmit} />
        </div>
      </form>
    </div>
  )
}

export default ClassEdit
