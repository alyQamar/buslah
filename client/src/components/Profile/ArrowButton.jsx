import React from 'react';
import arrow from "../../assets/icons/profile/arrow-back.svg";

const ArrowButton = () => {
  return (
    <div className="fixed top-4 left-4 bg-white rounded-full p-3 shadow-lg z-50 cursor-pointer">
      <img src={arrow} alt="Back Arrow" className="w-6 h-6" />
    </div>
  );
};

export default ArrowButton;
