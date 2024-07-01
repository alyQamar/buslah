import React from 'react';
import PropTypes from 'prop-types';
import ex from '@assets/icons/qa/expected-ans.svg';
import helpfulIcon from '@assets/icons/qa/helpful.svg';
import unhelpfulIcon from '@assets/icons/qa/unhelpful.svg';

const QAAnalysisBar = ({ helpfulNo, unhelpfulNo, answersNo }) => {
  return (
    <div className="flex justify-between items-center w-full px-2 pb-2">
      {/* <div className="flex items-center gap-2">
        <img src={helpfulIcon} alt="helpful icon" className="w-6 h-6" />
        <div className="text-gray-700 text-sm font-medium">
          {helpfulNo} Helpful
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src={unhelpfulIcon} alt="unhelpful icon" className="w-6 h-6" />
        <div className="text-gray-700 text-sm font-medium">
          {unhelpfulNo} Unhelpful
        </div>
      </div> */}
      <div className="flex items-center gap-2">
        <img src={ex} alt="expected answer icon" className="w-6 h-6" />
        <div className="text-gray-700 text-sm font-medium">
          {answersNo} answers
        </div>
      </div>
    </div>
  );
};

QAAnalysisBar.propTypes = {
  helpfulNo: PropTypes.number.isRequired,
  unhelpfulNo: PropTypes.number.isRequired,
  answersNo: PropTypes.number.isRequired,
};

export default QAAnalysisBar;
