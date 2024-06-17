const InfoCard = () => {
  return (
    <div className="left-[24px] top-[24px] absolute justify-start items-start gap-3 inline-flex">
      <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
      <div className="h-12 flex-col justify-start items-start inline-flex">
        <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
        <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
      </div>
    </div>
  );
};

export default InfoCard;
