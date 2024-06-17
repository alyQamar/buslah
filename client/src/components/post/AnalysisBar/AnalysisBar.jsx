import likeblack from '@assets/publicIcons/Heartblack.png';

const AnalysisBar = () => {
  return (
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
  );
};

export default AnalysisBar;
