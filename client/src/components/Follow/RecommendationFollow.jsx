import InfoCard from '@components/Common/InfoCard/InfoCard';

const RecommendationFollow = () => {
  return (
    <div className="w-full h-[72px] p-2 bg-white rounded-xl flex justify-between items-center gap-2">
      {/* <div className="flex items-center gap-2">
        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" alt="Profile" />
        <div className="flex flex-col">
          <div className="text-gray-700 text-base font-medium font-['Montserrat']">Ahmed Kamel</div>
          <div className="text-slate-400 text-sm font-medium font-['Montserrat']">Product Design at Google</div>
        </div>
      </div> */}
      <InfoCard size="sm" name="Aly Qamar" role="SWE@Buslah" imageSrc="https://via.placeholder.com/10x10" />
      <div className="w-18 h-9 p-1 bg-white rounded-lg flex justify-center items-center">
        <div className="text-cyan-800 text-sm font-medium">+ Follow</div>
      </div>
    </div>
  );
};

export default RecommendationFollow;
