import useUpdateProfile from '@hooks/Profile/useUpdateProfile';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const [loading, error, onSubmitEdit, updatedProfileResult] = useUpdateProfile();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    headline: '',
    languages: '',
    pricePerHour: '',
    interests: '',
    skills: [''],
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const handleAddSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
     await onSubmitEdit(formData);
      navigate('/login');

  };

  return (
    <div className="flex justify-center items-center max-h-[90%] bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg  w-[80%]">
        <h2 className="text-2xl font-bold mb-4">Complete Your Profile</h2>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">First Name</label>
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
          <label className="text-gray-700 mb-1">Headline</label>
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">Languages</label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter the languages you speak"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">Price Per Hour</label>
          <input
            type="number"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your price per hour"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">Interests</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your interests"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">Skills</label>
          {formData.skills.map((skill, index) => (
            <input
              key={index}
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange('skills', index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              placeholder="Enter a skill"
            />
          ))}
          <button
            type="button"
            onClick={handleAddSkill}
            className="text-blue-500 mt-2"
          >
            + Add another skill
          </button>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your city"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your country"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {updatedProfileResult && <p className="text-green-500">Profile updated successfully!</p>}
    </div>
  );
};

export default ProfileForm;
