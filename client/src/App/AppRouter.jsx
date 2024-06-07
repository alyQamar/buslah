import { useRoutes } from 'react-router-dom';
//Auth
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import ForgetPasswordPage from '../pages/Auth/ForgetPasswordPage';
import CheckEmailPage from '../pages/Auth/CheckEmailPage';
import ResetPasswordPage from '../pages/Auth/ResetPasswordPage';
import VerifyAccountPage from '../pages/Auth/VerifyAccountPage';
import AfterVerifyPage from '../pages/Auth/AfterVerifyPage';

import Social from '../pages/Social/Social';
import Home from '../pages/Social/Home/Home';
import Mentors from '../pages/Social/Mentors/Mentors';
import { routes } from '../routes';
import Profile from '../pages/Social/Profile';

const AppRouter = () => {
  const elements = useRoutes([

    {
      path: routes.signup,
      element: <SignupPage />
    },
    {
      path: routes.login,
      element: <LoginPage />
    },
    {
      path: routes.forgetPassword,
      element: <ForgetPasswordPage />
    },
    {
      path: routes.resetPassword,
      element: <ResetPasswordPage />
    },
    {
      path: routes.checkEmail,
      element: <CheckEmailPage />
    },
    {
      path: routes.verifyEmail,
      element: <VerifyAccountPage />
    },
    {
      path: routes.verified,
      element: <AfterVerifyPage />
    },
    {
      path: routes.profile,
      element: <Profile />
    },
    {
      path: routes.social,
      element: <Social />,
      children: [
        {
          path: routes.home,
          element: <Home />
        },
        {
          path: routes.mentors,
          element: <Mentors />
        },

      ]
    }
    // {
    //   path: '*',
    //   element: <Error />
    // }
  ]);

  return elements;
};
export default AppRouter;
