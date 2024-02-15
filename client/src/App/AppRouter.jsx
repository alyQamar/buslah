import { useRoutes } from 'react-router-dom';
//Auth
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import ForgetPasswordPage from '../pages/Auth/ForgetPasswordPage';
import CheckEmailPage from '../pages/Auth/CheckEmailPage';
import ResetPasswordPage from '../pages/Auth/ResetPasswordPage';
import VerifyAccountPage from '../pages/Auth/VerifyAccountPage';
import AfterVerifyPage from '../pages/Auth/AfterVerifyPage';
//
import HomePostsPage from '../pages/MentoringPages/HomePostsPage';

const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <SignupPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/forgetpassword',
      element: <ForgetPasswordPage />
    },
    {
      path: '/resetpassword',
      element: <ResetPasswordPage />
    },
    {
      path: '/checkemail',
      element: <CheckEmailPage />
    },
    {
      path: '/verifyemail',
      element: <VerifyAccountPage />
    },
    {
      path: '/verified',
      element: <AfterVerifyPage />
    },
    //test
    {
      path: '/test',
      element: <HomePostsPage/>
    }
  ]);

  return elements;
};
export default AppRouter;
