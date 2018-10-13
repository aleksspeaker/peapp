import * as React from "react";
import { PureComponent } from "react";
import { ITodo } from '../reducers/reducer';
import SingleTodo from './SingleTodo';
import { ITodosComponentProps } from './TodosComponent.interface';

class TodosComponent extends PureComponent<ITodosComponentProps> {
  public render() {
    return this.props.todos.map((todo: ITodo) =>
      (
        <div key={todo.id} className="todo">
          <SingleTodo
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
          />
        </div>
      )
    )
  }
}

export default TodosComponent;