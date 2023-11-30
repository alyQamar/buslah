import { Link } from "react-router-dom"
import arrow from "../../assets/authSVG/arrow-left.svg"
import AuthButton from "./AuthButton"
import InputEmail from "./InputEmail"
import ForgetPasswordHook from "../../hook/Auth/forget-password-hook"
const ForgetPasswordForm = () => {
  const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook();

  return (

    <form className="publicform forgetpasswordform bg-white rounded-lg">
        <Link to='/login' className="w-full ml-[10%]">
            <img src={arrow} />
        </Link>
        <div className="mt-[-5%]">
            <p className="text-gray-700 text-2xl font-semibold font-['Montserrat'] mb-2">Forget your password</p>
            <p className="text-center text-black text-xs font-medium font-['Montserrat']">Enter the email associated with your account
            <br/>and we’ll send an email with instructions to
            <br/>reset your password</p>
        </div>
        <div>
            <InputEmail value={email} onChange={OnChangeEmail}/>
        </div>
        <div className="authbutton authbuttonbackground">
            <AuthButton Bname="Send" onClick={onSubmit}/>
        </div>
        <div>
            <p className="text-gray-700 text-xs font-normal font-['Montserrat'] inline-block">Remembered your password ?</p>
            <Link to='/login' className="text-gray-700 text-xs font-semibold font-['Montserrat'] underline">Sign in</Link>
        </div>

    </form>
  )
}

export default ForgetPasswordForm
