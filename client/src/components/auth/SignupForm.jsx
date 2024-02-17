import { Link } from 'react-router-dom';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import AuthButton from './AuthButton';
import SocialIcons from './SocialIcons';
import SignupHook from '../../hooks/Auth/signup-hook';

const SignupForm = () => {
  const [
    name,
    email,
    password,
    confirmPassword,
    ,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit
  ] = SignupHook();
  return (
    <form className=" bg-white rounded-lg publicform signupform">
      <div>
        <div className="text-gray-700 text-2xl font-semibold font-['Montserrat']">Create new account</div>
        <div className="text-gray-700 text-xs font-medium font-['Montserrat']">
          Just few details to start your career path !!{' '}
        </div>
      </div>
      <div>
        <div>
          <InputName id="nameinputS" value={name} onChange={onChangeName} />
        </div>
        <div>
          <InputEmail id="emailinputS" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <InputPassword placeholder="password" id="passwordinputS" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <InputPassword
            placeholder="confirm password"
            id="confirmpasswordinputS"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>
        <div className="flex items-center gap-1 mt-3">
          <input
            id="myCheckbox"
            type="checkbox"
            className="form-checkbox w-4 h-4 relative
                bg-white flex-col justify-start items-start inline-flex transition duration-150 ease-in-out"
          />
          <label htmlFor="myCheckbox" className="text-gray-700 text-xs font-normal font-['Montserrat']">
            Save password
          </label>
        </div>
      </div>
      <div className="authbutton authbuttonbackground">
        <AuthButton Bname="Sign up" onClick={onSubmit} />
      </div>
      <div>
        <div className="w-[479px] h-5 ">
          <div className="w-[45%] h-[0px] bg-gray-700 border border-cyan-800 inline-block"></div>
          <div className="w-[10%] text-center  text-gray-700 text-base font-medium font-['Montserrat'] inline-block">
            Or
          </div>
          <div className="w-[45%] h-[0px] bg-gray-700 border border-cyan-800 inline-block"></div>
        </div>
      </div>
      <div>
        <SocialIcons />
      </div>
      <div>
        <p className="text-gray-700 text-xs font-normal font-['Montserrat'] inline-block">Already have an account ?</p>
        <Link to="/login" className="text-gray-700 text-xs font-semibold font-['Montserrat'] underline">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
