import Logo from "../../components/auth/Logo"
import ResetPasswordForm from "../../components/auth/ResetPasswordForm"

const ResetPasswordPage = () => {
  return (
    <div className="authbackground loginbackground">
    <div className="overlaybackground">
         <Logo/>
         <ResetPasswordForm/>
    </div>
</div>
  )
}

export default ResetPasswordPage
