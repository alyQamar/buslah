import React from 'react';
import PropTypes from 'prop-types';

const CommonButton = ({ className, text, textSize, fontWeight, width, height, borderRadius, onClick }) => {
  return (
    <button
      className={`${className} w-[${width}] h-[${height}] text-${textSize} font-${fontWeight} rounded-${borderRadius} shadow `}
      onClick={onClick}
      style={{ width, height }}
    >
      {text}
    </button>
  );
};

CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  textSize: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func
};

CommonButton.defaultProps = {
  textSize: 'lg',
  fontWeight: 'normal',
  width: '96px',
  height: '40px',
  borderRadius: 'lg'
};
export default CommonButton;
