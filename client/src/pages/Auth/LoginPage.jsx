import LoginForm from "../../components/auth/LoginForm"
import Logo from "../../components/auth/Logo"


const LoginPage = () => {
  return (
    <div className="authbackground loginbackground">
        <div className="overlaybackground">
          <Logo/>
          <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage
