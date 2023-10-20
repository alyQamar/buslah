import emailicon from '../../assets/authSVG/mail.svg'

function InputEmail() {
  return (
    <div className="w-[480px] h-[50px] px-3 py-1 border-b border-gray-700 justify-start items-center gap-1 inline-flex">
        <img src={emailicon} className="w-4 h-4 relative" />
        <input type='email' placeholder='Mike@example.com'
        className="text-neutral-400 flex-1 h-full outline-none text-gray-900 text-lg"/>
    </div>
  )
}

export default InputEmail
