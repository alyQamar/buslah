import React, { useState, useEffect } from 'react';
import InfoCard from '@components/Common/InfoCard/InfoCard';
import { LikeIcon } from '@shared/utils/Icons'; // Ensure the path is correct

const Answer = ({ answer, onAnswerLike }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(answer.liked || false);
  }, [answer]);

  const handleLikeClick = () => {
    setLiked(!liked);
    onAnswerLike(!liked);
  };

  return (
    <div className="flex flex-col space-y-2 border-b border-gray-200 pb-2">
      <div className="flex items-center space-x-3">
        <InfoCard size="sm" name={answer.author.name} role={answer.author.role} imageSrc={answer.author.image} createdAt={answer.date} />
      </div>
      <p className="text-gray-700 text-base">{answer.text}</p>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleLikeClick}
          className="flex items-center text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
        >
          <LikeIcon fillColor={liked ? '#295576' : 'none'} stroke="#295576" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default Answer;
