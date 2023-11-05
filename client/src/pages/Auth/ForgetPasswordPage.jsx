import ForgetPasswordForm from "../../components/auth/ForgetPasswordForm"
import Logo from "../../components/auth/Logo"

const ForgetPasswordPage = () => {
  return (
    <div className="authbackground loginbackground">
        <div className="overlaybackground">
             <Logo/>
             <ForgetPasswordForm/>
        </div>
    </div>
  )
}

export default ForgetPasswordPage

