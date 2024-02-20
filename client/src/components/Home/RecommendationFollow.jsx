import follow from "../../assets/publicIcons/follow.png"
const RecommendationFollow = () => {
  return (
    <div className="w-[252px] h-[42px] pl-2 pr-[8.47px] pt-2 pb-[7.80px] bg-white rounded-xl justify-center items-center gap-[2px] inline-flex">
  <div className="grow shrink basis-0 self-stretch justify-start items-start gap-[6.55px] inline-flex">
    <img className="w-[26.20px] h-[26.20px] rounded-full" src="https://via.placeholder.com/26x26" />
    <div className="h-[26.20px] flex-col justify-start items-start inline-flex">
      <div className="w-[169.73px] text-cyan-800 text-[13.10px] font-medium font-['Montserrat']">Ahmed kamel</div>
      <div className="w-[188.28px] text-slate-400 text-[8.73px] font-medium font-['Montserrat']">Proudect Design at Google</div>
    </div>
  </div>
  <div className="w-[49.53px] self-stretch relative">
    <img src={follow} className="w-[14.17px] h-[14.17px] p-[2.95px] left-0 top-0 absolute justify-center items-center inline-flex" />
    <div className="left-[16.53px] top-[1.18px] absolute text-cyan-800 text-[9.45px] font-semibold font-['Montserrat']">Follow</div>
  </div>
</div>
  )
}

export default RecommendationFollow
