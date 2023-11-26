import AfterVerifyForm from "../../components/auth/AfterVerifyForm"
import Logo from "../../components/auth/Logo"

const AfterVerifyPage = () => {
  return (
    <div className='authbackground signupbackground'>
        <div className=' overlaybackground'>
          <Logo/>
          <AfterVerifyForm/>
        </div>
    </div>
  )
}

export default AfterVerifyPage
