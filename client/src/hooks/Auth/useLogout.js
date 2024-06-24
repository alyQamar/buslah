import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../redux/Actions/authActions";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const logoutStatus = useSelector(state => state.authReducer);

  // Function to handle logout
  const onLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      await dispatch(logout());
      localStorage.setItem("isLoggedIn",false);

      navigate('/login');
    } catch (e) {
      setError('An error occurred during logout.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return [loading, error, onLogout];
};

export default useLogout;
