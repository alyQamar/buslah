// components/Error/Error.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaRedo } from 'react-icons/fa';
import CommonButton from '@common/CommonButton/CommonButton';

const Error = ({ title, errorCode, errorMessage, retryAction }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    if (retryAction) {
      retryAction();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-custom-blue-800 to-custom-blue-600 p-4 text-center">
      <div className="font-bold text-custom-white text-[8rem] uppercase drop-shadow-lg sm:text-[6rem]">
        {title}
      </div>
      <p className="text-4xl font-bold text-custom-white drop-shadow-lg sm:text-2xl">
        Error {errorCode}: {errorMessage}
      </p>
      <div className="mt-10 flex space-x-4">
        <CommonButton
          text={
            <span className="flex items-center justify-center">
              <FaHome className="mr-2" /> Back Home
            </span>
          }
          className="bg-custom-blue-800 text-custom-white font-bold hover:bg-custom-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          width="150px"
          height="50px"
          borderRadius="lg"
          onClick={() => navigate('/')}
          ariaLabel="Back to Home"
        />
        <CommonButton
          text={
            <span className="flex items-center justify-center">
              <FaRedo className="mr-2" /> Retry
            </span>
          }
          className="bg-custom-blue-800 text-custom-white font-bold hover:bg-custom-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          width="150px"
          height="50px"
          borderRadius="lg"
          onClick={handleRetry}
          ariaLabel="Retry"
        />
      </div>
    </div>
  );
};

export default Error;
