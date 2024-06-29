import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick, useKey } from 'rooks';
import CommonButton from '@common/CommonButton/CommonButton';
import OptionButton from './AddContentOptionButton';
import FilterOption from '@common/FilterOption';
import { MediaIcon } from '@shared/utils/Icons';
import LoggedUser from '@hooks/Auth/logged-user';
import useCreatePost from '@hooks/Post/useCreatePost';
import useCreateQuestion from '@hooks/Question/useCreateQuestion';

const AddContentModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Post');
  const [content, setContent] = useState('');
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useKey(['Escape'], onClose, {
    when: isOpen
  });

  const [currentUserData] = LoggedUser();
  const userId = currentUserData?.data?._id;

  const [loadingPost, errorPost, onSubmitPost] = useCreatePost(userId);
  const [loadingQuestion, errorQuestion, onSubmitQuestion] = useCreateQuestion(userId);


  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (activeTab === 'Post') {
        await onSubmitPost(content, userId);
        if (!loadingPost && !errorPost) {
          onClose();
          window.location.reload();
        }
      } else if (activeTab === 'Q&A') {
        await onSubmitQuestion(content, userId);
        if (!loadingQuestion && !errorQuestion) {
          onClose();
          window.location.reload();
        }
      }
    } catch (err) {
      console.errorPost('Error submitting content:', err);
    }
  };


  return isOpen ? createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white w-full max-w-[800px] p-8 rounded-2xl shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <span className="text-2xl">✕</span>
        </button>

        <div className="flex justify-around mb-4">
          <FilterOption label="Post" isActive={activeTab === 'Post'} onClick={() => setActiveTab('Post')} />
          <FilterOption label="Question" isActive={activeTab === 'Q&A'} onClick={() => setActiveTab('Q&A')} />
        </div>

        <div>
          <div className="flex items-start gap-4">
            <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/63x63" alt="User Profile" />
            <textarea
              className="flex-1 h-48 p-4 rounded-2xl outline-none resize-none border-0"
              placeholder={activeTab === 'Post' ? "What's on your mind?" : "Ask a question..."}
              value={content}
              onChange={handleChangeContent}
            ></textarea>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-cyan-800 border-opacity-25 mt-4">
            <OptionButton icon={MediaIcon} label="Media" />
            <CommonButton
              className="bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700"
              text={loadingPost || loadingQuestion ? "Posting..." : activeTab === 'Post' ? "Post" : "Ask"}
              width="auto"
              height="auto"
              onClick={handleSubmit}
              disabled={loadingPost || loadingQuestion}
            />
          </div>
          {(errorPost || errorQuestion) && <p className="text-red-600 mt-4">{errorPost || errorQuestion}</p>}
        </div>
      </div>
    </div>,
    document.body
  ) : null;
};

export default AddContentModal;
