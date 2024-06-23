import { CREATE_NEW_POST } from "../type";

const initial = {
  createdPost: null,
  error: null,
};

const postsReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      return {
        ...state,
        createdPost: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default postsReducer;
