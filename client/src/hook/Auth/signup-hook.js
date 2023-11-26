import { useState } from "react";

const SignupHook = () => {
//states
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
//get elements
const nameinput = document.getElementById('nameinputS');
const emailinput = document.getElementById('emailinputS');
const passwordinput = document.getElementById('passwordinputS');
const confirmpasswordinput = document.getElementById('confirmpasswordinputS');
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
const onSubmit = (e) => {
//   if (location.pathname === '/signup') {
//   console.log('You are on the signup page');
// }
e.preventDefault();
console.log("Name: ",nameinput.value)
console.log("Email: ",emailinput.value)
console.log("Password: ",passwordinput.value)
console.log("Confirm Password: ",confirmpasswordinput.value)
setName("")
setEmail("")
setPassword("")
setConfirmPassword("")
}

  return [name,email,password,confirmPassword,onChangeName,onChangeEmail,onChangePassword
    ,onChangeConfirmPassword,onSubmit]
}

export default SignupHook
