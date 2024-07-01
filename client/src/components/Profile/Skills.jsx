import React from 'react';
import LoggedUser from '../../hooks/Auth/logged-user';

const Skills = ({ skills }) => {

  return (
    <div className="w-[742px] h-[261px] relative bg-white rounded-2xl">
      <div className="w-[511px] left-[7%] top-[10%] absolute text-cyan-800 text-[31px] font-semibold font-['Montserrat']">
        Skills
      </div>
      <div className="absolute left-[9%] top-[35%] flex flex-row flex-wrap gap-4">
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="h-[50px] px-4 py-2.5 bg-stone-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-gray-600 text-[25px] font-medium font-['Montserrat']">{skill}</div>
            </div>
          ))
        ) : (
          <>
            <div className="h-[50px] px-4 py-2.5 bg-stone-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-gray-600 text-[25px] font-medium font-['Montserrat']">Prototyping</div>
            </div>
            <div className="h-[50px] px-4 py-2.5 bg-stone-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-gray-600 text-[25px] font-medium font-['Montserrat']">Wireframing</div>
            </div>
            <div className="h-[50px] px-4 py-2.5 bg-stone-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-gray-600 text-[25px] font-medium font-['Montserrat']">UX Research</div>
            </div>
            <div className="h-[50px] px-4 py-2.5 bg-stone-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-gray-600 text-[25px] font-medium font-['Montserrat']">UI Design</div>
            </div>
            <div className="h-[50px] px-4 py-2.5 bg-stone-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-gray-600 text-[25px] font-medium font-['Montserrat']">CSS</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
