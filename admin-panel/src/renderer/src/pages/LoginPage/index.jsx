import './styles.css'
import logo from '../../assets/images/icon.png'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useLoginLogic from './useLoginLogic'

const LoginPage = () => {
  const {
    showPassword,
    error,
    handleClickShowPassword,
    handleOnChange,
    handleOnClick,
    handleMouseDownPassword
  } = useLoginLogic()

  return (
    <div className="page flex center">
      <div className="login-page flex center">
        <div className="logo-img ">
          <img src={logo} alt="TULP" />
        </div>
        <form className="login-form flex column gap-2 shadow rounded-2 p-2">
          <h3 className="text-center">Log In</h3>
          <TextField
            id="outlined-basic"
            name="username"
            required
            label="Username"
            variant="outlined"
            onChange={handleOnChange}
            error={error.state}
          />
          <TextField
            name="password"
            id="outlined-basic"
            error={error.state}
            helperText={error.message}
            required
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            label="Password"
            variant="outlined"
            onChange={handleOnChange}
          />
          <Button type="submit" onClick={handleOnClick} variant="contained">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
