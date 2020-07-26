import { combineReducers } from 'redux'
import profile from './profile'
import feed from './feed'

const appReducer = combineReducers({
  profile,
  feed
})

export default (state, action) => {
  return appReducer(state, action)
}
