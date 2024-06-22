import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick, useKey } from 'rooks';
import CommonButton from '../Common/CommonButton/CommonButton';

const EditProfileModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [username, setUsername] = useState('');
  const [skills, setSkills] = useState(['']);
  const [experiences, setExperiences] = useState(['']);

  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useKey(['Escape'], onClose, {
    when: isOpen
  });

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, '']);
  };

  const handleExperienceChange = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index] = value;
    setExperiences(newExperiences);
  };

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
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Skills</label>
              {skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                  placeholder="Enter a skill"
                />
              ))}
              <button
                onClick={handleAddSkill}
                className="text-cyan-800 hover:text-cyan-600 transition duration-200"
              >
                Add another skill
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Experiences</label>
              {experiences.map((experience, index) => (
                <input
                  key={index}
                  type="text"
                  value={experience}
                  onChange={(e) => handleExperienceChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                  placeholder="Enter an experience"
                />
              ))}
              <button
                onClick={handleAddExperience}
                className="text-cyan-800 hover:text-cyan-600 transition duration-200"
              >
                Add another experience
              </button>
            </div>
            <div className="flex justify-end">
              <CommonButton
                className="bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700"
                text="Update"
                width="auto"
                height="auto"
                onClick={onClose}
              />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default EditProfileModal;
