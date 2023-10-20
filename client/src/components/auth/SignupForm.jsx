import React from 'react'
import {Link} from 'react-router-dom'
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import AuthButton from './AuthButton';
import SocialIcons from './SocialIcons';

const SignupForm = () => {
  return (
    <div className='w-[712px] h-4/5 bg-white rounded-lg signupform'>
        <div>
            <div className="text-gray-700 text-2xl font-semibold font-['Montserrat']">Create new account</div>
            <div className="text-gray-700 text-xs font-medium font-['Montserrat']">Just few details to start your career path !! </div>
        </div>
        <div>
            <div>
              <InputName/>
            </div>
            <div>
              <InputEmail/>
            </div>
            <div>
              <InputPassword placeholder="password"/>
            </div>
            <div>
              <InputPassword placeholder="confirm password"/>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <input id="myCheckbox" type="checkbox" className="form-checkbox w-4 h-4 relative
                bg-white flex-col justify-start items-start inline-flex transition duration-150 ease-in-out" />
              <label htmlFor="myCheckbox" className="text-gray-700 text-xs font-normal font-['Montserrat']">Save password</label>
            </div>
        </div>
        <div>
            <AuthButton Bname="Sign up"/>
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
            <span className="text-gray-700 text-xs font-semibold font-['Montserrat'] underline">Sign in</span>
        </div>
    </div>
  )
}

export default SignupForm

// <div>
// <span style="text-gray-700 text-xs font-normal font-['Montserrat']">Already have an account ?</span>
// <span style="text-gray-700 text-xs font-semibold font-['Montserrat']"> </span>
// <span style="text-gray-700 text-xs font-semibold font-['Montserrat'] underline">Sing in</span>
// </div>
