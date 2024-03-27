import points from '../../../assets/icons/qa/dot-horizontal.svg';
import ex from '../../../assets/icons/qa/expected-ans.svg';
import helpful from '../../../assets/icons/qa/helpful.svg';
import unhelpful from '../../../assets/icons/qa/unhelpful.svg';
import send from '../../../assets/icons/send.svg';
import save from '../../../assets/icons/common/bookmark.svg';
import answers from '../../../assets/icons/qa/answers.svg';

import Answer from './Answer';
import NoAnswer from './NoAnswer';

const QuestionCard = () => {
  return (
    <div className="w-[616px] min-h-[387px] relative bg-white rounded-lg shadow border-b-4">
      <div className="left-[24px] top-[24px] absolute justify-start items-start gap-3 inline-flex">
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
        <div className="h-12 flex-col justify-start items-start inline-flex">
          <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
          <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
        </div>
      </div>
      <img
        src={points}
        className="w-6 h-6 px-0.5 left-[580px] top-[12px] absolute justify-center items-center inline-flex"
      />

      <div className="min-w-[248px] h-5 left-[24px] top-[88px] absolute text-gray-700 text-base font-semibold font-['Montserrat'] leading-tight">
        How can i start UX\UI Design ?
      </div>

      <div className="w-[199px] h-[19px] left-[30px] top-[130px] flex gap-1 flex-row absolute text-gray-700 text-opacity-70 text-sm font-normal font-['Montserrat'] leading-[18.20px]">
        <img src={ex} />
        17 expected answers
      </div>

      <Answer />

      <div className="w-[248px] h-5 left-[24px] top-[348px] absolute text-cyan-800 text-base font-semibold font-['Montserrat'] leading-tight">
        View more answers
      </div>
    </div>
  );
};

export default QuestionCard;
