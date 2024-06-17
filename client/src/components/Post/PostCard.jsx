import InfoCard from '../Common/InfoCard/InfoCard';
import AnalysisBar from './PostAnalysisBar';
import ActionBar from './PostActionBar';
import { DotsIcon } from '@shared/utils/Icons';

const PostCard = ({ post }) => {
  return (
    <div className="w-[616px] h-[254px] relative bg-white rounded-lg shadow border-b-4">
      <div className="ml-6 mt-6">
        <InfoCard size="xl" name="Aly Qamar" role="SWE@Buslah" imageSrc="https://via.placeholder.com/48x48" />
      </div>

      <div className=" left-[24px] top-[88px] absolute text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">
        {post}
      </div>
      <div className="w-full h-24 pt-4 left-0 top-[155px] absolute border-t border-cyan-800 border-opacity-25 flex-col justify-end items-center gap-2 inline-flex">
        <AnalysisBar />
        <ActionBar />
      </div>
      <img
        src={DotsIcon}
        alt="dots icon"
        className="w-6 h-6 px-0.5 left-[580px] top-[12px] absolute justify-center items-center inline-flex"
      />
    </div>
  );
};

export default PostCard;
