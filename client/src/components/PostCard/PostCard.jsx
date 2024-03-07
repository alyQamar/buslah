import points from '@assets/publicIcons/points.svg';
import likeblue from '@assets/publicIcons/Heartblue.png';
import likeempty from '@assets/publicIcons/Heartempty.png';
import likeblack from '@assets/publicIcons/Heartblack.png';
import comment from '@assets/publicIcons/Vector (1).png';
import share from '@assets/publicIcons/share.png';
import save from '@assets/publicIcons/save.png';
import DSave from '@assets/publicIcons/darkSave.png';

const PostCard = () => {
  return (
    <div className="w-[616px] h-[254px] relative bg-white rounded-lg shadow border-b-4">
      <div className="left-[24px] top-[24px] absolute justify-start items-start gap-3 inline-flex">
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
        <div className="h-12 flex-col justify-start items-start inline-flex">
          <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
          <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
        </div>
      </div>
      <div className=" left-[24px] top-[88px] absolute text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">
        You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate
        enough from the start, you’ll never stick it out.
      </div>
      <div className="h-24 pt-4 left-0 top-[155px] absolute border-t border-cyan-800 border-opacity-25 flex-col justify-end items-center gap-2 inline-flex">
        <div className="self-stretch justify-start items-start gap-[200px] inline-flex">
          <div className="h-6 justify-start items-center gap-1.5 flex">
            <div className="w-5 h-5 justify-center items-center flex">
              <img src={likeblack} className="w-5 h-5 relative flex-col justify-start items-start flex" />
            </div>
            <div className="w-48 h-6 text-gray-700 text-sm font-normal font-['Montserrat'] leading-tight">
              you and 17 other like
            </div>
          </div>
          <div className="w-[175px] h-6 text-right text-gray-700 text-sm font-normal font-['Montserrat'] leading-tight">
            10 comments . 2 Share
          </div>
        </div>
        <div className="self-stretch h-12 justify-center items-center gap-20 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <img src={likeblue} className="w-6 h-6 relative" />
            <div className="text-blue-600 text-base font-normal font-['Montserrat'] leading-tight">Like</div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <img src={comment} className="w-6 h-6 p-0.5 justify-center items-center flex" />
            <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Comment</div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <img src={share} className="w-6 h-6 px-0.5 py-1.5 justify-center items-center flex" />
            <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Share</div>
          </div>
          <div className="justify-center items-center gap-2 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <img
                src={save}
                className="grow shrink basis-0 self-stretch px-1 py-0.5 justify-center items-center inline-flex"
              />
            </div>
            <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Saved</div>
          </div>
        </div>
      </div>
      <img
        src={points}
        className="w-6 h-6 px-0.5 left-[580px] top-[12px] absolute justify-center items-center inline-flex"
      />
    </div>
  );
};

export default PostCard;
