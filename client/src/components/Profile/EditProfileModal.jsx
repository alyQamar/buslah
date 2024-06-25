import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { useOutsideClick, useKey } from 'rooks';
import { updateUserProfile } from '../../redux/Actions/authActions'; // Import your update profile action
import CommonButton from '../Common/CommonButton/CommonButton';
import LoggedUser from '@hooks/Auth/logged-user';

const EditProfileModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const [currentUserData] = LoggedUser();


  const [formData, setFormData] = useState({
    firstName: currentUserData.data.firstName || '',
    skills: currentUserData.data.skills || [''],
    experiences: currentUserData.data.experiences || [''],
  });

  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useKey(['Escape'], onClose, {
    when: isOpen
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: newSkills
    }));
  };

  const handleAddSkill = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: [...prevFormData.skills, '']
    }));
  };

  const handleExperienceChange = (index, value) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiences: newExperiences
    }));
  };

  const handleAddExperience = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiences: [...prevFormData.experiences, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
    onClose();
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Skills</label>
                {formData.skills.map((skill, index) => (
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
                  type="button"
                >
                  Add another skill
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Experiences</label>
                {formData.experiences.map((experience, index) => (
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
                  type="button"
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
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default EditProfileModal;
