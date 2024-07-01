import LoggedUser from '../../hooks/Auth/logged-user';

const Experience = ({ experiences }) => {

  return (
    <div className="w-[742px] min-h-[338px]  bg-white rounded-2xl flex flex-col">
      <div className=" w-[511px] pl-[7%] pt-[5%]  text-cyan-800 text-[31px] font-semibold font-['Montserrat']">
        Experience
      </div>
      {experiences && experiences.length > 0 ? (
        experiences.map((exp, index) => (
          <div key={index} className=" w-[679px] min-h-[94px] p-4 mt-[25px] ml-[30px] bg-stone-50 rounded-2xl shadow justify-center items-center gap-6 inline-flex">
            <div className="w-[437px] flex-col justify-center items-start gap-2 inline-flex">
              <div className="w-[421px] text-gray-600 text-[25px] font-medium font-['Montserrat']">{exp.role}</div>
              <div className="w-[421px] text-slate-600 text-xl font-semibold font-['Montserrat']">{exp.company}</div>
            </div>
            <div className="p-2.5 bg-white rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-slate-600 text-base font-medium font-['Montserrat']">{`from ${exp.fromDate} to ${exp.toDate}`}</div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="w-[679px] h-[94px] p-4 mt-[100px] ml-[30px] bg-stone-50 rounded-2xl shadow justify-center items-center gap-6 inline-flex">
            <div className="w-[437px] flex-col justify-center items-start gap-2 inline-flex">
              <div className="w-[421px] text-gray-600 text-[25px] font-medium font-['Montserrat']">UX/UI Designer</div>
              <div className="w-[421px] text-slate-600 text-xl font-semibold font-['Montserrat']">@octoref</div>
            </div>
            <div className="p-2.5 bg-white rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-slate-600 text-base font-medium font-['Montserrat']">from 15 Apr to 22 Jun</div>
            </div>
          </div>
          <div className="w-[679px] h-[94px] p-4 mt-[25px] ml-[30px] bg-stone-50 rounded-2xl shadow justify-center items-center gap-6 inline-flex">
            <div className="w-[437px] flex-col justify-center items-start gap-2 inline-flex">
              <div className="w-[421px] text-gray-600 text-[25px] font-medium font-['Montserrat']">UX/UI Designer</div>
              <div className="w-[421px] text-slate-600 text-xl font-semibold font-['Montserrat']">@octoref</div>
            </div>
            <div className="p-2.5 bg-white rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-slate-600 text-base font-medium font-['Montserrat']">from 15 Apr to 22 Jun</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
