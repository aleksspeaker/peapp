import * as React from "react";
import { PureComponent } from "react";
import { ITodosComponentProps } from './TodosComponent.interface';

class TodosComponent extends PureComponent<ITodosComponentProps> {
  public handleChange(ev: React.FormEvent) {
    // this.
  }
  public render() {
    return this.props.todos.map((todo: any) =>
      (
        <div key={todo.id} className="content">
          <input onChange={this.handleChange} className="input" type="checkbox" />
          {todo.text}
        </div>
      )
    )
  }
}

export default TodosComponent;