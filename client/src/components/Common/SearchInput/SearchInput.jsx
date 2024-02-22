import PropTypes from 'prop-types';
import search from '@assets/mainSVG/search.svg';

const SearchInput = ({ size, ...rest }) => {
  return (
    <div
      className={`w-[${size}] h-[54px] px-2 rounded-lg shadow border border-cyan-800 justify-start items-center gap-2 flex`}
    >
      <img src={search} alt="Search Icon" />
      <input type="search" placeholder="Search" className="w-full h-full relative outline-none" {...rest} />
    </div>
  );
};

SearchInput.propTypes = {
  size: PropTypes.string.isRequired
};

SearchInput.defaultProps = {
  size: '680px'
};

export default SearchInput;
