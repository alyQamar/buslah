import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from "../../redux/Actions/authActions";

const SignupHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
//states
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [loading, setLoading] = useState(true)
//get elements
// const nameinput = document.getElementById('nameinputS');
// const emailinput = document.getElementById('emailinputS');
// const passwordinput = document.getElementById('passwordinputS');
// const confirmpasswordinput = document.getElementById('confirmpasswordinputS');
//functions
const onChangeName = (e) => {
  setName(e.target.value)
}
const onChangeEmail = (e) => {
  setEmail(e.target.value)
}

const onChangePassword = (e) => {
setPassword(e.target.value)
}
const onChangeConfirmPassword = (e) => {
  setConfirmPassword(e.target.value)
  }

 //selectors
 const res = useSelector(state => state.authReducer.createUser)

const onSubmit = async(e) => {
e.preventDefault();
try {
  setLoading(true);
  await dispatch(createNewUser({ name, email, password }));
  setLoading(false);
} catch (error) {
  setLoading(false);
  // Handle error appropriately (e.g., display an error message)
  console.error('Error submitting form:', error);
}
}
//use effect

useEffect(() => {
  if (loading === false) {
      if (res) {
          console.log(res)
          if (res.data.token) {
              localStorage.setItem("token", res.data.token)
              setTimeout(() => {
                  navigate('/login')
              }, 2000);
          }

      }
  }
}, [loading])

  return [name,email,password,confirmPassword,loading,onChangeName,onChangeEmail,onChangePassword
    ,onChangeConfirmPassword,onSubmit]
}

export default SignupHook
