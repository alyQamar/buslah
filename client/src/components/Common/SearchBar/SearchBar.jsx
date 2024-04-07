import PropTypes from 'prop-types';
import Search from '@assets/icons/common/search.svg';

const SearchBar = ({ width, onChange }) => {
  return (
    <form
      action="#"
      className={`h-12 px-2 rounded-lg shadow border border-cyan-800 justify-start items-center gap-2 flex`}
      style={{ width }}
    >
      <img src={Search} alt="Search Icon" className="icon" />
      <input type="search" placeholder="Search..." className="relative outline-none flex-grow" onChange={onChange} />
    </form>
  );
};

SearchBar.propTypes = {
  width: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

SearchBar.defaultProps = {
  width: 'full'
};

export default SearchBar;
