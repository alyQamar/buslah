import CheckEmailForm from "../../components/auth/CheckEmailForm"
import Logo from "../../components/auth/Logo"

const CheckEmailPage = () => {
  return (
    <div className="authbackground loginbackground">
        <div className="overlaybackground">
             <Logo/>
             <CheckEmailForm/>
        </div>
    </div>
  )
}

export default CheckEmailPage
