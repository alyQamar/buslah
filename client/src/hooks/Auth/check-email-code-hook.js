import { useState, useRef,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { verifyPassword } from "../../redux/Actions/authActions";

const CheckEmailCodeHook = () => {

  const [writtenCode, setWrittenCode] = useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dispatchOccurred, setDispatchOccurred] = useState(false);
  const inputsChangedRef = useRef(false);
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleChange = (index, value) => {
    const newCode = [...writtenCode];
    newCode[index] = value;

    setWrittenCode(newCode);
    setDispatchOccurred(false);
    inputsChangedRef.current = true;

    // Stop further input when typing any single digit in the last input
    if (index === 5 && value.length === 1) {
      return;
    }

    // Move focus to the next input or stop if it's the last input and value is not empty
    if (index < 5 && value !== "") {
      inputRefs[index + 1].current.focus();
    } else if (index === 5 && value === "") {
      // If the last input is empty, move focus to the previous input
      inputRefs[index - 1].current.focus();
    }
  };
  const getWrittenCodeString = () => {
    return writtenCode.join("");
  };

  const userEmail = localStorage.getItem("user-email")
   console.log(userEmail)

   const res = useSelector(state => state.authReducer.verifyPassword)

   const userCode = getWrittenCodeString();



  useEffect(() => {
    const dispatchAsyncAction = async () => {
      console.log(userCode);

      if (!dispatchOccurred && userCode.length === 6) {
          await dispatch(verifyPassword({
            userEmail,
            code: userCode
        }));
        setDispatchOccurred(true);
        if (res) {
          console.log(res)
          if (res.request.status === 200) {
              setTimeout(() => {
                navigate('/resetpassword')
              }, 1500);
          }
          if (res.data.message === "The code is not verified") {
             console.log(res.data.message);
          }
      }



      }
    }
    dispatchAsyncAction();
  }, [userCode, dispatch, userEmail, res, dispatchOccurred]);

  useEffect(() => {
    inputsChangedRef.current = false;
  }, [writtenCode]);

  return [writtenCode, inputRefs, handleChange];
};

export default CheckEmailCodeHook;
