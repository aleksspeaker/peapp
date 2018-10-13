import * as React from "react";
import { PureComponent } from "react";
import { ITodosComponentProps } from './TodosComponent.interface';

class TodosComponent extends PureComponent<ITodosComponentProps> {
  public render() {
    return this.props.todos.map((todo: any) =>
      (
        <div className="content">
          <input className="input" type="checkbox" />
          {todo.text}
        </div>
      )
    )
  }
}

export default TodosComponent;