import RecommendationFollow from "@components/Follow/RecommendationFollow";

const YouShouldFollow = () => {
  return (
    <div className="w-full max-w-[538px] p-8 bg-white rounded-2xl flex flex-col gap-6">
      <div className="text-cyan-800 text-[31px] font-semibold font-['Montserrat']">
        You should follow
      </div>
      <div className="flex flex-col items-center gap-4">
        <RecommendationFollow />
        <RecommendationFollow />
        <RecommendationFollow />
        <RecommendationFollow />
        <RecommendationFollow />
      </div>
    </div>
  );
};

export default YouShouldFollow;
