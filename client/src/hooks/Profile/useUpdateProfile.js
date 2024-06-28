import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from "@redux/Actions/authActions";

const useUpdateProfile = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updatedSuccess, setUpdatedSuccess] = useState(false);

  const updatedProfileResult = useSelector(state => state.authReducer.userProfile);

  const onSubmitEdit = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await dispatch(updateUserProfile(userData));
      if (response && response.data) {
        console.log("Profile updated successfully:", response.data);
        setUpdatedSuccess(true);
      }
    } catch (error) {
      setError(error.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!loading && updatedProfileResult) {
      if (updatedProfileResult.data) {
        console.log("Profile updated successfully:", updatedProfileResult.data);
        setUpdatedSuccess(true);
      }
      if (updatedProfileResult.error) {
        setError(updatedProfileResult.error.message);
      }
    }
  }, [loading, updatedProfileResult]);

  return [
    loading, error, onSubmitEdit, updatedSuccess
  ];
}

export default useUpdateProfile;
