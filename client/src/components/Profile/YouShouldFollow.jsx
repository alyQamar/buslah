import RecommendationFollow from "@components/Follow/RecommendationFollow";

const YouShouldFollow = () => {
  return (
    <div className="w-full max-w-[538px] p-8 bg-white rounded-2xl flex flex-col gap-6">
      <div className="text-cyan-800 text-[31px] font-semibold font-['Montserrat']">
        You should follow
      </div>
      <div className="flex flex-col items-center gap-4">
        <RecommendationFollow name="Ahmed Mohamed" role="SWE @Safty Tech Solutions" />
        <RecommendationFollow name="Ramzy Ahmed" role="ML Engineer @Robotica" />
        <RecommendationFollow name="Seif Sameh " role="Embedded Engineer @Vito" />
      </div>
    </div>
  );
};

export default YouShouldFollow;
