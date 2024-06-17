import likeblue from '@assets/publicIcons/Heartblue.png';
import comment from '@assets/publicIcons/Vector (1).png';
import share from '@assets/publicIcons/share.png';
import save from '@assets/publicIcons/save.png';

const ActionBar = () => {
  return (
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
  );
};

export default ActionBar;
