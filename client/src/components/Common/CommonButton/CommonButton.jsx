import React from 'react';
import PropTypes from 'prop-types';

const CommonButton = ({
  className = '',
  text,
  textSize = 'lg',
  fontWeight = 'normal',
  width = '96px',
  height = '40px',
  borderRadius = 'lg',
  onClick,
  ariaLabel
}) => {
  return (
    <button
      className={`transition-colors duration-300 ${className} text-${textSize} font-${fontWeight} rounded-${borderRadius} shadow-md hover:bg-custom-blue-btn-hover focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50`}
      onClick={onClick}
      style={{ width, height }}
      aria-label={ariaLabel || text}
    >
      {text}
    </button>
  );
};

CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  textSize: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string
};

export default CommonButton;
