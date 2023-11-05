import { useState } from 'react'

const LoginHook = () => {
//states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//get elements
  const emailinput = document.getElementById('emailinput');
  const passwordinput = document.getElementById('passwordinput');
  //functions
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
}

const onChangePassword = (e) => {
  setPassword(e.target.value)
}
const onSubmit = (e) => {
//   if (location.pathname === '/login') {
//   console.log('You are on the login page');
// }
  e.preventDefault();
  console.log("Email: ",emailinput.value)
  console.log("Password: ",passwordinput.value)
  setEmail("")
  setPassword("")
}

  return  [email,password,onChangeEmail,onSubmit,onChangePassword]

}

export default LoginHook
