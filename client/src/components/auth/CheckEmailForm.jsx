import { Link } from 'react-router-dom';
import arrow from '../../assets/authSVG/arrow-left.svg';
import CheckEmailCodeHook from '../../hooks/Auth/check-email-code-hook';

const CheckEmailForm = () => {
  const [writtenCode, inputRefs, handleChange] = CheckEmailCodeHook();
  return (
    <form className="publicform forgetpasswordform bg-white rounded-lg">
      <Link to="/forgetpassword" className="w-full ml-[10%]">
        <img src={arrow} alt="Arrow" />
      </Link>
      <div className="mt-[-5%]">
        <p className="text-center text-black text-2xl font-semibold font-['Montserrat'] mb-2">Check your email</p>
        <p className="w-[231px] text-center text-gray-700 text-xs font-medium font-['Montserrat']">
          Enter the verification code that sent
          <br />
          to the email Omar *** ***@gmail.com
        </p>
      </div>
      <div className="w-full flex flex-row gap-[2%] justify-center mt-[-5%]">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            className="checkinput"
            type="text"
            value={writtenCode[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            ref={inputRefs[index]}
          />
        ))}
      </div>
      <div className="w-[147px] h-[30px] flex-col justify-center items-center inline-flex">
        <p className="text-gray-700 text-xs font-normal font-['Montserrat']">Didn’t receive any code?</p>
        <Link to="/forgetpassword" className="text-gray-700 text-xs font-bold font-['Montserrat'] underline">
          Resend new code
        </Link>
      </div>
    </form>
  );
};

export default CheckEmailForm;
