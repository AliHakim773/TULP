import "./styles.css"
import InputField from "../../Base/InputField"
import Button from "../../Base/Button"
import useScheduleForm from "./useScheduleForm"

const ScheduleForm = () => {
  const { inputValues, handleOnClick } = useScheduleForm()

  return (
    <form
      className='schedule-form flex column border rounded-2 white-bg'
      method='post'
      action='add/schedule'>
      <div className='form-title'>Add Class Time</div>
      {inputValues.map((item, index) => (
        <InputField
          key={index}
          text={item.text}
          type={item.type}
          placeholder={item.placeholder}
          id={item.id}
          value={item.value}
          handleOnChange={item.handleOnChange}
        />
      ))}
      <Button
        type='submit'
        text='Add'
        onclick={() => {
          handleOnClick()
        }}
      />
    </form>
  )
}

export default ScheduleForm
