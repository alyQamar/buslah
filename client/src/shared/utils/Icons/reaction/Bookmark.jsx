import React from 'react';

const BookmarkIcon = ({ fillColor = "none", stroke = "#3a7ca7", strokeWidth = 1.5 }) => {
  return (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.800781 2.40039C0.800781 1.84811 1.2485 1.40039 1.80078 1.40039H14.2008C14.7531 1.40039 15.2008 1.84811 15.2008 2.40039V19.5329C15.2008 19.9568 14.7064 20.1884 14.3807 19.917L8.00078 14.6004L1.62087 19.917C1.29521 20.1884 0.800781 19.9568 0.800781 19.5329V2.40039Z"
        fill={fillColor}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
