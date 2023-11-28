import { CREATE_NEW_USER} from '../type'  ///, UPDATE_USER_PASSWORD, UPDATE_USER_PROFILE, RESET_PASSWORD, VERIFY_PASSWORD, FOREGT_PASSWORD, LOGIN_USER, GET_CURERNT_USER

const inital = {
    createUser: [],
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
        default:
            return state;
    }
}
export default authReducer
