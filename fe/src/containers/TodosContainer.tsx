import * as React from "react";
import { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TODOS } from '../actions/actions';
import TodoInput from '../components/TodoInput';
import TodosComponent from '../components/TodosComponent';
import { IPropsFromDispatch, IPropsFromState, ITodosContainerProps } from './TodosContainer.interface';

class TodosContainer extends PureComponent<ITodosContainerProps> {
  public render() {
    return (
      <Fragment>
        <TodoInput addTodo={this.props.addTodo}/>
        <TodosComponent todos={this.props.todos}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: ITodosContainerProps) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (todoText: string) => dispatch({
    payload: todoText,
    type: TODOS.ADD_TODO,
  })
})

export default
  connect<IPropsFromState, IPropsFromDispatch>
    (mapStateToProps, mapDispatchToProps)(TodosContainer)