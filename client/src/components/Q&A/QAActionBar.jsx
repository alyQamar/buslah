import helpful from '@assets/icons/qa/helpful.svg';
import unhelpful from '@assets/icons/qa/unhelpful.svg';
import save from '@assets/icons/common/bookmark.svg';
import answers from '@assets/icons/qa/answers.svg';

const QAActionBar = () => {
  return (
    <div>
      <div className="left-[25px] top-[160px] absolute w-[555px] h-6 justify-center items-center gap-[70px] inline-flex">
        <div className="justify-center items-center gap-1 flex">
          <img src={helpful} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
          <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Helpful</div>
        </div>
        <div className="justify-center items-center gap-1 flex">
          <img src={unhelpful} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
          <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Unhelpful</div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <img src={answers} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
          <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Answers</div>
        </div>
        <div className="justify-center items-center gap-1 flex">
          <div className="w-6 h-6 justify-center items-center flex">
            <img
              src={save}
              className="grow shrink basis-0 self-stretch px-[4.80px] py-[2.40px] justify-center items-center inline-flex"
            />
          </div>
          <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Save</div>
        </div>
      </div>
    </div>
  );
};

export default QAActionBar;
