import { GET_FEED } from '../type';

const initialState = {
  feed: [],
  error: null,
  loading: true,
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return {
        ...state,
        feed: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default feedReducer;
