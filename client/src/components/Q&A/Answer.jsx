import helpful from '@assets/icons/qa/helpful.svg';
import unhelpful from '@assets/icons/qa/unhelpful.svg';
import send from '@assets/icons/send.svg';
import save from '@assets/icons/common/bookmark.svg';
import InfoCard from '@components/Common/InfoCard/InfoCard';

const Answer = ({ answer }) => {
  return (
    <div>
      <div className="left-[40px] top-[200px] absolute justify-start items-start gap-3 inline-flex">
        <InfoCard size="lg" name="Aly Qamar" role="SWE@Buslah" imageSrc="https://via.placeholder.com/48x48" />
      </div>

      <div className="w-[484px] min-h-[62px] left-[100px] top-[256px] absolute">
        <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">{answer}</div>
        <span className=" text-gray-700 text-base font-medium font-['Montserrat'] underline leading-tight">
          See More
        </span>
      </div>

      <div className="w-[420px] h-12 left-[100px] top-[338px] absolute justify-start items-center gap-10 inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <img src={helpful} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
          <div className="text-cyan-800 text-base font-medium font-['Montserrat'] leading-tight">helpful</div>
        </div>
        <div className="justify-center items-center gap-1 flex">
          <img src={unhelpful} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
          <div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Unhelpful</div>
        </div>
        <div className="justify-start items-center gap-2 flex">
          <img src={send} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
          <div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Send</div>
        </div>
        <div className="justify-center items-center gap-2 flex">
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

export default Answer;
