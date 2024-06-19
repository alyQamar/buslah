import { useState } from 'react';
import FilterOption from '@common/FilterOption';
import SortByDropdown from '@common/SortByDropdown';

const SocialFeedFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Following');

  const filters = ['All', 'Posts', 'Q&A'];
  const sortOptions = ['Following', 'Most Recent', 'Popular'];

  return (
    <div className="w-full md:w-622 flex flex-row justify-between items-center p-4">
      <div className="flex flex-row gap-8">
        {filters.map((filter) => (
          <FilterOption
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>
      <SortByDropdown sortOptions={sortOptions} currentSort={sortOption} onSortChange={setSortOption} />
    </div>
  );
};

export default SocialFeedFilter;
