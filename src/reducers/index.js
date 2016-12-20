import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import color from './color'
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  color
})

export default todoApp
