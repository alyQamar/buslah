import React from 'react';
import GroupedSelectors from '../Common/GroupedSelectors';

const Test2 = () => {
  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
    // Add more countries here
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' }
    // Add more languages here
  ];

  const fieldOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'design', label: 'Design' }
    // Add more fields here
  ];

  const experienceOptions = [
    { value: 'entry', label: 'Entry Level' },
    { value: 'mid', label: 'Mid Level' }
    // Add more experiences here
  ];

  const skillsOptions = [
    { value: 'management', label: 'Management' },
    { value: 'communication', label: 'Communication' }
    // Add more skills here
  ];

  const sortByOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'date', label: 'Date' }
    // Add more sort criteria here
  ];
  //////////////////////////////////////////////////////////////////
  const handleCountryChange = (selectedOption) => {
    console.log('Selected country:', selectedOption);
    // Implement your logic here
  };

  const handleLanguageChange = (selectedOption) => {
    console.log('Selected language:', selectedOption);
    // Implement your logic here
  };

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };
  return (
    <div style={{ width: '200px' }}>
      <GroupedSelectors
        groupLabel="Countries"
        options={countryOptions}
        placeholder="Country"
        onChange={handleCountryChange}
      />

      <GroupedSelectors
        groupLabel="Languages"
        options={languageOptions}
        placeholder="Language"
        onChange={handleLanguageChange}
      />

      <GroupedSelectors groupLabel="Field" options={fieldOptions} placeholder="Field" onChange={handleChange} />

      <GroupedSelectors
        groupLabel="Experiences"
        options={experienceOptions}
        placeholder="Experience"
        onChange={handleChange}
      />

      <GroupedSelectors groupLabel="Skills" options={skillsOptions} placeholder="Skill" onChange={handleChange} />

      <GroupedSelectors groupLabel="Sort by" options={sortByOptions} placeholder="Sort by..." onChange={handleChange} />
    </div>
  );
};

export default Test2;
