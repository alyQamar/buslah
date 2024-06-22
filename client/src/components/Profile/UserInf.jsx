import React, { useState } from 'react';
import profile from "../../assets/icons/profile/profile photo.svg";
import icon1 from "../../assets/icons/profile/Vector.svg";
import icon2 from "../../assets/icons/profile/Vector (1).svg";
import edit from "../../assets/icons/profile/edit.svg";
import EditProfileModal from './EditProfileModal';

const UserInf = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <div className="w-[1309px] h-[246px] opacity-80 bg-neutral-300 z-0"></div>
      <div className="flex flex-row items-center mt-[-100px] ml-[100px] z-10 absolute">
        <div>
          <img src={profile} alt="Profile Image" />
        </div>
        <div className="w-[497px] ml-[10px] text-gray-700 text-[49px] font-semibold font-['Montserrat']">
          User name
        </div>
        <div className="w-[480px] h-[60px] justify-start items-start gap-8 inline-flex">
          <div className="justify-center items-center gap-5 flex">
          <div
          className="w-[60px] h-[60px] p-3.5 bg-white rounded-2xl shadow justify-center items-center flex cursor-pointer"
          onClick={openModal}
        >
          <img src={edit} className="w-8 h-8 relative flex-col justify-start items-start flex" alt="Edit Icon" />
        </div>

            <div className="w-[60px] h-[60px] p-3.5 bg-white rounded-2xl shadow justify-center items-center flex">
              <img src={icon1} className="w-8 h-8 relative flex-col justify-start items-start flex" alt="Icon 1" />
            </div>
            <div className="w-[60px] h-[60px] p-3.5 bg-white rounded-2xl shadow justify-center items-center flex">
              <img src={icon2} className="w-8 h-8 p-[3.20px] justify-center items-center inline-flex" alt="Icon 2" />
            </div>
          </div>
          <div className="w-[237px] h-[60px] p-2.5 bg-cyan-800 rounded-lg shadow justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-medium font-['Montserrat']">Follow</div>
          </div>
        </div>
      </div>
      <EditProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default UserInf;
