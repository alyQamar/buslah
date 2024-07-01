import React, { useState, useEffect } from 'react';
import InfoCard from '@components/Common/InfoCard/InfoCard';
import { LikeIcon } from '@shared/utils/Icons';

const Comment = ({ comment, onCommentLike }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(comment.liked || false);
  }, [comment]);

  const handleLikeClick = () => {
    setLiked(!liked);
    onCommentLike(!liked);
  };

  return (
    <div className="flex flex-col space-y-2 border-b border-gray-200 pb-2">
      <div className="flex items-center space-x-3">
        <InfoCard size="sm" name={comment.author.name} role={comment.author.role} imageSrc={comment.author.image} createdAt={comment.date} />
      </div>
      <p className="text-gray-700 text-base">{comment.text}</p>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleLikeClick}
          className="flex items-center text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
        >
          <LikeIcon fillColor={liked ? '#295576' : 'none'} stroke="#295576" strokeWidth={1.5} />
        </button>
        {/* Display likes count here if needed */}
      </div>
    </div>
  );
};

export default Comment;
