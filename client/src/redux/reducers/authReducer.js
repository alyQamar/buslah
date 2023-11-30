import { CREATE_NEW_USER, FOREGT_PASSWORD, LOGIN_USER} from '../type'

const inital = {
    createUser: [],
    loginUser: [],
    forgetPassword: [],
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
        default:
            return state;
    }
}
export default authReducer
