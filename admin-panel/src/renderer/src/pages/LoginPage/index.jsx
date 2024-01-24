import './styles.css'
import logo from '../../assets/images/icon.png'

const LoginPage = () => {
  return (
    <div className="page flex center">
      <div className="login-page flex center">
        <div className="logo-img">
          <img src={logo} alt="TULP" />
        </div>
        <form className="login-form border rounded-1 p-2">Login Form</form>
      </div>
    </div>
  )
}

export default LoginPage
