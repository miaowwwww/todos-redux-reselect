import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// 1111使用reselect
// import { getVisibleTodos } from '../selectors'

// 2222不使用reselect
const getVisibleTodos = (todos, filter) => {
  console.log('getVisibleTodos============')
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  // 2222不使用reselect
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
  // 1111使用reselect
  // todos: getVisibleTodos(state)
})

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
