import React, { useState } from 'react';
import InfoCard from '@components/Common/InfoCard/InfoCard';
import Answer from './Answer';
import QAActionBar from './QAActionBar';
import QAAnalysisBar from './QAAnalysisBar';
import AnswerModal from './AnswerModal'; // Ensure the path is correct
import profile from '../../assets/icons/profile/profile photo.svg'; // Adjust import path as needed

const QuestionCard = ({ question, helpful, unhelpful, answers: initialAnswers, user, createdAt }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState(initialAnswers);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const toggleAnswerModal = () => {
    setShowAnswerModal(!showAnswerModal);
  };

  const handleAnswerSubmit = (newAnswer) => {
    setAnswers([...answers, newAnswer]);
    toggleAnswerModal();
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <InfoCard size="xl" name={user.firstName} role={user.headline} imageSrc={profile} createdAt={createdAt} />

      <div className={`mt-4 text-gray-700 text-base font-normal leading-tight ${isExpanded ? '' : 'line-clamp-3'}`}>
        {question}
      </div>

      {isExpanded ? (
        <button onClick={toggleReadMore} className="text-cyan-800 mt-2">
          Read Less
        </button>
      ) : (
        question.length > 100 && (
          <button onClick={toggleReadMore} className="text-cyan-800 mt-2">
            Read More
          </button>
        )
      )}

      <div className="w-full border-t border-cyan-800 border-opacity-25 mt-4 pt-4">
        <QAAnalysisBar helpfulNo={helpful || 0} unhelpfulNo={unhelpful || 0} answersNo={answers.length} />
        <QAActionBar onAnswerClick={toggleAnswerModal} />

        {showAnswers && (
          <div>
            {answers.map((answer, index) => (
              <Answer key={index} answer={answer} />
            ))}
          </div>
        )}

        {showAnswerModal && (
          <AnswerModal
            isOpen={showAnswerModal}
            answers={answers}
            onClose={toggleAnswerModal}
            onAnswerSubmit={handleAnswerSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
