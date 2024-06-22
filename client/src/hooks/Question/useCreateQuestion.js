import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from './../../redux/Actions/questionsActions';

const useCreateQuestion = (initialUserId) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [questionCreationSuccess, setQuestionCreationSuccess] = useState(false);

  const questionCreationResult = useSelector(state => state.questionsReducer.createdQuestion);

  const onSubmit = async (questionContent, userId) => {
    const validationMessage = validateQuestion(questionContent, userId);
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setLoading(true);
    setError(null);
    await dispatch(createQuestion({
      question: questionContent,
      user: userId
    }));
    setLoading(false);
  }

  const validateQuestion = (questionContent, userId) => {
    if (questionContent.trim() === "" || questionContent.length < 10) {
      return "Question should have at least 10 characters";
    }
    if (userId.trim() === "") {
      return "User ID is required";
    }
    return null;
  }

  useEffect(() => {
    if (!loading && questionCreationResult) {
      if (questionCreationResult.data) {
        console.log("Question created successfully:", questionCreationResult.data);
        setQuestionCreationSuccess(true);
      }
      if (questionCreationResult.error) {
        setError(questionCreationResult.error.message);
      }
    }
  }, [loading, questionCreationResult]);

  return [
    loading, error, onSubmit, questionCreationSuccess
  ];
}

export default useCreateQuestion;
