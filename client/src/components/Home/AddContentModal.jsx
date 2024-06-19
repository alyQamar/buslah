import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick, useKey } from 'rooks';
import CommonButton from '@common/CommonButton/CommonButton';
import OptionButton from './AddContentOptionButton';
import FilterOption from '@common/FilterOption';
import { AchievementIcon, EventIcon, FeelingIcon, MediaIcon } from '@shared/utils/Icons';

const AddContentModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Post'); // New state for active tab
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useKey(['Escape'], onClose, {
    when: isOpen
  });

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white w-full max-w-[800px] p-8 rounded-2xl shadow-lg relative">
            <CommonButton
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
              text="&times;"
              textSize="2xl"
              fontWeight="bold"
              width="32px"
              height="32px"
              borderRadius="full"
              onClick={onClose}
              ariaLabel="Close modal"
            />

            {/* Tab Selectors using FilterOption */}
            <div className="flex justify-around mb-4">
              <FilterOption label="Post" isActive={activeTab === 'Post'} onClick={() => setActiveTab('Post')} />
              <FilterOption label="Question" isActive={activeTab === 'Q&A'} onClick={() => setActiveTab('Q&A')} />
            </div>

            {/* Content based on active tab */}
            {activeTab === 'Post' ? (
              <div>
                <div className="flex items-start gap-4">
                  <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/63x63" alt="User Profile" />
                  <textarea
                    className="flex-1 h-48 p-4 rounded-2xl outline-none resize-none border-0"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-cyan-800 border-opacity-25 mt-4">
                  <OptionButton icon={MediaIcon} label="Media" />
                  <OptionButton icon={FeelingIcon} label="Feeling" />
                  <OptionButton icon={AchievementIcon} label="Achievement" />
                  <OptionButton icon={EventIcon} label="Event" />
                  <CommonButton
                    className="bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700"
                    text="Post"
                    width="auto"
                    height="auto"
                    onClick={onClose}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-start gap-4">
                  <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/63x63" alt="User Profile" />
                  <textarea
                    className="flex-1 h-48 p-4 rounded-2xl outline-none resize-none border-0"
                    placeholder="Ask a question..."
                  ></textarea>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-cyan-800 border-opacity-25 mt-4">
                  <OptionButton icon={MediaIcon} label="Media" />
                  <CommonButton
                    className="bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700"
                    text="Ask"
                    width="auto"
                    height="auto"
                    onClick={onClose}
                  />
                </div>
              </div>
            )}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default AddContentModal;
