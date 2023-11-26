import Logo from './../../components/auth/Logo';
import SignupForm from '../../components/auth/SignupForm';




const SignupPage = () => {


  return (
    <div className='authbackground signupbackground'>
        <div className=' overlaybackground'>
          <Logo/>
          <SignupForm/>
        </div>
    </div>
  )
}

export default SignupPage



