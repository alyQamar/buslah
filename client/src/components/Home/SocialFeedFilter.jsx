import FilterOption from '@common/FilterOption';
import SortByDropdown from '@common/SortByDropdown';
import { useState } from 'react';

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
// const SocialFeedFilter = () => {
//   return (
//     <div className="w-622 flex flex-row justify-between">
//       <div className="flex flex-row justify-around gap-8">
//         <div className="w-10 h-9 relative">
//           <div className="w-8 left-[5px] top-0 absolute text-cyan-800 text-2xl font-medium font-['Montserrat']">
//             All
//           </div>
//           <div className="w-10 h-px left-0 top-[37px] absolute border-2"></div>
//         </div>

//         <div className="w-10 h-9 relative">
//           <div className="w-8 left-[-5px] top-0 absolute text-cyan-800 text-2xl font-medium font-['Montserrat']">
//             Posts
//           </div>
//           <div className="w-10 h-px left-0 top-[37px] absolute border-2"></div>
//         </div>

//         <div className="w-10 h-9 relative">
//           <div className="w-8 left-[5px] top-0 absolute text-cyan-800 text-2xl font-medium font-['Montserrat']">
//             Q&A
//           </div>
//           <div className="w-10 h-px left-0 top-[37px] absolute border-2"></div>
//         </div>
//       </div>
//       <div>
//         <span className="text-gray-700 text-base font-medium font-Montserrat">Sort by :</span>
//         <span className="text-gray-700 text-base font-semibold font-Montserrat"> Following</span>
//       </div>
//     </div>
//   );
// };

// export default SocialFeedFilter;
