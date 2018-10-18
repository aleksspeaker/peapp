import * as React from "react";
import { PureComponent } from "react";
import { ITodo } from '../reducers/reducer';
import SingleTodo from './SingleTodo';
import { ITodosComponentProps } from './TodosComponent.interface';

class TodosComponent extends PureComponent<ITodosComponentProps> {
  public render() {
    return(
      <div className="todo-list">
        {this.props.todos.map((todo: ITodo) => {
          // tslint:disable-next-line:no-console
          console.log(todo._id)
          return(
          <SingleTodo
            key={todo._id}
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
          />
        )})}
      </div>
    )
  }
}

export default TodosComponent;