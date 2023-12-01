import { Link } from "react-router-dom";
import arrow from "../../assets/authSVG/arrow-left.svg";
import InputPassword from "./InputPassword";
import AuthButton from "./AuthButton";
import ResetPasswordHook from "../../hook/Auth/reset-password-hook";

const ResetPasswordForm = () => {

  const [password, confirmPassword,isLengthChecked,isSymbolNumberChecked,isButtonDisabled,
    handlePasswordChange, handleConfirmPasswordChange, handleCheckboxChange,onSubmit] = ResetPasswordHook()
  return (
    <form className="publicform h-[60%] bg-white rounded-lg">
      <Link to="/login" className="w-full ml-[10%]">
        <img src={arrow} alt="Back arrow" />
      </Link>
      <div className="mt-[-5%] text-center">
        <p className="text-gray-700 text-2xl font-semibold font-['Montserrat'] mb-2">reset password</p>
        <p className="text-center text-black text-xs font-medium font-['Montserrat']">
          Your new password must be different from previously used passwords
        </p>
      </div>
      <div className="w-[65%] flex flex-col items-center gap-1">
        <InputPassword
          className="w-[100%] mb-[5px]"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <InputPassword
          className="w-[100%]"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="flex flex-col justify-center items-start mt-[-25px]">
        <div className="round">
          <div>
            <input
              type="checkbox"
              id="ck2"
              checked={isLengthChecked}
              onChange={() => handleCheckboxChange("ck2")}
            />
            <label htmlFor="ck2"></label>
          </div>
          <p className={`txt${isLengthChecked ? "checked" : "unchecked"} font-['Inter'] tracking-tight`}>
            At least 8 characters
          </p>
        </div>

        <div className="round">
          <div>
            <input
              type="checkbox"
              id="ck3"
              checked={isSymbolNumberChecked}
              onChange={() => handleCheckboxChange("ck3")}
            />
            <label htmlFor="ck3"></label>
          </div>
          <p className={`txt${isSymbolNumberChecked ? "checked" : "unchecked"} font-['Inter']`}>
            Contain a symbol or a number
          </p>
        </div>
      </div>
      <div className={`authbutton ${isButtonDisabled ? "confirmbackground" : "authbuttonbackground"}`}>
        <AuthButton className="" Bname="Confirm" disabled={isButtonDisabled} onClick={onSubmit}/>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
