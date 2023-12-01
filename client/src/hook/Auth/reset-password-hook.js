import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import { resetPassword } from "../../redux/Actions/authActions";

const ResetPasswordHook  = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLengthChecked, setIsLengthChecked] = useState(false);
  const [isSymbolNumberChecked, setIsSymbolNumberChecked] = useState(false);
  const [loading, setLoading] = useState(true)

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const containsSymbolOrNumber = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(newPassword);
    const meetsLengthRequirement = newPassword.length >= 8;

    setPassword(newPassword);
    setIsSymbolNumberChecked(containsSymbolOrNumber);
    setIsLengthChecked(meetsLengthRequirement);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheckboxChange = (checkboxId) => {
    if (checkboxId === "ck2") {
      setIsLengthChecked(!isLengthChecked);
    } else if (checkboxId === "ck3") {
      setIsSymbolNumberChecked(!isSymbolNumberChecked);
    }
  };

  const isButtonDisabled = !(isLengthChecked && isSymbolNumberChecked);

  const onSubmit = async (e) => {

    e.preventDefault();
    if (password != confirmPassword) {
        console.log("كلمة السر غير متطابقه مع تاكيد كلمع السر");
        return;
    }

    setLoading(true)
    await dispatch(resetPassword({
        email: localStorage.getItem("user-email"),
        password,
    }))
    setLoading(false)
}

const res = useSelector(state => state.authReducer.verifyPassword)

useEffect(() => {
  if (loading === false) {
      if (res) {
          console.log(res)
          if (res.data) {
            if (res.data.message === "success"){
              console.log("تم تغير كلمة السر بنجاح")
              setTimeout(() => {
                  navigate("/login")
              }, 1500);
            }
            if (res.data.status === "error") {
              console.log("User not found or the verification code's time has expired. Please try again.");
            }
          }

      }
  }
}, [loading])

  return [password, confirmPassword,isLengthChecked,isSymbolNumberChecked,isButtonDisabled,
     handlePasswordChange, handleConfirmPasswordChange, handleCheckboxChange,onSubmit]
}

export default ResetPasswordHook
