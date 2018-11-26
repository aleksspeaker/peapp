import * as React from "react";
import { PureComponent } from "react";
import { ITodo } from '../reducers/reducer';
import SingleTodo from './SingleTodo';
import { ITodosComponentProps, ITodosComponentState } from './TodosComponent.interface';

class TodosComponent extends PureComponent<ITodosComponentProps, ITodosComponentState> {
  constructor(props: ITodosComponentProps) {
    super(props);
    this.state = {
      doneVisible: true
    }
    this.handleChange= this.handleChange.bind(this);
  }
  public handleChange() {
    this.setState({doneVisible: !this.state.doneVisible})
  }
  public render() {
    return(
      <>
        <input
          type="checkbox"
          className="toggle-visibility"
          checked={this.state.doneVisible}
          onChange={this.handleChange}
        />
        <div className="todo-list">
          {this.props.todos.filter(todo => {
            if(this.state.doneVisible) {
              return todo.done !== this.state.doneVisible
            }
            return true;
          })
            .map((todo: ITodo, index) => (
              <SingleTodo
                key={`${todo._id}_${index}`}
                todo={todo}
                todoIndex={index+1}
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}
              />
            )
          )}
        </div>
      </>
    )
  }
}

export default TodosComponent;