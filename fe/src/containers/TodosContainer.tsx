import * as React from "react";
import { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addTodo, deleteTodo, toggleTodo } from '../actions/actions';
import TodoInput from '../components/TodoInput';
import TodosComponent from '../components/TodosComponent';
import { IPropsFromDispatch, IPropsFromState, ITodosContainerProps } from './TodosContainer.interface';

class TodosContainer extends PureComponent<ITodosContainerProps> {
  public render() {
    return (
      <Fragment>
        <TodoInput addTodo={this.props.addTodo}/>
        <TodosComponent
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          deleteTodo={this.props.deleteTodo}
        />
      </Fragment>
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
  toggleTodo,
}, dispatch)

export default
  connect<IPropsFromState, IPropsFromDispatch>
    (mapStateToProps, mapDispatchToProps)(TodosContainer)