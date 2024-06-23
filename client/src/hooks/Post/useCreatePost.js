import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './../../redux/Actions/postsActions';

const useCreatePost = (initialUserId) => {
  const dispatch = useDispatch();

  const [loadingPost, setLoading] = useState(false);
  const [errorPost, setError] = useState(null);
  const [postCreationSuccess, setPostCreationSuccess] = useState(false);

  const postCreationResult = useSelector(state => state.postsReducer.createdPost);

  const onSubmitPost = async (postContent, userId) => {
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
    if (!loadingPost && postCreationResult) {
      if (postCreationResult.data) {
        console.log("Post created successfully:", postCreationResult.data);
        setPostCreationSuccess(true);
      }
      if (postCreationResult.errorPost) {
        setError(postCreationResult.errorPost.message);
      }
    }
  }, [loadingPost, postCreationResult]);

  return [
    loadingPost, errorPost, onSubmitPost, postCreationSuccess
  ];
}

export default useCreatePost;
