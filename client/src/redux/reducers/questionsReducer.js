import { CREATE_NEW_QUESTION } from "../type";

const initial = {
  createdQuestion: null,
  error: null,
};

const questionsReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_NEW_QUESTION:
      return {
        ...state,
        createdQuestion: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default questionsReducer;
