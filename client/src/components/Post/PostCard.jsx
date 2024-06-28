import React, { useState } from 'react';
import InfoCard from '../Common/InfoCard/InfoCard';
import AnalysisBar from './PostAnalysisBar';
import ActionBar from './PostActionBar';
import profile from "../../assets/icons/profile/profile photo.svg";
import { DotHorizontalIcon } from '@shared/utils/Icons';

const PostCard = ({ post, user, createdAt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const isPostLong = post.length > 100;

  return (
    <div className="w-[616px] bg-white rounded-lg shadow-md p-6">
      <div>
        <InfoCard size="xl" name={user.firstName} role={user.headline} imageSrc={profile} createdAt={createdAt} />
      </div>

      <div className={`mt-4 text-gray-700 text-base font-normal font-['Montserrat'] leading-tight ${isExpanded ? '' : 'line-clamp-3'}`}>
        {post}
      </div>

      {isPostLong && (
        <button onClick={toggleReadMore} className="text-cyan-800 mt-2">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}

      <div className="w-full border-t border-cyan-800 border-opacity-25 mt-4 pt-4 flex flex-col justify-end items-center gap-2">
        <AnalysisBar />
        <ActionBar />
      </div>
    </div>
  );
};

export default PostCard;
