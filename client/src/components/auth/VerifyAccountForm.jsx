import { Link } from "react-router-dom"
import arrow from "../../assets/authSVG/arrow-left.svg"


const VerifyAccountForm = () => {
  return (
    <form className="publicform verifyform bg-white rounded-lg">
          <Link to='/' className="w-full mt-[-5%] ml-[10%]">
              <img src={arrow} />
          </Link>
          <div className="mt-[-15%] text-center">
                  <p className="text-gray-700 text-2xl font-semibold font-['Montserrat'] mb-2">verify account</p>
                  <p className="text-center text-black text-xs font-medium font-['Montserrat']">
                  Check your email your will receive verification massage to verify your account</p>
      </div>
    </form>
  )
}

export default VerifyAccountForm
