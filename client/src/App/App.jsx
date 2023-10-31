import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import ForgetPasswordPage from '../pages/Auth/ForgetPasswordPage';
import CheckEmailPage from './../pages/Auth/CheckEmailPage';
import ResetPasswordPage from '../pages/Auth/ResetPasswordPage';
import VerifyAccountPage from '../pages/Auth/VerifyAccountPage';
import AfterVerifyPage from './../pages/Auth/AfterVerifyPage';

function App() {
  return <div>
  <BrowserRouter>
    <Routes>
      <Route index element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/forgetpassword' element={<ForgetPasswordPage/>}/>
      <Route path='/checkemail' element={<CheckEmailPage/>}/>
      <Route path='/resetpassword' element={<ResetPasswordPage/>}/>
      <Route path='/verifyemail' element={<VerifyAccountPage/>}/>
      <Route path='/verified' element={<AfterVerifyPage/>}/>


    </Routes>
</BrowserRouter>
  </div>;
}

export default App;

//path='/signup'
