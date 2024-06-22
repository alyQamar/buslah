import React, { useState } from 'react';
import AddPostModal from './AddContentModal';
import OptionButton from './AddContentOptionButton';
import { AchievementIcon, EventIcon, FeelingIcon, MediaIcon } from '@shared/utils/Icons';

const AddContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="max-w-[616px] h-[178px] bg-white rounded-2xl p-4 shadow-md flex flex-col gap-4 cursor-pointer"
        onClick={openModal}
      >
        <div className="flex items-start gap-4">
          <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/63x63" alt="User Profile" />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 h-16 p-4 rounded-2xl border border-cyan-800 outline-none"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-cyan-800 border-opacity-25">
          <OptionButton icon={MediaIcon} label="Media" />
          {/* <OptionButton icon={FeelingIcon} label="Feeling" />
          <OptionButton icon={AchievementIcon} label="Achievement" />
          <OptionButton icon={EventIcon} label="Event" /> */}
        </div>
      </div>
      <AddPostModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AddContent;
