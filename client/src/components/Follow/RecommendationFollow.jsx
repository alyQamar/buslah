import InfoCard from '@components/Common/InfoCard/InfoCard';

const RecommendationFollow = () => {
  return (
    <div className="w-64 h-14 p-2 bg-white rounded-xl flex justify-between items-center gap-2 shadow-sm">
      <InfoCard size="sm" name="Aly Qamar" role="SWE@Buslah" imageSrc="https://via.placeholder.com/10x10" />
      <div className="w-18 h-9 p-1 bg-white rounded-lg flex justify-center items-center">
        <div className="text-cyan-800 text-sm font-medium">+ Follow</div>
      </div>
    </div>
  );
};

export default RecommendationFollow;
