import { useState } from 'react';
import FilterOption from '@common/FilterOption';
import SortByDropdown from '@common/SortByDropdown';
import { FilterEnum, SortEnum } from '@utils/data';


const SocialFeedFilter = ({ onFilterChange, onSortChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Most Recent');

  const filters = ['All', 'Posts', 'Q&A'];
  const sortOptions = ['Most Recent', 'Following'];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(FilterEnum[filter.toUpperCase().replace(' ', '_')]);
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
    onSortChange(SortEnum[sort.toUpperCase().replace(' ', '_')]);
  };

  return (
    <div className="w-full md:w-622 flex flex-row justify-between items-center p-4">
      <div className="flex flex-row gap-8">
        {filters.map((filter) => (
          <FilterOption
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => handleFilterChange(filter)}
          />
        ))}
      </div>
      <SortByDropdown sortOptions={sortOptions} currentSort={sortOption} onSortChange={handleSortChange} />
    </div>
  );
};

export default SocialFeedFilter;
