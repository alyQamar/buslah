import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { forgetPassword } from '../../redux/Actions/authActions';

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)


  const OnChangeEmail = (e) => {
      setEmail(e.target.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
        console.log("من فضلك ادخل الايميل")
        return;
    }
    localStorage.setItem("user-email" ,email)
    setLoading(true)
    await dispatch(forgetPassword({
        email,
    }))
    setLoading(false)
}

const res = useSelector(state => state.authReducer.forgetPassword)

useEffect(() => {
    if (loading === false) {
        if (res) {
            console.log(res)
            if (res.data.message === "Password reset code sent successfully.") {
                console.log(res.data.message)
                 setTimeout(() => {
                   navigate("/checkemail")
                 }, 1000);
            }
            if (res.data.error === "User not found.") {
                console.log(res.data.error)
            }
        }
    }
}, [loading])

return [OnChangeEmail, email, onSubmit]
}

export default ForgetPasswordHook
