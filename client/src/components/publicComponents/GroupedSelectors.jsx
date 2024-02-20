import Select from 'react-select';

const GroupedSelectors = ({ groupLabel, options, placeholder, onChange }) => {
  const groupedOptions = [
    {
      label: groupLabel,
      options: options,
    },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '20px 5px',
      borderRadius: '1.5rem',
      borderColor: '#0891b2',
      borderWidth: '1px',
      maxWidth:"200px",
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#0891b2',
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '1.5rem',
    }),

  };

  return (
    <Select
      options={groupedOptions}
      placeholder={placeholder}
      onChange={onChange}
      isSearchable={true}
      isClearable={true}
      classNamePrefix="select"
      styles={customStyles}
    />
  );
};

export default GroupedSelectors;
