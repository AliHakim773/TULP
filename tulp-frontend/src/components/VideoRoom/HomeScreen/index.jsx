import Button from "../../Base/Button"
import NavBar from "../../UI/NavBar"

const HomeScreen = ({ createCall, startHairCheck }) => {
  const startDemo = () => {
    createCall().then((url) => {
      startHairCheck(url)
    })
  }

  return (
    <div className='page'>
      <NavBar />
      <div className='home-screen flex column center'>
        <div className='join-btn'>
          <Button onclick={startDemo} text='Click to start the Class' />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
