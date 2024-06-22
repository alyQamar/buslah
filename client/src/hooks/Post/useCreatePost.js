import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './../../redux/Actions/postsActions';

const useCreatePost = (initialUserId) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postCreationSuccess, setPostCreationSuccess] = useState(false);

  const postCreationResult = useSelector(state => state.postsReducer.createdPost);

  const onSubmit = async (postContent, userId) => {
    const validationMessage = validatePost(postContent, userId);
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setLoading(true);
    setError(null);
    await dispatch(createPost({
      post: postContent,
      user: userId
    }));
    setLoading(false);
  }

  const validatePost = (postContent, userId) => {
    if (postContent.trim() === "" || postContent.length < 10) {
      return "Post should have at least 10 characters";
    }
    if (userId.trim() === "") {
      return "User ID is required";
    }
    return null;
  }

  useEffect(() => {
    if (!loading && postCreationResult) {
      if (postCreationResult.data) {
        console.log("Post created successfully:", postCreationResult.data);
        setPostCreationSuccess(true);
      }
      if (postCreationResult.error) {
        setError(postCreationResult.error.message);
      }
    }
  }, [loading, postCreationResult]);

  return [
    loading, error, onSubmit, postCreationSuccess
  ];
}

export default useCreatePost;
