const FilterOption = ({ label, isActive, onClick }) => {
  return (
    <button className="relative cursor-pointer hover:text-custom-blue-btn-hover" onClick={onClick}>
      <span className={`text-2xl font-medium font-['Montserrat'] ${isActive ? 'text-custom-blue-800' : 'text-gray-500'}`}>
        {label}
      </span>
      {isActive && <div className="absolute bottom-0 left-0 w-full border-b-2 border-cyan-800"></div>}
    </button>
  );
};
export default FilterOption;
