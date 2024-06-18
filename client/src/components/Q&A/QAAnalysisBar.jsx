import ex from '@assets/icons/qa/expected-ans.svg';
const QAAnalysisBar = ({ answersNo }) => {
  return (
    <div className="w-[199px] h-[19px] left-[30px] top-[130px] flex gap-1 flex-row absolute text-gray-700 text-opacity-70 text-sm font-normal font-['Montserrat'] leading-[18.20px]">
      <img src={ex} alt="expected answer icon" />
      {answersNo} answers
    </div>
  );
};

export default QAAnalysisBar;
