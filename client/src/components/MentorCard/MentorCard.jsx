import heartwhite from "../../assets/publicIcons/HeartCard.svg"
import FreeIcon from "../../assets/publicIcons/FreeIcon.svg"
import raring from "../../assets/publicIcons/RatingStar.svg"
import { useNavigate } from "react-router";

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${mentor.authID}`);
  };

  return (
    <div className="w-[333px] h-[467px] cursor-pointer relative bg-stone-50 bg-opacity-25 rounded-3xl shadow overflow-hidden"
    onClick={handleClick}>
      <div className="left-[12px] top-[305px] absolute text-black text-2xl font-medium font-['Montserrat']">{mentor.firstName}</div>
      <div className="left-[12px] top-[342px] absolute text-black text-base font-normal font-['Montserrat']">{mentor.interests}</div>

      <div className="w-[307.94px] h-[59px] left-[12px] top-[386px] absolute">
        <div className="w-[90%] h-[59px] left-[16px] top-0 absolute bg-zinc-100 rounded-[20px] border border-gray-700 justify-center items-center gap-2 inline-flex">
          <div className="text-cyan-800 text-2xl font-semibold font-['Montserrat']">Follow</div>
        </div>
      </div>

      <div className="h-[292px] px-3 pt-[11px] pb-[254px] left-0 top-[1px] absolute justify-center items-start gap-[105px] inline-flex"
        style={{ backgroundColor: "aliceblue" }}>
        <div className="w-[102px] h-[27px] pl-[23px] pr-[6px] pt-px pb-0.5 bg-cyan-800 rounded-2xl justify-center items-center inline-flex">
          <div className="relative">
            <div className="left-[-20px] top-[-8px] absolute text-slate-300 text-xs font-medium font-['Montserrat']">Free</div>
            <img src={FreeIcon} className="w-6 h-6 px-[2.40px] py-[5.10px] left-0 top-0 absolute justify-center items-center inline-flex" />
          </div>
        </div>

        <div className="w-[102px] h-[27px] px-[11px] pt-[7px] pb-2 bg-cyan-800 rounded-2xl justify-center items-center inline-flex">
          <div className="text-slate-300 text-[10px] font-medium font-['Montserrat']">Recommended</div>
        </div>
      </div>

      <div className="w-14 h-[31px] left-[265px] top-[305px] absolute rounded-[9.08px] flex-col justify-center items-center gap-[2.42px] inline-flex">
        <div className="relative">
          <img src={raring} />
          <div className="left-[19.36px] top-0 absolute text-gray-700 text-sm font-semibold font-['Montserrat']">{mentor.ratingsQuantity}</div>
        </div>
      </div>
    </div>
  )
}

export default MentorCard;
