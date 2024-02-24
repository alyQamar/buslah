import { combineReducers } from 'redux'

import authReducer from './authReducer'
import mentorsReducer from './mentorsReducer'

export default combineReducers({
    authReducer: authReducer ,
    allmentors: mentorsReducer,
})
