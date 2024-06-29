import { CREATE_NEW_USER, FOREGT_PASSWORD, GET_CURERNT_USER, LOGIN_USER, LOGOUT, RESET_PASSWORD, VERIFY_PASSWORD, UPDATE_USER_PROFILE } from '../type'

const inital = {
  createUser: [],
  loginUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
  currentUser: [],
  userProfile: [],
  loading: true
}
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false
      }
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      }
    case FOREGT_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      }
    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      }
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      }
    case GET_CURERNT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case LOGOUT:
      return {
        ...initialState,
        loading: false
      };
    default:
      return state;
  }
}
export default authReducer
