import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { StyleSheet } from 'react-native'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_DONE':
      return todos.filter(todo => todo.done)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.done)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  styles: StyleSheet.create(state.styleSheet.styles.todoList)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoPress: (id) => {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList