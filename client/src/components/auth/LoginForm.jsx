import { Link } from "react-router-dom"
import AuthButton from "./AuthButton"
import InputEmail from "./InputEmail"
import InputPassword from "./InputPassword"
import SocialIcons from "./SocialIcons"
import LoginHook from "../../hook/Auth/login-hook"


const LoginForm = () => {
  const [email,password,onChangeEmail,onSubmit,onChangePassword] = LoginHook();
  return (
    <form className="loginform bg-white rounded-lg">
        <div>
            <div className="text-gray-700 text-2xl font-semibold text-center mb-1 font-['Montserrat']">Sign in</div>
            <div className="text-gray-700 text-xs font-medium font-['Montserrat']">Welcome back !! We happy to see again</div>
        </div>
        <div>
            <div>
              <InputEmail value={email} onChange={onChangeEmail} id="emailinput"/>
            </div>
            <div>
              <InputPassword placeholder="password" value={password} onChange={onChangePassword} id="passwordinput"/>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex items-center gap-1 mt-3">
              <input id="myCheckbox" type="checkbox" className="form-checkbox w-4 h-4 relative
                bg-white flex-col justify-start items-start inline-flex transition duration-150 ease-in-out" />
              <label htmlFor="myCheckbox" className="text-gray-700 text-xs font-normal font-['Montserrat']">Save password</label>
              </div>
              <div>
              <span className="text-gray-700 text-xs font-normal font-['Montserrat'] underline">Forget your password ?</span>
              </div>
            </div>
        </div>
        <div>
            <AuthButton Bname="Sign in" onClick={onSubmit}/>
        </div>
        <div>
          <div className="w-[479px] h-5 ">
            <div className="w-[45%] h-[0px] bg-gray-700 border border-cyan-800 inline-block"></div>
            <div className="w-[10%] text-center  text-gray-700 text-base font-medium font-['Montserrat'] inline-block">Or</div>
            <div className="w-[45%] h-[0px] bg-gray-700 border border-cyan-800 inline-block"></div>
          </div>
        </div>
        <div>
            <SocialIcons/>
        </div>
        <div>
            <p className="text-gray-700 text-xs font-normal font-['Montserrat'] inline-block">Already have an account ?</p>
            <Link to='/signup' className="text-gray-700 text-xs font-semibold font-['Montserrat'] underline">Sign up</Link>
        </div>
    </form>
  )
}

export default LoginForm
// <div className="text-gray-700 text-xs font-normal font-['Montserrat'] underline">Forget your password ?</div>
