import * as React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TODOS } from '../actions/actions';
import TodosComponent from '../components/TodosComponent';
import { ITodosContainerProps } from './TodosContainer.interface';

class TodosContainer extends React.PureComponent<ITodosContainerProps> {
  public render() {
    return <TodosComponent todos={this.props.todos}/>
  }
}

const mapStateToProps = (state: ITodosContainerProps) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: dispatch({
    payload: 'Learn Electricity',
    type: TODOS.ADD_TODO,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)