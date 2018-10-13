import * as React from "react";
import { Fragment, PureComponent } from "react";
import { ITodo } from '../reducers/reducer';

interface IProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

class SingleTodo extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  
  public handleChange() {
    this.props.toggleTodo(this.props.todo.id)
  }

  public handleDeleteClick() {
    this.props.deleteTodo(this.props.todo.id)
  }

  public render() {
    return(
      <Fragment>
        <input
          onChange={this.handleChange}
          checked={this.props.todo.done}
          className="input" type="checkbox" />
        { this.props.todo.text }
        <button onClick={this.handleDeleteClick}>Del</button>
      </Fragment>
    )
  }
}

export default SingleTodo;