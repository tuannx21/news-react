import {combineReducers} from 'redux'
import articles from './articles'
import auth from './auth'

const rootReducer = combineReducers({
  articles,
  auth
})

export default rootReducer