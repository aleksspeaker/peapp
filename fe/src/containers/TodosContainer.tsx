import * as React from "react";
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from '../actions/actions';
import TodoInput from '../components/TodoInput';
import TodosComponent from '../components/TodosComponent';
import { IPropsFromDispatch, IPropsFromState, ITodosContainerProps } from './TodosContainer.interface';

class TodosContainer extends PureComponent<ITodosContainerProps> {
  public componentDidMount() {
    this.props.fetchTodos()
  }
  public render() {
    return (
      <>
        <TodoInput addTodo={this.props.addTodo}/>
        <TodosComponent
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
        />
      </>
    )
  }
}

const mapStateToProps = (state: ITodosContainerProps) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch) => 
bindActionCreators({
  addTodo,
  deleteTodo,
  fetchTodos,
  toggleTodo,
}, dispatch)

export default
  connect<IPropsFromState, IPropsFromDispatch>
    (mapStateToProps, mapDispatchToProps)(TodosContainer)