import GroupedSelectors from '@common/GroupedSelectors';
import MentorCard from '@components/Mentor/MentorCard';
import NavBarWithoutSearch from '@components/Navbar/NavbarWithoutSearch';
import Pagination from '@common/Pagination';
import SearchInput from '@common/SearchInput/SearchInput';
import SideBar from '@common/SideNav';
import { useState, useEffect } from 'react';
import GetAllMentorsHook from '../../../hooks/Mentor/get-all-mentors-hook';

const Mentors = () => {

  const [currentPage, setCurrentPage] = useState(0); // Ensure this comes before any use of currentPage
  const limit = 5;
  const [items,pagination] = GetAllMentorsHook(currentPage, limit);
  console.log("items :",items);
  // for pagination

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected +1);
  };

  useEffect(() => {
    console.log(`Selected Page: ${currentPage + 1}`);
  }, [currentPage]);

  //for groupSelectors

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
    <div className="relative">
      <div className="flex justify-center items-center fixed mb-[200px] z-10">
        <NavBarWithoutSearch />
      </div>
      <div className="absolute left-[60px] top-[120px]">
        <SideBar />
      </div>
      <div className="absolute left-[375px] top-[130px]">
        <div>
          <SearchInput />
        </div>

        <div className="mb-[20px] mt-[20px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-0 gap-y-5">
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

          <GroupedSelectors
            groupLabel="Sort by"
            options={sortByOptions}
            placeholder="Sort by..."
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">

        {items.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}

        </div>
        <div className="h-[41px] mt-[50px] mb-[50px] w-full">
        <Pagination pageCount={pagination.numberOfPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
