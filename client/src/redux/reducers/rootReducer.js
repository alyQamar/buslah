import { combineReducers } from 'redux'

import authReducer from './authReducer'
import mentorsReducer from './mentorsReducer'
import postsReducer from './postsReducer'

export default combineReducers({
    authReducer: authReducer ,
    allmentors: mentorsReducer,
    postsReducer
})
