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


  //validation

  const validationValues = () => {
    if (name === "" || name.length<3) {
      return "Username should have at least 3 characters"
    }
    if (password != confirmPassword) {
      return "Passwords do not match";
    }

return null;
}

 //selectors
 const res = useSelector(state => state.authReducer.createUser)

//console.log(res)

const onSubmit = async(e) => {
  e.preventDefault();
  const validationMessage = validationValues();
  if (validationMessage) {
    console.log(validationMessage)
    // Stop the onSubmit function
    return;
  }

  setLoading(true);
  await dispatch(createNewUser({
      name,
      email,
      password
    }));
  setLoading(false);
}
//use effect

useEffect(() => {
    if (loading === false) {
      if (res) {
          console.log(res)
          if (res.data.token) {
              localStorage.setItem("token", res.data.token)
              console.log("تم تسجيل الحساب بنجاح")
              setTimeout(() => {
                  navigate('/login')
              }, 2000);
          }
  }
  if (res.data.status==="error") {
console.log(res.data.message)
}
if (res.data.error) {
  console.log(res.data.error)
  }


}
}, [loading])

  return [name,email,password,confirmPassword,loading,onChangeName,onChangeEmail,onChangePassword
    ,onChangeConfirmPassword,onSubmit]
}

export default SignupHook
