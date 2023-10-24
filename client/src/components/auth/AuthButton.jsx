import LoginHook from "../../hook/Auth/login-hook"

const AuthButton = ({Bname,onClick}) => {
  return (
    <div className="w-[262px] h-[50px] p-2.5 bg-cyan-800 rounded justify-center items-center gap-2.5 inline-flex">
<button className="text-white text-base font-medium font-['Montserrat'] w-full h-full" onClick={onClick}>{Bname}</button>
    </div>
  )
}

export default AuthButton


