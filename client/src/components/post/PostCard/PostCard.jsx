import points from '@assets/publicIcons/points.svg';
import InfoCard from './../../Common/InfoCard/InfoCard';
import AnalysisBar from '../AnalysisBar/AnalysisBar';
import ActionBar from '../ActionBar/ActionBar';

const PostCard = ({ post }) => {
  return (
    <div className="w-[616px] h-[254px] relative bg-white rounded-lg shadow border-b-4">
      <InfoCard />
      <div className=" left-[24px] top-[88px] absolute text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">
        {post}
      </div>
      <div className="h-24 pt-4 left-0 top-[155px] absolute border-t border-cyan-800 border-opacity-25 flex-col justify-end items-center gap-2 inline-flex">
        <AnalysisBar />
        <ActionBar />
      </div>
      <img
        src={points}
        alt="dots icon"
        className="w-6 h-6 px-0.5 left-[580px] top-[12px] absolute justify-center items-center inline-flex"
      />
    </div>
  );
};

export default PostCard;
