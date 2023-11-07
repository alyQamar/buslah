import Logo from "../../components/auth/Logo"
import VerifyAccountForm from "../../components/auth/VerifyAccountForm"

const VerifyAccountPage = () => {
  return (
    <div className='authbackground signupbackground'>
        <div className=' overlaybackground'>
          <Logo/>
          <VerifyAccountForm/>
        </div>
    </div>
  )
}

export default VerifyAccountPage
