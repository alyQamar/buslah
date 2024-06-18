import React from 'react';
import Select from 'react-select';

const SortByDropdown = ({ sortOptions, currentSort, onSortChange }) => {
  const formattedOptions = sortOptions.map((option) => ({
    value: option,
    label: option
  }));
  const selectedOption = formattedOptions.find((option) => option.value === currentSort);
  const customStyles = {
    control: (base) => ({
      ...base,
      minWidth: 100,
      borderRadius: '0.375rem',
      padding: '0',
      fontSize: '1rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        borderColor: 'none',
        backgroundColor: 'transparent'
      }
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 8px',
      backgroundColor: 'transparent'
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f0f0f0' : 'transparent',
      color: 'black',
      '&:active': {
        backgroundColor: '#e0e0e0'
      }
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#666',
      '&:hover': {
        color: '#333'
      }
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: 'transparent'
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#fff'
    })
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-base font-medium font-Montserrat">Sort by:</span>
      <Select
        value={selectedOption}
        onChange={(selected) => onSortChange(selected.value)}
        options={formattedOptions}
        styles={customStyles}
        aria-label="Sort by options"
        className="react-select-container"
      />
    </div>
  );
};

export default SortByDropdown;
