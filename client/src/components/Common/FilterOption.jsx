const FilterOption = ({ label, isActive, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <span className={`text-2xl font-medium font-['Montserrat'] ${isActive ? 'text-cyan-800' : 'text-gray-500'}`}>
        {label}
      </span>
      {isActive && <div className="absolute bottom-0 left-0 w-full border-b-2 border-cyan-800"></div>}
    </div>
  );
};
export default FilterOption;
