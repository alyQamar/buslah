import { HeartIcon } from '@shared/utils/Icons';

const AnalysisBar = ({ likesNo, commentsNo, sharesNo }) => {
  return (
    <div className="ml-6 self-stretch justify-start items-start gap-40 inline-flex">
      <div className="h-6 justify-start items-center gap-1.5 flex">
        <div className="w-5 h-5 justify-center items-center flex">
          <img
            src={HeartIcon}
            alt="like reaction"
            className="w-5 h-5 relative flex-col justify-start items-start flex"
          />
        </div>
        <div className="w-48 h-6 text-gray-700 text-sm font-normal font-['Montserrat'] leading-tight">
          {likesNo} likes
        </div>
      </div>
      <div className="w-[175px] h-6 text-right text-gray-700 text-sm font-normal font-['Montserrat'] leading-tight">
        {commentsNo} comments . {sharesNo} Share
      </div>
    </div>
  );
};

export default AnalysisBar;
