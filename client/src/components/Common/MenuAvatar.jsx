import img from '../../assets/mainSVG/Image.svg'

const MenuAvatar = () => {
  return (
    <div className="w-[236px] h-16 p-3 bg-slate-50 rounded-lg justify-start items-center gap-2 inline-flex">
    <div className="w-10 h-10 justify-center items-center flex">
        <img className="w-10 h-10 rounded-full" src={img} />
    </div>
    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="text-gray-950 text-base font-semibold font-['Public Sans'] leading-normal">Ahmed K</div>
    </div>
</div>
  )
}

export default MenuAvatar
