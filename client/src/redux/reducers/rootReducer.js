import { combineReducers } from 'redux'

import authReducer from './authReducer'
import mentorsReducer from './mentorsReducer'
import postsReducer from './postsReducer'
import questionsReducer from './questionsReducer'
import feedReducer from './feedReducer'

export default combineReducers({
    authReducer: authReducer ,
    allmentors: mentorsReducer,
    postsReducer,
    questionsReducer,
    authReducer,
    feedReducer
})
