import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUser } from '../../redux/Actions/authActions';

const LoginHook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
//states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true)
// //get elements
//   const emailinput = document.getElementById('emailinput');
//   const passwordinput = document.getElementById('passwordinput');
  //functions
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
}

const onChangePassword = (e) => {
  setPassword(e.target.value)
}
const onSubmit = async(e) => {
  e.preventDefault();
  setLoading(true)
  await dispatch(loginUser({
      email,
      password
  }))

  setLoading(false)

}

//selector
const res = useSelector(state => state.authReducer.loginUser)
//use Efect
useEffect(() => {
  if (loading === false) {
      if (res) {
          console.log(res)
          if (res.data.jwtToken) {
              localStorage.setItem("token", res.data.jwtToken)

            //   setTimeout(() => {
            //     navigate('/login')
            // }, 2000);
          } else {
              localStorage.removeItem("token")
          }

          if (res.data.message === "Incorrect email or password") {
              localStorage.removeItem("token")
              console.log(res.data.message)
          }
          setLoading(true)
      }
  }
}, [loading])

  return  [email,password,loading,onChangeEmail,onSubmit,onChangePassword]

}

export default LoginHook
