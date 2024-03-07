import ProgressBarA from '../Common/ProgressBarA';
import Calender from '../Common/Calender';
import RecommendationFollow from '../Follow/RecommendationFollow';

const HomeRightSideBar = () => {
  return (
    <div className="w-[284px] h-[1780px] bg-stone-50 rounded-2xl flex flex-col items-center gap-[30px] pt-[30px]">
      <div className="w-[174px] text-cyan-800 text-xl font-medium font-['Montserrat']">Achievement</div>
      <div className="w-[252px] h-[75px] p-2 bg-white rounded-xl flex-col justify-center items-start gap-2 inline-flex">
        <div className="w-[201px] text-black text-sm font-normal font-['Montserrat']">
          Complete 10 Sessions and get an offer
        </div>
        <div>
          <ProgressBarA />
        </div>
      </div>
      <div className="w-[252px] h-6 justify-start items-start gap-3 inline-flex">
        <div className="w-[209px] text-cyan-800 text-xl font-medium font-['Montserrat']">Upcoming sessions</div>
        <div className="w-[29px] h-6 text-neutral-700 text-sm font-medium font-['Montserrat']">day</div>
      </div>
      <div className="w-[252px] h-[254px] p-[7px] py-2 bg-white rounded-xl justify-center items-center">
        <Calender />
      </div>
      <div className="w-[174px] text-cyan-800 text-xl font-medium font-['Montserrat']">Recommendation</div>
      <div className="flex flex-col items-center gap-3">
        <RecommendationFollow />
        <RecommendationFollow />
        <RecommendationFollow />
      </div>
    </div>
  );
};

export default HomeRightSideBar;
