import React from 'react';

const CommentIcon = ({ fillColor = "none", stroke = "#3a7ca7", strokeWidth = 1.5 }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.39941 7.40039H14.5994M7.39941 12.2004H11.5994M20.5994 11.0004C20.5994 12.3804 20.3082 13.6924 19.7839 14.8783L20.6012 20.5995L15.6983 19.3737C14.3094 20.1549 12.7064 20.6004 10.9994 20.6004C5.69748 20.6004 1.39941 16.3023 1.39941 11.0004C1.39941 5.69846 5.69748 1.40039 10.9994 1.40039C16.3013 1.40039 20.5994 5.69846 20.5994 11.0004Z"
        fill={fillColor}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommentIcon;
