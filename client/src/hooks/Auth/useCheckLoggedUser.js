import { useEffect, useState } from "react";
import { getLoggedUser } from "../../redux/Actions/authActions";
import { useDispatch } from "react-redux";

const useCheckLoggedUser = () => {
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const response = await dispatch(getLoggedUser());

        if (response && response.data) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
    };

    fetchData();
  }, [dispatch]);

  return [isLogged ];
};

export default useCheckLoggedUser;
