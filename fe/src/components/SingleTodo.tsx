import * as React from "react";
import { PureComponent } from "react";
import { IProps } from './SingleTodo.interface';


class SingleTodo extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  
  public handleChange() {
    this.props.toggleTodo(this.props.todo._id)
  }

  public handleDeleteClick() {
    this.props.deleteTodo(this.props.todo._id)
  }

  public render() {
    return(
      <div className={`item ${this.props.todo.done && 'done'}`}>
        <div className="task-body">
          <input
            className="checkbox input"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.props.todo.done}
            />
          <span className="task-number">{this.props.todoIndex}.</span>
          <span className="task-text">{this.props.todo.description}</span>
        </div>
        <button
          className="rem-btn"
          onClick={this.handleDeleteClick}
          >&#215;</button>
      </div>
    )
  }
}

export default SingleTodo;