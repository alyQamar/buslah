const MenuItem = ({name , icon}) => {
  return (
    <div className="w-[236px] h-11 px-3 py-2 justify-start items-center gap-2 inline-flex">
        <img src={icon} className="w-6 h-6 relative" />
        <div className="grow shrink basis-0 text-gray-700 text-base font-normal font-['Public Sans'] leading-normal">{name}</div>
    </div>

  )
}//bg-stone-50 && bg-cyan-800

export default MenuItem



