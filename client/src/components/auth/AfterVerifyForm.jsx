import AuthButton from "./AuthButton"

const AfterVerifyForm = () => {
  return (
    <form className="publicform verifyform bg-white rounded-lg">
            <p className="text-gray-700 text-2xl font-semibold font-['Montserrat']">
              Your account have been verified you can continue </p>
            <div className="authbutton authbuttonbackground">
                <AuthButton Bname="Continue"/>
            </div>
    </form>
  )
}

export default AfterVerifyForm
