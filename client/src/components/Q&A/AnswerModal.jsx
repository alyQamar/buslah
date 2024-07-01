import React, { useState, useRef, useEffect } from 'react';
import { useOutsideClick, useKey } from 'rooks';
import Answer from './Answer'; // Adjust the import path as needed

const AnswerModal = ({ answers: initialAnswers, isOpen, onClose, onAnswerSubmit }) => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [newAnswer, setNewAnswer] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    setAnswers(initialAnswers);
  }, [initialAnswers]);

  const handleAnswerChange = (event) => {
    setNewAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    if (newAnswer.trim() === '') {
      return;
    }

    const answer = {
      text: newAnswer,
      author: {
        name: 'Anonymous',
        role: 'User',
        image: 'https://via.placeholder.com/48x48',
      },
      date: new Date().toLocaleString(),
    };

    setAnswers([...answers, answer]);
    onAnswerSubmit(answer);
    setNewAnswer('');
  };

  const handleCloseModal = () => {
    onClose();
  };

  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useKey(['Escape'], onClose, {
    when: isOpen,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div ref={modalRef} className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
          onClick={handleCloseModal}
          aria-label="Close modal"
        >
          <span className="text-2xl">×</span>
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Answers</h2>
          <div className="max-h-80 overflow-y-auto mb-4">
            {answers.length === 0 ? (
              <p className="text-gray-600">No answers yet.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {answers.map((answer, index) => (
                  <li key={index} className="py-4">
                    <Answer answer={answer} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              placeholder="Write your answer..."
              value={newAnswer}
              onChange={handleAnswerChange}
              rows={4}
            />
          </div>
          <div className="mt-2 flex justify-end">
            <button
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 focus:outline-none"
              onClick={handleSubmitAnswer}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
