
const AuthButton = ({Bname,onClick}) => {
  return (
    <div className="authbutton">
<button className="text-white text-base font-medium font-['Montserrat'] w-full h-full" onClick={onClick}>{Bname}</button>
    </div>
  )
}

export default AuthButton


