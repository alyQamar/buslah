import React from 'react';
import helpful from '@assets/icons/qa/helpful.svg';
import unhelpful from '@assets/icons/qa/unhelpful.svg';
import send from '@assets/icons/send.svg';
import save from '@assets/icons/common/bookmark.svg';
import InfoCard from '@components/Common/InfoCard/InfoCard';

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-col space-y-2 border-b border-gray-200 pb-2">
      <div className="flex items-center space-x-3">
        <InfoCard size="lg" name={comment.author.name} role={comment.author.role} imageSrc={comment.author.image} />
        <span className="text-gray-700 text-sm">{comment.date}</span>
      </div>
      <p className="text-gray-700 text-base">{comment.text}</p>
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          <img src={helpful} className="w-6 h-6" alt="Helpful" />
          <span className="text-cyan-800 text-base font-medium">Helpful</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={unhelpful} className="w-6 h-6" alt="Unhelpful" />
          <span className="text-gray-700 text-base font-normal">Unhelpful</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={send} className="w-6 h-6" alt="Send" />
          <span className="text-gray-700 text-base font-normal">Send</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={save} className="w-6 h-6" alt="Save" />
          <span className="text-gray-700 text-base font-normal">Save</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
