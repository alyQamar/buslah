import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick, useKey } from 'rooks';
import CommonButton from '@common/CommonButton/CommonButton';
import OptionButton from './AddContentOptionButton';
import FilterOption from '@common/FilterOption';
import { MediaIcon } from '@shared/utils/Icons';
import LoggedUser from '@hooks/Auth/logged-user';
import useCreatePost from '@hooks/Post/useCreatePost';

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
  const [loading, error, onSubmit, postCreationSuccess] = useCreatePost(userId);

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async () => {
    console.log('Submit button clicked');
    try {
      await onSubmit(content, userId);
      console.log('Post submitted successfully');
      if (!loading && !error && postCreationSuccess) {
        onClose();
      }
    } catch (err) {
      console.error('Error submitting post:', err);
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

        {activeTab === 'Post' ? (
          <div>
            <div className="flex items-start gap-4">
              <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/63x63" alt="User Profile" />
              <textarea
                className="flex-1 h-48 p-4 rounded-2xl outline-none resize-none border-0"
                placeholder="What's on your mind?"
                value={content}
                onChange={handleChangeContent}
              ></textarea>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-cyan-800 border-opacity-25 mt-4">
              <OptionButton icon={MediaIcon} label="Media" />
              <CommonButton
                className="bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700"
                text={loading ? "Posting..." : "Post"}
                width="auto"
                height="auto"
                onClick={handleSubmit}
                disabled={loading}
              />
            </div>
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </div>
        ) : (
          <div>
            <div className="flex items-start gap-4">
              <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/63x63" alt="User Profile" />
              <textarea
                className="flex-1 h-48 p-4 rounded-2xl outline-none resize-none border-0"
                placeholder="Ask a question..."
                value={content}
                onChange={handleChangeContent}
              ></textarea>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-cyan-800 border-opacity-25 mt-4">
              <OptionButton icon={MediaIcon} label="Media" />
              <CommonButton
                className="bg-cyan-800 text-white px-4 py-2 rounded-full hover:bg-cyan-700"
                text={loading ? "Posting..." : "Ask"}
                width="auto"
                height="auto"
                onClick={handleSubmit}
                disabled={loading}
              />
            </div>
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </div>
        )}
      </div>
    </div>,
    document.body
  ) : null;
};

export default AddContentModal;
