const Taps = () => {
  return (
    <div className="flex flex-col gap-[40px] ">
      <div className="justify-start items-center gap-10 inline-flex">
        <div className="p-2.5 border-b-2 border-cyan-800 justify-center items-center gap-2.5 flex">
          <div className="text-cyan-800 text-4xl font-medium font-['Montserrat']">Overview</div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-gray-600 text-3xl font-medium font-['Montserrat']">Reviews</div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-gray-600 text-3xl font-medium font-['Montserrat']">Q&A</div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-gray-600 text-3xl font-medium font-['Montserrat']">More</div>
        </div>
      </div>
      <div className="min-w-[1130px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[1130px] text-gray-700 text-[25px] font-medium font-['Montserrat'] leading-10">
          I’m a Division Head of Product @ HTEC Group where I’m in charge of staffing, coaching and assessing 40 PMs in
          implementing a single Product Vision as well as owning the competency model for Product manager roles.
          In my Product management career, I've helped both Fortune 500 Companies and green-field startups grow their initiatives
          and build sustainable revenue.
        </div>
      </div>
    </div>
  );
};

export default Taps;
