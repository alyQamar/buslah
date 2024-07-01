import React, { useState, useRef, useEffect } from 'react';
import { useOutsideClick, useKey } from 'rooks';
import Comment from './Comment';

const CommentsModal = ({ comments: initialComments, isOpen, onClose, onCommentSubmit }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('commentLikes')) || {};
    const updatedComments = initialComments.map(comment => ({
      ...comment,
      liked: savedLikes[comment.id] || false
    }));
    setComments(updatedComments);
  }, [initialComments]);

  const handleCommentLike = (commentIndex, isLiked) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].liked = isLiked;
    setComments(updatedComments);

    const savedLikes = {
      ...JSON.parse(localStorage.getItem('commentLikes')) || {},
      [updatedComments[commentIndex].id]: isLiked
    };
    localStorage.setItem('commentLikes', JSON.stringify(savedLikes));
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (newComment.trim() === '') {
      return;
    }
    const comment = {
      text: newComment,
      author: {
        name: 'Anonymous',
        role: 'User',
        image: 'https://via.placeholder.com/48x48',
      },
      date: new Date().toLocaleString(),
    };

    setComments([...comments, comment]);
    onCommentSubmit(comment);

    setNewComment('');
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
          <h2 className="text-xl font-bold mb-4">Comments</h2>
          <div className="max-h-80 overflow-y-auto mb-4">
            {comments.length === 0 ? (
              <p className="text-gray-600">No comments yet.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {comments.map((comment, index) => (
                  <li key={index} className="py-4">
                    <Comment comment={comment} onCommentLike={(isLiked) => handleCommentLike(index, isLiked)} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* New Comment Input */}
          <div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              placeholder="Add a new comment..."
              value={newComment}
              onChange={handleCommentChange}
              rows={4}
            />
          </div>
          {/* Submit Button */}
          <div className="mt-2 flex justify-end">
            <button
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 focus:outline-none"
              onClick={handleSubmitComment}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
