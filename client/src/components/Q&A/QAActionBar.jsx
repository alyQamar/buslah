import React from 'react';
import PropTypes from 'prop-types';
import helpfulIcon from '@assets/icons/qa/helpful.svg';
import unhelpfulIcon from '@assets/icons/qa/unhelpful.svg';
import answersIcon from '@assets/icons/qa/answers.svg';
import saveIcon from '@assets/icons/common/bookmark.svg';

const QAActionBar = ({ onHelpfulClick, onUnhelpfulClick, onAnswerClick, onCommentClick }) => {

  return (
    <div className="flex justify-between items-center w-full px-2 pt-4">
      <div className="flex items-center gap-4 cursor-pointer" onClick={onHelpfulClick}>
        <img src={helpfulIcon} className="w-6 h-6" alt="helpful icon" />
        <div className="text-gray-700 text-base font-normal leading-tight">Helpful</div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer" onClick={onUnhelpfulClick}>
        <img src={unhelpfulIcon} className="w-6 h-6" alt="unhelpful icon" />
        <div className="text-gray-700 text-base font-normal leading-tight">Unhelpful</div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer" onClick={onAnswerClick}>
        <img src={answersIcon} className="w-6 h-6" alt="answers icon" />
        <div className="text-gray-700 text-base font-normal leading-tight">Answers</div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer" onClick={onCommentClick}>
        <img src={saveIcon} className="w-6 h-6" alt="save icon" />
        <div className="text-gray-700 text-base font-normal leading-tight">Save</div>
      </div>
    </div>
  );
};

QAActionBar.propTypes = {
  onHelpfulClick: PropTypes.func.isRequired,
  onUnhelpfulClick: PropTypes.func.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func.isRequired,
};

export default QAActionBar;
