import usericon from '../../assets/authSVG/user.svg'

function InputName({value , onChange,id}) {
  return (
    <div className="w-[480px] h-[50px] px-3 py-1 border-b border-gray-700 justify-start items-center gap-1 inline-flex">
    <img src={usericon} className="w-4 h-4 relative" />
    <input type='text' placeholder='first name' value={value} onChange={onChange} id={id}
    className="text-neutral-400 flex-1 h-full outline-none text-gray-900 text-lg"/>
</div>
  )
}

export default InputName


