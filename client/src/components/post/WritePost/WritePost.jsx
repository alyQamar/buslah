import media from '@assets/publicIcons/pic.png';
import event from '@assets/publicIcons/vector.png';
import article from '@assets/publicIcons/icon.png';
import golive from '@assets/publicIcons/live.png';

const WritePost = () => {
  return (
    <div className="w-[616px] h-[178px] bg-white rounded-2xl flex flex-col justify-between gap-5 pt-[10px]">
      <div className="flex flex-row gap-3">
        <div className=" justify-start items-start gap-4 inline-flex">
          <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/63x63" />
        </div>

        <div className=" w-96 min-h-16 pl-4 pr-6 pt-4 pb-6 rounded-2xl border border-cyan-800 justify-start items-center inline-flex">
          <input type="text" placeholder="Write post" className="w-full h-full rounded outline-none " />
        </div>
      </div>

      <div className="h-16 border-t border-cyan-800 border-opacity-25 justify-center items-center gap-20 inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <img src={media} />
          <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Media</div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <img src={event} />
          <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Event</div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <img src={article} />
          <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Write article</div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <img src={golive} />
          <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Go live</div>
        </div>
      </div>
    </div>
  );
};

export default WritePost;

// <div className="w-96 h-16 pl-4 pr-96 pt-4 pb-6 left-[95px] top-[24px] absolute rounded-2xl border border-cyan-800 justify-start items-center inline-flex">
//     <div className="text-cyan-800 text-opacity-70 text-base font-normal font-['Montserrat'] leading-tight">Write post</div>
//   </div>

// <div className="w-96 h-16 left-0 top-[111px] absolute border-t border-cyan-800 border-opacity-25 justify-center items-center gap-20 inline-flex">
//       <div className="justify-start items-center gap-2 flex">
//         <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Media</div>
//       </div>
//       <div className="justify-start items-center gap-2 flex">
//         <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Event</div>
//       </div>
//       <div className="justify-start items-center gap-2 flex">
//         <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Write article</div>
//       </div>
//       <div className="justify-start items-center gap-2 flex">
//         <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Go live</div>
//       </div>
//     </div>
