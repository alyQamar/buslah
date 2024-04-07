import { useEffect } from "react";
import { getLoggedUser } from "../../redux/Actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const LoggedUser = () => {
  const currentUserData = useSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getLoggedUser());

        // Check for the presence of user data in the response
        if (response && response.data) {
          const userData = response.data;
          console.log(userData); // User data will be logged here
        } else {
          console.error('Error fetching user data:', response);
        }
      } catch (error) {
        // Handle other errors, e.g., network issues
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return [currentUserData];
};

export default LoggedUser;
