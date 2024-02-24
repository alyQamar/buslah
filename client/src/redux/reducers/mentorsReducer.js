import { GET_ALL_MENTORS, GET_ERROR } from "../type"


const inital = {
  allmentors: [],
  loading: true,
}

const mentorsReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_MENTORS:
      return {
          ...state,
          allmentors: action.payload,
          loading: false
      };

      case GET_ERROR:
          return {
              loading: true,
              products: action.payload,
          }

      default:
          return state;
  }
}
export default mentorsReducer
