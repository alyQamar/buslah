import { Link } from "react-router-dom"
import arrow from "../../assets/authSVG/arrow-left.svg"
import InputPassword from "./InputPassword"
import AuthButton from "./AuthButton"

const ResetPasswordForm = () => {
  return (
    <form className="publicform h-[60%] bg-white rounded-lg">
        <Link to='/login' className="w-full ml-[10%]">
            <img src={arrow} />
        </Link>
        <div className="mt-[-5%] text-center">
            <p className="text-gray-700 text-2xl font-semibold font-['Montserrat'] mb-2">reset password</p>
            <p className="text-center text-black text-xs font-medium font-['Montserrat']">
            Your new password must be different from previous used passwords</p>
        </div>
        <div className="w-[65%] flex flex-col items-center gap-1">
            <InputPassword className="w-[100%] mb-[5px]" placeholder="password" />
            <InputPassword className="w-[100%]" placeholder="confirm password" />
        </div>
        <div className=" flex flex-col justify-center items-start mt-[-25px]">
            <div className="round">
               <div>
               <input checked type="checkbox" id="ck1"/>
               <label htmlFor="ck1"></label>
               </div>
               <p className="txtchecked font-['Inter'] tracking-tight">
               Must not contain your name or email</p>
            </div>
            <div className="round">
            <div>
            <input checked type="checkbox" id="ck2" />
            <label htmlFor="ck2"></label>
            </div>
            <p className="txtchecked font-['Inter'] tracking-tight">
            At least 8 characters</p>
         </div>
         <div className="round">
         <div>
         <input disabled type="checkbox" id="ck3" />
         <label htmlFor="ck3"></label>
         </div>
         <p className="txtunchecked font-['Inter']">
         Contain a symbol or a number</p>
        </div>
        </div>
        <div className="authbutton confirmbackground">
            <AuthButton className="" Bname="Confirm" />
        </div>
    </form>
  )
}

export default ResetPasswordForm

