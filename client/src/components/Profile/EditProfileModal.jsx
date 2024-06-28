import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick, useKey } from 'rooks';
import CommonButton from '../Common/CommonButton/CommonButton';
import LoggedUser from '@hooks/Auth/logged-user';
import useUpdateProfile from '@hooks/Profile/useUpdateProfile';

const EditProfileModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [currentUserData] = LoggedUser();

  const [formData, setFormData] = useState({
    headline: currentUserData.data.headline || '',
    pricePerHour: currentUserData.data.pricePerHour || '',
    city: currentUserData.data.city || '',
    country: currentUserData.data.country || '',
    languages: currentUserData.data.languages || [''],
    interests: currentUserData.data.interests || [''],
    experience: currentUserData.data.experience || [{ title: '', company: '', fromDate: '', toDate: '' }],
    education: currentUserData.data.education || [{ degree: '', school: '', fromDate: '', toDate: '' }],
    socialLinks: currentUserData.data.socialLinks || [{ platform: '', link: '' }],
    skills: currentUserData.data.skills || [''],
  });

  const [loading, error, onSubmitEdit, updatedProfileResult] = useUpdateProfile();

  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useKey(['Escape'], onClose, { when: isOpen });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: newArray
    }));
  };

  const handleAddField = (field, defaultValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: [...prevFormData[field], defaultValue]
    }));
  };

  const handleExperienceChange = (index, key, value) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index] = { ...newExperiences[index], [key]: value };
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiences: newExperiences
    }));
  };

  const handleEducationChange = (index, key, value) => {
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [key]: value };
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: newEducation
    }));
  };

  const handleSocialLinkChange = (index, key, value) => {
    const newSocialLinks = [...formData.socialLinks];
    newSocialLinks[index] = { ...newSocialLinks[index], [key]: value };
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialLinks: newSocialLinks
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onSubmitEdit(formData);
      onClose();
    } catch (err) {
      console.error("Update error:", err);
    }
  };


  return isOpen
    ? createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div ref={modalRef} className="relative w-full max-w-4xl max-h-full p-4 overflow-y-auto bg-white rounded-lg shadow-lg">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Headline */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Headline</label>
              <input
                type="text"
                name="headline"
                value={formData.headline}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your headline"
              />
            </div>

            {/* Price Per Hour */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Price Per Hour ($)</label>
              <input
                type="number"
                name="pricePerHour"
                value={formData.pricePerHour}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your price per hour"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your city"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your country"
              />
            </div>

            {/* Languages */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Languages</label>
              {formData.languages.map((language, index) => (
                <input
                  key={index}
                  type="text"
                  value={language}
                  onChange={(e) => handleArrayChange('languages', index, e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg mb-2"
                  placeholder="Enter a language"
                />
              ))}
              <button
                onClick={() => handleAddField('languages', '')}
                className="self-start text-cyan-800 hover:text-cyan-600 transition duration-200"
                type="button"
              >
                Add another language
              </button>
            </div>

            {/* Interests */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Interests</label>
              {formData.interests.map((interest, index) => (
                <input
                  key={index}
                  type="text"
                  value={interest}
                  onChange={(e) => handleArrayChange('interests', index, e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg mb-2"
                  placeholder="Enter an interest"
                />
              ))}
              <button
                onClick={() => handleAddField('interests', '')}
                className="self-start text-cyan-800 hover:text-cyan-600 transition duration-200"
                type="button"
              >
                Add another interest
              </button>
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Experiences</label>
              {formData.experience.map((experience, index) => (
                <div key={index} className="flex flex-col mb-2 space-y-2">
                  <input
                    type="text"
                    value={experience.title}
                    onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Job Title"
                  />
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Company"
                  />
                  <input
                    type="date"
                    value={experience.fromDate}
                    onChange={(e) => handleExperienceChange(index, 'fromDate', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="From Date"
                  />
                  <input
                    type="date"
                    value={experience.toDate}
                    onChange={(e) => handleExperienceChange(index, 'toDate', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="To Date (optional)"
                  />
                </div>
              ))}
              <button
                onClick={() => handleAddField('experiences', { title: '', company: '', fromDate: '', toDate: '' })}
                className="self-start text-cyan-800 hover:text-cyan-600 transition duration-200"
                type="button"
              >
                Add another experience
              </button>
            </div>

            {/* Education */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Education</label>
              {formData.education.map((edu, index) => (
                <div key={index} className="flex flex-col mb-2 space-y-2">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="School"
                  />
                  <input
                    type="date"
                    value={edu.fromDate}
                    onChange={(e) => handleEducationChange(index, 'fromDate', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="From Date"
                  />
                  <input
                    type="date"
                    value={edu.toDate}
                    onChange={(e) => handleEducationChange(index, 'toDate', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="To Date"
                  />
                </div>
              ))}
              <button
                onClick={() => handleAddField('education', { degree: '', school: '', fromDate: '', toDate: '' })}
                className="self-start text-cyan-800 hover:text-cyan-600 transition duration-200"
                type="button"
              >
                Add another education
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Social Links</label>
              {formData.socialLinks.map((link, index) => (
                <div key={index} className="flex flex-col mb-2 space-y-2">
                  <input
                    type="text"
                    value={link.platform}
                    onChange={(e) => handleSocialLinkChange(index, 'platform', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Platform (e.g., LinkedIn)"
                  />
                  <input
                    type="url"
                    value={link.link}
                    onChange={(e) => handleSocialLinkChange(index, 'link', e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    placeholder="Link URL"
                  />
                </div>
              ))}
              <button
                onClick={() => handleAddField('socialLinks', { platform: '', link: '' })}
                className="self-start text-cyan-800 hover:text-cyan-600 transition duration-200"
                type="button"
              >
                Add another social link
              </button>
            </div>

            {/* Skills */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Skills</label>
              {formData.skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  onChange={(e) => handleArrayChange('skills', index, e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg mb-2"
                  placeholder="Enter a skill"
                />
              ))}
              <button
                onClick={() => handleAddField('skills', '')}
                className="self-start text-cyan-800 hover:text-cyan-600 transition duration-200"
                type="button"
              >
                Add another skill
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
