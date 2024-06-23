import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ iconSrc, altText, onClick, tooltipText }) => {
  const handleItemClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 p-2 bg-white rounded-lg shadow flex items-center justify-center cursor-pointer hover:bg-gray-100"
        onClick={handleItemClick}
      >
        <img src={iconSrc} alt={altText} className="icon w-6 h-6" />
      </div>
    </div>
  );
};

NavItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tooltipText: PropTypes.string,
};

export default NavItem;
