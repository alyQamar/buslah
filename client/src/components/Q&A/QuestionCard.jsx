import Answer from './Answer';
import { DotVerticalIcon } from '@shared/utils/Icons';
import InfoCard from '@components/Common/InfoCard/InfoCard';
import QAActionBar from './QAActionBar';
import QAAnalysisBar from './QAAnalysisBar';

const QuestionCard = ({ question }) => {
  return (
    <div className="w-[616px] h-[416px] relative bg-white rounded-lg shadow border-b-4">
      <div className="ml-6 mt-6">
        <InfoCard size="xl" name="Aly Qamar" role="SWE@Buslah" imageSrc="https://via.placeholder.com/48x48" />
      </div>

      <div className="min-w-[248px] h-5 left-[24px] top-[88px] absolute text-gray-700 text-base font-semibold font-['Montserrat'] leading-tight">
        {question}
      </div>

      <QAAnalysisBar />
      <QAActionBar />
      {/* Answer List */}
      <div>
        <Answer
          answer="You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate
          enough from the start, you’ll never stick it out.."
        />
        <div className="w-[248px] h-5 left-[24px] top-[380px] absolute text-cyan-800 text-base font-semibold font-['Montserrat'] leading-tight">
          View more answers
        </div>
      </div>

      <img
        src={DotVerticalIcon}
        alt="dots icon"
        className="w-4 h-4 px-0.5 left-[580px] top-[12px] absolute justify-center items-center inline-flex"
      />
    </div>
  );
};

export default QuestionCard;
